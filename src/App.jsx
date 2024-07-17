import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './dashStyle.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
import RegInfluencer from './components/Register/Influencer'
import RegBrand from './components/Register/Brand'
import { Loader } from 'react-feather'
import { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard'
import Videos from './components/Dashboard/Videos'
import Upload from './components/Dashboard/Upload'
import DashNavigation from './components/Dashboard/Navigation'
import { getRequest } from './functions/requests'
import Login from './components/Login'
import Home2 from './components/Home2'
import OurServices from './components/OurServices'
import Courses from './components/Courses'
import Brands from './components/Dashboard/Brands'
import Creators from './components/Dashboard/Creators'
import Notification from './components/Notifications'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [logKey, setLogKey] = useState("");
  const [loginData, setLoginData] = useState();

  const verifyLoginKeyFun = ()=>{
    setIsLoading(true);
    getRequest("/profile/verify/" + logKey)
      .then((e)=>{
        setIsLogin(e.status);
        if(e.status) {
          setLoginData(e);
          window.location.href = "/";
          localStorage.setItem("login_key", e.profile.login_token);
          localStorage.setItem("id", e.profile.id);
          localStorage.setItem("email", e.profile.email);
        }
      }).finally(()=>setIsLoading(false)); 
  }

  useEffect(()=>{
    setIsLoading(true);
    getRequest("/profile/verify/" + localStorage.login_key)
      .then((e)=>{
        setIsLogin(e.status);
        if(e.status) {
          setLoginData(e);
          localStorage.setItem("login_key", e.profile.login_token);
          localStorage.setItem("id", e.profile.id);
          localStorage.setItem("email", e.profile.email);
        }
      }).finally(()=>setIsLoading(false));
  }, []);

  if(isLogin) {
    return <div className="dashboard">
      {isLoading && <div className='loading-ar'>
        <Loader size={100} className='loader'/>
      </div>}
      <BrowserRouter>
        <DashNavigation ld={loginData}/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/videos' element={<Videos ld={loginData} />} />
          <Route path='/upload' element={<Upload ld={loginData} />} />
          <Route path='/courses' element={<Courses ld={loginData} />} />
          <Route path='/brands' element={<Brands ld={loginData} />} />
          <Route path='/creators' element={<Creators ld={loginData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  }
  
  return (
    <div className="app">
      {isLoading && <div className='loading-ar'>
        <Loader size={100} className='loader'/>
      </div>}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home2 logOpenFun={setLoginOpen} />} />
          <Route path='/login' element={<Login loginKey={setLogKey} verifyLoginKey={verifyLoginKeyFun} openLogin={setLoginOpen} loginStatus={isLogin} />} />
          <Route path='/our services' element={<OurServices />} />
          <Route path='/inf-registration' element={<RegInfluencer />} />
          <Route path='/bnd-registration' element={<RegBrand />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
