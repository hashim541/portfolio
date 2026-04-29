'use client'
import React, { FormEvent, useState } from 'react'
import { motion as m } from 'framer-motion'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('Sending...')
    
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    })

    if (res.status === 200) {
      setStatus('Message sent successfully!')
      setEmail('')
      setMessage('')
    } else {
      setStatus('Failed to send message. Please try again.')
    }
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <m.input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='your@email.com'
          required
          className='px-4 py-3 border-2 border-border rounded-lg text-foreground bg-background transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none placeholder:text-muted-foreground'
          whileFocus={{ scale: 1.01 }}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <m.textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Tell me about your project...'
          rows={6}
          required
          className='px-4 py-3 border-2 border-border rounded-lg text-foreground bg-background transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none placeholder:text-muted-foreground'
          whileFocus={{ scale: 1.01 }}
        />
      </div>
      <div className='flex items-center justify-between w-full gap-4'>
        <p className={`text-sm ${status.includes('successfully') ? 'text-green-600' : status.includes('Failed') ? 'text-red-500' : 'text-muted-foreground'}`}>
          {status}
        </p>
        <m.button 
          type="submit" 
          disabled={isSubmitting}
          className='px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed'
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </m.button>
      </div>
    </form>
  )
}

export default ContactForm
