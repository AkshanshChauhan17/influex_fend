import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { nav_links } from "../layout/navigation";
import { LogOut } from "react-feather";

export default function DashNavigation() {
    const [active, setActive] = useState(1);
    const location = useLocation();
    const isFocused = (path)=> location.pathname === path;

    const handleLogout = ()=>{
        localStorage.clear();
        window.location.href = "/";
        window.location.reload();
    };

    return (
        <div className="dash-nav">
            <div className="nav-title-ar">
                <div className="primary-text">INFLUEX</div>
                <div className="secondary-text">CREATOR DASHBOARD</div>
            </div>
            <hr className="fade-70" />
            <div className="nav-links">
                {
                    nav_links.map((e, i)=>{
                        return <NavLink to={e.link} className={isFocused(e.link) ? "active-nav-link" : "nav-link"} onClick={()=>setActive(i + 1)} key={i}>{e.icon} {e.title}</NavLink>
                    })
                }
            </div>
            <div className="bottom-controls">
                <button className="nav-control-btn" onClick={()=>handleLogout()}>Logout <LogOut size={16} strokeWidth={3} /></button>
            </div>
        </div>
    )
}