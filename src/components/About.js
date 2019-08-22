import React from 'react';
//import 'font-awesome/css/font-awesome.min.css';
// import file or image
//import feature1 from '../../src/assets/images/feature1.png';
//import feature2 from '../../src/assets/images/feature2.png';

let sectionData = {
    title: "Best Features",
    description: "orem ipsum dolor sit amet consectetur adipisicing elit."
}

const aboutdataone =
{
    title: "Why Is The Best App In The World",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, deserunt eveniet nulla odit accusamus nobis doloremque saepe, autem perferendis eius consequuntur excepturi.",
    aboutbtn: "Free Try",
}
const aboutdatatwo = {
    title: "Easy Feature Are Available",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, deserunt eveniet nulla odit accusamus nobis doloremque saepe, autem perferendis eius consequuntur excepturi.",
    aboutbtn: "Free Try"
}
const About = () => {
    return (
        <section className="about-area section-padding section-bg" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center section-title-margin">
                            <h2><span></span>{sectionData.title}</h2>
                            <p>{sectionData.description}</p>
                        </div>
                    </div>
                </div>
                <div className="row about-align">
                    <div className="col-md-6">
                        <div className="about-info">
                            <h3>{aboutdataone.title}</h3>
                            <p>{aboutdataone.description}</p>
                            <a href="/#" className="color-btn">{aboutdataone.aboutbtn}</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="" alt="feature app" />
                    </div>
                </div>
                <div className="row about-align">
                    <div className="col-md-6">
                        <img src="" alt="feature app" />
                    </div>
                    <div className="col-md-6">
                        <div className="about-info">
                            <h3>{aboutdatatwo.title}</h3>
                            <p>{aboutdatatwo.description}</p>
                            <a href="/#" className="color-btn">{aboutdatatwo.aboutbtn}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;