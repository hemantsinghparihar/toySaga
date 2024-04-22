import React, { useEffect, useState } from "react";
// import InstitutionCSR from "../services/instituteCSR";
//import institutionAndCSR from "../services/instituteCSR";
import services from "../services/services";
//import download from "./assets/images/Download.png";
//import { useForm } from "react-hook-form";
import Form from "../components/ui/Form";
import PageTop from "../components/ui/PageTop";
import constants from "../utils/constants";

function Institution() {
  const [institute, setInstitute] = useState({});
  console.log("✌️institute --->", institute);
  useEffect(() => {
    const element = document.getElementById("header");
    element.scrollIntoView(true);
    document.title = "ToySaga || Institution";
  }, []);
  useEffect(() => {
    services.getInstitution().then((res) => {
      setInstitute(res);
    });
  }, []);

 
  return (
    <div>
      <main className="Institution-page">
      <PageTop pageTitle={"Institution"}/>

        <section className="Card-content same-space mb-5">
          <div className="container">
            <div className="CardWrapper">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                <Form action={"#"} />
                  {/* <div className="Collaborate-form">
                    <form action="#" onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-title">
                        <h5>Fill the form</h5>
                      </div>
                      <div className="inputGroup">
                        <input
                          type="text"
                          className="inputField"
                          placeholder="Full Name"
                          name="fullName"
                          {...register("fullName", { required: true })}
                        />
                        {errors.fullName?.type == "required" && (
                          <span>name is required</span>
                        )}
                      </div>
                      <div className="inputGroup">
                        <input
                          type="email"
                          className="inputField"
                          placeholder="Email"
                          name="email"
                          {...register("email", { required: true })}
                        />
                        {errors.email?.type == "required" && (
                          <span>email is required</span>
                        )}
                      </div>
                      <div className="inputGroup">
                        <input
                          type="tel"
                          className="inputField"
                          placeholder="Phone No"
                          name="number"
                          {...register("number", { required: true })}
                        />
                        {errors.number?.type == "required" && (
                          <span>number is required</span>
                        )}
                      </div>
                      <div className="inputGroup">
                        <textarea
                          className="inputField"
                          placeholder="Message"
                          name="message"
                          {...register("message", { required: true })}
                        ></textarea>
                        {errors.message?.type == "required" && (
                          <span>message is required</span>
                        )}
                      </div>
                      <button className="radiusBtn fillBtn">Submit Now</button>
                    </form>
                  </div> */}
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="DownloadPdf">
                    <div className="DownloadPdfContent">
                      <span className="DownloadPdfIcon">
                        {/* <img src={download} alt=""/> */}
                        <img
                          src={`${constants.imageURLConstent}${
                            institute.data
                              ? institute.data.InstitutionDetails.Image
                              : "loading"
                          }`}
                          alt=""
                        />
                      </span>

                      <h5>
                        {institute.data
                          ? institute.data.InstitutionDetails.Title
                          : ""}
                      </h5>
                      <p>
                        {institute.data
                          ? institute.data.InstitutionDetails.Description
                          : ""}
                      </p>
                    
                    </div>

                    <button className="radiusBtn">DOWNLOAD PDF</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Institution;
