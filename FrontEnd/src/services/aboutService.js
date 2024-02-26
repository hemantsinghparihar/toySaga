import axios from 'axios'

const baseURL='http://localhost:1337/api/about-models?populate=*';

const getAboutSec=async()=>{
    const response=await axios.get(baseURL)
    return response.data;
}

const aboutService={
    getAboutSec,
}

export default aboutService