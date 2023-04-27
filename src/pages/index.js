import * as React from "react"
import Home from "../containers/Home"
import Header from "../components/Header"
import "../styles/home.css";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { CustomCursor } from "../components/CustomCursor";


const IndexPage = () => {
  return (
    <main >
      <CustomCursor />
      <Home />
      <Header />
      <Featured />
      <About />
      <Gallery />
      <Footer />
    </main>
  )
}

export default IndexPage


