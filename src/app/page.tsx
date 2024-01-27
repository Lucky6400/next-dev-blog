import { Header } from "@/components/Common/Header";
import About from "@/components/Home/About";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Featured />
    </>
  );
}
