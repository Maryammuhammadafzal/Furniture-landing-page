import CollectionPage from "./collection/page";
import StoryPage from "./story/page";
import FeaturedPage from "./feature/page";
import TestimonialPage from "./testimonial/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
   <div className="w-full h-auto overflow-hidden">
    <CollectionPage/>
    <StoryPage/>
    <FeaturedPage/>
    <TestimonialPage/>
    <ContactPage/>
   </div>
  );
}
