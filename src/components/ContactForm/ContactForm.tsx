import { useState } from 'react';
import { InputField, Textarea, Button } from "../../generic-components";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        comments: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-row">
                <div className="w-1/2 px-5">
                    <InputField
                        label=""
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={() =>  handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="w-1/2 px-5">
                    <InputField
                        label=""
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={() => handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2 px-5">
                    <InputField
                        label=""
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Enter your company"
                        value={formData.company}
                        onChange={() => handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="w-1/2 px-5">
                    <InputField
                        label=""
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={() => handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div className="px-5">
                <Textarea
                    label=""
                    id="comments"
                    name="comments"
                    placeholder="Enter your comments"
                    value={formData.comments}
                    onChange={() => handleChange}
                    className="border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                />
            </div>
            <div className="px-5">
                <Button
                    type="submit"
                    text="Submit"
                    onClick={() => handleSubmit}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4"
                />
            </div>
        </form>
    );
}

export default ContactForm;
