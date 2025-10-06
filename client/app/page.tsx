import Main from "./components/main";
import Intro from "./components/intro";
import About from "./components/about";
import Featured from "./components/featured";

export default function Home() {
  return (
    <div className="">
      <main className="overflow-x-hidden">
        <Main />
        <Intro/>
        <About />
        <Featured />
      </main>
    </div>
  );
}
