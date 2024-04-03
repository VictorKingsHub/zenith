import EmblaCarousel from "@/components/home/Hero";
import HomeMenu from "@/components/home/HomeMenu";
import Join from "@/components/home/Join";
import IconSection from "@/components/home/iconSection";
import LocationMap from "@/components/home/locationMap";
import MenuSection from "@/components/home/menuSection";
import Review from "@/components/home/review";
import VideoSection from "@/components/home/videoSection";

export default function Home() {
  return (
    <>
      <EmblaCarousel />
      <IconSection />
      <Join />
      <HomeMenu />
      {/* <MenuSection /> */}
      <VideoSection />
      <Review />
    </>
  );
}
