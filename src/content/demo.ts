export const ctaBand = {
  title: "See Smart Enterprise Risk 360° with your own workflow in mind",
  description: "Tell us about your institution and we will arrange a walkthrough.",
  primary: { label: "Request a demo", href: "#demo-form" },
  secondary: { label: "Read the FAQ", href: "/#faq" },
};

export const demoForm = {
  eyebrow: "Request a demo",
  title: "Book a walkthrough",
  description: "Tell us a little about your institution. Fields marked required must be completed.",
  submitLabel: "Send request",
  submittingLabel: "Sending",
  successTitle: "Request sent",
  successMessage: "Thank you. Your request has been received.",
  errorTitle: "Something went wrong",
  errorMessage: "We could not send your request. Please try again later.",
  notConnectedTitle: "Demo requests are not connected yet",
  notConnectedMessage:
    "This form has no backend yet, so your details have not been sent. Please try again once the site is live.",
  fields: {
    name: { label: "Full name", placeholder: "" },
    email: { label: "Work email", placeholder: "name@institution.com" },
    institution: { label: "Institution", placeholder: "" },
    institutionType: { label: "Institution type", placeholder: "Select an option" },
    role: { label: "Your role", placeholder: "e.g. Chief Risk Officer" },
    country: { label: "Country", placeholder: "e.g. Nigeria" },
    message: { label: "What would you like to see?", description: "Optional. For example, a module or workflow." },
  },
  institutionTypes: [
    { value: "bank", label: "Bank" },
    { value: "mfi", label: "Microfinance institution" },
    { value: "other", label: "Other financial institution" },
  ],
  errors: {
    name: "Enter your full name.",
    emailRequired: "Enter your work email.",
    emailInvalid: "Enter a valid email address, like name@institution.com.",
    institution: "Enter your institution's name.",
    institutionType: "Select your institution type.",
  },
};
