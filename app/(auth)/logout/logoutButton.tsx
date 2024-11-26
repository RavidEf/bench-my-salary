'use client';
import '../../components/header.css';
import { useRouter } from 'next/navigation';
import { logout } from './actions';

export default function LogoutButton() {
  const router = useRouter();
  return (
    <form>
      <button
        id="logout-btn"
        className="btn"
        formAction={async () => {
          await logout();
          router.refresh();
        }}
      >
        Logout
      </button>
    </form>
  );
}
