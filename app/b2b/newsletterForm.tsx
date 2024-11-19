'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';
import type { NewsletterResponseBody } from '../api/newsletter/route';

export default function NewsletterForm() {
  const [businessEmail, setBizEmail] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  // const router = useRouter();

  async function newsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        businessEmail,
      }),
    });
    const data: NewsletterResponseBody = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    // router.refresh();

    setBizEmail('');
  }

  return (
    <div className="NL-form-container">
      <form
        onSubmit={async (event) => await newsletterSubmit(event)}
        className="NL-form"
      >
        <label htmlFor="email">Enter your Business Emaill Address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={businessEmail}
          onChange={(event) => setBizEmail(event.currentTarget.value)}
        />
        <button className="btn-nl-form">Submit Email</button>
        {errors.map((error) => (
          <div className="text-red-500" key={`error-${error.message}`}>
            <p>{error.message}</p>{' '}
          </div>
        ))}
      </form>
    </div>
  );
}
