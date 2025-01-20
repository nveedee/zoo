// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import HomePage from './components/HomePage';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body>
        {children} {/* Hier wird der dynamische Inhalt wie Ponchos oder die Startseite gerendert */}
        </body>
        </html>
    );
}
