import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { STUDIO } from "@/data";

export const metadata: Metadata = { title: "Privacy Policy", description: "How XYZ Design Studio collects, uses and protects your information." };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 November 2026"
      intro="This policy explains what information XYZ Design Studio collects when you use this website or contact us, and how we use it."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you submit a consultation, newsletter or job application form, we collect the details you provide — such as your name, phone number, email address, project details and CV.",
            "Like most websites, we may collect anonymous usage data such as pages visited and device type to improve the site.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use your details only to respond to your enquiry, prepare quotations, manage your project, send the newsletter you subscribed to, or assess your job application.",
            "We never sell your personal information.",
          ],
        },
        {
          heading: "Sharing",
          body: ["We share information only with team members and contractors working on your project, or when required by law."],
        },
        {
          heading: "Retention",
          body: ["Enquiries are kept for up to two years; project records for as long as required for warranty and legal purposes. Job applications are kept for twelve months unless you ask us to delete them sooner."],
        },
        {
          heading: "Your choices",
          body: [`You can ask us to access, correct or delete your information, or unsubscribe from emails at any time, by writing to ${STUDIO.email}.`],
        },
      ]}
    />
  );
}
