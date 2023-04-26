import React from "react";
import "./style.css"
import photos from "../../utils/data"

export default function Featured() {
    const [firstUrl, secondUrl] = photos;
    return (
        <section className="featured-section" >
            <div className="featured-row-layout">
                <h6 className="first-h6">Suurikokoinen nainen Barsokevitsch, Victor, 1902 Kuopion kulttuurihistoriallinen museo, finna.fi
                </h6>
                <img className="first-image" src={firstUrl} />
            </div>
            <div className="featured-column-layout">
                <h6 className="second-h6">Torikauppaa Lappeenrannassa; Vihanneskauppias ja asiakkaita Lappeenrannan kauppatorilla
                    Uusi-Honko, Matti, valokuvaaja 1967–1968</h6>
                <img className="second-image" src={secondUrl} />
            </div>
        </section>
    )
}