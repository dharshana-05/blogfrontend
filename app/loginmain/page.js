'use client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (role) => {
    if (role === 'admin') router.push('/logins');
    else router.push('/login');
  };
  
  return (
    <div className="loginmain-container">
      <h1>Welcome to Pawspective Verse </h1>
      <p>Select your role to proceed</p>

      <button onClick={() => handleLogin('user')}>Login as User</button>
      <button onClick={() => handleLogin('admin')}>Login as Admin</button>
    </div>
  );
}
