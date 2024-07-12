import { ArrowRight, LogIn, Play, Send, Star, X } from 'react-feather';
import './index.scss';
import ImageLoader from '../ImageLoader';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import brand_data from '../DB/brands_db.json';

export default function Home2() {

    const bottomRef = useRef(null);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const [e, setE] = useState(null);

    const box_one_right_content = ["c1.avif", "c2.avif", "c3.jpg", "c4.avif"];
    const box_two_content = [
        {
            title: "How to Create Engaging UGC Videos",
            content: "Creating engaging User-Generated Content (UGC) videos is key to building a loyal audience and attracting brand collaborations. Here are some tips to help you craft compelling videos",
            image: "c5.avif",
            link: "/tutorial/tu_1"
        }, 
        {
            title: "Maximizing Brand Collaborations on InflueX",
            content: "Collaborating with brands can be a lucrative opportunity for creators on InflueX. Here’s how you can maximize these collaborations",
            image: "c6.avif",
            link: "/tutorial/tu_2"
        }
    ];
    const fourth_box_card_data = [{
        image: "user1.avif",
        rating: 4.54,
        name: "Creator X",
        about: "20M followers on instagram!"
    },{
        image: "user2.avif",
        rating: 4.95,
        name: "Creator Y",
        about: "35M followers on instagram!"
    },{
        image: "user3.avif",
        rating: 4.76,
        name: "Creator Z",
        about: "12M followers on instagram!"
    }];

    const register_login_data = [{
        title: "Login with Creator",
        subtitle: "Ready to collaborate and showcase your creativity? Log in to your creator account to access exclusive brand collaborations, manage your projects, and connect with a community of like-minded creators.",
        url: ["/login/creator", "/inf-registration"]
    },{
        title: "Login with Brand",
        subtitle: "Unlock the potential of creator collaborations and user-generated content for your brand. Log in to your brand account to discover talented creators, manage your campaigns, and analyze performance.",
        url: ["/login/brand", "/bnd-registration"]
    }];
    return (
        <div className="home-two">
            <div className="first-box">
                <div className="left">
                    <div className='heading'>Welcome to InflueX</div>
                    <div className="subheading">Elevate Your Brand with Authentic UGC Videos and Powerful Creator Collaborations</div>
                    <div className="small-content">In today's digital age, authenticity is the key to connecting with your audience. At InflueX, we specialize in harnessing the power of User-Generated Content (UGC) and creator collaborations to elevate your brand's presence and engagement.</div>
                    <div className="hollow-button" onClick={()=>setIsLoginOpen(true)}><LogIn />Login</div>
                </div>
                <div className="right">
                    {
                        box_one_right_content.map((e, i)=>{
                            return <div className="image-loader-ar" key={i}>
                                <Play className="icon" />
                                <ImageLoader className="image" lowResSrc={"./src/assets/images/" + e} highResSrc={"./src/assets/images/" + e} />
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="black-section">
                Registered Brands <div className="highlight-text">+2000</div> & Registered Creators <div className="highlight-text">+5000</div>
            </div>
            <div className="second-box">
                {
                    box_two_content.map((e, i)=>{
                        return <div className="inner-row">
                            <div className="left">
                                <div className="heading">{e.title}</div>
                                <div className="small-content">{e.content}</div>
                                <Link to={e.link} className='link'>Start learning <ArrowRight size={20} /></Link>
                            </div>
                            <div className="right">
                                <div className="image-loader-ar" key={i}>
                                    <Play className="icon" />
                                    <ImageLoader className="image" lowResSrc={"./src/assets/images/" + e.image} highResSrc={"./src/assets/images/" + e.image} />
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            {e!==null && <div className="brand-data" onClick={()=>setE(null)}>
                <ImageLoader animate={true} className="brand-data-image" lowResSrc={e.Logo} highResSrc={e.Logo} />
                <div className="brand-data-name">{e['Company Name']}</div>
                <div className="brand-data-type">{e.Industry}</div>
                <div className="brand-data-location">{e.Headquarters}</div>
                <div className="hint">Click again for close this window</div>
            </div>}
            <div className="white-section">
                <div className="title">Our Collaboration Brands</div>
                <div className="brands">
                    {
                        brand_data.map((e, i) => {
                            return <div className="brand" key={i} onClick={()=>setE(e)}>
                                <ImageLoader animate={true} className="brand-image" lowResSrc={e.Logo} highResSrc={e.Logo} />
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="third-box">
                <div className="title">Fancy UGC that does convert</div>
                <div className="bottom" ref={bottomRef}>
                    <div className="bottom-inner-line">
                    {
                        box_one_right_content.map((e, i)=>{
                            return <div className="image-loader-ar" key={i}>
                                <Play className="icon" />
                                <ImageLoader className="image" lowResSrc={"./src/assets/images/" + e} highResSrc={"./src/assets/images/" + e} />
                            </div>
                        })
                    }
                    </div>
                    <div className="bottom-inner-line">
                    {
                        box_one_right_content.map((e, i)=>{
                            return <div className="image-loader-ar" key={i}>
                                <Play className="icon" />
                                <ImageLoader className="image" lowResSrc={"./src/assets/images/" + e} highResSrc={"./src/assets/images/" + e} />
                            </div>
                        })
                    }
                    </div>
                    <div className="bottom-inner-line">
                    {
                        box_one_right_content.map((e, i)=>{
                            return <div className="image-loader-ar" key={i}>
                                <Play className="icon" />
                                <ImageLoader className="image" lowResSrc={"./src/assets/images/" + e} highResSrc={"./src/assets/images/" + e} />
                            </div>
                        })
                    }
                    </div>
                </div>
                <div className='primary-button'>See Example UGCs <ArrowRight /></div>
            </div>
            <div className="fourth-box">
                <div className="title">Testimonial</div>
                <div className="cards-ar">
                    {
                        fourth_box_card_data.map((e, i)=>{
                            return <div className="card" key={i}>
                                <ImageLoader className="card-image" lowResSrc={"./src/assets/images/" + e.image} highResSrc={"./src/assets/images/" + e.image} />
                                <div className="card-rating">
                                    <Star strokeWidth={0} fill={i===1 ? 'black' : 'rgb(0, 204, 255)'}/>{e.rating}
                                </div>
                                <div className="card-name">{e.name}</div>
                                <div className="card-about">{e.about}</div>
                            </div>
                        })
                    }
                </div>
                <Link to="/creators" className='link'>Explore creators <ArrowRight size={20} /></Link>
            </div>
            {isLoginOpen && <div className="fifth-box">
                <div className="title">
                    <>Login | Register</>
                    <X className='close' size={40} onClick={()=>setIsLoginOpen(false)} />
                </div>
                <div className="login-reg-section">
                    {
                        register_login_data.map((e, i)=>{
                            return <div className="login-reg" key={i}>
                                <div className="title">{e.title}</div>
                                <div className="subtitle">{e.subtitle}</div>
                                <div className="links">
                                    <Link className="link" to={"/login"}>Login</Link>
                                    <Link className="link-two" to={e.url[1]}>Register</Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>}
        </div>
    )
}