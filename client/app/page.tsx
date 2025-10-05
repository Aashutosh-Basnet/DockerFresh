import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import Intro from "./components/intro";
import About from "./components/about";
import Featured from "./components/featured";
import SmallNavbar from "./components/smallNavbar";

export default function Home() {
  return (
    <div className="">
        <Navbar/>
        <SmallNavbar/>
      <main className="overflow-x-hidden">
        <Main />
        <Intro/>
        <About />
        <Featured />
      </main>
        <Footer />
    </div>
  );
}
