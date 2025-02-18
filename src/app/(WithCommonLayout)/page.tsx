"use client";
import { useAuth } from "@/context/UserContext";

export default function HomePage() {
  const user = useAuth();
  console.log(user);
  return (
    <>
      <h1 className="bg-red-100 text-4xl">This is home page</h1>;
    </>
  );
}
