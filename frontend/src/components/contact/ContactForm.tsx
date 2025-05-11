'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, XCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  Phone: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // ContactForm.tsx

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
      }),
    });

    if (!res.ok) throw new Error('Network response was not ok');

    setSubmitStatus('success');
    reset();
  } catch (err) {
    console.error('Submission failed:', err);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  }
};


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 pr-3 rounded-xl space-y-6 text-gray-800"
    >
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          Message sent successfully!
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md flex items-center">
          <XCircle className="h-5 w-5 mr-2" />
          Something went wrong. Please try again.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-xl text-black font-700 font-sans">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register('name', { required: 'Name is required' })}
            className="w-full border-b border-gray-500 rounded-md p-2 text-black focus:border-black focus:outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1 text-xl font-sans font-700 text-black">Email</label>
          <input
            type="email"
            placeholder="yourmail@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full border-b border-gray-500 rounded-md p-2 text-black focus:border-black focus:outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-xl font-sans text-black font-700">Phone</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            {...register('Phone', { required: 'Phone number is required' })}
            className="w-full border-b border-gray-500 rounded-md p-2 text-black focus:border-black focus:outline-none"
          />
          {errors.Phone && <p className="text-red-500 text-sm mt-1">{errors.Phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block mb-1 text-xl font-sans text-black font-700">Message</label>
        <textarea
          rows={4}
          placeholder="Write your message..."
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
          className="w-full text-black border-b border-gray-500 rounded-md p-2 focus:border-black focus:outline-none bg-white"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black flex items-center space-x-2 disabled:bg-gray-500 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        <Send size={18} />
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
      </button>
    </form>
  );
};

export default ContactForm;
