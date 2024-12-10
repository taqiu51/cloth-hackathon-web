'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, ShoppingCart, User } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="bg-black text-white text-center py-2 text-sm">
        <p className="inline-block">
          Sign up and get 20% off to your first order.{' '}
          <Link href="/" className="underline">
            Sign Up Now
          </Link>
        </p>
      </div>
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className=" p-3 text-2xl font-extrabold">
              SHOP.CO
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/shop" className="hover:text-gray-600">Shop</Link>
              <Link href="/shop" className="hover:text-gray-600">On Sale</Link>
              <Link href="/shop" className="hover:text-gray-600">New Arrivals</Link>
              <Link href="/shop" className="hover:text-gray-600">Brands</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative flex items-center">
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="pl-10 pr-4 py-2 bg-gray-100 rounded-full w-64"
                />
                <Search className="absolute left-3 text-gray-400 w-5 h-5" />
              </div>
              <Link href="/cart" className="p-2">
                <ShoppingCart className="w-6 h-6" />
              </Link>
              <Link href="/" className="p-2">
                <User className="w-6 h-6" />
              </Link>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-black"></span>
                <span className="block w-8 h-0.5 bg-black"></span>
                <span className="block w-8 h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/shop" className="hover:text-gray-600">Shop</Link>
                <Link href="/on-sale" className="hover:text-gray-600">On Sale</Link>
                <Link href="/new-arrivals" className="hover:text-gray-600">New Arrivals</Link>
                <Link href="/brands" className="hover:text-gray-600">Brands</Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

