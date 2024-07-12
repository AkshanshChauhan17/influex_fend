import { useEffect, useRef, useState } from "react"
import ImageLoader from "../../ImageLoader"
import { API_BASE_URL, deleteRequest, getRequest } from "../../../functions/requests";
import { Heart, Save, Share, Share2, X } from "react-feather";
import { formatNumber } from "../../../functions/formate";

export default function Creators({ld}) {
    const [allData, setAllData] = useState([]);
    const [videoPlayed, setVideoPlayed] = useState();
    const [removed, setRemoved] = useState(1);
    const [controlEvents, setControlEvents] = useState({
        play: false,
        pause: false
    })

    const videoRef = useRef(null);

    const handleRemoveVideo = (id)=> {
        deleteRequest("/content" + id)
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
      getRequest("/profile?type=creator", {})
        .then((e)=>{
          setAllData(e);
        })
    }, [removed]);

    return <div className="dashboard-pg">
        <div className="dash-head">
            <div className="head-heading">CREATORS</div>
            <div className="head-subheading">VIEW ALL CREATORS</div>
        </div>
        <div className="dash-profile-content">
            {
                allData.map((e, i)=>{
                    return <div className="profile" key={i}>
                        <div className="top">
                            <ImageLoader className="profile-image" lowResSrc={ API_BASE_URL + "/get-image?url=" + e.profile_image_url + "&r=50" } highResSrc={ API_BASE_URL + "/get-image?url=" + e.profile_image_url + "&r=200" } />
                            <div className="top-controls">
                                <Share2 className="top-controls-icon" size={16}/>
                                <Heart className="top-controls-icon" size={16}/>
                            </div>
                        </div>
                        <div className="profile-right">
                            <div className="profile-title">{e.name}</div>
                            <div className="profile-followers">Followers: {formatNumber(e.followers)}</div>
                            <div className="profile-platform">Platforms: {e.platforms}</div>
                            <div className="follow-btn">Follow Now</div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}