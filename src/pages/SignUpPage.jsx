import AuthLayout from "../components/layout/AuthLayout";
import SignUpForm from "../components/sections/SignUpForm";

export default function SignUpPage() {
  const handleSubmit = (data) => {
    console.log("Sign up with:", data);
    // Wire up real auth later
  };

  return (
    <AuthLayout
      title="Join Us Today"
      subtitle="Create an account to start making your community better."
    >
      <SignUpForm onSubmit={handleSubmit} />
    </AuthLayout>
  );
}
