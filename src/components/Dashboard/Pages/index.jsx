import { useState } from "react";
import Home2 from "../../Home2";
import "./pages.scss";

export default function Pages({logInFun}) {
    const pages = [{title: "Home", component: <Home2 logOpenFun={logInFun} editable={true} />}];
    const [clickEdit, setClickEdit] = useState({isClicked: false, clickedIndex: -1});
    
    if(clickEdit.isClicked) {
        return pages[clickEdit.clickedIndex].component;
    };

    return <div className="pages">
        {
            pages.map((e, i)=>{
                return <div className="page-edit-link" key={i} onClick={()=>setClickEdit({isClicked: true, clickedIndex: i})}>{e.title}</div>
            })
        }
    </div>
}