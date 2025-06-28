import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  // Automatically redirect to dashboard without login
  React.useEffect(() => {
    router.push('/dashboard/fleet-overview');
  }, []);

  return null; // Or a loading spinner if you prefer
}
