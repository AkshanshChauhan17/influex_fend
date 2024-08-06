import { useEffect, useState } from "react";
import { Loader } from "react-feather";
import { Link, useLocation } from "react-router-dom"
import { API_BASE_URL, getRequest } from "../../functions/requests";

import "./index.scss";

export default function CourseVideo() {
    const location = useLocation();
    const [videoData, setVideoData] = useState({});
    const [reqStatus, setReqStatus] = useState({request_status: null});
    const [allMore, setAllMore] = useState([]);

    useEffect(()=>{
        getRequest(`/content/request/verify?course_id=${decodeURIComponent(location.pathname.split("/")[location.pathname.split("/").length - 1])}&user_id=${localStorage.id}`)
            .then((e)=>{
                setReqStatus(e);
                if(e.request_status==="Accepted") {
                    getRequest(`/content/${decodeURIComponent(location.pathname.split("/")[location.pathname.split("/").length - 1])}`)
                        .then((e)=>{
                            setVideoData(e);
                        });
                };
                if(e.request_status==="Request") {
                    getRequest(`/content/${decodeURIComponent(location.pathname.split("/")[location.pathname.split("/").length - 1])}`)
                    .then((e)=>{
                        setVideoData(e);
                    }); 
                };
                getRequest("/content/new?type=course", {})
                    .then((e)=>{
                        setAllMore(e);
                    });
            });
    }, [location]);

    if(reqStatus.request_status===null || !videoData || allMore.length===0) {
        <div className="load-ar">
            <Loader className="loader" />
        </div>
    }

    if(videoData.price<=0) {
        return <div className="course-video-ar">
            <div className="left">
                <div className="video-meta">
                    <div className="left">
                        {videoData.id}
                    </div>
                    <div className="right">
                        {new Date(videoData.created_on).toDateString()}
                    </div>
                </div>
                <div className="video-player">
                    <video src={API_BASE_URL + "/stream?url=" + videoData.video_url} className="video" controls />
                </div>
                <div className="title">
                    {videoData.title}
                </div>
                <div className="hashtags">
                    {
                        videoData.hashtags?.split(" ").map((e, i)=>{
                            return <div className="hashtag" key={i}>{e}</div>
                        })
                    }
                </div>
                <div className="description">
                    {videoData.description}
                </div>
            </div>
            <div className="right-video-list">
                <div className="title">Explore more</div>
                {allMore.map((e, i)=>{
                    if(e.id === decodeURIComponent(location.pathname.split("/")[location.pathname.split("/").length - 1])) {
                        return null;
                    }
                    return <Link to={"/course/" + e.id} key={i} className="more-course">
                        <div className="title">
                            {
                                e.title
                            }
                        </div>
                    </Link>
                })}
            </div>
        </div>
    }

    if(reqStatus.request_status==="Accepted" && videoData) {
        return <div className="course-video-ar">
            <div className="left">
                <div className="video-meta">
                    <div className="left">
                        {videoData.id}
                    </div>
                    <div className="right">
                        {new Date(videoData.created_on).toDateString()}
                    </div>
                </div>
                <div className="video-player">
                    <video src={API_BASE_URL + "/stream?url=" + videoData.video_url} className="video" controls />
                </div>
                <div className="title">
                    {videoData.title}
                </div>
                <div className="hashtags">
                    {
                        videoData.hashtags?.split(" ").map((e, i)=>{
                            return <div className="hashtag" key={i}>{e}</div>
                        })
                    }
                </div>
                <div className="description">
                    {videoData.description}
                </div>
            </div>
            <div className="right-video-list">
                <div className="title">Explore more</div>
                {allMore.map((e, i)=>{
                    if(e.id === decodeURIComponent(location.pathname.split("/")[location.pathname.split("/").length - 1])) {
                        return null;
                    }
                    return <Link to={"/course/" + e.id} key={i} className="more-course">
                        <div className="title">
                            {
                                e.title
                            }
                        </div>
                    </Link>
                })}
            </div>
        </div>
    }

    return <div className="course-vid">
        <div className="status"><b>STATUS :</b> {reqStatus.request_status}</div>
        <b>Explore more </b>
        <Link to={"/courses"}>Courses</Link>
    </div>
}