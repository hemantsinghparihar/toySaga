import React from "react";

function AboutCards(props) {
    const aboutData=props.aboutData;
    const item=props.item;
    const img=props.img;
 if(img=="right"){
    return (
        <section className="Card-content same-space mb-5">
        <div className="container">
          <div className="CardWrapper">
            <div className="row">
              <div className="col-sm-12 col-md-7">
                <div className="Card-box">
                  {/* <h4>Mission</h4> */}
                  {/* <h4>{aboutData?.data[0]?.attributes?.heading}</h4> */}
                  {aboutData.data && (
                    <h4>{aboutData.data.AboutUsDetails[item].Title}</h4>
                  )}
                  {/* <p className="cardDesc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                              diam nonumy eirmod tempor invidunt ut labore et dolore
                              magna aliquyam erat, sed diam voluptua. At vero eos et</p> */}
                  <p className="cardDesc">
                    {aboutData.data
                      ? aboutData.data.AboutUsDetails[item].Description1                      
                      : "loading"}
                  </p>
                  {/* <p className="small-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>- */}
                  <p className="small-desc">
                    {aboutData.data
                      ? aboutData.data.AboutUsDetails[item].Description2
                      : "loading"}
                  </p>
                  -
                  {/* <p className="normal-Desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                 tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                 eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                 takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                 </p> */}
                  <p className="normal-Desc">
                    {aboutData.data
                      ? aboutData.data.AboutUsDetails[item].Description3
                      : "loading"}
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-5">
                <div className="Card-img">
                  {/* <img src={mission} alt=""/> */}
                  {aboutData.data && (
                    <img
                      src={`http://13.201.30.241${aboutData.data.AboutUsDetails[item].ImageUrl
                      }`}
                      alt="mission"
                    />
                  )}
                  {/* <img src={aboutData.data?aboutData.data[0].attributes.image.data.attributes.url:"loading"} alt="mission"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
 }
 if(img=="left"){
    return (
        <section className="Card-content same-space">
        <div className="container">
          <div className="CardWrapper ltrSec mt-0 mb-5">
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div className="Card-img">
                  {/* <img src={vission} alt=""/> */}
                  <img
                    src={`http://13.201.30.241${
                      aboutData.data
                        ? aboutData.data.AboutUsDetails[item].ImageUrl
                        : "vission image"
                    }`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div className="Card-box">
                  {/* <h4>Vision</h4> */}
                  {aboutData.data && (
                    <h4>{aboutData.data.AboutUsDetails[item].Title}</h4>
                  )}
                  <p className="cardDesc">
                    {aboutData.data
                      ? aboutData.data.AboutUsDetails[item].Description1
                      : "loading"}
                  </p>
                  <p className="small-desc">
                    {aboutData.data
                      ? aboutData.data.AboutUsDetails[item].Description2
                      : "loading"}
                  </p>
                  -
                  <p className="normal-Desc">
                    {aboutData.data
                      ? aboutData.data.AboutUsDetails[item].Description3
                      : "loading"}
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
 }
}

export default AboutCards;
