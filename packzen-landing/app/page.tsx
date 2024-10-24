import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, Leaf, Star, ArrowRight, ChevronRight, Phone } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
        <Link className="flex items-center justify-center" href="#">
          <Package className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold">
            <span className="font-extrabold">PACK</span>ZEN
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium text-[#64748B] hover:text-blue-600 transition-colors" href="#">
            Products
          </Link>
          <Link className="text-sm font-medium text-[#64748B] hover:text-blue-600 transition-colors" href="#">
            Sustainability
          </Link>
          <Link className="text-sm font-medium text-[#64748B] hover:text-blue-600 transition-colors" href="#">
            About Us
          </Link>
          <Link className="text-sm font-medium text-[#64748B] hover:text-blue-600 transition-colors" href="#">
            Contact
          </Link>
          <div className="flex items-center text-blue-600">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">1-800-PACKZEN</span>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#F9FAFB]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800">
                  Custom Packaging Solutions for Your Business
                </h1>
                <p className="mx-auto max-w-[700px] text-[#64748B] md:text-xl">
                  Elevate your brand with eco-friendly, customizable packaging. Fast, easy, and affordable.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white text-[#0F172A]" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">Get a Quote</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">Our Product Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {['Boxes', 'Mailers', 'Bags', 'Food Packaging', 'Retail Packaging', 'Accessories'].map((category) => (
                <div key={category} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={category}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#ADD8E6] transition-opacity group-hover:bg-opacity-40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
                    <div className="w-32 h-32">
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                      Explore <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Sustainable Packaging Solutions</h2>
                <p className="text-[#64748B]">
                  At PackZen, we&apos;re committed to providing eco-friendly packaging options that don&apos;t compromise on quality or style. Our sustainable materials and processes help reduce environmental impact without sacrificing performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#64748B]">
                    <Leaf className="h-5 w-5 mr-2 text-blue-600" />
                    Recyclable and biodegradable options
                  </li>
                  <li className="flex items-center text-[#64748B]">
                    <Leaf className="h-5 w-5 mr-2 text-blue-600" />
                    FSC-certified materials
                  </li>
                  <li className="flex items-center text-[#64748B]">
                    <Leaf className="h-5 w-5 mr-2 text-blue-600" />
                    Water-based inks and adhesives
                  </li>
                </ul>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Learn More About Our Sustainability Efforts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4 lg:mt-0">
                <Image
                  src="/nbg.png"
                  alt="Sustainable Packaging"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">What Our Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
                  <Star className="h-8 w-8 text-blue-600" />
                  <p className="text-[#64748B]">
                    &quot;Packzen has revolutionized our packaging process. Their custom solutions perfectly align with our brand identity, and the quality is outstanding.&quot;
                  </p>
                  <div>
                    <h4 className="font-semibold text-blue-600">Jane Doe</h4>
                    <p className="text-sm text-[#64748B]">CEO, Brand Inc.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F9FAFB] text-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to elevate your packaging?</h2>
                <p className="max-w-[600px] text-[#64748B] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses that trust PackZen for their custom packaging needs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1 bg-white text-[#0F172A]" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
        <p className="text-xs text-[#64748B]">© 2024 Packzen. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="#">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
