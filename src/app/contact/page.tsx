"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'laraibadnan297@gmail.com';
    const templateID = 'laraibadnan297@gmail.com';
    const userID = 'laraibadnan297@gmail.com';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({ email: '', message: '' }); // Clear form
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className="bg-black text-black">
      <div className="text-center font-bold p-10 text-4xl">
        <h1>Contact</h1>
      </div>
      <div className="text-center px-4">
        <p>
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 m-8">
        <a
          href="https://github.com/laraib28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/git-link.webp" alt="GitHub" width={50} height={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/laraib-adnan-744955252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkdin.png" alt="linkedin" width={40} height={50} />
        </a>
      </div>

      <div className="flex flex-col items-center gap-4">
        <form onSubmit={sendEmail} className="w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2 font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              className="border-orange-600 rounded-lg border-4 w-full p-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              className="border-orange-600 rounded-lg border-4 w-full p-2"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 rounded-lg text-white px-4 py-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
