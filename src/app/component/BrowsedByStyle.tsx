import Image from "next/image"
import Link from "next/link"

export default function BrowseByStyle() {
  const styles = [
    {
      name: "Casual",
      image: "/asset/1.png",
      href: "/shop"
    },
    {
      name: "Formal",
      image: "/images/p1.png",
      href: "/shop"
    },
    {
      name: "Party",
      image: "/images/p1.png",
      href: "/shop"
    },
    {
      name: "Gym",
      image: "/images/p1.png",
      href: "shop"
    }
  ]

  return (
    <div className="bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-4xl font-bold tracking-tight">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-10 gap-4">
            <Link href={styles[0].href} className="col-span-3 relative overflow-hidden rounded-lg bg-white">
              <Image
                src={"/asset/p1.png"}
                alt={`${styles[0].name} style clothing`}
                className="h-full w-full object-cover"
                width={300}
                height={300}
              />
              <div className="absolute left-4 top-4">
                <h3 className="text-2xl font-medium text-black">{styles[0].name}</h3>
              </div>
            </Link>
            <Link href={styles[1].href} className="col-span-7 relative overflow-hidden rounded-lg bg-white">
              <Image
                src={"/asset/formal.png"}
                alt={`${styles[1].name} style clothing`}
                className="h-full w-full object-cover"
                width={700}
                height={300}
              />
              <div className="absolute left-4 top-4">
                <h3 className="text-2xl font-medium text-black">{styles[1].name}</h3>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-10 gap-4">
            <Link href={styles[2].href} className="col-span-7 relative overflow-hidden rounded-lg bg-white">
              <Image
                src={"/asset/party.png"}
                alt={`${styles[2].name} style clothing`}
                className="h-full w-full object-cover"
                width={700}
                height={300}
              />
              <div className="absolute left-4 top-4">
                <h3 className="text-2xl font-medium text-black">{styles[2].name}</h3>
              </div>
            </Link>
            <Link href={styles[3].href} className="col-span-3 relative overflow-hidden rounded-lg bg-white">
              <Image
                src={"/asset/gym.png"}
                alt={`${styles[3].name} style clothing`}
                className="h-full w-full object-cover"
                width={300}
                height={300}
              />
              <div className="absolute left-4 top-4">
                <h3 className="text-2xl font-medium text-black">{styles[3].name}</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

