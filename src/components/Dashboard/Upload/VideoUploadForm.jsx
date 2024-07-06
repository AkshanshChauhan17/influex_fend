import React, { useRef, useState } from 'react';
import {Loader, Video } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../../functions/requests';

const VideoUploadForm = ({setV, setDt, v}) => {
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    hashtags: '',
    video: null,
  });

  const videoRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setDt({...formData, [name]: value});
  };

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

  const handleSubmit = async (e) => {
    setIsLoad(true);
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('subtitle', formData.subtitle);
    data.append('hashtags', formData.hashtags);
    data.append('video', formData.video);
    data.append('uploaded_by', localStorage.id);

    try {
      const response = await fetch(API_BASE_URL + '/content/video', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (response.ok) {
        if(result.affectedRows > 0) {
          navigate('/videos');
          setIsLoad(false);
        }
        navigate('/videos');
        setIsLoad(false);
      } else {
        navigate('/videos');
        setIsLoad(false);
        console.error('Form submission failed:', result.message);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  if(isLoad) {
    return <form className="video-upload-form">
      <Loader className='loader' size={40} />
    </form>
  }

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
      :
      <div className="upload-controls">
      <div className='upload-thumb-ar' onClick={()=>videoRef.current.click()}>
        <Video size={40} />
      </div>
      <input
        type="file"
        name="video"
        onChange={handleFileChange}
        required
        ref={videoRef}
        hidden
      />
      </div>
      }
      <button type="submit">Upload</button>
    </form>
  );
};

export default VideoUploadForm;