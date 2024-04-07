import EmblaCarousel from "@/components/home/Hero";
import MenuSection from "@/components/home/MenuSection";
import Join from "@/components/home/Join";
import IconSection from "@/components/home/IconSection";
import Review from "@/components/home/Review";
// import VideoSection from "@/components/home/VideoSection";

export default function Home() {
  return (
    <>
      <EmblaCarousel />
      <IconSection />
      <Join />
      <MenuSection />
      {/* <VideoSection /> */}
      <Review />
    </>
  );
}
