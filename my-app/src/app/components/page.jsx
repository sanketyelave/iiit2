import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Faq from "./Faq";


export default function Home() {
    return (

        <div className="div">
            <Navbar />
            <Hero />
            <Faq />
        </div>
    );
}
