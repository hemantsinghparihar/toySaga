import React, { useState,useEffect } from "react";
import '../../App.css'
import constants from "../../utils/constants";
import ProductModal from "./ProductModal";

// ========================================

function SingleProduct(props) {
  const products = props.products;
console.log('✌️products --->', products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
console.log('✌️selectedProduct --->', selectedProduct);

  const handleReadMore = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="row">
      {products.data?.ProductDetails.map((prod, index) => {
        return (
          <div className="col-sm-12 col-md-4" key={index}>
            <div className="prod-Box">
              <div className="prod-Img-Box">
                <img
                  src={`${constants.imageURLConstent}${products.data ? prod.Images[0] : "null"}`}
                  alt=""
                />
              </div>
              <div className="prodContent">
                <h5>{products.data ? prod.Title : "title"}</h5>
                <p>{products.data ? prod.Description : "info"}</p>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  handleReadMore(prod);
                }}>
                  {products.data ? prod.Text : "info"}
                </a>
              </div>
            </div>
            
          </div>
        );
      })}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default SingleProduct;


// import React from "react";
// import '../../App.css'
// import constants from "../../utils/constants";

// function SingleProduct(props) {
//   const products = props.products;
 
//   return (
//     <div className="row">
//       {products.data?.ProductDetails.map(prod=>{
//       return(
//         <div className="col-sm-12 col-md-4"  >
//         <div className="prod-Box" >
//           <div className="prod-Img-Box">
//             {/* <img src={prodThree} alt=""/> */}
//             <img
//               src={`${constants.imageURLConstent}${
//                 products.data
//                   ? prod.Image
//                   : "null"
//               }`}
//               alt=""
//             />
//           </div>
//           <div className="prodContent">
//             <h5>
//               {products.data
//                 ? prod.Title
//                 : "title"}
//             </h5>
//             <p>
//               {products.data ?prod.Description : "info"}
//             </p>
//             <a href="#">
//               {products.data ? prod.Text : "info"}
//             </a>
//             {/* <h5>Image title goes here</h5>
//                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//                                     nonumy eirmod tempor invidunt ut labore et dolore magna
//                                     aliquyam erat, sed diam voluptua</p>
//                                 <a href="#">Read More</a> */}
//           </div>
//         </div>
//        </div>
//       )})}
//     </div>
//   );
// }

// export default SingleProduct;
