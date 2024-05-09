import React from 'react';
import { FirstNavbar } from "@/components/navbar";

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