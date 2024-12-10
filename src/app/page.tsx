import { TopSelling } from './TopSelling'
import { HeroSection } from './component/HeroSection'
import { NewArrivals } from './component/NewArrivals'
import BrowseByStyle from './component/BrowsedByStyle'
import { CustomerReviews } from './component/CustomerReview'

export default function Home() {
  return (
   <>
     <HeroSection />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <CustomerReviews />
    </>
  )
}


