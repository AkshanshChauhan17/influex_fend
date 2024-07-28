import React, { useRef, useState } from 'react';
import {Loader, Video } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../../functions/requests';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const VideoUploadForm = ({uploadPercentage, vpSet, setV, setDt, v}) => {

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    hashtags: '',
    video: null,
  });



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(v===null) {
      setV(file);
    }
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
          null;
      };
      reader.readAsDataURL(file);
    }
    setFormData({ ...formData, video: e.target.files[0] });
  };


  return (
    <form className="video-upload-form" onSubmit={handleSubmit}>
      {formData.video ? <div className='upper-form'>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="subtitle"
        placeholder="Subtitle"
        value={formData.subtitle}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="hashtags"
        placeholder="Hashtags"
        value={formData.hashtags}
        onChange={handleChange}
        required
      />
      </div>
      : null
      }
    </form>
  );
};

export default VideoUploadForm;