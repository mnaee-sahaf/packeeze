import Link from 'next/link';

export default function Products() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Our Products</h1>
      <p>Explore our range of products.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}

