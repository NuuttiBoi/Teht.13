import axios from 'axios'
const baseUrl = 'http://localhost:3001/reviews'
import people from './data';


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const removeReview = (id) => {
    window.confirm("Are you sure you want to delete this review?");
    axios
        .delete(people.id)
        .then(response => {
            console.log('success!')
        })
        .catch(error => {
            console.log('fail')
        })
}

const services = { getAll, create, update, removeReview }

export default services