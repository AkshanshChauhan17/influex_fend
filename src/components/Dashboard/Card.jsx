import { useEffect, useState } from "react";
import ImageLoader from "../ImageLoader";
import { API_BASE_URL, getRequest } from "../../functions/requests";
import { Loader } from "react-feather";

export default function Card({dt, imgData, huc}) {
    const [videos, setVideos] = useState(0);
    useEffect(()=>{
        getRequest("/content/count/" + localStorage.id)
            .then(vid=>setVideos(vid.videos));
    }, [dt, imgData]);
    return <div className="dash-box">
        {dt==="" ?
            <div className="box-right">
                <Loader className="loader" style={{margin: "auto"}} size={50} />
            </div>
            :
            <>
                {dt.profile_image_url ? <ImageLoader className="box-left" lowResSrc={`${API_BASE_URL}/get-image?url=${dt.profile_image_url}&r=${100}`} highResSrc={`${API_BASE_URL}/get-image?url=${dt.profile_image_url}&r=${400}`} alt={"user-image"}></ImageLoader> : <div className="box-left"></div>}
            </>
        }

        <div className="box-right">
                <div className="dash-box-title">{dt.name}</div>
                <a href={dt.email} className="box-link">{dt.email}</a>
                <table className="card-table">
                    <tr className="card-row">
                        <td className="card-sec-text">Videos</td>
                        <td className="card-sec-text">Followers</td>
                        <td className="card-sec-text">Ratings</td>
                    </tr>
                    <tr className="card-row">
                        <th className="card-pri-text">{videos}</th>
                        <th className="card-pri-text">{dt.followers}</th>
                        <th className="card-pri-text">4.5</th>
                    </tr>
                </table>
                <div className="box-controls">
                    <div className="box-small-button" onClick={huc}>NEW IMAGE</div>
                    <div className="box-small-button">CONNECTIONS</div>
                </div>
        </div>
    </div> 
}