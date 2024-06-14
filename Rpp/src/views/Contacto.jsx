// ContactForm.js
import React, { useState } from 'react';
import './ContactUs.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoadingSpinner from '../components/Isloading';

const ContactForm = () => {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [botonDesactivado, setBotonDesactivado] = useState(false);

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

  const onSubmitForm = async (e) => {
    e.preventDefault();
    await setIsLoading(true);
    setBotonDesactivado(true);

    const { name, email, message } = form;
    if (!name || !email || !message) {
      setErrors({
        name: !name ? 'Required' : '',
        email: !email ? 'Required' : '',
        message: !message ? 'Required' : '',
      });
     
      setIsLoading(false);
      setBotonDesactivado(false);
      return;
      
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setErrors({ email: 'Invalid email address' });
      console.log(isLoading)
      setIsLoading(false);
      setBotonDesactivado(false);
      return;
    }
    // Submit the form data here
    console.log('Form submitted:', form);

    const emailData = {
      to: form.email,
      subject: "Solicitudes contacto",
      text: form.message,
      name: form.name
    };

    await axios.post('https://backweppage.vercel.app/send-email', emailData)
    .then(response => {
    
      setBotonDesactivado(false);
      navigate('/');
      
      
    })
    .catch(error => {
        
        navigate('/');
        
        
    });
    setIsLoading(false);
  };

  return (
    
    <>
    {!isLoading && (
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
        <input className="submit" type="submit" disabled={botonDesactivado} value="Enviar" />
      </form>
    </div>)}
    {isLoading && <LoadingSpinner />}
    </>
    
  );
};

export default ContactForm;