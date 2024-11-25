import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: '#f5f0eb',
        height: '80vh',
        display: 'flex',
        justifyContent: ' center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" style={{ textDecoration: 'underline' }}>
        Return Home
      </Link>
    </div>
  );
}
