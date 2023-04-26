import * as React from "react"
import Home from "../containers/Home"
import Header from "../components/Header"
import "../styles/home.css";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";



const IndexPage = () => {
  return (
    <main >
      <Home />
      <Header />
      <Featured />
      <About />
      <Gallery />
    </main>
  )
}

export default IndexPage


