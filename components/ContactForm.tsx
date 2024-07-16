'use client'
import React, { FormEvent } from 'react'
import * as Font from '@/utils/font'
import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });

    if (res.status === 200) {
      setStatus('Message sent!');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-[600px] flex flex-col gap-4'>
      
      <div className='flex flex-col gap-1'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Your Email'
          required
          className='px-3 py-1 border-2 rounded-md text-slate-700'
        />
      </div>
      <div  className='flex flex-col gap-1'>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Your message'
          rows={6}
          required
          className='px-3 py-1 border-2 rounded-md text-slate-700'
        ></textarea>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p>{status}</p>
        <button type="submit" className='px-4 py-1 bg-black text-white font-bold rounded-md'>Send</button>
      </div>
    </form>
  );
};

export default ContactForm;