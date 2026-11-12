import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  buildDemoRequest,
  DEMO_REQUEST_SOURCE,
  demoRequestFields,
  HONEYPOT_FIELD,
  initialDemoRequestValues,
  isBotSubmission,
  NETLIFY_FORM_NAME,
  NETLIFY_FORM_PATH,
  resolveTransport,
  validate,
  type DemoRequestValues,
} from "./demo-request";

const messages = {
  name: "name",
  emailRequired: "email-required",
  emailInvalid: "email-invalid",
  institution: "institution",
  institutionType: "institution-type",
};

const valid: DemoRequestValues = {
  ...initialDemoRequestValues,
  name: "Ada Obi",
  email: "ada@bank.ng",
  institution: "Example Bank",
  institutionType: "bank",
};

describe("validate", () => {
  it("accepts a complete request", () => {
    expect(validate(valid, messages)).toEqual({});
  });

  it("reports every missing required field", () => {
    expect(validate(initialDemoRequestValues, messages)).toEqual({
      name: "name",
      email: "email-required",
      institution: "institution",
      institutionType: "institution-type",
    });
  });

  it("rejects a malformed e-mail and ignores surrounding spaces", () => {
    expect(validate({ ...valid, email: "ada@bank" }, messages).email).toBe("email-invalid");
    expect(validate({ ...valid, email: "  ada@bank.ng  " }, messages).email).toBeUndefined();
  });
});

describe("resolveTransport", () => {
  it("uses the configured transport", () => {
    expect(resolveTransport("netlify-forms", undefined)).toBe("netlify-forms");
    expect(resolveTransport("json", "https://receiver.test/demo")).toBe("json");
  });

  it("falls back to json when only an endpoint is set", () => {
    expect(resolveTransport(undefined, "https://receiver.test/demo")).toBe("json");
  });

  it("is not connected without a usable configuration", () => {
    expect(resolveTransport(undefined, undefined)).toBe("none");
    expect(resolveTransport("", " ")).toBe("none");
    expect(resolveTransport("json", "")).toBe("none");
    expect(resolveTransport("unknown", undefined)).toBe("none");
  });
});

describe("buildDemoRequest", () => {
  it("builds a URL-encoded Netlify Forms request", () => {
    const request = buildDemoRequest(valid, "netlify-forms", undefined);
    expect(request?.url).toBe(NETLIFY_FORM_PATH);
    expect(request?.init.method).toBe("POST");
    expect(request?.init.headers).toEqual({ "Content-Type": "application/x-www-form-urlencoded" });
    const body = new URLSearchParams(String(request?.init.body));
    expect(body.get("form-name")).toBe(NETLIFY_FORM_NAME);
    expect(body.get(HONEYPOT_FIELD)).toBe("");
    expect(body.get("email")).toBe(valid.email);
    expect(body.get("source")).toBe(DEMO_REQUEST_SOURCE);
  });

  it("builds a JSON request to the endpoint", () => {
    const request = buildDemoRequest(valid, "json", "https://receiver.test/demo");
    expect(request?.url).toBe("https://receiver.test/demo");
    expect(JSON.parse(String(request?.init.body))).toEqual({ ...valid, source: DEMO_REQUEST_SOURCE });
  });

  it("returns null when not connected", () => {
    expect(buildDemoRequest(valid, "none", undefined)).toBeNull();
    expect(buildDemoRequest(valid, "json", undefined)).toBeNull();
  });
});

describe("isBotSubmission", () => {
  it("flags a filled honeypot only", () => {
    expect(isBotSubmission("")).toBe(false);
    expect(isBotSubmission("  ")).toBe(false);
    expect(isBotSubmission("http://spam.test")).toBe(true);
  });
});

describe("public/__forms.html (Netlify form detection)", () => {
  const html = fs.readFileSync(path.join(__dirname, "..", "..", "public", NETLIFY_FORM_PATH.replace(/^\//, "")), "utf8");

  it("declares the form, Netlify detection and the honeypot", () => {
    expect(html).toContain(`name="${NETLIFY_FORM_NAME}"`);
    expect(html).toContain('data-netlify="true"');
    expect(html).toContain(`netlify-honeypot="${HONEYPOT_FIELD}"`);
  });

  it("declares every field the client submits", () => {
    const sent = [...new URLSearchParams(String(buildDemoRequest(valid, "netlify-forms", undefined)?.init.body)).keys()];
    expect(sent).toEqual(expect.arrayContaining([...demoRequestFields]));
    for (const field of sent) expect(html).toContain(`name="${field}"`);
  });
});
