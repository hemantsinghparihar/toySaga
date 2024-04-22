import React, { useState, useEffect } from "react";
//import { useForm } from "react-hook-form";
//import Content from "../../services/collabService";
//import contentData from "../../services/collabService";
import services from "../../services/services";
import Form from "./Form";

function SingleContent(props) {
  const content=props.content;
  // const item=props.item
  const details=props.details
  return (
    <div className="tab-pane active" role="tabpanel">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-7">
          <div className="Collaborate-content">
          {content.data && content.data[details] ? (
              <>
                <h2>{content.data[details].Title}</h2>
                <p className="cardDesc">{content.data[details].Description1}</p>
                <p className="small-desc">{content.data[details].Description2}</p>
                <p className="normal-Desc">{content.data[details].Description3}</p>
              </>
            ) : (
              <div>Loading...</div>
            )}
           
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5">
          <Form action={"#"} />
        </div>
      </div>
    </div>
  );
}

function CollabContent(props) {
  const activeLink = props.activeLink;
  const [contentSuppliers, setContentSupliers] = useState({});
console.log('✌️content --->', contentSuppliers);
const [contentDistributer, setContentDistributer] = useState({});

const [contentSuperstockist, setContentSuperstockist] = useState({});

  useEffect(() => {
    //changes-----------
    services.getCollabContentSuppliers().then((res) => {
      setContentSupliers(res);
    });
    services.getCollabContentDistributers().then((res) => {
      setContentDistributer(res);
    });
    services.getCollabContentSuperstokists().then((res) => {
      setContentSuperstockist(res);
    });
  }, []);

 
  return (
    <div>
      {activeLink === 1 && (
        // id="Suppliers"
        <SingleContent content={contentSuppliers}  details={'SuppliersDetails'}/>
      )}

      {activeLink === 2 && (
        <SingleContent content={contentDistributer}  details={'DistributersDetails'}/>
      )}

      {activeLink === 3 && (
        //id="SuperStockists"
        <SingleContent content={contentSuperstockist}  details={'SuperStokistsDetails'}/>
      )}
    </div>
  );
}

export default CollabContent;
