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

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [logKey, setLogKey] = useState("");

  const verifyLoginKeyFun = ()=>{
    setIsLoading(true);
    getRequest("/profile/verify/" + logKey)
      .then((e)=>{
        setIsLogin(e.status);
        if(e.status) {
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
        <DashNavigation/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  }
  
  return (
    <div className="app">
      {isLoading && <div className='loading-ar'>
        <Loader size={100} className='loader'/>
      </div>}
      {
        loginOpen && <Login loginKey={setLogKey} verifyLoginKey={verifyLoginKeyFun} openLogin={setLoginOpen} loginStatus={isLogin} />
      }
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home logOpenFun={setLoginOpen} />} />
          <Route path='/inf-registration' element={<RegInfluencer />} />
          <Route path='/bnd-registration' element={<RegBrand />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
