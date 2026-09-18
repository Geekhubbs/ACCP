import AuthLayout from "../components/layout/AuthLayout";
import SignInForm from "../components/sections/SignInForm";

export default function SignInPage() {
  const handleSubmit = (data) => {
    console.log("Sign in with:", data);
    // Wire up real auth later
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Continue reporting and tracking civic issues across Ashanti."
    >
      <SignInForm onSubmit={handleSubmit} />
    </AuthLayout>
  );
}
