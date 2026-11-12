"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  Alert,
  Button,
  Card,
  Field,
  Form,
  FormActions,
  Grid,
  Input,
  Select,
  Text,
  Textarea,
  TextLink,
  VisuallyHidden,
} from "@credigit/web-ui";
import { demoForm } from "@/content/demo";
import {
  buildDemoRequest,
  demoRequestFields,
  HONEYPOT_FIELD,
  initialDemoRequestValues,
  isBotSubmission,
  resolveTransport,
  validate,
  type DemoRequestErrors,
  type DemoRequestValues,
} from "@/lib/demo-request";

type Status = "idle" | "submitting" | "success" | "error" | "not-connected";

const endpoint = process.env.NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT;
const transport = resolveTransport(process.env.NEXT_PUBLIC_DEMO_REQUEST_TRANSPORT, endpoint);

/** Demo request form. Delivers to Netlify Forms or a JSON endpoint, per NEXT_PUBLIC_DEMO_REQUEST_TRANSPORT. */
export function DemoRequestForm() {
  const [values, setValues] = useState<DemoRequestValues>(initialDemoRequestValues);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<DemoRequestErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const { fields } = demoForm;

  const update = (key: keyof DemoRequestValues) => (event: { target: { value: string } }) => {
    const value = event.target.value;
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values, demoForm.errors);
    setErrors(found);
    const firstInvalid = demoRequestFields.find((key) => found[key]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    const request = buildDemoRequest(values, transport, endpoint);
    if (!request) {
      setStatus("not-connected");
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    // A filled honeypot means a bot: pretend success and send nothing.
    if (isBotSubmission(honeypot)) {
      setStatus("success");
      setValues(initialDemoRequestValues);
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    setStatus("submitting");
    try {
      const response = await fetch(request.url, request.init);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
      setValues(initialDemoRequestValues);
    } catch {
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  return (
    <Card variant="outlined" padding="large">
      <Form ref={formRef} noValidate onSubmit={onSubmit} aria-label={demoForm.title}>
        <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
          {status === "not-connected" ? (
            <Alert tone="warning" title={demoForm.notConnectedTitle}>
              {demoForm.notConnectedMessage}
            </Alert>
          ) : null}
          {status === "success" ? (
            <Alert tone="success" title={demoForm.successTitle}>
              {demoForm.successMessage}
            </Alert>
          ) : null}
          {status === "error" ? (
            <Alert tone="danger" title={demoForm.errorTitle}>
              {demoForm.errorMessage}
            </Alert>
          ) : null}
        </div>
        <Grid columns={{ base: 1, sm: 2 }} gap="medium">
          <Field label={fields.name.label} htmlFor="demo-name" required error={errors.name}>
            <Input id="demo-name" name="name" autoComplete="name" value={values.name} onChange={update("name")} />
          </Field>
          <Field label={fields.email.label} htmlFor="demo-email" required error={errors.email}>
            <Input
              id="demo-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={fields.email.placeholder}
              value={values.email}
              onChange={update("email")}
            />
          </Field>
          <Field label={fields.institution.label} htmlFor="demo-institution" required error={errors.institution}>
            <Input
              id="demo-institution"
              name="institution"
              autoComplete="organization"
              value={values.institution}
              onChange={update("institution")}
            />
          </Field>
          <Field label={fields.institutionType.label} htmlFor="demo-institution-type" required error={errors.institutionType}>
            <Select
              id="demo-institution-type"
              name="institutionType"
              placeholder={fields.institutionType.placeholder}
              options={demoForm.institutionTypes}
              value={values.institutionType}
              onChange={update("institutionType")}
            />
          </Field>
          <Field label={fields.role.label} htmlFor="demo-role" optional>
            <Input
              id="demo-role"
              name="role"
              autoComplete="organization-title"
              placeholder={fields.role.placeholder}
              value={values.role}
              onChange={update("role")}
            />
          </Field>
          <Field label={fields.country.label} htmlFor="demo-country" optional>
            <Input
              id="demo-country"
              name="country"
              autoComplete="country-name"
              placeholder={fields.country.placeholder}
              value={values.country}
              onChange={update("country")}
            />
          </Field>
        </Grid>
        <Field label={fields.message.label} htmlFor="demo-message" description={fields.message.description} optional>
          <Textarea id="demo-message" name="message" rows={4} autoResize value={values.message} onChange={update("message")} />
        </Field>
        <VisuallyHidden as="div" aria-hidden="true">
          <Field label={demoForm.honeypotLabel} htmlFor="demo-bot-field">
            <Input
              id="demo-bot-field"
              name={HONEYPOT_FIELD}
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
            />
          </Field>
        </VisuallyHidden>
        <Text variant="small">
          {demoForm.privacyNotice.text} <TextLink href={demoForm.privacyNotice.href}>{demoForm.privacyNotice.linkLabel}</TextLink>.
        </Text>
        <FormActions>
          <Button type="submit" variant="primary" loading={status === "submitting"}>
            {status === "submitting" ? demoForm.submittingLabel : demoForm.submitLabel}
          </Button>
        </FormActions>
      </Form>
    </Card>
  );
}
