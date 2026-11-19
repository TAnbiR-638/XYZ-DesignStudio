import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { STUDIO } from "@/data";

export const metadata: Metadata = { title: "Terms of Service", description: "Terms for using the XYZ Design Studio website." };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="1 November 2026"
      intro="By using this website you agree to these terms. Project work is governed by the separate written contract signed with each client."
      sections={[
        {
          heading: "Website content",
          body: [
            "Content on this site — including text, project photographs, drawings and renders — is provided for general information and may not be reproduced without permission.",
          ],
        },
        {
          heading: "Estimates",
          body: [
            "Prices shown on this website, including results from the cost calculator, are indicative only. A binding price is given only in a written quotation following a site visit.",
          ],
        },
        {
          heading: "Consultations",
          body: ["The first discovery call and first site visit within Dhaka city are free and carry no obligation to engage our services."],
        },
        {
          heading: "Third-party links",
          body: ["Links to social media or other websites are provided for convenience; we are not responsible for their content."],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms can be sent to ${STUDIO.email} or to our studio at ${STUDIO.address}.`],
        },
      ]}
    />
  );
}
