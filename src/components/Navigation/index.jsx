import { Link } from "react-router-dom";
import ImageLoader from "../ImageLoader";
import "./index.scss";
import ScrollPercentage from "../ScrollingPercentage";
import { useState } from "react";

export default function Navigation() {
    const [hide, setHide] = useState(true);
    return <div className={hide ? "navigation-hidden" : "navigation"}>
        <ImageLoader className="left-logo" lowResSrc={"./assets/logo-low.png"} highResSrc={"./assets/logo-high.png"} />
        <ScrollPercentage shDef={setHide} />
        <div className="right-links">
            <Link className="active-link">Home</Link>
            <Link className="link">Our Services</Link>
            <Link className="link">Influex Club</Link>
        </div>
    </div>
}