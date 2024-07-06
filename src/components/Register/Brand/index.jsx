import { useState } from "react";
import ImageLoader from "../../ImageLoader";
import ColorMatrix from "../../ColorMatrix";
import { postRequest } from "../../../functions/requests";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Copy, Crosshair, Loader, SkipBack, X } from "react-feather";

export default function RegBrand() {
    const [ch, setCh] = useState(1);
    const [regStatus, setRegStatus] = useState({status: false, login_key: "", message: ""});
    const [isCopy, setIsCopy] = useState({visible: false, message: "", class: ""});
    const [isLoad, setIsLoad] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        sm_links: '',
        platform: '',
        followers: '',
        description: '',
        type: 'brand'
      });

      const handleCopy = () => {
        navigator.clipboard.writeText(regStatus.login_key)
          .then(() => {
            setIsCopy({visible: true, message: <span className="h-center"><span><b>{regStatus.login_key}</b> copied to clipboard!</span> <X className="control-button" onClick={()=>setIsCopy({visible: false, message: "", class: ""})} /></span>, class: "success"});
          })
          .catch(err => {
            setIsCopy({visible: true, message: 'Failed to copy text: ' + err, class: "error"});
          });
      };
    
      const handleChange = (e) => {
        setCh(ch + 1)
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        setIsLoad(true);
        e.preventDefault();
        postRequest("/profile", formData)
          .then((k)=>{
            if(k.error) {
              setRegStatus({status: 2, login_key: "", message: "Email is already taken"});
            } else {
              localStorage.setItem("login_key", k.login_token);
              setRegStatus({status: 1, login_key: k.login_token, message: ""});
            }
          })
      };

      if(regStatus.status===1) {
        return (
          <div className="form-ar">
            <div className="success-ar">
              <Link className="link-tag" to={"/"}><ArrowLeft size={20} /> Back</Link>
              <br />
              <br />
              <div className="content"><span className="fade-60">Please save this login key :</span> <span><b>{regStatus.login_key}</b></span> <Copy className="control-button" onClick={handleCopy} /></div>
              <br />
              {
                isCopy.visible ? <div className={isCopy.class}>{isCopy.message}</div> : null
              }
            </div>
          </div>
        )
      }

      if(regStatus.status===2) {
        return (
          <div className="form-ar">
            <Link className="link-tag" to={"/"}><ArrowLeft size={20} /> Back</Link>
            <div className="error-ar">
              {regStatus.message}
            </div>
          </div>
        )
      }
    
      return (
        <div className="form-ar bg-1">
            <form onSubmit={handleSubmit}>
            <Link className="link-tag" to={"/"}><ArrowLeft size={20} /> Back</Link>
            <p className="sub-heading color-primary">Register Brand</p>
            <hr className="color-primary" />
          <div className="form-input-ar">
            <label className="label">
              Name:
              <input
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Brand Name"
              />
            </label>
            <label className="label">
              Email:
              <input
              className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="brand@xyz.com"
              />
            </label>
            <label className="label">
              Social Media Handle:
              <input
              className="form-input"
                type="text"
                name="sm_links"
                value={formData.sm_links}
                onChange={handleChange}
                required
                placeholder="https://instagram/xyz"
              />
            </label>
            <label className="label">
              Platform:
              <input
              className="form-input"
                type="text"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                required
                placeholder="Instagram, Youtube..."
              />
            </label>
            <label className="label">
              Followers:
              <input
              className="form-input"
                type="number"
                name="followers"
                value={formData.followers}
                onChange={handleChange}
                required
                placeholder="399999"
              />
            </label>
            <label className="label">
              Description:
              <textarea
              className="form-input"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          {
            isLoad ?
            <button className="sub-button"><Loader className="loader" /> Wait</button>
            :
            <button className="sub-button" type="submit">Register <ArrowRight /></button>
          }
        </form>
        <ColorMatrix className="form-right" change={ch} />
        {/* <ImageLoader className={"form-right"} lowResSrc={"data:image/jpeg;base64,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"} highResSrc={"https://img.freepik.com/premium-vector/influencer-selfie-smartphone-neon-vector-icon-dark-wall-background-neon-influencer-selfie-smartphone-vector-icon_104045-4223.jpg"} alt={"reg-img"} />  */}
        </div>
    );
}