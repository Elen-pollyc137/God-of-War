import Backstage from "../styles-page/home/Backstage";
import HeaderHero from "../styles-page/home/HeaderHero";
import NavBar from "../styles-page/home/NavBar";
import VideoReels from "../styles-page/home/VideoReels";
import Weapons from "../styles-page/home/Weapons";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderHero />
      <VideoReels />
      <Backstage />
      <Weapons />
    </>
  );
}
