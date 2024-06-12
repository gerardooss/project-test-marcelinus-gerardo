"use client";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-5xl text-zinc-600 font-bold">Home</h1>
      </div>
    </>
  );
}