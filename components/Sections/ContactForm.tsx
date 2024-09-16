import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';




const inputClasses = 'mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-400 focus:border-zinc-400 sm:text-sm';
const textClasses = 'block text-sm font-medium text-zinc-700';
const containerClasses = 'container mx-auto py-8';
const cardClasses = 'bg-white shadow-md rounded-lg p-6 ring-2 ring-gray-100';
const buttonClasses = 'bg-orange-500 text-white py-1 px-8 rounded-full hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50';

const ContactForm = () => {
  return (
    <div className={containerClasses}>
      <div className="max-w-full px-4 lg:px-4 mx-auto grid grid-cols-1  gap-12">
        <div className={cardClasses}>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              services: 'digital_marketing',
              message: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              services: Yup.string().required('Required'),
              message: Yup.string().required('Required'),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                const response = await axios.post('/api/contact', values);
                console.log('Form submitted successfully:', response.data);
                setSubmitting(false);
                resetForm();
                alert('Form submitted successfully!');
              } catch (error: any) {
                console.error('Error submitting form:', error);
                setSubmitting(false);
                if (error instanceof Error) {
                  alert('Error submitting form: ' + error.message);
                } else {
                  alert('An unknown error occurred');
                }
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="name" className={textClasses}>
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className={textClasses}>
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={inputClasses}
                    placeholder="johndoe@example.com"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="services" className={textClasses}>
                    Which Service Do You Require?
                  </label>
                  <Field as="select" id="services" name="services" className={inputClasses}>
                    <option value="digital_marketing">Digital Marketing Services</option>
                    <option value="seo">SEO Services</option>
                    <option value="social_media">Social Media Marketing</option>
                    <option value="ppc">PPC Management</option>
                    <option value="email_marketing">Email Marketing</option>
                  </Field>
                  <ErrorMessage name="services" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className={textClasses}>
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={4}
                    className={inputClasses}
                    placeholder="Your message here"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                </div>
                <button type="submit" className={buttonClasses} disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
