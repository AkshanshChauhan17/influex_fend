import { useEffect, useRef, useState } from "react"
import ImageLoader from "../ImageLoader";
import { API_BASE_URL, deleteRequest, getRequest } from "../../functions/requests";
import { ArrowRight, Lock, Search, X } from "react-feather";
import "./index.scss";

export default function Courses({ld}) {
    const [allVideosData, setAllVideosData] = useState([]);
    const [videoPlayed, setVideoPlayed] = useState();
    const [removed, setRemoved] = useState(1);
    const [SelectedFilter, setSelectedFilter] = useState("None");

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isCourseRequested, setIsCourseRequested] = useState(false);
    const [selectedCourseDt, setSelectedCourseDt] = useState({});

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
          setAllVideosData(e);
        })
    }, [removed]);

    const handleRequestCancel = ()=>{
        setIsCourseRequested(false);
        setSelectedCourseDt({});
    }

    function BuyCourse() {
        if(!isCourseRequested || !selectedCourseDt) {
            return null
        }
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
                    <div className="course-request-btn">Request Course <ArrowRight /></div>
                </div>
            </div>
        </div>
    }

    const handleRequestCourse = (dt)=>{
        setIsCourseRequested(true);
        setSelectedCourseDt(dt);
    }

    console.log(selectedCourseDt);

    return <div className="dashboard-pg">
        <div className="dash-head">
            <div className="head-heading">Courses</div>
            <div className="head-subheading">VIEW & EDIT COURSES</div>
        </div>
        <div className="dash-videos-content">
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
            <BuyCourse />
            <div className="videos-heading">New Arrived</div>
            <div className="videos-section">
                {
                    allVideosData.length===0 ? <div style={{margin: "auto"}}>No Video Found!</div>
                    : filteredData.map((e, i)=>{
                        return <div className={`videos-ar over-hidden ${e.type + "-video"}`} key={i} onClick={()=>setVideoPlayed(i)}>
                            {
                                videoPlayed!==i ? <ImageLoader className="video-thumbnail play" lowResSrc={"https://i.pinimg.com/originals/1f/2d/f8/1f2df8fad7e9bfcb18d9d553f8fc259b.gif"} highResSrc={API_BASE_URL + "/thumbnail?url=" + e.video_url + "&r=500"}></ImageLoader>
                                :
                                e.price!==0 ? <div className="video-thumbnail locked"><Lock className="locked-icon" onClick={()=>handleRequestCourse(e)} /></div>
                                    :
                                <video src={API_BASE_URL + "/stream?url=" + e.video_url} className="video-thumbnail" autoPlay controls onPause={()=>handlePause} />
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
        </div>
    </div>
}