import { useEffect, useRef, useState } from "react";
import ImageLoader from "../ImageLoader";
import Card from "./Card";
import { getRequest, putImageRequest, putRequest } from "../../functions/requests";
import { Loader, Upload } from "react-feather";

export default function Dashboard() {
    const uploadTapper = useRef(null);
    const [image, setImage] = useState();
    const [data, setData] = useState({});
    const [urlImages, setUrlImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleUploadClick = ()=>{
        uploadTapper.current.click();
    };

    useEffect(()=>{
        getRequest("/profile/" + localStorage.id)
            .then((r)=>{
                setData(r);
            });
    }, [image]);

    const handleImageUpload = (e)=>{
        const file = e.target.files[0];

        const data = new FormData();
        data.append('image', file[0]);

        if(file) {
            putImageRequest("/profile/image/" + localStorage.id, file)
                .then((r)=>{
                    setImage("")
                });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
        setData("");
    };

    const handleUserEditUpdate = ()=> {
        setLoading(true);
        putRequest("/profile/" + localStorage.id, data)
            .then((e)=>{
                if(e.affectedRows > 0) {
                    setLoading(false);
                }
            })
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <div className="dashboard-pg">
            <div className="dash-head">
                <div className="head-heading">DETAILS</div>
                <div className="head-subheading">VIEW & EDIT YOUR INFORMATION</div>
            </div>
            <div className="dash-content">
                <Card huc={handleUploadClick} dt={data} imgData={urlImages} />
                <div className="image-uploader-section" style={{display: "none"}}>
                    {image && <ImageLoader className="image-view-section" lowResSrc={image ? image : ""} highResSrc={image ? image : ""} />}
                    <form className="image-uploader">
                        <input hidden ref={uploadTapper} type="file" name="image" onChange={handleImageUpload} accept="image/*" />
                        <Upload size={40} className="image-upload-icon" onClick={handleUploadClick} />
                    </form>
                </div>
                <div className="user-data-edit-ar">
                    {
                        Object.keys(data).map((e, i)=>{
                            if(e==="profile_image_url") {
                                return null
                            }
                            return <div className="user-data-edit" key={i}>
                                <div className="user-data-keys">
                                    {
                                        e
                                    }
                                </div>
                                <input name={e} value={data[e]} type="text" className="user-data-values" onChange={handleChange} />
                            </div>
                        })
                    }
                    <div className="user-data-edit-button" onClick={()=>handleUserEditUpdate()}>
                        {loading ? <Loader className="loader" /> : "UPDATE"}
                    </div>
                </div>
            </div>
        </div>
    )
}