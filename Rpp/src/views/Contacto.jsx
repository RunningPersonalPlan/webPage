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
    
    
    <div className="bg-transparent py-12">
    <form className="max-w-md mx-auto p-4  rounded shadow-md" onSubmit={onSubmitForm}>
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">Contacto</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
          value={form.name}
          onChange={onUpdateField}
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <br />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Ingrese su email"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <br />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          placeholder="Ingrese su mensaje"
          value={form.message}
          onChange={onUpdateField}
        />
        {errors.message && <div className="error">{errors.message}</div>}
        <br />

      </div>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        disabled={botonDesactivado} 
        value="Enviar"
      >
        Enviar
      </button>
    </form>
  </div>
  )}
    {isLoading && <LoadingSpinner />}
    </>
    
  );
};

export default ContactForm;