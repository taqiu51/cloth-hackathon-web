import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { ProductDetails } from './ProductDetails'

interface Review {
  id: number
  author: string
  rating: number
  date: string
  content: string
  isVerified: boolean
}

interface RelatedProduct {
  id: number
  name: string
  price: number
  originalPrice?: number
  discount?: string
  rating: number
  image: string
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Samantha D.",
    rating: 4.5,
    date: "Posted on August 14, 2023",
    content: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    isVerified: true
  },
  {
    id: 2,
    author: "Alex M.",
    rating: 5,
    date: "Posted on August 15, 2023",
    content: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    isVerified: true
  },
  // Add more reviews as needed
]

const relatedProducts: RelatedProduct[] = [
  {
    id: 1,
    name: "Polo with Contrast Trims",
    price: 212,
    originalPrice: 242,
    discount: "-20%",
    rating: 4.0,
    image: "/asset/polo-contrast.png"
  },
  {
    id: 2,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/asset/gradient-tee.png"
  },
  {
    id: 3,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/asset/polo-tee.png"
  },
  {
    id: 4,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: "/asset/striped-tee.png"
  }
]

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/shop" className="text-gray-600 hover:text-black">Shop</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/shop/men" className="text-gray-600 hover:text-black">Men</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="font-medium">T-shirts</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
       
        {/* Product Images */}
        <div className="flex gap-4">
  <div className="flex flex-col gap-4">
    {['tshirt-thumb.png', 'sherf.png', 'image 6.png'].map((src, index) => (
      <button key={index} className="w-20 h-20 border rounded-lg overflow-hidden">
        <Image
          src={`/asset/${src}`}
          alt={`Thumbnail ${index + 1}`}
          width={100}
          height={200}
          className="object-cover"
        />
      </button>
    ))}
  </div>
  <div className="flex-1 aspect-square relative rounded-lg overflow-hidden bg-gray-100">
    <Image
      src="/asset/tshirt-main.png"
      alt="Main image"
      fill
      className="object-cover"
    />
  </div>
</div>


        {/* Product Info */}
        <ProductDetails />
      </div>

      {/* Reviews Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">All Reviews (451)</h2>
          <div className="flex items-center gap-4">
            <select className="border rounded-lg px-4 py-2">
              <option>Latest</option>
              <option>Highest Rating</option>
              <option>Lowest Rating</option>
            </select>
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900">
              Write a Review
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{review.author}</span>
                    {review.isVerified && (
                      <span className="text-green-500 text-sm">✓ Verified</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(review.rating))}
                      {"☆".repeat(5 - Math.floor(review.rating))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                </button>
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>

        <button className="w-full py-4 border rounded-lg mt-8 hover:bg-gray-50">
          Load More Reviews
        </button>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-8">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="group"
            >
              <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100 mb-4">
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
              <h3 className="font-medium mb-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-sm text-gray-600">{product.rating}/5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

