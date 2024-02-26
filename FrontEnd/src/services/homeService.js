import axios from "axios";

const getTopHome = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/homes?populate=*"
  );
  return response.data;
};

const getVideoSecHome = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/home-video-secs?populate=*"
  );
  return response.data;
};

const getLogoCarousel = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/logo-carousels?populate=*"
  );
  return response.data;
};

const getTestimonialImages = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/testimonial-images?populate=*"
  );
  return response.data;
};

const homeAPI = {
  getTopHome,
  getVideoSecHome,
  getLogoCarousel,
  getTestimonialImages,
};

export default homeAPI;
