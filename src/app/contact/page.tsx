'use client';

import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Message sent by: ${name} \nEmail: ${email} \nMessage: ${message}`);
  };

  return (
    <div className="pt-20 px-8">
      <div className="max-w-xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg mb-8"> {/* Added mb-8 for bottom margin */}
        <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={4}
              required
            />
          </div>

          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md">
            Send Message
          </button>
        </form>
      </div>

      {/* Comment section or another component */}
      <div className="max-w-xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <p>This is where the comment section would go...</p>
      </div>
    </div>
  );
};

export default Contact;
