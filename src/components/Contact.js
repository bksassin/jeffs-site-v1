import React, { useState } from 'react';

function Contact() {
  const [phoneCall, setPhoneCall] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);

  const handlePhoneCallChange = () => {
    setPhoneCall(!phoneCall);
  };

  const handleSendEmailChange = () => {
    setSendEmail(!sendEmail);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Request An Estimate
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        We'd love to hear from you! Use this form to provide details about your project and receive an estimate. Don't forget to let us know if you want to schedule a call.
        </p>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="555-555-5555"
                required
              />
            </div>
            <div>
              <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Service
              </label>
              <select
                id="service"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              >
                <option value="">Select a service closest to your needs</option>
                <option value="Paint">Paint</option>
                <option value="Flooring">Flooring</option>
                <option value="Fence/Patio">Fence/Patio</option>
                <option value="Rehab">Rehab</option>
                <option value="Custom Job">Custom Job</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-6">
  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Message
  </label>
  <textarea
    id="message"
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 h-32 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    placeholder="Provide as much detail as possible for what you need done...."
    required
  />
</div>

            <div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="phoneCall"
                  className="mr-2"
                  checked={phoneCall}
                  onChange={handlePhoneCallChange}
                />
                <label htmlFor="phoneCall" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  Do you want a phone call?
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="sendEmail"
                  className="mr-2"
                  checked={sendEmail}
                  onChange={handleSendEmailChange}
                />
                <label htmlFor="sendEmail" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  Send this message to your email
                </label>
              </div>
            </div>
            <button class="bg-[#ECA400] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Submit
</button>
          </form>
          <div className="lg:mt-0 p-5 mt-10 md:my-auto rounded-xl bg-yellow-300 w-full text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">Owner: Jeff</h3>
            <p className="text-gray-800 dark:text-gray-400 mt-2">
              Email: <a href="mailto:email@gmail.com" className="text-primary-700 dark:text-primary-500">email@gmail.com</a>
            </p>
            <p className="text-gray-800 dark:text-gray-400 mt-2">
              Phone: <a href="tel:555-555-5555" className="text-primary-700 dark:text-primary-500">555-555-5555</a>
            </p>
            <p className="text-gray-800 dark:text-gray-400 mt-2">Based in Virginia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
