import Image from "next/image";
import { Navbar } from "../components/navbar.js";
import { Header } from "../components/header.js";

export default function Home() {
  return (
    <section className="bg-[#d9d9d9] h-screen">
      <Navbar />
      <Header />
    </section>
  );
}
