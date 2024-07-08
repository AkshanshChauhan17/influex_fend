import { ArrowRight, Play, Send } from 'react-feather';
import './index.scss';
import ImageLoader from '../ImageLoader';
import { useRef } from 'react';

export default function Home2() {

    const bottomRef = useRef(null);

    const box_one_right_content = ["c1.avif", "c2.avif", "c3.jpg", "c4.avif"];
    const box_two_content = [
        {
            title: "How to Create Engaging UGC Videos",
            content: "Creating engaging User-Generated Content (UGC) videos is key to building a loyal audience and attracting brand collaborations. Here are some tips to help you craft compelling videos",
            image: "c5.avif"
        }, 
        {
            title: "Maximizing Brand Collaborations on InflueX",
            content: "Collaborating with brands can be a lucrative opportunity for creators on InflueX. Here’s how you can maximize these collaborations:",
            image: "c6.avif"
        }
    ];
    return (
        <div className="home-two">
            <div className="first-box">
                <div className="left">
                    <div className='heading'>Het gkkstt UGC platform via jskdk</div>
                    <div className="small-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab natus sed magnam corrupti qui molestias blanditiis nostrum voluptatum officia!</div>
                    <div className="hollow-button"><Send /> Begin your journey</div>
                </div>
                <div className="right">
                    {
                        box_one_right_content.map((e, i)=>{
                            return <div className="image-loader-ar" key={i}>
                                <Play className="icon" />
                                <ImageLoader className="image" lowResSrc={"./assets/images/" + e} highResSrc={"./src/assets/images/" + e} />
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="black-section">
                Registered Brands <div className="highlight-text">+2000</div> & Registered Creators <div className="highlight-text">+5000</div>
            </div>
            <div className="second-box">
                {
                    box_two_content.map((e, i)=>{
                        return <div className="inner-row">
                            <div className="left">
                                <div className="heading">{e.title}</div>
                                <div className="small-content">{e.content}</div>
                            </div>
                            <div className="right">
                                <div className="image-loader-ar" key={i}>
                                    <Play className="icon" />
                                    <ImageLoader className="image" lowResSrc={"./assets/images/" + e.image} highResSrc={"./src/assets/images/" + e.image} />
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="third-box">
                <div className="title">Fancy UGC that does convert</div>
                <div className="bottom" ref={bottomRef}>
                    <div className="bottom-inner-line">
                    {
                        box_one_right_content.map((e, i)=>{
                            return <div className="image-loader-ar" key={i}>
                                <Play className="icon" />
                                <ImageLoader className="image" lowResSrc={"./assets/images/" + e} highResSrc={"./src/assets/images/" + e} />
                            </div>
                        })
                    }
                    </div>
                    <div className="bottom-inner-line">
                    {
                        box_one_right_content.map((e, i)=>{
                            return <div className="image-loader-ar" key={i}>
                                <Play className="icon" />
                                <ImageLoader className="image" lowResSrc={"./assets/images/" + e} highResSrc={"./src/assets/images/" + e} />
                            </div>
                        })
                    }
                    </div>
                    <div className="bottom-inner-line">
                    {
                        box_one_right_content.map((e, i)=>{
                            return <div className="image-loader-ar" key={i}>
                                <Play className="icon" />
                                <ImageLoader className="image" lowResSrc={"./assets/images/" + e} highResSrc={"./src/assets/images/" + e} />
                            </div>
                        })
                    }
                    </div>
                </div>
                <div className='primary-button'>See Example UGCs <ArrowRight /></div>
            </div>
        </div>
    )
}