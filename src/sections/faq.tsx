import { Accordion, AccordionItem, Band, Grid, SectionHeader } from "@credigit/web-ui";
import { faqIntro, faqs } from "@/content/faq";

/** Frequently asked questions: Bolt-style heading beside large accordion rows. */
export function FaqSection() {
  return (
    <Band id="faq" spacing="large">
      <Grid columns={{ base: 1, lg: 12 }} gap="xlarge">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow={faqIntro.eyebrow} title={faqIntro.title} size="large" />
        </div>
        <div className="lg:col-span-8">
          <Accordion type="multiple" headingAs="h3">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Grid>
    </Band>
  );
}
