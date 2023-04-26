import React from "react";
import "./style.css";
import { useState } from "react";

const images = [
    {
        src: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.257908E559F75381B06530178D45EAE4&index=0&size=large",
        title: "Laajisto Keijo, Finna.fi",
        subtitle: "Turun Rockfestivaali 20.-22.8.1971"


    },
    {
        src: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.412121BCDE18C70AB1758419B89AB800&index=0&size=large",
        title: "Sirelius, U. T.,1898",
        subtitle: "Hantinaisia, Museovirasto, Finna.fi"

    },
    {
        src: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.257908E559F75381B06530178D45EAE4&index=0&size=large",
        title: "Laajisto Keijo, Finna.fi",
        subtitle: "Turun Rockfestivaali 20.-22.8.1971"


    },

];


function GalleryItem({ src, category, subtitle, title, updateActiveImage, index }) {
    return (<div className="gallery-item-wrapper">
        <div />
        <div className="gallery-item">
            <div className="gallery-item-info">
                <h1 className="gallery-info-title">{title}</h1>
                <h6 className="gallery-info-subtitle">{subtitle}</h6>
                <p className="gallery-info-category">{category}</p>
            </div>
            <div className="gallery-item-image"
                style={{
                    backgroundImage: `url(${src
                        })`
                }}>

            </div>
        </div>
        <div />
    </div>
    );
}

export default function Gallery() {
    const [activeImage, setActiveImage] = useState(1);
    return <section className="section-wrapper gallery-wrap">

        <div className="gallery">
            <div className="gallery-counter">
                <span>{activeImage}</span>
                <span className="divider"></span>
                <span>{images.length}</span>
            </div>

            {images.map((image, index) => (
                <GalleryItem

                    key={image.src}
                    index={index}
                    {...image}
                    updateActiveImage={(index) => setActiveImage(index + 1)}
                />
            )
            )}
        </div>
    </section>
}