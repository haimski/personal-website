import ContactForm from "../components/ContactForm/ContactForm.tsx";
import { SectionTitle } from "../generic-components";

const Contact = () => {
    return (
        <div className="container xl mt-20">
            <SectionTitle
                subtitle="Contact With Me"
                mainTitle="Have an Project in Mind?"
                description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            />
            <div className="form-container w-3/4 mr-auto ml-auto">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;