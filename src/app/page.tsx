import Image from "next/image";
import CollectionPage from "./collection/page";
import StoryPage from "./story/page";

export default function Home() {
  return (
   <div className="w-full h-auto overflow-hidden">
    <CollectionPage/>
    <StoryPage/>
   </div>
  );
}
