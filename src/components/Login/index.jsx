import { useState } from "react";
import { X } from "react-feather";
import { useNavigate } from "react-router-dom";

export default function Login({loginKey, verifyLoginKey, openLogin, loginStatus}) {
    const [loginClicked, setLoginClicked] = useState(false);
    const navigation = useNavigate();
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
    </div>
};