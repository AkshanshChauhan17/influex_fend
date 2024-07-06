import { useEffect, useState } from "react";
import VideoUploadForm from "./VideoUploadForm";

export default function Upload() {
    const processTextWithTags = (text) => {
        try {
            const parts = text.split(/(#\w+)/g); // Split text by hashtags
            return parts.map((part, index) => {
                if (part.match(/#\w+/)) {
                    // If part is a hashtag, wrap it in a span
                    return <span key={index} className="hash">#{part.slice(1)}</span>;
                } else {
                    // Otherwise, return the text as is
                    return part;
                }
            });
        } catch (err) {
            null;
        }
    };
    const [data, setData] = useState({
        title: "",
        subtitle: "",
        video: null,
        hashtags: ""    
    });
    const [vid, setVid] = useState(null);
    const [video, setVideo] = useState(null);
    
    useEffect(() => {
        setVideo(vid);
    }, [vid]);

    return <div className="dashboard-pg">
        <div className="dash-head">VIDEOS</div>
        <div className="dash-upload-content">
            {video!==null && <div className="left">
                <div className={"videos-ar"}>
                    {video!==null && <video src={URL.createObjectURL(video)} className="video-thumbnail" />}
                    <div className="video-title" style={{color: "black"}}>{data.title}</div>
                    <div className="video-subtitle" style={{color: "black"}}>{data.subtitle}</div>
                    <div className="tags-ar">
                        {
                            processTextWithTags(data.hashtags)
                        }
                    </div>
                </div>
            </div>}
            <div className="right">
                <VideoUploadForm setDt={setData} setV={setVid} v={vid} />
            </div>
        </div>
    </div>
};