'use client';

import { useState } from 'react';
import type { NewsletterResponseBody } from '../api/newsletter/route';
import SuccessEmailSubmit from './emailSubmit';
import PDForm from './pdfGeneratorForm';

export default function NewsletterForm() {
  const [businessEmail, setBusinessEmail] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

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
    setBusinessEmail('');
    setIsSuccess(true);
  }

  return (
    <div className="inside-b2b-nl">
      {isSuccess ? (
        <div className="success-pdf-container">
          <div>
            <SuccessEmailSubmit />
            <PDForm />
          </div>
        </div>
      ) : (
        <div className="NL-form-container">
          <form
            onSubmit={async (event) => await newsletterSubmit(event)}
            className="NL-form"
          >
            <label htmlFor="email">Enter your Emaill Address</label>
            <input
              id="email"
              placeholder="tina@meta.io"
              name="email"
              type="email"
              autoComplete="email"
              value={businessEmail}
              onChange={(event) => setBusinessEmail(event.currentTarget.value)}
            />
            <button className="btn-nl-form">Submit Email</button>
            {errors.map((error) => (
              <div className="text-red-500" key={`error-${error.message}`}>
                <p>{error.message}</p>{' '}
              </div>
            ))}
          </form>
        </div>
      )}
    </div>
  );
}
