'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Define the structure for form errors
interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  // State to manage submission status (loading, success, error)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  // State for form input data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State for form validation errors
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Effect to clear submission status message after a few seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000); // Clear message after 5 seconds
      return () => clearTimeout(timer); // Cleanup timer on component unmount or status change
    }
  }, [submitStatus]);

  // Function to validate form inputs
  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = { name: '', email: '', phone: '', message: '' };

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    // Validate Phone Number (basic check)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }
    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors); // Update error state
    return isValid; // Return overall validity
  };

  // Handle input changes and clear corresponding error messages
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error for the changed field
  };

  // Handle form submission
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate form before attempting submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true); // Set submission status to loading

    try {
      // Construct the API URL using the VITE_BACKEND_URL environment variable
      // Ensure VITE_BACKEND_URL is correctly set in your .env file (e.g., VITE_BACKEND_URL=http://localhost:3000)
      const backendUrl = import.meta.env.VITE_BACKEND_URL; // Fallback for development
      const apiUrl = `${backendUrl}/api/contact`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) { // Check if the response status is 2xx (success)
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form fields
      } else {
        // Handle API errors (e.g., server-side validation errors, internal server errors)
        const errorData = await response.json(); // Attempt to parse error message from response body
        console.error('API submission failed:', response.status, errorData);
        setSubmitStatus('error');
        // Optionally, display a more specific error message from errorData
      }
    } catch (err) {
      // Handle network errors or other unexpected issues
      console.error('Network or unexpected error during submission:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false); // Reset submission status
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={onSubmit}
      className="p-8 space-y-6 bg-white border border-neutral-100 shadow-sm" // Minimalist design with subtle shadow and border
    >
      <h2 className="text-2xl font-bold text-[#593D2B] mb-4 uppercase tracking-tight">SEND US A MESSAGE</h2> {/* Bold, uppercase, tight tracking */}

      {/* Submission status messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="p-4 bg-green-50 text-green-700 flex items-center font-sans text-sm" // Clean success message
        >
          <CheckCircle className="h-5 w-5 mr-2" />
          Thank you! Your message has been sent.
        </motion.div>
      )}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="p-4 bg-red-50 text-red-700 flex items-center font-sans text-sm" // Clean error message
        >
          <XCircle className="h-5 w-5 mr-2" />
          At the moment we can not deliver your message, please contact with phone number .
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Grid layout for inputs */}
        <div>
          <label htmlFor="name" className="block mb-2 text-xs font-medium uppercase tracking-wider text-neutral-700">Name</label>
          <input
            type="text"
            id="name"
            placeholder="YOUR FULL NAME" // Uppercase placeholder
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black
              bg-white border ${
                errors.name ? "border-red-500" : "border-neutral-300" // Thin, neutral border, red for error
              } placeholder:text-neutral-500 font-sans text-sm uppercase`} // Uppercase input text
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-sans">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-xs font-medium uppercase tracking-wider text-neutral-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="YOURMAIL@EXAMPLE.COM" // Uppercase placeholder
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black
              bg-white border ${
                errors.email ? "border-red-500" : "border-neutral-300"
              } placeholder:text-neutral-500 font-sans text-sm uppercase`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-sans">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block mb-2 text-xs font-medium uppercase tracking-wider text-neutral-700">Phone Number</label>
        <input
          type="text"
          id="phone"
          placeholder="E.G., +1 234 567 8900" // Uppercase placeholder
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black
            bg-white border ${
              errors.phone ? "border-red-500" : "border-neutral-300"
            } placeholder:text-neutral-500 font-sans text-sm uppercase`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-xs font-medium uppercase tracking-wider text-neutral-700">Message</label>
        <textarea
          id="message"
          rows={6} // Slightly more rows for message
          placeholder="WRITE YOUR DETAILED MESSAGE HERE..." // Uppercase placeholder
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black
            bg-white border ${
              errors.message ? "border-red-500" : "border-neutral-300"
            } placeholder:text-neutral-500 resize-none font-sans text-sm uppercase`} // No resize, uppercase
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1 font-sans">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-4 flex items-center justify-center gap-2 transition-colors duration-200
          font-sans font-bold text-base uppercase tracking-widest
          ${
            isSubmitting
              ? "bg-[#f2835a] text-white cursor-not-allowed" // Darker disabled state
              : "bg-[#CB6843] text-white hover:bg-[#ed6d3e]" // Black button, white text, dark hover
          } focus:outline-none focus:ring-1 focus:ring-brown focus:ring-offset-0`} // No shadow, clean focus ring
      >
        <Send size={18} />
        <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
      </button>
    </motion.form>
  );
};

export default ContactForm;
