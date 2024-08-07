import { ArrowRight, Loader, LogIn, Play, Send, Star, X } from 'react-feather';
import './index.scss';
import ImageLoader from '../ImageLoader';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import brand_data from '../DB/brands_db.json';
import { getRequest, patchRequest } from '../../functions/requests';

export default function Home2({editable}) {

    const bottomRef = useRef(null);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [homeContent, setHomeContent] = useState([]);
    const [sectionOneTitle, setSectionOneTitle] = useState();
    const [sectionOneSubtitle, setSectionOneSubtitle] = useState();
    const [sectionOneDescription, setSectionOneDescription] = useState();
    const [requested, setRequested] = useState(0);
    const [regBrands, setRegBrands] = useState();
    const [regCreators, setRegCreators] = useState();

    useEffect(()=>{
        getRequest("/content/static/page?type=home")
            .then(e=>setHomeContent(e));
    }, [requested]);

    const [e, setE] = useState(null);

    useEffect(()=>{
        if(homeContent.length>0) {
            const data1 = JSON.parse(homeContent.filter((e)=>e.id===1)[0].page_content);
            setSectionOneTitle(data1.title);
            setSectionOneSubtitle(data1.subtitle);
            setSectionOneDescription(data1.description);
        };
        if(homeContent.length>0) {
            const data2 = JSON.parse(homeContent.filter((e)=>e.id===2)[0].page_content);
            setRegBrands(data2.reg_creator);
            setRegBrands(data2.reg_brand);
        }
    }, [homeContent]);

    if(homeContent.length<=0) {
        return <div className="load-ar">
            <Loader className="loader" />
        </div>
    }

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

    const handleUpdateSection = (index)=>{
        patchRequest("/content/update/page", {id: index, content: {"title": sectionOneTitle.replace(/'/g, ""), "subtitle": sectionOneSubtitle.replace(/'/g, ""), "description": sectionOneDescription.replace(/'/g, "")}})
            .then((e)=>e[0].changedRows!=0 ? alert("UPDATED SUCCESSFULLY") : null)
            .finally(()=>setRequested(requested + 1))
    };

    const handleUpdateSectionTwo = (index)=>{
        patchRequest("/content/update/page", {id: index, content: {"reg_brand": regBrands.replace(/'/g, ""), "reg_creator": regCreators.replace(/'/g, "")}})
            .then((e)=>e[0].changedRows!=0 ? alert("UPDATED SUCCESSFULLY") : null)
            .finally(()=>setRequested(requested + 1))
    };

    const handleUpdateSectionHide = (index, is_show)=>{
        patchRequest("/content/update/page/isHide", {id: index, is_show})
            .then((e)=>console.log(e))
            .finally(()=>setRequested(requested + 1))
    };

    return (
        <div className="home-two">
            {
                editable ? <div className="is-hide-nav">
                    {
                        homeContent.map((e, i)=>{
                            return <div key={i} className={homeContent.filter((ee)=>ee.id===e.id)[0].is_show ? "hide-btn on" : "hide-btn off"} onClick={()=>handleUpdateSectionHide(e.id, homeContent.filter((ee)=>ee.id===e.id)[0].is_show ? 0 : 1)}>Content {homeContent.filter((ee)=>ee.id===e.id)[0].is_show ? "Hide" : "Show"}</div>
                        })
                    }
                </div> : null
            }
            {homeContent.filter((e)=>e.id===1)[0].is_show ? <div className="first-box">
                <div className="left">
                    <div onBlur={()=>handleUpdateSection(homeContent.filter((e)=>e.id===1)[0].id)} onInput={(e)=>setSectionOneTitle(e.target.innerText)} className={editable ? "heading editable" : 'heading'} contentEditable={editable}>{JSON.parse(homeContent.filter((e)=>e.id===1)[0].page_content).title}</div>
                    <div onBlur={()=>handleUpdateSection(homeContent.filter((e)=>e.id===1)[0].id)} onInput={(e)=>setSectionOneSubtitle(e.target.innerText)} className={editable ? "subheading editable" : "subheading"} contentEditable={editable}>{JSON.parse(homeContent.filter((e)=>e.id===1)[0].page_content).subtitle}</div>
                    <div onBlur={()=>handleUpdateSection(homeContent.filter((e)=>e.id===1)[0].id)} onInput={(e)=>setSectionOneDescription(e.target.innerText)} className={editable ? "small-content editable" : "small-content"} contentEditable={editable}>{JSON.parse(homeContent.filter((e)=>e.id===1)[0].page_content).description}</div>
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
            </div> : null}
            {homeContent.filter((e)=>e.id===2)[0].is_show ? <div className="black-section">
                Registered Brands <div className={editable ? "highlight-text editable" : "highlight-text"} contentEditable={editable} onBlur={()=>handleUpdateSectionTwo(homeContent.filter((e)=>e.id===2)[0].id)} onInput={(e)=>setRegBrands(e.target.innerText)}>{JSON.parse(homeContent.filter((e)=>e.id===2)[0].page_content).reg_brand}</div> & Registered Creators <div className={editable ? "highlight-text editable" : "highlight-text"} contentEditable={editable} onBlur={()=>handleUpdateSectionTwo(homeContent.filter((e)=>e.id===2)[0].id)} onInput={(e)=>setRegCreators(e.target.innerText)}>{JSON.parse(homeContent.filter((e)=>e.id===2)[0].page_content).reg_creator}</div>
            </div> : null}
            {homeContent.filter((e)=>e.id===3)[0].is_show ? <div className="second-box">
                {
                    JSON.parse(homeContent.filter((e)=>e.id===3)[0].page_content).map((e, i)=>{
                        return <div className="inner-row">
                            <div className="left">
                                <div className="heading">{e.title}</div>
                                <div className="small-content">{e.subtitle}</div>
                                <Link to={e.link} className='link'>Start learning <ArrowRight size={20} /></Link>
                            </div>
                            <div className="right">
                                <div className="image-loader-ar" key={i}>
                                    <Play className="icon" />
                                    <ImageLoader className="image" lowResSrc={"./src/assets/images/" + `c${5 + i}.avif`} highResSrc={"./src/assets/images/" + e.image} />
                                </div>
                            </div>
                        </div>
                    })
                }
            </div> : null}
            {e!==null && <div className="brand-data" onClick={()=>setE(null)}>
                <ImageLoader animate={true} className="brand-data-image" lowResSrc={e.Logo} highResSrc={e.Logo} />
                <div className="brand-data-name">{e['Company Name']}</div>
                <div className="brand-data-type">{e.Industry}</div>
                <div className="brand-data-location">{e.Headquarters}</div>
                <div className="hint">Click again for close this window</div>
            </div>}
            {homeContent.filter((e)=>e.id===4)[0].is_show ? <div className="white-section">
                <div className="title">{JSON.parse(homeContent.filter((e)=>e.id===4)[0].page_content).title}</div>
                <div className="brands">
                    {
                        brand_data.map((e, i) => {
                            return <div className="brand" key={i} onClick={()=>setE(e)}>
                                <ImageLoader animate={true} className="brand-image" lowResSrc={e.Logo} highResSrc={e.Logo} />
                            </div>
                        })
                    }
                </div>
            </div> : null}
            {homeContent.filter((e)=>e.id===5)[0].is_show ? <div className="third-box">
                <div className="title">{JSON.parse(homeContent.filter((e)=>e.id===5)[0].page_content).title}</div>
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
            </div> : null}
            {homeContent.filter((e)=>e.id===6)[0].is_show ? <div className="fourth-box">
                <div className="title">{JSON.parse(homeContent.filter((e)=>e.id===6)[0].page_content).title}</div>
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
            </div> : null}
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