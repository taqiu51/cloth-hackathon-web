import Image from "next/image";
import Link from "next/link";
interface Product {
    name: string;
    price: string;
    rating: number;
    image: string;
    discountPrice?: string;
    discount?: string;
  }
  
  const newArrivals: Product[] = [
    { name: "T-shirt with Tape Details", price: "$120", rating: 4.5, image: "/asset/tape-tshirt.png" },
    { name: "Skinny Fit Jeans", price: "$240", discountPrice: "$260", discount: "20%", rating: 3.5, image: "/asset/skinny-jeans.png" },
    { name: "Checkered Shirt", price: "$180", rating: 4.5, image: "/asset/checkered-shirt.png" },
    { name: "Sleeve Striped T-shirt", price: "$130", discountPrice: "$160", discount: "30%", rating: 4.5, image: "/asset/striped-tshirt.png" },
  ];
  
  export function NewArrivals() {
    return (
      <div className="py-12 px-4 md:px-16 lg:px-32">
        <h2 className="text-3xl font-bold mb-6">NEW ARRIVALS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
              <Link href="/shop">
              <Image width={50} height={50} src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              </Link>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 text-sm">{"⭐".repeat(Math.round(item.rating))}</span>
                <span className="text-gray-500 text-sm ml-2">{item.rating}/5</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold">{item.price}</span>
                {item.discountPrice && <span className="text-gray-500 line-through">{item.discountPrice}</span>}
                {item.discount && <span className="text-red-500 text-sm">{item.discount}</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="/shop" className="bg-black text-white px-6 py-3 rounded-full text-lg">View All</a>
        </div>
      </div>
    );
  }
  