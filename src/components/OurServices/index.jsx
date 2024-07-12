import { ArrowRight, Play, Star } from "react-feather";
import { Link } from "react-router-dom";
import "./index.scss";

export default function OurServices() {
    const coruses_list = [
        {
          "title": "Digital Marketing",
          "description": "Learn the fundamentals of digital marketing, including SEO, social media marketing, and email campaigns. This course is perfect for beginners and professionals looking to refresh their skills.",
          "duration": "12 weeks",
          "format": "Online, Self-paced",
          "price": "₹300",
          "rating": 4.5,
          "enrollment": 2500,
          "media": "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
        },
        {
          "title": "Data Science and Analytics",
          "description": "Dive into the world of data science with this comprehensive course covering data analysis, machine learning, and data visualization. Ideal for aspiring data scientists and analysts.",
          "duration": "16 weeks",
          "format": "Online, Instructor-led",
          "price": "₹500",
          "rating": 4.8,
          "enrollment": 1800,
          "media": "https://plus.unsplash.com/premium_photo-1661609173164-df2f921473f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww"
        },
        {
          "title": "Project Management",
          "description": "Master the principles of project management, including planning, execution, and monitoring. Suitable for professionals seeking PMP certification.",
          "duration": "10 weeks",
          "format": "Online, Blended",
          "price": "₹400",
          "rating": 4.6,
          "enrollment": 2200,
          "media": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D"
        },
        {
          "title": "Creative Writing",
          "description": "Unleash your creativity and improve your writing skills through various exercises and projects. Perfect for writers of all levels.",
          "duration": "8 weeks",
          "format": "Online, Self-paced",
          "price": "₹250",
          "rating": 4.7,
          "enrollment": 3000,
          "media": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JlYXRpdmUlMjB3cml0aW5nfGVufDB8fDB8fHww"
        },
        {
          "title": "Web Development Bootcamp",
          "description": "Learn to build websites from scratch using HTML, CSS, JavaScript, and more. This intensive bootcamp is designed for those who want to start a career in web development.",
          "duration": "14 weeks",
          "format": "Online, Instructor-led",
          "price": "₹600",
          "rating": 4.9,
          "enrollment": 1500,
          "media": "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
        }
    ];

    return <div className="our-services">
        <div className="courses">
            <div className="popular">
                <div className="head">
                    <div className="title">Learn with Influex</div>
                    <div className="sub-title">Empowering You with Knowledge and Skills </div></div>
                <div className="popular-courses">
                    {
                        coruses_list.map((e, i)=>{
                            return <div className="course" key={i} style={{backgroundImage: `url(${e.media})`}}>
                                <div className="course-data">
                                    <div className="title">{e.title}</div>
                                    <div className="subtitle">{e.format}</div>
                                    <div className="bottom">
                                        <div className="rating"><Star fill="white" strokeWidth={0} size={22} />{e.rating}</div>
                                        <Play className="iconn" fill="white" strokeWidth={0}></Play>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="links">
                    <Link className="link" to={"/courses"}>Explore <ArrowRight /></Link>
                </div>
            </div>
        </div>
    </div>
}