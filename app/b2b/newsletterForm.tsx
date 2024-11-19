'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [bizEmail, setBizEmail] = useState('');

  function newsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
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
      <form onSubmit={newsletterSubmit} className="NL-form">
        <label>Enter your Business Emaill Address</label>
        <input name="email" type="email" />
        <button className="btn-nl-form">Submit Email</button>
      </form>
    </div>
  );
}
