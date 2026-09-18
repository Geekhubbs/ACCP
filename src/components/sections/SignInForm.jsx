import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import FormField from "../forms/FormField";
import Button from "../ui/Button";

export default function SignInForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
        <p className="text-sm text-gray-500 mt-1">
          Access your account to manage reports and track updates.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <FormField
          label="Email Address"
          type="email"
          icon={Mail}
          placeholder="you@example.com"
          value={email}
          onChange={setEmail}
          required
        />
        <FormField
          label="Password"
          type="password"
          icon={Lock}
          placeholder="••••••••"
          value={password}
          onChange={setPassword}
          showToggle
          required
        />
      </div>

      <Button type="submit" variant="primary" showArrow fullWidth>
        Sign In
      </Button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/sign-up"
          className="font-semibold text-brand-green hover:underline"
        >
          Create one
        </Link>
      </p>
    </form>
  );
}
