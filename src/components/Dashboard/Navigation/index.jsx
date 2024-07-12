import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { nav_links } from "../layout/navigation";
import { ChevronLeft, ChevronRight, ChevronsLeft, LogOut, Menu } from "react-feather";

export default function DashNavigation({ld}) {
    const [active, setActive] = useState(1);
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const isFocused = (path)=> location.pathname === path;

    const handleLogout = ()=>{
        localStorage.clear();
        window.location.href = "/";
        window.location.reload();
    };

    return (
        <div className={menuOpen ? "dash-nav rollin" : "dash-nav"}>
            <div className="nav-title-ar">
                <div className="primary-text">INFLUEX</div>
                <div className="secondary-text">{ld && ld.profile.type.toUpperCase()} DASHBOARD</div>
            </div>
            {menuOpen ? <ChevronRight onClick={()=>setMenuOpen(false)} className="nav-puller" /> : <ChevronLeft onClick={()=>setMenuOpen(true)} className="nav-puller" />}
            <hr className="fade-70" />
            <div className="nav-links">
                {
                    nav_links.map((e, i)=>{
                        return <NavLink to={e.link} className={isFocused(e.link) ? "active-nav-link" : "nav-link"} onClick={()=>setActive(i + 1)} key={i}>{e.icon} {e.title}</NavLink>
                    })
                }
            </div>
            <div className="bottom-controls">
                <button className="nav-control-btn" onClick={()=>handleLogout()}><LogOut style={{rotate: "180deg"}} size={16} strokeWidth={3} />Logout</button>
            </div>
        </div>
    )
}