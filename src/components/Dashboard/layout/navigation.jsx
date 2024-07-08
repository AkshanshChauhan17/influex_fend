import { Info, Settings, Upload, Video } from "react-feather";

export const nav_links = [{
        title: "Details",
        icon: <Info size={20} strokeWidth={3} />,
        link: "/"
    },
    {
        title: "My Videos",
        icon: <Video size={20} strokeWidth={3}/>,
        link: "/my videos"
    },
    {
        title: "Upload",
        icon: <Upload size={20} strokeWidth={3} />,
        link: "/upload"
    },
    {
        title: "Setting",
        icon: <Settings size={20} strokeWidth={3} />,
        link: "/setting"
    }
]