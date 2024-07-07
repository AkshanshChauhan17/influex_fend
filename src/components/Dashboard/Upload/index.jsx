import { useEffect, useRef, useState } from "react";
import { processTextWithTags } from "../../../functions/compiler";
import { ArrowLeft, Link, Loader, Upload as UploadIcon, Video, X } from "react-feather";
import { NavLink, useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { API_BASE_URL } from "../../../functions/requests";

export default function Upload() {
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isLoad, setIsLoad] = useState(false);
    const navigate = useNavigate();
    const videoRef = useRef(null);

    const [data, setData] = useState({
        title: "",
        subtitle: "",
        video: null,
        hashtags: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const [vid, setVid] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoad(true);

        const fdata = new FormData();
        fdata.append('title', data.title);
        fdata.append('subtitle', data.subtitle);
        fdata.append('hashtags', data.hashtags);
        fdata.append('video', vid);
        fdata.append('uploaded_by', localStorage.id);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', API_BASE_URL + '/content/video', true);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentage = Math.round((event.loaded * 100) / event.total);
                setUploadPercentage(percentage);
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                const result = JSON.parse(xhr.responseText);
                if (result.response.affectedRows > 0) {
                    navigate('/videos');
                } else {
                    console.error('Form submission failed:', result.message);
                }
            } else {
                console.error('Form submission failed:', xhr.statusText);
            }
            setIsLoad(false);
        };

        xhr.onerror = () => {
            console.error('Error submitting the form:', xhr.statusText);
            setIsLoad(false);
        };

        xhr.send(fdata);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setVid(file);
                setData({ ...data, title: file.name });
            };
            reader.readAsDataURL(file);
        }
    };

    if (isLoad) {
        return <form className="video-upload-form">
            <Loader className='loader' size={40} />
            <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                    value={uploadPercentage}
                    text={`${uploadPercentage}%`}
                    styles={buildStyles({
                        textSize: '16px',
                        pathColor: `rgb(132, 0, 255)`,
                        textColor: '#f88',
                        trailColor: 'rgb(200, 111, 200)',
                        backgroundColor: 'rgba(132, 0, 255, 0.1)',
                    })}
                />
            </div>
        </form>
    }

    return <div className="dashboard-pg">
        <div className="dash-head">VIDEOS</div>
        <form className="dash-upload-content" onSubmit={handleSubmit}>
            <div className="vup-heading-ar">
                <div className="vup-heading" onClick={()=>setVid(null)}><ArrowLeft />Back</div>
                <NavLink to={"/"} className="vup-heading-button"><X /></NavLink>
            </div>
            {vid === null ? <div className="upload-controls">
                <div className='upload-thumb-ar' onClick={() => videoRef.current.click()}>
                    <Video size={40} />
                    <div className="upload-thumb-ar-warning">Please note that only the following video file formats are suitable: MP4, MKV, and MOV. Ensure your video is in one of these formats to avoid upload issues</div>
                </div>
                <input
                    type="file"
                    name="video"
                    onChange={handleFileChange}
                    required
                    ref={videoRef}
                    hidden
                    accept="video/*"
                />
            </div>
                :
                <div className="middle">
                    {vid && <div className="left">
                        <div className={"videos-ar"}>
                            <video src={URL.createObjectURL(vid)} className="video-thumbnail" controls />
                        </div>
                    </div>}
                    <div className="right-r">
                        <label className="vup-label">
                            TITLE
                            <input required type="text" className="vup-textarea" name="title" placeholder="My Video Title" value={data.title} onChange={handleChange} />
                        </label>
                        <label className="vup-label">
                            #TAGS
                            <input type="text" className="vup-textarea" name="hashtags" placeholder="My Video #Tags" value={data.hashtags} onChange={handleChange} />
                            <div className="tags-ar" contentEditable>
                                {processTextWithTags(data.hashtags)}
                            </div>
                        </label>
                    </div>
                </div>
            }
            {vid !== null && <hr />}
            {vid !== null && <div className="vup-bottom">
                <label className="vup-label">
                    DESCRIPTION
                    <textarea required className="vup-textarea" placeholder="..." name="description" value={data.description} onChange={handleChange} />
                </label>
            </div>}
            {vid !== null && <div className="vup-bottom-controls">
                <button type="submit" className="vup-bottom-button" onClick={handleSubmit} disabled={data.title==="" || data.description==="" || data.hashtags===""}><UploadIcon size={20} /> UPLOAD</button>
            </div>}
        </form>
    </div>
};