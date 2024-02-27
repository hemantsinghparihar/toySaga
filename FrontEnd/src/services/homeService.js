import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:1337/api', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json', // Set default headers for all requests
  },
});

const fetchData=async(endpoint)=>{
  const response=await instance.get(endpoint);
  return response.data
}

const homeAPI = {
  getTopHome:()=>fetchData("/homes?populate=*"),
  getVideoSecHome: ()=>fetchData("/home-video-secs?populate=*"),
  getLogoCarousel: ()=>fetchData("/logo-carousels?populate=*"),
  getTestimonialImages: ()=>fetchData("/testimonial-images?populate=*"),
};

export default homeAPI;

// const getTopHome = async () => {
//   const response = await instance.get(
//     "/homes?populate=*"
//   );
//   return response.data;
// };

// const getVideoSecHome = async () => {
//   const response = await instance.get(
//     "/home-video-secs?populate=*"
//   );
//   return response.data;
// };

// const getLogoCarousel = async () => {
//   const response = await instance.get(
//     "/logo-carousels?populate=*"
//   );
//   return response.data;
// };

// const getTestimonialImages = async () => {
//   const response = await instance.get(
//     "http://localhost:1337/api/testimonial-images?populate=*"
//   );
//   return response.data;
// };




// const getTopHome = async () => {
//   const response = await axios.get(
//     "http://localhost:1337/api/homes?populate=*"
//   );
//   return response.data;
// };

// const getVideoSecHome = async () => {
//   const response = await axios.get(
//     "http://localhost:1337/api/home-video-secs?populate=*"
//   );
//   return response.data;
// };

// const getLogoCarousel = async () => {
//   const response = await axios.get(
//     "http://localhost:1337/api/logo-carousels?populate=*"
//   );
//   return response.data;
// };

// const getTestimonialImages = async () => {
//   const response = await axios.get(
//     "http://localhost:1337/api/testimonial-images?populate=*"
//   );
//   return response.data;
// };

// const homeAPI = {
//   getTopHome,
//   getVideoSecHome,
//   getLogoCarousel,
//   getTestimonialImages,
// };

// export default homeAPI;
