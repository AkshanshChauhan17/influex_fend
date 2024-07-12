import { Link, useLocation } from "react-router-dom";
import ImageLoader from "../ImageLoader";
import "./index.scss";
import ScrollPercentage from "../ScrollingPercentage";
import { useEffect, useState } from "react";
import { Wifi, WifiOff } from "react-feather";

export default function Navigation() {
    const [hide, setHide] = useState(true);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const location = useLocation();

    useEffect(() => {

        const updateOnlineStatus = () => {
          setIsOnline(navigator.onLine);
        };
    
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    
        return () => {
          window.removeEventListener('online', updateOnlineStatus);
          window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    return <div className={hide ? "navigation-hidden" : "navigation"}>
        <ImageLoader className="left-logo" lowResSrc={"./src/assets/logo-low.png"} highResSrc={"./src/assets/logo-high.png"} />
        <ScrollPercentage shDef={setHide} />
        <div className="right-links">
            <Link to={"/"} className={location.pathname==="/" ? "active-link" : "link"}>Home</Link>
            <Link to={"/our services"} className={location.pathname==="/our%20services" ? "active-link" : "link"}>Our Services</Link>
            <Link to={"/"} className={location.pathname==="/" ? "active-link" : "link"}>Influex Club</Link>
            {
                isOnline ? <div className="online"><Wifi />Online</div>
                : <div className="offline"><WifiOff />Offline</div>
            }
        </div>
    </div>
}