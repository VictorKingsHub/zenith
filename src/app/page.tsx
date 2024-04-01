import EmblaCarousel from "@/components/home/Hero";
import Hero from "@/components/home/Hero";
import IconSection from "@/components/home/iconSection";
import LocationMap from "@/components/home/locationMap";
import MenuSection from "@/components/home/menuSection";
import MenuTry from "@/components/home/menuTry";
import Review from "@/components/home/review";

export default function Home() {
  return (
    <>
    {/* <Hero /> */}
    <EmblaCarousel />
    <IconSection />
    {/* <MenuTry /> */}
    <MenuSection />
    <Review />
    <LocationMap />
    </>
  );
}
