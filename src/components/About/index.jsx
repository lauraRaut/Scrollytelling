import React from "react";
import "./style.css"
import SectionHeader from "../SectionHeader";

export default function About() {
    return <section className={"about-section"}>
        <SectionHeader title="About" />
        <p id="headline">
            Quisque et nulla urna. Aenean et volutpat leo. Curabitur in facilisis orci. Etiam accumsan, lorem at feugiat lobortis, purus eros dignissim nunc, et semper ligula arcu vitae tortor. Aliquam auctor leo eu orci dictum, sit amet dignissim urna dictum. Nulla eu sagittis orci, et fermentum dui.
        </p>
    </section>
}