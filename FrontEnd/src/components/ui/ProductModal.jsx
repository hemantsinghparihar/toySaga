
import React, { useEffect } from "react";
import constants from "../../utils/constants";
// import ProductEmblaCarousel from "./ProductEmblaCarousel";
import '../../embla.css'
import ProductEmblaCarousel from "./ProductEmblaCarousel";


function ProductModal({ product, onClose }) {
  const Images=product.Images
console.log('✌️Images --->', Images);
  const OPTIONS = {}
  const SLIDE_COUNT = 5
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  if (!product) return null;

  useEffect(() => {
        // Add event listener to close the modal on click outside
        const handleClickOutside = (event) => {
          if (event.target.classList.contains('modal')) {
            onClose();
          }
        };
        window.addEventListener('click', handleClickOutside);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('click', handleClickOutside);
        };
      }, [onClose]);

  return (
    <div className="modal">
      <div className="modal-content">
        {/* <button className="close" onClick={onClose}>x</button> */}
        <div className="modal-body">

          <div className="modal-image">
            {/* <img src={`${constants.imageURLConstent}${product.Image}`} alt={product.Title} /> */}
            
            <ProductEmblaCarousel slides={SLIDES} options={OPTIONS} Images={Images} />
          </div>

          <div className="modal-details">
            <h1>{product.Title}</h1>
            <p>{product.Description}</p>
            <a href={`${product.Link}`} target="blank">Visit Amazon </a>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProductModal;







// const ProductModal = ({ product, onClose }) => {
// //   useEffect(() => {
// //     // Add event listener to close the modal on click outside
// //     const handleClickOutside = (event) => {
// //       if (event.target.classList.contains('modal')) {
// //         onClose();
// //       }
// //     };
// //     window.addEventListener('click', handleClickOutside);

// //     // Cleanup the event listener on component unmount
// //     return () => {
// //       window.removeEventListener('click', handleClickOutside);
// //     };
// //   }, [onClose]);

//   return (
//     <div className="modal fade show"  aria-modal="true" role="dialog" style={{ display: "block", zIndex: 1050 }}>
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-body">
//             <div className="row">
//               <div className="col-md-6">
//                 <img
//                   src={`${constants.imageURLConstent}${product.Image}`}
//                   alt={product.Title}
//                   className="img-fluid"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <h5 className="modal-title">{product.Title}</h5>
//                 <p>{product.Description}</p>
//                 <button type="button" className="btn btn-secondary" onClick={onClose}>
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>
//     </div>
//   );
// };




//  the working component -******************************* 

// const ProductModal = ({ product, onClose }) => {
//   useEffect(() => {
//     // Add event listener to close the modal on click outside
//     const handleClickOutside = (event) => {
//       if (event.target.classList.contains('modal')) {
//         onClose();
//       }
//     };
//     window.addEventListener('click', handleClickOutside);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('click', handleClickOutside);
//     };
//   }, [onClose]);

//   return (
//     <div className="modal fade show "  style={{ display: "block", zIndex: 1050 }}>
//       <div className="modal-dialog modal-dialog-centered parent-main-product-card " >
//         <div className="modal-content main-product-card" >
//           <div className="modal-body ">
//             <div className="rowProduct">
//               <div className="left-product" >
                
//                 <img 
//                   src={`${constants.imageURLConstent}${product.Image}`}
//                   alt={product.Title}
//                   className="img-fluid"
//                 />
//               </div>
//               <div className="right-product">
//                 <h5 className="modal-title">{product.Title}</h5>
//                 <p>{product.Description}</p>
//                 <button type="button" className="btn btn-secondary" onClick={onClose}>
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
   
//     </div>
//   );
// };
