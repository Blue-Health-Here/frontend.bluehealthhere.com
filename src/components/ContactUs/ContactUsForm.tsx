import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [isLoading, setIsLoading] = useState(false); // State for loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(''); // Clear any previous messages

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone_number: formData.phoneNumber,
      from_email: formData.email,
      from_name: `${formData.firstName} ${formData.lastName}`,
      message: formData.message,
      subject: "Contact Form Submission", // Optional or dynamic
      to_name: "Blue Health Team", // Optional or dynamic
    };

    try {
      await emailjs.send(
        'service_iahj3lg', // Replace with your EmailJS service ID
        'template_he3n57v', // Replace with your EmailJS template ID
        templateParams,
        'pGqDB35b2uBwbEjfJ' // Replace with your EmailJS user ID
      );
      setSuccessMessage('We received your message. Our team will be in contact with you shortly!');
      setFormData({ firstName: '', lastName: '', phoneNumber: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
        Your Trusted Partner in <br></br>Healthcare Solutions
        </h2>
        <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-600"
            required
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full hover:bg-gray-800 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
          </div>
          {/* Success Message */}
          {successMessage && (
            <p className="text-center text-green-600 mt-4 text-base md:text-lg">
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;
