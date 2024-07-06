import ImageLoader from "../ImageLoader";
import "./index.css";

export default function Navigation() {
    return <div className="navigation">
        <ImageLoader className="left-logo" highResSrc={"/public/images_nav/logo.png"} />
        <div className="right-links">
            <p className="active-link">Home</p>
            <p className="link">Our Services</p>
            <p className="link">Influex Club</p>
        </div>
    </div>
}