'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';

export default function NewsletterForm() {
  const [bizEmail, setBizEmail] = useState('');

  const router = useRouter();

  async function newsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        bizEmail,
      }),
    });
    const data: NewsletterResponseBody = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    router.refresh();

    setBizEmail('');
  }

  return (
    <div className="NL-form-container">
      <form
        onSubmit={async (event) => await newsletterSubmit(event)}
        className="NL-form"
      >
        <label htmlFor="email">Enter your Business Emaill Address</label>
        <input name="email" type="email" />
        <button className="btn-nl-form">Submit Email</button>
      </form>
    </div>
  );
}
