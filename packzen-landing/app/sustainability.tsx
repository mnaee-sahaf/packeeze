import Link from 'next/link';

export default function Sustainability() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Sustainability</h1>
      <p>Learn about our sustainability efforts.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}

