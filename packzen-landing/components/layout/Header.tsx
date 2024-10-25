import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Package, Phone } from 'lucide-react'

// Header component displayed on all pages
// Contains main navigation, logo, and call-to-action buttons
// Used in the root layout to provide consistent navigation
export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
      {/* Logo and brand name linking to homepage */}
      <Link className="flex items-center justify-center" href="/">
        <Package className="h-6 w-6 text-blue-600" />
        <span className="ml-2 text-2xl font-bold">
          <span className="font-extrabold">PACK</span>ZEN
        </span>
      </Link>
      {/* Main navigation and CTA buttons */}
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link className="text-sm font-medium text-[#64748B] hover:text-blue-600 transition-colors" href="/products">
          Products
        </Link>
        <div className="flex items-center">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Create Your Packaging
          </Button>
        </div>
        {/* Contact information */}
        <div className="flex items-center text-blue-600">
          <Phone className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">1-800-PACKZEN</span>
        </div>
      </nav>
    </header>
  )
}
