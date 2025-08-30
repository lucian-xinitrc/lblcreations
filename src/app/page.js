import Image from "next/image";
import { Navbar } from "../components/navbar.js";
import { Header } from "../components/header.js";
import { Benefits, About, Contact, Preview } from "../components/main.js";
import { Footer } from "../components/footer.js";

export default function Home() {
  return (
    <section className="dark:bg-[#d9d9d9] bg-white h-screen">
      <Navbar />
      <Header />
      <Benefits />
      <About/>
      <Preview />
      <Contact />
      <Footer />
    </section>
  );
}
