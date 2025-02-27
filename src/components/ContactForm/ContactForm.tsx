import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { Grid2 as Grid } from "@mui/material";
import { Button as MuiButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputField, Textarea, Button } from "../../generic-components";
import { isValidEmail, isValidPhoneNumber } from './../../Utils';
import './style.scss';

export interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        comments: ''
    });
    const [submitErrorMessage, setSubmitErrorMessage] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [comments, setComments] = useState('');
    const [touchedFields, setTouchedFields] = useState({
        fullName: false,
        email: false,
        company: false,
        phone: false,
        comments: false
    });
    const [openThankYouModal, setOpenThankYouModal] = useState(false);

    useEffect(() => {
        const sendFormData = async (data: any) => {
            try {
                await axios.post('https://formspree.io/f/xrbbonal', data);
                //alert('Form details sent to your email.');
                setOpenThankYouModal(true)
            } catch (error) {
                console.error('Error sending form details:', error);
            }
        };

        if (formData.name && formData.email && formData.company && formData.phone && formData.comments) {
            sendFormData(formData)
                .then((res) => {
                    console.log('Form submitted successfully:', res);
                });
        }
    }, [formData]);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!fullName || !email || !company || !phone || !comments) {
            setSubmitErrorMessage('Please fill all the fields');
            return;
        } else {
            setSubmitErrorMessage('');
            setFormData({
                name: fullName,
                email: email,
                company: company,
                phone: phone,
                comments: comments
            })
            // Handle form submission
            console.log(formData);
        }
    };

    const handleEmailValidation = (email: string) => {
        if (touchedFields.email) {
            return !email ?
                'Email is required' :
                !isValidEmail(email) ? 'Email is invalid. Please enter correct one.' : '';
        }
        return '';
    }

    const handlePhoneInput = (e: any) => {
        const { value: phone } = e.target;
        if (isValidPhoneNumber(phone)) {
            setPhone(phone);
            return;
        }
        return phone;
    }

    const handleClose = () => {
        setOpenThankYouModal(false);
        setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            comments: ''
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4 contact-form">
                <Grid container className="flex flex-row">
                    <Grid size={{xs: 12, md: 6}} className="w-1/2 px-5 grid-1">
                        <InputField
                            label=""
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            onBlur={() => setTouchedFields({...touchedFields, fullName: true})}
                            isError={touchedFields.fullName && fullName === ''}
                            errorMessage={touchedFields.fullName && fullName === '' ? 'Name is required' : ''}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 6}} className="w-1/2 px-5 grid-2">
                        <InputField
                            label=""
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setTouchedFields({...touchedFields, email: true})}
                            isError={touchedFields.email && (email === '' || !isValidEmail(email))}
                            errorMessage={handleEmailValidation(email)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </Grid>
                </Grid>
                <Grid container className="flex flex-row">
                    <Grid size={{xs: 12, md: 6}} className="w-1/2 px-5 grid-1">
                        <InputField
                            label=""
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Enter your company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            onBlur={() => setTouchedFields({...touchedFields, company: true})}
                            isError={touchedFields.company && !company}
                            errorMessage={touchedFields.company && !company ? "Company is required" : ""}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 6}} className="w-1/2 px-5 grid-2">
                        <InputField
                            label=""
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => handlePhoneInput(e)}
                            onBlur={() => setTouchedFields({...touchedFields, phone: true})}
                            isError={touchedFields.phone && !phone}
                            errorMessage={touchedFields.phone && !phone ? "Phone number is required" : ""}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </Grid>
                </Grid>
                <div className="px-5 textarea-wrapper">
                    <Textarea
                        label=""
                        id="comments"
                        name="comments"
                        placeholder="Enter your comments"
                        value={comments}
                        onChange={(e: any) => setComments(e.target.value)}
                        onBlur={() => setTouchedFields({...touchedFields, comments: true})}
                        isError={touchedFields.comments && !comments}
                        errorMessage={touchedFields.comments && !comments ? "Comments are required" : ""}
                        className="border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="px-5 flex button-wrapper">
                    <Button
                        type="submit"
                        text="Submit"
                        onClick={() => handleSubmit}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4"
                    />
                    <div className="text-red-500 text-xs leading-10">
                        {submitErrorMessage}
                    </div>
                </div>
            </form>
            {openThankYouModal &&
                <Dialog
                    open={openThankYouModal}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Form Submitted Successfully"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Thank you for sending a message. <br />
                            I will go over your message and respond accordingly.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <MuiButton onClick={handleClose}>Close</MuiButton>
                    </DialogActions>
                </Dialog>}
        </>
    );
}

export default ContactForm;
