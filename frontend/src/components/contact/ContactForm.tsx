import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = { name: '', email: '', phone: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear the error message for the field being changed
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // In a real application, you would send this to your backend service.
      // For this example, we'll simulate an API call.
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      // Example of a successful submission
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (err) {
      console.error('Submission failed:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={onSubmit}
      className="p-8 rounded-md space-y-6 bg-white shadow-sm border border-gray-100" // Rounded, light shadow, subtle border, white background
    >
      <h2 className="text-2xl font-['Montserrat'] font-bold text-[#593D2B] mb-4 tracking-normal">SEND US A MESSAGE</h2> {/* Sturdy font, rich brown, medium tracking */}

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="p-4 bg-[#5B8C5A]/10 text-[#5B8C5A] rounded-md flex items-center font-['Roboto']" // Muted green for success
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
          className="p-4 bg-red-500/10 text-red-600 rounded-md flex items-center font-['Roboto']" // Red for error (keeping standard red for errors)
        >
          <XCircle className="h-5 w-5 mr-2" />
          We encountered an error. Please try again.
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Consistent spacing */}
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-['Roboto'] font-medium text-[#3C3C3C]">Name</label> {/* Dark gray text, clear, practical */}
          <input
            type="text"
            id="name"
            placeholder="Your Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md text-[#3C3C3C] focus:outline-none focus:ring-2 focus:ring-[#CB6843]
              bg-white border ${
                errors.name ? "border-red-500" : "border-[#EAEAEA]" // Light gray border, red for error
              } placeholder:text-neutral-500 font-['Roboto'] text-sm`} // Clear placeholder, consistent font
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-['Roboto']">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-['Roboto'] font-medium text-[#3C3C3C]">Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourmail@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md text-[#3C3C3C] focus:outline-none focus:ring-2 focus:ring-[#CB6843]
              bg-white border ${
                errors.email ? "border-red-500" : "border-[#EAEAEA]"
              } placeholder:text-neutral-500 font-['Roboto'] text-sm`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-['Roboto']">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-['Roboto'] font-medium text-[#3C3C3C]">Phone Number</label>
        <input
          type="text"
          id="phone"
          placeholder="e.g., +1 234 567 8900"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-md text-[#3C3C3C] focus:outline-none focus:ring-2 focus:ring-[#CB6843]
            bg-white border ${
              errors.phone ? "border-red-500" : "border-[#EAEAEA]"
            } placeholder:text-neutral-500 font-['Roboto'] text-sm`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1 font-['Roboto']">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-['Roboto'] font-medium text-[#3C3C3C]">Message</label>
        <textarea
          id="message"
          rows={5} // Adjusted rows for slightly more message space
          placeholder="Write your detailed message here..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-md text-[#3C3C3C] focus:outline-none focus:ring-2 focus:ring-[#CB6843]
            bg-white border ${
              errors.message ? "border-red-500" : "border-[#EAEAEA]"
            } placeholder:text-neutral-500 resize-none font-['Roboto'] text-sm`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1 font-['Roboto']">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-all duration-300 font-['Montserrat'] font-bold text-lg
          ${
            isSubmitting
              ? "bg-[#CB6843]/70 text-white cursor-not-allowed" // Muted terracotta when disabled
              : "bg-[#CB6843] text-white hover:bg-[#A85735]" // Primary action terracotta, darker hover
          } focus:outline-none focus:ring-2 focus:ring-[#CB6843] focus:ring-opacity-50 shadow-md`} // Light shadow on button
      >
        <Send size={18} />
        <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span> {/* Uppercase for button text */}
      </button>
    </motion.form>
  );
};

export default ContactForm;