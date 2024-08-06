import { useEffect, useRef, useState } from "react"
import ImageLoader from "../ImageLoader";
import { API_BASE_URL, deleteRequest, getRequest, postRequest } from "../../functions/requests";
import { ArrowRight, Loader, Lock, Search, Video, Watch, X } from "react-feather";
import "./index.scss";
import { Link } from "react-router-dom";

export default function Courses({ld}) {
    const [allVideosData, setAllVideosData] = useState([]);
    const [newArriveData, setNewArriveData] = useState([]);
    const [videoPlayed, setVideoPlayed] = useState();
    const [removed, setRemoved] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [SelectedFilter, setSelectedFilter] = useState("None");
    const [isCourseRequested, setIsCourseRequested] = useState(false);
    const [selectedCourseDt, setSelectedCourseDt] = useState({});
    const [reqLoad, setReqLoad] = useState(false);
    const [checkStatus, setCheckStatue] = useState(false);

    const [controlEvents, setControlEvents] = useState({
        play: false,
        pause: false
    })

    const videoRef = useRef(null);

    useEffect(() => {
        setFilteredData(
          allVideosData.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
    }, [searchQuery, allVideosData]);

    const handleRemoveVideo = (id)=> {
        deleteRequest("/content/" + id)
            .then((e)=>{
                if(e.response.affectedRows > 0) {
                    setRemoved(removed + 1);
                    setVideoPlayed(-1);
                };
            }).finally(()=>{
                setRemoved(removed + 1);
            })
    };

    useEffect(()=>{
      getRequest("/content/new?type=course", {})
        .then((e)=>{
          setNewArriveData(e);
        })
        
    getRequest("/content?type=course", {})
        .then((e)=>{
          setAllVideosData(e);
        })
    }, [removed]);

    const handleRequestCancel = ()=>{
        setIsCourseRequested(false);
        setSelectedCourseDt({});
    };

    const handleDoRequest = ()=> {
        setReqLoad(true);
        postRequest(`/content/new_request`, {course_id: selectedCourseDt.id, user_id: localStorage.id})
            .finally(()=>setReqLoad(false))
    };

    function BuyCourse() {
        const [reqStatus, setReqStatus] = useState(null);

        if(!isCourseRequested || !selectedCourseDt) {
            return null
        }

        useEffect(()=>{
            getRequest(`/content/request/verify?course_id=${selectedCourseDt.id}&user_id=${localStorage.id}`)
                .then((e)=>setReqStatus(e.request_status));
        }, [isCourseRequested])

        return <div className="video-buy">
            <div className="video-buy-head">
                <div className="video-buy-title">
                    Requesting for course
                </div>
                <X className="close" onClick={handleRequestCancel} />
            </div>
            <div className="coursee-ar">
                <div className="left">
                    <div className="course-title">{selectedCourseDt.title}</div>
                    <ImageLoader className="video-image" lowResSrc={"https://i.pinimg.com/originals/1f/2d/f8/1f2df8fad7e9bfcb18d9d553f8fc259b.gif"} highResSrc={API_BASE_URL + "/thumbnail?url=" + selectedCourseDt.video_url + "&r=500"}></ImageLoader>
                    <div className="course-hashtags">{selectedCourseDt.hashtags.split(" ").map((e)=>{
                        return <div className="hashtag">{e}</div>
                    })}</div>
                </div>
                <div className="right">
                    <div className="course-price">₹{selectedCourseDt.price}</div>
                    {
                        reqLoad ? 
                        <div className="course-request-btn">Wait <Loader className="loader" /></div>
                            :
                        reqStatus!==null ?
                        <div className="course-request-btn">{reqStatus}</div>
                            :
                        <div className="course-request-btn" onClick={handleDoRequest}>Request Course <ArrowRight /></div>
                    }
                </div>
            </div>
        </div>
    };

    const handleRequestCourse = (dt)=>{
        setIsCourseRequested(true);
        setSelectedCourseDt(dt);
    };

    const CheckStatus = ({ee})=>{
        const [status, setStatus] = useState(false);
        useEffect(()=>{
            getRequest(`/content/request/verify?course_id=${ee.id}&user_id=${localStorage.id}`)
            .then((f)=>setStatus(f))
        }, [])
        if(status.request_status==="Accepted") {
            return <video src={API_BASE_URL + "/stream?url=" + ee.video_url} className="video-thumbnail" autoPlay controls />;
        }
        return <div className="video-thumbnail locked"><Lock className="locked-icon" onClick={()=>handleRequestCourse(ee)} /></div>;
    };

    const CheckStatusTwo = ({ee})=>{
        const [status, setReqStatus] = useState(null);
        const [innerLoad, setInnerLoad] = useState(false);
        const [reqDone, setReqDone] = useState(1);

        const handleInnerReq = ()=>{
            setReqDone(reqDone + 1);
            setInnerLoad(true)
            postRequest(`/content/new_request`, {course_id: ee.id, user_id: localStorage.id})
                .finally(()=>setInnerLoad(false))
        }

        useEffect(()=>{
            getRequest(`/content/request/verify?course_id=${ee.id}&user_id=${localStorage.id}`)
                .then((e)=>setReqStatus(e));
        }, [ee, reqDone]);

            if(status===null) {
                return <div className="button-buy"><Lock className="locked-icon" onClick={()=>handleRequestCourse(ee)} /></div>;
            } else {

            if(status.request_status==="Accepted") {
                return <Link to={"/course/" + ee.id} className="button-buy">View</Link>;
            }
            
            if(status.request_status==="Requested") {
                return <div className="button-buy requested">Requested</div>;
            }
            
            if(status.request_status==="Declined") {
                return <div className="button-buy declined">Declined</div>;
            }

            return <div className="button-buy declined" onClick={handleInnerReq}>{innerLoad ? <Loader className="loader" /> : <Lock className="locked-icon" />}</div>;
        }
    };

    function TableCard({d}) {
        return <div className="table-card">
            <ImageLoader className="table-card-dp" lowResSrc="https://i.pinimg.com/originals/1f/2d/f8/1f2df8fad7e9bfcb18d9d553f8fc259b.gif" highResSrc={`${API_BASE_URL}/thumbnail?url=${d.video_url}&r=150`} />
            <div className="mid">
                <div className="mid-title">
                    {d.title}
                </div>
                <div className="meta">
                    <div className="meta-data"><b>Added on:</b> {new Date(d.created_on).toDateString()}</div>
                    {d.price<=0 ? <div className="is_free">FREE</div> : <div className="is_paid">₹{d.price}</div> }
                </div>
            </div>
            <div className="controls">
                {
                    d.price<=0 ? <Link to={"/course/" + d.id} className="button-buy">View</Link> : <CheckStatusTwo ee={d}/>
                }
            </div>
        </div>
    };

    return <div className="dashboard-pg">
        <div className="dash-head">
            <div className="head-heading">Courses</div>
            <div className="head-subheading">VIEW & EDIT COURSES</div>
        </div>
        <div className="dash-videos-content">
            <BuyCourse />
            <div className="videos-heading">New Arrived</div>
            <div className="videos-section">
                {
                    newArriveData.length===0 ? <div style={{margin: "auto"}}>No Video Found!</div>
                    : newArriveData.map((e, i)=>{
                        return <div className={`videos-ar over-hidden ${e.type + "-video"}`} key={i} onClick={()=>setVideoPlayed(i)}>
                            {
                                videoPlayed!==i ? <ImageLoader className="video-thumbnail play" lowResSrc={"https://i.pinimg.com/originals/1f/2d/f8/1f2df8fad7e9bfcb18d9d553f8fc259b.gif"} highResSrc={API_BASE_URL + "/thumbnail?url=" + e.video_url + "&r=300"}></ImageLoader>
                                :
                                e.price!==0 ? <CheckStatus ee={e}/>
                                    :
                                <video src={API_BASE_URL + "/stream?url=" + e.video_url} className="video-thumbnail" autoPlay controls />
                            }
                            <div className={videoPlayed===i ? "video-info-ar-hidden" : "video-info-ar"}>
                                {new Date(e.created_on).toDateString() === new Date(Date.now()).toDateString() && <div className="latest">New</div>}
                                {e.price!==0 ? <div className="paid">₹{e.price}</div> : <div className="free">Free</div>}
                                <div className="video-title">{e.title}</div>
                                <div className="video-subtitle">{e.type} | {new Date(e.created_on).toDateString()}</div>
                                {ld && ld.profile.type==="admin" && <div className="remove" onClick={()=>handleRemoveVideo(e.id)}><X /></div>}
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="videos-heading">All Videos</div>
            <div className="search-filter-ar">
                <div className="search-ar">
                    <input type="search" className="search-input" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
                    <Search className="search-btn" />
                </div>
                <div className="filter-dropdown">
                    <div className="selection">{SelectedFilter}</div>
                    <div className="options">
                        <div className="option" onClick={()=>setSelectedFilter("Digital Marketing")}>Digital Marketing</div>
                        <div className="option" onClick={()=>setSelectedFilter("UX UI")}>UX UI</div>
                        <div className="option" onClick={()=>setSelectedFilter("Web Development")}>Web Development</div>
                        <div className="option" onClick={()=>setSelectedFilter("Job Hunting")}>Job Hunting</div>
                        <div className="option" onClick={()=>setSelectedFilter("Gate Crack")}>Gate Crack</div>
                    </div>
                </div>
            </div>
            <div className="videos-section-all">
                {
                    filteredData.length===0 ? <div style={{margin: "auto"}}>No Video Found!</div>
                    : filteredData.map((e, i)=>{
                        return <TableCard d={e} key={i} />
                    })
                }
            </div>
        </div>
    </div>
}