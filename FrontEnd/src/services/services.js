import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1337/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchData = async (endpoint) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

const services = {
  getAboutSec: () => fetchData('/about-models?populate=*'),
  getCollabContent: () => fetchData('/collaborates'),
  getInstitutionCSR: () => fetchData('/institution-csrs?populate=*'),
  getTestimonials: () => fetchData('/testimonials?populate=*'),
  getProducts: () => fetchData('/products?populate=*'),
};

export default services;


// import axios from 'axios'

// // const baseURL='http://localhost:1337/api/about-models?populate=*';

// const instance = axios.create({
//     baseURL: 'http://localhost:1337/api', 
//     timeout: 5000, 
//     headers: {
//       'Content-Type': 'application/json', // Set default headers for all requests
//     },
//   });


//   const getAboutSec=async()=>{
//          const response=await instance.get('/about-models?populate=*')
//          return response.data;
//      }


//    const getCollabContent=async()=>{
//         const response=await instance.get('/collaborates')
//         return response.data
//     }

//     const getInstitutionCSR=async()=>{
//       const response=await instance.get('/institution-csrs?populate=*');
//       return response.data
//    }

//    const getTestimonials=async()=>{
//     const response=await instance.get('/testimonials?populate=*')
//     return response.data;
// }

// const getProducts=async()=>{
//   const response=await instance.get('/products?populate=*')
//   return response.data;
// }

    
// // const getAboutSec=async()=>{
// //     const response=await axios.get(baseURL)
// //     return response.data;
// // }

// const services={
//     getAboutSec,
//     getCollabContent,
//     getInstitutionCSR,
//     getTestimonials,
//     getProducts
// }

// export default services