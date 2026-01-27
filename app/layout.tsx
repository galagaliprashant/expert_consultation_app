import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ConsultPro - First-Time Client Consultation & Enquiry System",
    description: "Professional consultation and enquiry system for first-time clients",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Minimal Header */}
                <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
                    <div className="container mx-auto px-4 py-4">
                        <h1 className="text-xl font-bold text-primary-600">ConsultPro</h1>
                    </div>
                </header>

                {/* Main Content */}
                <main className="min-h-screen">
                    {children}
                </main>

                {/* Global Floating Buttons */}
                <FloatingButtons />
            </body>
        </html>
    );
}
