import { cookies } from 'next/headers';

export default async function ResultsPage() {
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  return (
    <section>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <h1>Results page</h1>
        </div>
      </div>
    </section>
  );
}
