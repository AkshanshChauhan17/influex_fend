import { Link } from "react-router-dom";
import ImageLoader from "../ImageLoader";
import "./index.css";

export default function Home({logOpenFun}) {

    const brand_schems = [
        {
            image: "/public/images_home/x_1.png",
            title: <>CONCEPT <br /> DEVELOPMENT</>,
            subtitle: "Create impactful video ad strategies."
        },
        {
            image: "/public/images_home/x_2.png",
            title: <>INFLUENCER<br />COLLABORATION</>,
            subtitle: "Connect with influencer to promote your brand."
        },
        {
            image: "/public/images_home/x_3.png",
            title: <>VIDEO<br />PRODUCTION</>,
            subtitle: "High-quality UGC content creation."
        },
        {
            image: "/public/images_home/x_4.png",
            title: <>AI<br />BRANDING</>,
            subtitle: "Use AI for video and social media brand identity."
        }
    ]
    return(
        <div className="home">
            <div className="home-section">
                <ImageLoader className="left-home" animate={true} lowResSrc={"/public/images_home/inf_background.png"} highResSrc={"/public/images_home/inf_background.png"} alt={"inf image bg"} />
                <div className="right-home">
                    <h1>INFLUENCE THE FUTURE<br />JOIN US TODAY</h1>
                    <p>Become a professional influencer Join <span className="highlight">InfluX Club</span> and access expert courses and resources to secure brand deals and paid gigs.</p>
                    <div className="home-action-buttons-ar">
                        <Link to={"/bnd-registration"} className="action-button">I AM A BRAND</Link>
                        <Link to={"/inf-registration"} className="action-button">I AM AN INFLUENCER</Link>
                    </div>
                </div>
            </div>
            {/* <div className="scrolling-ribbon-section">
                <div className="top-ribbon">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                <div className="down-ribbon">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
            </div> */}
            <div className="scrolling-text-container t">
                <div className="scrolling-text-inner" style={{"--marquee-speed": "60s", "--direction": "scroll-left"}} role="marquee">
                    <div className="scrolling-text">
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                    </div>
                    <div className="scrolling-text">
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                    </div>
                </div>
            </div>
            <div className="scrolling-text-container d">
                <div className="scrolling-text-inner" style={{"--marquee-speed": "60s", "--direction": "scroll-right"}} role="marquee">
                    <div className="scrolling-text">
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                    </div>
                    <div className="scrolling-text">
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                    </div>
                </div>
            </div>
            <div className="section">
                <h2>WHAT WE DO FOR BRANDS</h2>
                <div className="section-inner">
                    {
                        brand_schems.map((e, i)=>{
                            return <div className="section-inner-part" key={i}>
                                <ImageLoader className="icon" highResSrc={e.image} lowResSrc={e.image} alt={"jd"}></ImageLoader>
                                <h3>{e.title}</h3>
                                <summary>{e.subtitle}</summary>
                            </div>
                        })
                    }
                </div>
                <button className="action-button" onClick={()=>logOpenFun(true)}>Sign-in already registered!</button>
            </div>
            <div className="twd-section">
                <ImageLoader className="twd-left" lowResSrc={"/public/images_home/inf_group.png"} highResSrc={"/public/images_home/inf_group.png"} alt={"inf image bg"} />
                <div className="twd-right">
                    <h6 className="twd-right-head">THIS IS HOW WE DO IT!</h6>
                    <p className="twd-right-subhead">If you want hight-quality converting videos or want to learn how to create amazing content, join us!</p>
                    <br />
                    <div className="button-ar-h">
                        <Link to={"/bnd-registration"}><button className="btn-21"><span>I AM A BRAND</span></button></Link>
                        <Link to={"/inf-registration"}><button className="btn-21 line"><span>I AM AN INFLUENCER</span></button></Link>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            {/* <div className="scrolling-ribbon-section">
                <p className="top-ribbon">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</p>
                <p className="down-ribbon">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</p>
            </div> */}
            <div className="scrolling-text-container">
                <div className="scrolling-text-inner" style={{"--marquee-speed": "60s", "--direction": "scroll-left"}} role="marquee">
                    <div className="scrolling-text">
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                    </div>
                    <div className="scrolling-text">
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                        <div className="scrolling-text-item">Influencer Collaboration - Get High Quality UGC Videos - Improve Brand Awareness</div>
                    </div>
                </div>
            </div>
        </div>
    )
}