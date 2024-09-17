"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { login, signInWithGithub, signup } from "@/app/login/actions";
import { useState } from "react";

export function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (formData: FormData) => {
    setError(null);
    const result = await login(formData);
    if (result.error) {
      setError(result.error);
    } else {
      window.location.href = "/private"; // Redirect on success
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto w-[350px] space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline"
                prefetch={false}
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" name="password" required />
          </div>
          <div className="flex justify-center items-center text-red-600">
            {error ? error : ""}
          </div>
          <Button type="submit" className="w-full" formAction={handleLogin}>
            Login
          </Button>
          <Button variant="outline" className="w-full" formAction={signup}>
            Sign up with Google
          </Button>
        </form>
        <Button variant="outline" className="w-full" onClick={signInWithGithub}>
          Sign up with Github
        </Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline" prefetch={false}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
