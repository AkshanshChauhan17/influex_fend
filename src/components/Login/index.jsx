import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "react-feather";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../functions/requests";

export default function Login({loginKey, verifyLoginKey, openLogin, loginStatus}) {
    const [loginClicked, setLoginClicked] = useState(false);
    const [reqLogKey, setReqLogKey] = useState(false);
    const [loginKeySended, setLoginKeySended] = useState(false);
    const [keyReq, setKeyReq] = useState({status: false, message: ""});
    const navigation = useNavigate();
    const [email, setEmail] = useState("");

    const handleKeySend = ()=>{
        postRequest("/send-mail/token", {email: email})
            .then((e)=>{
                setKeyReq(e);
            });
    };

    const handleBackToLogin = ()=>{
        setReqLogKey(false);
        setEmail("");
        setKeyReq({status: false, message: ""});
    };

    if(reqLogKey) {
        return <div className="login-ar">
            <div className="close-icon" onClick={()=>{navigation("/")}}>Close <X/></div>
            {
                loginClicked &&
                <>
                    { keyReq.status ? <div className="success">{keyReq.message}</div> : <div className="error">{keyReq.message}</div>}
                </>
            }
            <input type="email" placeholder="Enter your email" className="login-input" onChange={(e)=>setEmail(e.target.value)} />
            <span></span>
            <button className="login-btn" onClick={()=>{handleKeySend(); setLoginClicked(true);}}>Send</button>
            <span></span>
            <span className="flex-c fade-10 center clickable" onClick={handleBackToLogin}><ArrowLeft size={20} />Back to login</span>
        </div>        
    }
    
    return <div className="login-ar">
        <div className="close-icon" onClick={()=>{navigation("/")}}>Close <X/></div>
        {
            loginClicked &&
            <>
                { loginStatus ? <div className="success">Login Successful</div> : <div className="error">Invalid Login Key</div>}
            </>
        }
        <input type="text" placeholder="Enter login key" className="login-input" onChange={(e)=>loginKey(e.target.value)} />
        <span></span>
        <button className="login-btn" onClick={()=>{verifyLoginKey(); setLoginClicked(true);}}>Login</button>
        <span></span>
        <span className="flex-c fade-10 center clickable" onClick={()=>setReqLogKey(true)}>Request for login key <ArrowRight size={20} /></span>
    </div>
};