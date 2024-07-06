import { useEffect, useState } from "react";
import ImageLoader from "../ImageLoader";
import { getRequest } from "../../functions/requests";
import { Loader } from "react-feather";

export default function Card({dt, imgData}) {
    const [imgDataa, setImgDataa] = useState();
    const [videos, setVideos] = useState(0);
    useEffect(()=>{
        getRequest("/content/count/" + localStorage.id)
            .then(vid=>setVideos(vid.videos));

        getRequest("/get-image?url=" + dt.profile_image_url)
            .then(img=>setImgDataa(["data:image/jpg;base64," + img.lowResImage, "data:image/jpg;base64," + img.highResImage]));
            return ()=>{
                setImgDataa(null);
            }
    }, [dt, imgData]);
    return <div className="dash-box">
        {dt==="" ?
            <div className="box-right">
                <Loader className="loader" size={50} />
            </div>
            :
            <ImageLoader className="box-left" lowResSrc={imgDataa ? imgDataa[0] : ""} highResSrc={imgDataa ? imgDataa[1] : ""} alt={"user-image"}></ImageLoader>
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
                    <div className="box-small-button">SHARE</div>
                    <div className="box-small-button">CHAT</div>
                </div>
        </div>
    </div> 
}