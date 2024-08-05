import { useEffect, useState } from "react"
import { getRequest, patchRequest, postRequest, putRequest } from "../../../functions/requests";
import { Loader } from "react-feather";

export default function CourseRequest() {
    const [courseReqData, setCourseReqData] = useState([]);
    const [reqLoad, setReqLoad] = useState();
    const [reqData, setReqData] = useState();

    useEffect(()=>{
        getRequest("/content/course/all")
            .then((e)=>setCourseReqData(e));
    }, [reqData]);

    if(courseReqData.length===0) {
        return <div className="load-ar">
            <Loader className="loader" />
        </div>
    };

    const handleUpdateRequest = (request_id, request_status)=> {
        setReqLoad(true);
        patchRequest(`/content/new_request`, {request_id, request_status})
            .then((e)=>setReqData(e))
            .finally(()=>setReqLoad(false))
    }

    return <div className="course-request">
        <table>
            <tr>
                {
                    Object.keys(courseReqData[0]).map((keys)=>{
                        return <th>{keys}</th>
                    })
                }
            </tr>
            {
                courseReqData.map((e, i)=>{
                    return <tr className="tr" key={i}>
                        {
                            Object.keys(e).map((keys)=>{
                                if(keys==="request_status") {
                                    if(e[keys]==="Declined" || e[keys]==="Requested") {
                                        return <td><button className="accept" onClick={()=>handleUpdateRequest(e.request_id, "Accepted")}>Accept</button></td>
                                    }
                                    return <td><button className="decline" onClick={()=>handleUpdateRequest(e.request_id, "Declined")}>Decline</button></td>
                                }
                                return <td>{e[keys]}</td>
                            })
                        }
                    </tr>
                })
            }
        </table>
    </div>
};