import axios from "axios";

const instance = axios.create({
  baseURL: 'http://13.201.30.241/auth', 
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
  getTopHome:()=>fetchData("/home-page/api/slider"),
  getVideoSecHome: ()=>fetchData("/home-page/api/video-section"),
  getLogoCarousel: ()=>fetchData("/home-page/api/logo-section"),
  getTestimonial: ()=>fetchData("/home-page/api/testimonial"),
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
