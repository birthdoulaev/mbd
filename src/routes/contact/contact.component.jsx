import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Modal from '../../components/modal/modal.component';

import './contact.styles.scss';
import FormDatePicker from '../../components/form-datepicker/form-datepicker.component';

const defaultFormFields = {
    name: '',
    email: '',
    phoneNumber: '',
    dueDate: new Date(),
    message: ''
}

const Contact = () => {
    const form = useRef();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, phoneNumber, dueDate, message } = formFields;

    const sendEmail = () => {
        const serviceId = process.env.REACT_APP_EMAILJS_EMAIL_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, form.current, { publicKey: publicKey })
            .then(() => { console.log('form sent') }, (err) => { console.log(err) })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setLoading(true);
            sendEmail()
            openModal();
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
            resetFormFields();
        }

    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <main className='contact-page-container'>
            <div className='contact-page-header'>
                <h1 className='section-header'>Let's chat</h1>
                <span>Interested in working with me? Let's talk about how I can help</span>
            </div>
            <form ref={form} onSubmit={handleSubmit}>

                <FormInput
                    label="Name"
                    type="text"
                    inputType={'input'}
                    onChange={handleChange}
                    name='name'
                    required
                    value={name} />

                <FormInput
                    label="Email"
                    type="text"
                    inputMode="email"
                    inputType={'input'}
                    onChange={handleChange}
                    name='email'
                    required
                    value={email} />

                <FormInput
                    label="Phone number (optional)"
                    type="number"
                    inputType={'input'}
                    inputMode="tel"
                    pattern="[0-9]"
                    onChange={handleChange}
                    name='phoneNumber'
                    value={phoneNumber} />

                <FormDatePicker
                    onChange={handleChange}
                    name='dueDate'
                    value={dueDate} />

                <FormInput
                    label="Message"
                    type="text"
                    inputType={'textarea'}
                    onChange={handleChange}
                    required
                    name='message'
                    value={message} />

                <div className='btns-container'>
                    <Button isLoading={loading} type="submit" customClassName='message-me-btn'>Message me</Button>
                </div>
            </form>
            <section>
                <Modal
                    isModalOpen={isModalOpen}
                    onClose={closeModal}
                />
            </section>
        </main>
    )
}

export default Contact;