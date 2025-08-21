import { useState } from 'react';
import { Check, X } from 'lucide-react';
import Button from '../common/Button';

interface BrochureDownloadFormProps {
  onClose: () => void;
  brochureUrl: string; // The URL to the brochure file
}

const BrochureDownloadForm = ({ onClose, brochureUrl }: BrochureDownloadFormProps) => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = brochureUrl.split('/').pop() || 'brochure';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    try {
      // Here you would send the form data (name, phone) to your backend
      // for lead generation purposes.
      // For this example, we'll simulate a successful API call.
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/brochure-download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerInfo: formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit download request');
      }

      setFormSubmitted(true);
      
      // Initiate download after a short delay for UX
      setTimeout(() => {
        handleDownload();
      }, 500);

      // Close the modal and reset state after a while
      setTimeout(() => {
        onClose();
        setFormData({ name: '', phone: '' });
      }, 3000);

    } catch (error) {
      console.error('Error submitting brochure request:', error);
      // You can add an error notification here
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto transform scale-100 opacity-100 transition-all duration-300 ease-out">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-['Montserrat'] font-bold text-[#593D2B]">DOWNLOAD BROCHURE</h3>
            <button
              onClick={onClose}
              className="text-[#8D8D8D] hover:text-[#3C3C3C] transition-colors"
              disabled={formSubmitting}
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center bg-[#D4EDDA] rounded-full p-3 mb-4">
                <Check className="h-10 w-10 text-[#5B8C5A]" />
              </div>
              <h4 className="text-xl font-['Montserrat'] font-bold mb-2 text-[#593D2B]">DOWNLOAD STARTED!</h4>
              <p className="text-[#3C3C3C] font-['Roboto'] leading-relaxed">
                Thank you for your interest. Your download should begin automatically.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-['Roboto'] font-medium text-[#3C3C3C] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[#EAEAEA] rounded-md focus:ring-2 focus:ring-[#CB6843] focus:border-[#CB6843] outline-none text-[#3C3C3C] font-['Roboto']"
                    disabled={formSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-['Roboto'] font-medium text-[#3C3C3C] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[#EAEAEA] rounded-md focus:ring-2 focus:ring-[#CB6843] focus:border-[#CB6843] outline-none text-[#3C3C3C] font-['Roboto']"
                    disabled={formSubmitting}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-8 px-6 py-3 text-lg"
                disabled={formSubmitting}
              >
                {formSubmitting ? 'SUBMITTING...' : 'DOWNLOAD BROCHURE'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrochureDownloadForm;