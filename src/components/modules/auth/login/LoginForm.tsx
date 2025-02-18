"use client";
import { useForm } from "react-hook-form";
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
import { Github, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// Define validation schema
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
  rememberMe: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  function onSubmit(values: FormValues) {
    // This would typically be where you would integrate with your authentication service
    console.log(values);
    form.reset({ email: "", password: "", rememberMe: false });
  }

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
        <Button variant="outline" className="w-full" type="button">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        <Button variant="outline" className="w-full" type="button">
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
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
              <FormItem>
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
              <FormItem>
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

          <div className="flex items-center justify-between">
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
                  <FormLabel className="text-sm font-normal cursor-pointer">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />
            <a
              href="/forgot-password"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <a
          href="/register"
          className="font-medium text-primary hover:underline"
        >
          Sign up
        </a>
      </div>
    </div>
  );
}
