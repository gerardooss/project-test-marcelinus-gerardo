"use client";
import Banner from "@/components/banner";
import Nav from "@/components/nav";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

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
