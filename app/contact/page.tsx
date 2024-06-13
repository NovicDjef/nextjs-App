import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Contact | Innova Tech Solution",
  description: "Ici c'est la page de contact pour la demmade de vos eventuel devis.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pages de Contact"
        description="Vous pouvez demmander votre devis ici, vous disposons de multiples services informatique, votre satisfraction notre priorite."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
