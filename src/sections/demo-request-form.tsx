"use client";

import { useRef, useState, type FormEvent } from "react";
import { Alert, Button, Card, Field, Form, FormActions, Grid, Input, Select, Textarea } from "@credigit/web-ui";
import { demoForm } from "@/content/demo";

type Values = {
  name: string;
  email: string;
  institution: string;
  institutionType: string;
  role: string;
  country: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "submitting" | "success" | "error" | "not-connected";

const initialValues: Values = { name: "", email: "", institution: "", institutionType: "", role: "", country: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const endpoint = process.env.NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT;

function validate(values: Values): Errors {
  const errors: Errors = {};
  const { errors: msg } = demoForm;
  if (!values.name.trim()) errors.name = msg.name;
  if (!values.email.trim()) errors.email = msg.emailRequired;
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = msg.emailInvalid;
  if (!values.institution.trim()) errors.institution = msg.institution;
  if (!values.institutionType) errors.institutionType = msg.institutionType;
  return errors;
}

/** Demo request form. Posts JSON to NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT when configured. */
export function DemoRequestForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const { fields } = demoForm;

  const update = (key: keyof Values) => (event: { target: { value: string } }) => {
    const value = event.target.value;
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof Values)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    if (!endpoint) {
      setStatus("not-connected");
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "credigit-ser-landing" }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
      setValues(initialValues);
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
        <FormActions>
          <Button type="submit" variant="primary" loading={status === "submitting"}>
            {status === "submitting" ? demoForm.submittingLabel : demoForm.submitLabel}
          </Button>
        </FormActions>
      </Form>
    </Card>
  );
}
