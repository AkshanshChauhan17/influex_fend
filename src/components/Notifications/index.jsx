import { ThumbsDown, ThumbsUp } from "react-feather";

export default function Notification({status, message}) {
    return <div className={status ? "notification-success" : "notification-error"}>
        <div className="left">{status ? <ThumbsUp /> : <ThumbsDown />}</div>
        <div className="right">
            <div className="notif-heading">{status ? "SUCCESS" : "ERROR"}</div>
            <div className="notif-subheading">{message}</div>
        </div>
    </div>
};