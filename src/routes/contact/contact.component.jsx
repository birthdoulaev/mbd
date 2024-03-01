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
    const { name, email, phoneNumber, dueDate, message } = formFields;

    const sendEmail = () => {
        emailjs.sendForm('service_qnilq25', 'template_r2y9a5j', form.current, { publicKey: '3waP2db4ZnjL9vFZj' })
            .then(() => { console.log('form sent') }, (err) => { console.log(err) })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log('form fields', formFields)
            // sendEmail()
            openModal();
            resetFormFields();
        } catch (error) {
            console.log(error)
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
        console.log(`${name}: ${value}`)

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
                    inputType={'input'}
                    onChange={handleChange}
                    name='email'
                    required
                    value={email} />

                <FormInput
                    label="Phone number (optional)"
                    type="text"
                    inputType={'input'}
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
                    <Button type="submit" customClassName='message-me-btn'>Message me</Button>
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