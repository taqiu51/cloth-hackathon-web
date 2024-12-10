'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  discount?: string
  rating: number
  image: string
  category: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/asset/gradient-tee.png",
    category: "T-shirts"
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/asset/polo-tee.png",
    category: "T-shirts"
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: "/asset/striped-tee.png",
    category: "T-shirts"
  },
  //new
  {
    id: 3,
    name: "Skinny Fit Jeans ",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: "/asset/skinny-jeans.png",
    category: "T-shirts"
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: "/asset/checkered-shirt.png",
    category: "T-shirts"
  },
  {
    id: 3,
    name: "Sleeve Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: "/asset/striped-tshirt.png",
    category: "T-shirts"
  },
  //new
  {
    id: 3,
    name: "Vertical Striped Shirt",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: "/asset/striped-shirt.png",
    category: "T-shirts"
  },
  {
    id: 3,
    name: "Courage Graphic T-shirt",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: "/asset/graphic-tshirt.png",
    category: "T-shirts"
  },
  {
    id: 3,
    name: "Loose Fit Bermuda Shorts",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: "/asset/bermuda-shorts.png",
    category: "T-shirts"
  },
  
  
  // Add more products as needed
]

export default function ShopPage() {
  const [selectedCategory] = useState<string>('Casual')
  const [priceRange, setPriceRange] = useState<number>(200)
  const [sortBy, setSortBy] = useState<string>('Most Popular')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <Link href="/" className="text-gray-600 hover:text-black">
          Home
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="font-medium">{selectedCategory}</span>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold">Filters</h2>
          </div>

          {/* Categories */}
          <div className="mb-6">
            {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((category) => (
              <button
                key={category}
                className="flex items-center justify-between w-full py-2 text-left hover:text-gray-900"
              >
                {category}
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4 flex items-center justify-between">
              Price
              <ChevronDown className="w-4 h-4" />
            </h3>
            <input
              type="range"
              min="50"
              max="200"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>${'50'}</span>
              <span>${priceRange}</span>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4 flex items-center justify-between">
              Colors
              <ChevronDown className="w-4 h-4" />
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {['bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-orange-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-white', 'bg-black'].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full ${color} border border-gray-200`}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4 flex items-center justify-between">
              Size
              <ChevronDown className="w-4 h-4" />
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Dress Style */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4 flex items-center justify-between">
              Dress Style
              <ChevronDown className="w-4 h-4" />
            </h3>
            {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
              <button
                key={style}
                className="flex items-center justify-between w-full py-2 text-left hover:text-gray-900"
              >
                {style}
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </div>

          <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900">
            Apply Filter
          </button>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">{selectedCategory}</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Showing 1-10 of 100 Products</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-3 py-2"
              >
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="bg-white rounded-lg overflow-hidden group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      {product.discount}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{product.rating}/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Previous</button>
            {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-lg ${
                  page === 1 ? 'bg-black text-white' : 'hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

