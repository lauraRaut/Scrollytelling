import React from "react";
import SectionHeader from "../SectionHeader"
import "./style.css"

export default function Footer() {
    return <section className="footer">

        <SectionHeader title="Made in" />
        <h1 className="location" id="location-text">
            Rio de Janeiro
        </h1>
    </section>
}