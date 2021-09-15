import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(response => response.data)
}

const create = newObject => {
  console.log(newObject)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

export default {
  getAll,
  create,
}
