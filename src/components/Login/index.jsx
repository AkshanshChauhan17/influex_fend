import { useState } from "react";
import { X } from "react-feather";

export default function Login({loginKey, verifyLoginKey, openLogin, loginStatus}) {
    const [loginClicked, setLoginClicked] = useState(false);
    return <div className="login-ar">
        <div className="close-icon" onClick={()=>openLogin(false)}>Close <X/></div>
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