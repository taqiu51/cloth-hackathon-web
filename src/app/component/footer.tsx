import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-300 pt-24 mt-32 pb-6 relative">
      {/* Newsletter Section */}
      <div className="absolute top-0 left-0 right-0 -translate-y-2/3">
        <div className="container mx-auto px-4">
          <div className="bg-black rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-xl">
                STAY UP TO DATE ABOUT OUR LATEST OFFERS
              </h2>
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full md:w-80 px-12 py-4 rounded-full text-black"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button className="w-full md:w-auto bg-white text-black font-medium px-8 py-4 rounded-full mt-4 hover:bg-gray-100 transition-colors">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold block mb-4">
              SHOP.CO
            </Link>
            <p className="text-gray-600 mb-6">
              We have clothes that suits your style and which youre proud to wear. From women to men.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Image width={50} height={50} src="/asset/t.png" alt="Twitter" className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Image width={50} height={50} src="/asset/f.png" alt="Facebook" className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Image width={50} height={50}  src="/asset/i.png" alt="Instagram" className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Image width={50} height={50}  src="/asset/git.png" alt="Github" className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-black">About</Link></li>
              <li><Link href="/features" className="text-gray-600 hover:text-black">Features</Link></li>
              <li><Link href="/works" className="text-gray-600 hover:text-black">Works</Link></li>
              <li><Link href="/career" className="text-gray-600 hover:text-black">Career</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">HELP</h3>
            <ul className="space-y-3">
              <li><Link href="/support" className="text-gray-600 hover:text-black">Customer Support</Link></li>
              <li><Link href="/delivery" className="text-gray-600 hover:text-black">Delivery Details</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-black">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">FAQ</h3>
            <ul className="space-y-3">
              <li><Link href="/account" className="text-gray-600 hover:text-black">Account</Link></li>
              <li><Link href="/manage-deliveries" className="text-gray-600 hover:text-black">Manage Deliveries</Link></li>
              <li><Link href="/orders" className="text-gray-600 hover:text-black">Orders</Link></li>
              <li><Link href="/payments" className="text-gray-600 hover:text-black">Payments</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li><Link href="/ebooks" className="text-gray-600 hover:text-black">Free eBooks</Link></li>
              <li><Link href="/tutorial" className="text-gray-600 hover:text-black">Development Tutorial</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-black">How to - Blog</Link></li>
              <li><Link href="/youtube" className="text-gray-600 hover:text-black">Youtube Playlist</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center space-x-4">
              <Image width={50} height={50} src="/asset/v.png" alt="Visa" className="h-8" />
              <Image width={50} height={50} src="/asset/am.png" alt="Mastercard" className="h-8" />
              <Image width={50} height={50} src="/asset/pp.png" alt="PayPal" className="h-8" />
              <Image width={50} height={50} src="/asset/a.png" alt="Apple Pay" className="h-8" />
              <Image width={50} height={50} src="/asset/g.png" alt="Google Pay" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

