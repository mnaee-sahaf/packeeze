import Link from 'next/link';
import { Header } from "@/components/layout/Header"; // Import Header
import { Footer } from "@/components/layout/Footer"; // Import Footer

export default function Sustainability() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Add Header here */}
      <main className="container mx-auto p-4 flex-1">
        <h1 className="text-3xl font-bold">Sustainability</h1>
        <p>Learn about our sustainability efforts.</p>
        <Link href="/" className="text-blue-600 hover:underline">Go back to Home</Link>
      </main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}
