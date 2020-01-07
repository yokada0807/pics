import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f8ab81398d294d2f23cbf75dd408a15652fa85f6c3afbf4ceaa636902b4151f1'
    // Authorization: Client-ID YOUR_ACCESS_KEY
  }
});
