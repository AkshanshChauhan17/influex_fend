import { useEffect, useState } from "react"
import ImageLoader from "../../ImageLoader"
import { API_BASE_URL, deleteRequest, getRequest } from "../../../functions/requests";
import { Loader, Play, X } from "react-feather";

export default function Videos() {
    const [allVideosData, setAllVideosData] = useState([]);
    const [videoPlayed, setVideoPlayed] = useState();
    const [removed, setRemoved] = useState(1);

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
      getRequest("/content", {})
        .then((e)=>{
          setAllVideosData(e);
        })
    }, [removed]);

    return <div className="dashboard-pg">
        <div className="dash-head">VIDEOS</div>
        <div className="dash-videos-content">
            <div className="videos-heading">Your Video Content</div>
            <div className="videos-section">
                {
                    allVideosData.length===0 ? <div style={{margin: "auto"}}>No Video Found!</div>
                    : allVideosData.map((e, i)=>{
                        return <div className="videos-ar over-hidden" key={i} onClick={()=>setVideoPlayed(i)}>
                            {
                                videoPlayed!==i ? <ImageLoader className="video-thumbnail play" lowResSrc={API_BASE_URL + "/thumbnail?url=" + e.video_url + "&r=10"} highResSrc={API_BASE_URL + "/thumbnail?url=" + e.video_url + "&r=200"}></ImageLoader>
                                :
                                <video src={API_BASE_URL + "/stream?url=" + e.video_url} className="video-thumbnail" controls autoPlay onPause={()=>setVideoPlayed(-1)} />
                            }
                            <div className={videoPlayed===i ? "video-info-ar-hidden" : "video-info-ar"}>
                                <div className="video-title">{e.title}</div>
                                <div className="video-subtitle">{e.subtitle}</div>
                                <div className="remove" onClick={()=>handleRemoveVideo(e.id)}><X /></div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}