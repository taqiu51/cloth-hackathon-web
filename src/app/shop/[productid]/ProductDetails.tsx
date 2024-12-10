'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Minus, Plus } from 'lucide-react'

export function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState<string>('olive')
  const [selectedSize, setSelectedSize] = useState<string>('Large')
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  const handleAddToCart = () => {
    // Add to cart logic here
    router.push('/cart')
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex text-yellow-400">
          {"★".repeat(4)}{"☆".repeat(1)}
        </div>
        <span className="text-sm">4.5/5</span>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-2xl font-bold">$260</span>
        <span className="text-xl text-gray-500 line-through">$300</span>
        <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-sm">-40%</span>
      </div>
      <p className="text-gray-600 mb-8">
        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
      </p>

      {/* Color Selection */}
      <div className="mb-6">
        <h3 className="font-medium mb-4">Select Colors</h3>
        <div className="flex gap-3">
          {['olive', 'forest', 'navy'].map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full border-2 ${
                selectedColor === color ? 'border-black' : 'border-transparent'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-6">
        <h3 className="font-medium mb-4">Choose Size</h3>
        <div className="flex gap-3">
          {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-lg ${
                selectedSize === size
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex gap-4">
        <div className="flex items-center border rounded-lg">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="p-3 hover:bg-gray-100"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-gray-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-black text-white rounded-full hover:bg-gray-900"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

