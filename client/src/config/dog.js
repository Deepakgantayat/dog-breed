import Axios from 'axios'
 
//localhost:3025

const dog = Axios.create({
    baseURL: 'https://dog.ceo/api'
})

export default dog