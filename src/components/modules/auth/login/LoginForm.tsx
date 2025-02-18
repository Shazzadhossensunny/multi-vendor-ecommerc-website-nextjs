"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Github, Loader2, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { loginValidationSchema } from "./loginValidation";
import { loginUser } from "@/services/AuthService";
import { toast } from "sonner";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      const res = await loginUser(data);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error(error as any);
    }
    setLoading(false);
    form.reset();
  };

  const handleRecaptha = (value: string | null) => {
    console.log(value);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 space-y-8 bg-card rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary font-heading">
          Welcome Back
        </h2>
        <p className="text-muted-foreground mt-2 font-heading">
          Sign in to your account
        </p>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full font-heading" type="button">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        <Button variant="outline" className="w-full font-heading" type="button">
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground font-heading">
            Or continue with
          </span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="font-sans">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="font-sans">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal cursor-pointer font-sans">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />
            <a
              href="/forgot-password"
              className="text-sm font-medium text-primary hover:underline font-sans"
            >
              Forgot password?
            </a>
          </div> */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY!}
              onChange={handleRecaptha}
            />
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="w-full font-heading"
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5 mx-auto" />
            ) : (
              "Log In"
            )}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm text-muted-foreground font-sans">
        Don't have an account?{" "}
        <a
          href="/register"
          className="font-medium text-primary hover:underline font-heading"
        >
          Register
        </a>
      </div>
    </div>
  );
}
