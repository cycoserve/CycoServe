
import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';
import { debounce } from 'lodash';
import SectionWrap from './elements/SectionWrap';
import ParagraphTitle from './elements/ParagraphTitle';

interface FAQ {
  question: string;
  answer: string;
}

interface FormData {
  name: string;
  email: string;
  question: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  question?: string;
}

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', question: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const faqs: FAQ[] = [
    {
      question: 'What is CycoServe?',
      answer: 'CycoServe is a cutting-edge tech company specializing in AI-driven portable Digital Marketing services. We empower agencies to efficiently serve their clients using advanced AI Agents and Conversational AI technology.',
    },
    {
      question: 'How does CycoServe use AI in digital marketing?',
      answer: 'CycoServe leverages AI Agents and Conversational AI to automate and optimize various aspects of digital marketing. This includes personalized content creation, customer engagement, data analysis, and campaign optimization.',
    },
    {
      question: 'What benefits do agencies get from using CycoServe?',
      answer: 'Agencies using CycoServe benefit from increased efficiency, scalability, and improved client results. Our AI-driven solutions allow agencies to handle more clients, deliver personalized marketing strategies, and achieve better ROI for their clients.',
    },
    {
      question: 'Is CycoServe suitable for small agencies?',
      answer: 'Absolutely! CycoServe is designed to be scalable and adaptable to agencies of all sizes. Our AI-powered tools can help small agencies compete with larger competitors by providing advanced capabilities at an affordable price point.',
    },
    {
      question: 'How secure is the data handled by CycoServe?',
      answer: 'Data security is our top priority. CycoServe employs state-of-the-art encryption and security protocols to ensure that all client data is protected. We comply with industry standards and regulations to maintain the highest level of data privacy and security.',
    }
  ];

  const toggleQuestion = (index: number) => {
    setExpandedQuestions(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 300),
    []
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.question.trim()) errors.question = 'Question is required';
    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', question: '' });
      setShowContactForm(false);
      // Show success message (you can implement this)
      alert('Your question has been submitted successfully!');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <SectionWrap>
      <div className="max-w-4xl mx-auto">
        <ParagraphTitle title="CycoServe FAQ" />

        <div className="mb-8 relative">
          <label htmlFor="search" className="sr-only">Search FAQs</label>
          <input
            id="search"
            type="text"
            placeholder="Search FAQs..."
            className="w-full p-3 pr-10 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onChange={handleSearchChange}
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-500" />
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full p-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onClick={() => toggleQuestion(index)}
                aria-expanded={expandedQuestions.includes(index)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {expandedQuestions.includes(index) ? <FaChevronUp aria-hidden="true" className="text-cyan-500" /> : <FaChevronDown aria-hidden="true" className="text-cyan-500" />}
              </button>
              {expandedQuestions.includes(index) && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full flex items-center mx-auto transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onClick={() => setShowContactForm(!showContactForm)}
          >
            <AiOutlineMessage className="mr-2" aria-hidden="true" />
            Ask a Question
          </button>
        </div>

        {showContactForm && (
          <div className="mt-8 bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Submit Your Question</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="question" className="block mb-1 text-gray-700">Your Question</label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
                {formErrors.question && <p className="text-red-500 text-sm mt-1">{formErrors.question}</p>}
              </div>
              <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                Submit Question
              </button>
            </form>
          </div>
        )}
      </div>
    </SectionWrap>
  );
};

export default FAQs;