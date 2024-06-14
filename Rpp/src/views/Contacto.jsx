// ContactForm.js
import React, { useState } from 'react';
import './ContactUs.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setErrors({
        name: !name ? 'Required' : '',
        email: !email ? 'Required' : '',
        message: !message ? 'Required' : '',
      });
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setErrors({ email: 'Invalid email address' });
      return;
    }
    // Submit the form data here
    console.log('Form submitted:', form);
  };

  return (
    <div className="container">
      <h2 className="title">Contacto</h2>
      <form className="form" onSubmit={onSubmitForm}>
        <label className="label" htmlFor="name">Nombre:</label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={onUpdateField}
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <br />
        <label className="label" htmlFor="email">Email:</label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <br />
        <label className="label" htmlFor="message">Mensaje:</label>
        <textarea
          className="textarea"
          id="message"
          name="message"
          value={form.message}
          onChange={onUpdateField}
        />
        {errors.message && <div className="error">{errors.message}</div>}
        <br />
        <input className="submit" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;