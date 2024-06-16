import React from 'react';
import TestNavbar from "@/components/navbar/testNavbar";
import  SuperiorNavbar  from "@/components/navbar/superiorNavbar";
import  TopNavbar  from "@/components/navbar/blog_navbar";
import { Footer } from "@/components/footer";

export default function FormacionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
   
      <TestNavbar />
      {children}
      <Footer/>
    </>
  );
}