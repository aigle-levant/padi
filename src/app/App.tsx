// common
import Navbar from "../shared/components/navbar";
import Footer from "../shared/components/footer";
import Hero from "../shared/components/hero";

export default function App() {
  return (
    <>
      <Navbar/>
      <main className="main">
        <Hero/>
      </main>
      <Footer/>
    </>
  );
}

