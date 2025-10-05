import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import Intro from "./components/intro";
import About from "./components/about";
import Featured from "./components/featured";

export default function Home() {
  return (
    <div className="">
        <Navbar/>
      <main className="overflow-x-hidden">
        <Main />
        <Intro/>
        <About />
        <Featured />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
