"use client";

import { useState, FormEvent } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import "../../css/login.css";

export function SignIn() {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await signIn("password", formData);
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-24 w-full bg-black">
      <div className="login-container p-4">
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Research&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Research&nbsp;
          </span>
        </button>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {step === "signIn"
              ? "Sign in to your account"
              : "Create an account"}
          </CardTitle>
          <CardDescription className="text-center">
            {step === "signIn"
              ? "Enter your email below to sign in to your account"
              : "Enter your email below to create your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" required type="password" />
              </div>
              <input name="flow" type="hidden" value={step} />
              <Button className="w-full" type="submit">
                {step === "signIn" ? "Sign in" : "Sign up"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="space-y-2">
          <Button
            className="w-full"
            variant="outline"
            onClick={() => setStep(step === "signIn" ? "signUp" : "signIn")}
          >
            {step === "signIn"
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </Button>
        </CardFooter>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
