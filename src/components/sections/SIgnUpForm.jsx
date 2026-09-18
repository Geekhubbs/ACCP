import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Phone, Lock } from "lucide-react";
import FormField from "../forms/FormField";
import AgreementCheckbox from "../forms/AgreementCheckbox";
import Button from "../ui/Button";

export default function SignUpForm({ onSubmit }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({
      displayName,
      email,
      phone,
      password,
      confirmPassword,
      agreed,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
        <p className="text-sm text-gray-500 mt-1">
          Join us and start reporting community issues today.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <FormField
          label="Display Name"
          icon={User}
          placeholder="John Doe"
          value={displayName}
          onChange={setDisplayName}
          required
        />
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
          label="Phone Number"
          icon={Phone}
          placeholder="+233 50 123 4567"
          value={phone}
          onChange={setPhone}
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
        <FormField
          label="Confirm Password"
          type="password"
          icon={Lock}
          placeholder="••••••••"
          value={confirmPassword}
          onChange={setConfirmPassword}
          showToggle
          required
        />
      </div>

      <AgreementCheckbox checked={agreed} onChange={setAgreed} />

      <Button
        type="submit"
        variant="primary"
        showArrow
        fullWidth
        disabled={!agreed}
      >
        Create Account
      </Button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/sign-in"
          className="font-semibold text-brand-green hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}
