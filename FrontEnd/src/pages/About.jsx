import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import services from "../services/services";
import PageTop from "../components/ui/PageTop";
import AboutCards from "../components/ui/AboutCards";
import constants from "../utils/constants";

// import mission from "./assets/images/mission.png";
// import vission from "./assets/images/Vision.png";
// import values from "./assets/images/values.png";
// import johnDoe from "./assets/images/John-Doe.png";
// import samWilliamsons from "./assets/images/Sam-Williamsons.png";
// import Toysaga from "./assets/images/Toysaga.png";

function About() {
  const [aboutData, setAboutData] = useState({});
  console.log("✌️aboutData --->", aboutData);

  console.log("✌️aboutData.data --->", aboutData?.data);

  const [partnersData, setPartnersData] = useState({})
console.log('✌️partnersData --->', partnersData);

  

  //console.log('✌️aboutData[0] --->', aboutData.data[0].attributes.heading);
  // console.log(
  //   "✌️aboutData.data[0].attributes.image.url --->",
  //   aboutData.data
  //     ? aboutData.data[0].attributes.image.data.attributes.url
  //     : "loading"
  // );

  useEffect(() => {
    const element = document.getElementById("header");
    element.scrollIntoView(true);
    document.title = "ToySaga || About";
  }, []);

  useEffect(() => {
    services.getAboutSec().then((res) => {
      setAboutData(res);
    });
    services.getPartners().then((res)=>{
      setPartnersData(res);
    })
  }, []);
  
  return (
    <main className="About-page">
      <PageTop pageTitle={"About Us"}/>

      <AboutCards aboutData={aboutData} item={0} img={"right"}/>

      <AboutCards aboutData={aboutData} item={1} img={"left"}/>
<br/><br /><br />
      <AboutCards aboutData={aboutData} item={2} img={"right"}/>

      <section className="creativePartners same-space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="creativePartnersImgWrapper">
                <div className="creativePartnersImgGrid">
                  {/* <img src={johnDoe} alt=""/> */}
                  {/* <img
                    src={`http://localhost:1337${
                      aboutData.data
                        ? aboutData.data[1].attributes.image2.data.attributes
                            .url
                        : "vision image"
                    }`}
                    alt=""
                  /> */}
                   <img
                    src={`${constants.imageURLConstent}${
                      partnersData.data
                        ? partnersData.data.PartnersDetails.Image1
                        : "vision image"
                    }`}
                    alt=""
                  />
                  <div className="partnername">
                    <h5>John Doe</h5>
                    <span>CEO</span>
                  </div>
                </div>
                <div className="creativePartnersImgGrid">
                  {/* <img src={samWilliamsons} alt=""/> */}
                  <img
                    src={`${constants.imageURLConstent}${
                      partnersData.data? partnersData.data.PartnersDetails.Image2
                        : "vision image"
                    }`}
                    alt=""
                  />
                  <div className="partnername">
                    <h5>Sam Williamsons</h5>
                    <span>CTO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="contentPartners">
                {/* <h2>Creative Partners</h2> */}
                {partnersData.data && (
                  <h4>{partnersData.data.PartnersDetails.Title}</h4>
                )}
                <p className="normal-Desc">
                {partnersData.data && partnersData.data.PartnersDetails
                  ? partnersData.data.PartnersDetails.description
                     : "loading"}
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
