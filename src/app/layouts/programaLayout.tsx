import React from 'react';
import { FirstNavbar } from "@/components/navbar";
import  SuperiorNavbar  from "@/components/navbar/superiorNavbar";
import  TopNavbar  from "@/components/navbar/blog_navbar";


export default function ProgramaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
  
      <FirstNavbar />
      {children}
    </>
  );
}