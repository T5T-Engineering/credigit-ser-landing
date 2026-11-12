/**
 * Demo-request form logic, kept free of React so it can be unit-tested.
 *
 * Transports (NEXT_PUBLIC_DEMO_REQUEST_TRANSPORT):
 * - "netlify-forms": URL-encoded POST to the static form file that Netlify detects at deploy time (public/__forms.html).
 * - "json": JSON POST to NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT (a future Credigit receiver or CRM).
 * - unset: "json" when an endpoint is set, otherwise "none" (the form says it is not connected and sends nothing).
 */

export type DemoRequestValues = {
  name: string;
  email: string;
  institution: string;
  institutionType: string;
  role: string;
  country: string;
  message: string;
};

export type DemoRequestErrors = Partial<Record<keyof DemoRequestValues, string>>;

export type DemoRequestErrorMessages = {
  name: string;
  emailRequired: string;
  emailInvalid: string;
  institution: string;
  institutionType: string;
};

export type DemoRequestTransport = "netlify-forms" | "json" | "none";

export const initialDemoRequestValues: DemoRequestValues = {
  name: "",
  email: "",
  institution: "",
  institutionType: "",
  role: "",
  country: "",
  message: "",
};

/** Field order, used for focus-on-first-error and for the static Netlify form parity test. */
export const demoRequestFields = Object.keys(initialDemoRequestValues) as (keyof DemoRequestValues)[];

/* Netlify Forms contract. These must match public/__forms.html (checked by demo-request.test.ts). */
export const NETLIFY_FORM_NAME = "demo-request";
export const NETLIFY_FORM_PATH = "/__forms.html";
export const HONEYPOT_FIELD = "bot-field";
/** Identifies this site as the origin of the request. */
export const DEMO_REQUEST_SOURCE = "credigit-ser-landing";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(values: DemoRequestValues, messages: DemoRequestErrorMessages): DemoRequestErrors {
  const errors: DemoRequestErrors = {};
  if (!values.name.trim()) errors.name = messages.name;
  if (!values.email.trim()) errors.email = messages.emailRequired;
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = messages.emailInvalid;
  if (!values.institution.trim()) errors.institution = messages.institution;
  if (!values.institutionType) errors.institutionType = messages.institutionType;
  return errors;
}

export function resolveTransport(transport: string | undefined, endpoint: string | undefined): DemoRequestTransport {
  const value = (transport ?? "").trim();
  if (value === "netlify-forms" || value === "json") return value === "json" && !endpoint?.trim() ? "none" : value;
  return endpoint?.trim() ? "json" : "none";
}

/** True when the honeypot was filled in, which people cannot see or reach. */
export function isBotSubmission(honeypot: string): boolean {
  return honeypot.trim().length > 0;
}

export type DemoRequest = { url: string; init: RequestInit };

/** Builds the HTTP request for a transport, or null when the form is not connected. */
export function buildDemoRequest(
  values: DemoRequestValues,
  transport: DemoRequestTransport,
  endpoint: string | undefined,
): DemoRequest | null {
  if (transport === "netlify-forms") {
    const body = new URLSearchParams({
      "form-name": NETLIFY_FORM_NAME,
      [HONEYPOT_FIELD]: "",
      ...values,
      source: DEMO_REQUEST_SOURCE,
    });
    return {
      url: NETLIFY_FORM_PATH,
      init: { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() },
    };
  }
  if (transport === "json" && endpoint?.trim()) {
    return {
      url: endpoint.trim(),
      init: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: DEMO_REQUEST_SOURCE }),
      },
    };
  }
  return null;
}
