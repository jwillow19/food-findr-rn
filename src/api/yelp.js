import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 0RUOzyFTAfvbOQH0Fu_VrmEqaSfSqR0pmkcqwPSOWeAP8qHIqJKBh_8U27Prm7SQlCZv-vXQ9P3tHDmQEIpVpUs-P1YkazcK35PUinUyjkUPKlijc24hXGKYQlO7XnYx',
  },
});
