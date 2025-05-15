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
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Network response was not ok');

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
      className="p-6 rounded-xl space-y-8 bg-white/5 backdrop-blur-md shadow-lg border border-white/10"
    >
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="p-4 bg-green-500/10 text-green-400 rounded-md flex items-center"
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
          className="p-4 bg-red-500/10 text-red-400 rounded-md flex items-center"
        >
          <XCircle className="h-5 w-5 mr-2" />
          We encountered an error. Please try again.
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-lg font-semibold text-black">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-black
                      bg-black/20 border ${
                        errors.name ? "border-red-500 focus:ring-red-500" : "border-white/10"
                      } placeholder:text-black`}
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-2 text-lg font-semibold text-black">Email</label>
          <input
            type="email"
            placeholder="yourmail@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-black
                      bg-black/20 border ${
                        errors.email ? "border-red-500 focus:ring-red-500" : "border-white/10"
                      } placeholder:text-black`}
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-lg font-semibold text-black">Phone</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-black
                      bg-black/20 border ${
                        errors.phone ? "border-red-500 focus:ring-red-500" : "border-white/10"
                      } placeholder:text-black`}
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block mb-2 text-lg font-semibold text-black">Message</label>
        <textarea
          rows={4}
          placeholder="Write your message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-black
                    bg-black/20 border ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "border-white/10"
                    } placeholder:text-black resize-none`}
        ></textarea>
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300
                  ${
                    isSubmitting
                      ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800"
                  } focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`}
      >
        <Send size={18} />
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
      </button>
    </motion.form>
  );
};

export default ContactForm;
