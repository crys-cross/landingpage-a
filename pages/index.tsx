import Image from "next/image";
import styles from "../styles/Home.module.css";
import PopUpModal from "../components/PopUpModal";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="bg-black">
        <PopUpModal />
      </div>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Testimonials />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
