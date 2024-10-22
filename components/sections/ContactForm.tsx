import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const inputClasses = 'mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-400 focus:border-zinc-400 sm:text-sm';
const textClasses = 'block text-sm font-medium text-zinc-700';
const containerClasses = 'container mx-auto py-8';
const cardClasses = 'bg-white shadow-md rounded-lg p-6 ring-2 ring-gray-100';
const buttonClasses = 'bg-orange-500 text-white py-1 px-8 rounded-full hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50';

const ContactForm = () => {
  return (
    <div className={containerClasses}>
      <div className="max-w-full px-4 lg:px-4 mx-auto grid grid-cols-1 gap-12">
        <div className={cardClasses}>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              message: Yup.string().required('Required'),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                const response = await fetch('/api/sendEmail', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(values),
                });

                if (response.ok) {
                  console.log('Form submitted successfully');
                  resetForm();
                  alert('Form submitted successfully!');
                } else {
                  const errorData = await response.json();
                  console.error('Error submitting form:', errorData);
                  alert(`Error submitting form: ${errorData.error}`);
                }
              } catch (error) {
                console.error('Error submitting form:', error);
                alert('Error submitting form. Please try again.');
              }

              setSubmitting(false);
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