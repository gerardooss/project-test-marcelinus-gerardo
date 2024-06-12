"use client";
import Banner from "@/components/banner";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <div className="min-h-[3000px]">
        <Banner/>
      </div>
    </div>
  );
}
