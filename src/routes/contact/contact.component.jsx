import { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

import './contact.styles.scss';

const defaultFormFields = {
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
}

const Contact = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, phoneNumber, message } = formFields;


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log('form fields', formFields)
            resetFormFields();
        } catch (error) {
            console.log(error)
        }

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <div>
            <h1>Let's chat</h1>
            <span>Interested in working with me? Let's talk about how I can help</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name='name'
                    value={name} />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name='email'
                    value={email} />

                <FormInput
                    label="Phone number"
                    type="text"
                    required
                    onChange={handleChange}
                    name='phoneNumber'
                    value={phoneNumber} />

                <FormInput
                    label="Message"
                    type="text"
                    required
                    onChange={handleChange}
                    name='message'
                    value={message} />

                <div className='btns-container'>
                    <Button type="submit">Sign In</Button>
                </div>

            </form>
        </div>
    )
}

export default Contact;