import React from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/Theme-provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <NavBar />
        <div className="flex flex-col">
          <Header />
          <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
