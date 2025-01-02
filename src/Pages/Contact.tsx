import ContactForm from "../components/ContactForm/ContactForm.tsx";
import { SectionTitle } from "../generic-components";

const Contact = () => {
    return (
        <div className="container xl mt-20">
            <SectionTitle
                subtitle="Contact With Me"
                mainTitle="Have an Project in Mind?"
                description="looking for a professional web developer to build your website or web application? Contact me and let's discuss your project."
            />
            <div className="form-container lg:w-3/4 sm:1 mr-auto ml-auto">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;