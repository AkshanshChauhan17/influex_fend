import { Book, Info, Settings, Slack, Upload, Users, Video } from "react-feather";

export const nav_links = [{
        title: "Brands",
        icon: <Slack size={20} strokeWidth={3} />,
        link: "/brands"
    },{
        title: "Courses",
        icon: <Book size={20} strokeWidth={3} />,
        link: "/courses"
    },{
        title: "Creators",
        icon: <Users size={20} strokeWidth={3} />,
        link: "/creators"
    },{
        title: "Dashboard",
        icon: <Info size={20} strokeWidth={3} />,
        link: "/"
    },{
        title: "Upload",
        icon: <Upload size={20} strokeWidth={3} />,
        link: "/upload"
    },{
        title: "Videos",
        icon: <Video size={20} strokeWidth={3}/>,
        link: "/videos"
    }
]