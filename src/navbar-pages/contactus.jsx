import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Reset error message when user starts typing again
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message.trim()) {
      setErrorMessage('Email is required and message cannot be empty.');
      return;
    }

    // Handle the form submission logic here
    console.log(formData);

    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl text-white font-bold mb-4">Contact Us</h2>
      {submitted ? (
        <p className='text-white'>We received your email and will reply as soon as possible. Thank you!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border rounded"
            rows="4"
            required
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
