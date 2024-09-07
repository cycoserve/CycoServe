import React, { useState, useCallback, ChangeEvent } from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { debounce } from "lodash";
import SectionWrap from "./elements/SectionWrap";
import ParagraphTitle from "./elements/ParagraphTitle";

interface FAQ {
  question: string;
  answer: string;
}

const FAQComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const faqs: FAQ[] = [
    {
      question: "What is CycoServe?",
      answer:
        "CycoServe is a cutting-edge tech company specializing in AI-driven portable Digital Marketing services. We empower agencies to efficiently serve their clients using advanced AI Agents and Conversational AI technology.",
    },
    {
      question: "How does CycoServe use AI in digital marketing?",
      answer:
        "CycoServe leverages AI Agents and Conversational AI to automate and optimize various aspects of digital marketing. This includes personalized content creation, customer engagement, data analysis, and campaign optimization.",
    },
    {
      question: "What benefits do agencies get from using CycoServe?",
      answer:
        "Agencies using CycoServe benefit from increased efficiency, scalability, and improved client results. Our AI-driven solutions allow agencies to handle more clients, deliver personalized marketing strategies, and achieve better ROI for their clients.",
    },
    {
      question: "Is CycoServe suitable for small agencies?",
      answer:
        "Absolutely! CycoServe is designed to be scalable and adaptable to agencies of all sizes. Our AI-powered tools can help small agencies compete with larger competitors by providing advanced capabilities at an affordable price point.",
    },
    {
      question: "How secure is the data handled by CycoServe?",
      answer:
        "Data security is our top priority. CycoServe employs state-of-the-art encryption and security protocols to ensure that all client data is protected. We comply with industry standards and regulations to maintain the highest level of data privacy and security.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setExpandedQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
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

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SectionWrap>
      <div className="max-w-4xl mx-auto">
        <ParagraphTitle>Frequently Asked Questions</ParagraphTitle>

        <div className="mb-8 relative">
          <label htmlFor="search" className="sr-only">
            Search FAQs
          </label>
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
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onClick={() => toggleQuestion(index)}
                aria-expanded={expandedQuestions.includes(index)}
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                {expandedQuestions.includes(index) ? (
                  <FaChevronUp aria-hidden="true" className="text-cyan-500" />
                ) : (
                  <FaChevronDown aria-hidden="true" className="text-cyan-500" />
                )}
              </button>
              {expandedQuestions.includes(index) && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
};

export default FAQComponent;
