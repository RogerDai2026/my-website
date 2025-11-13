// API Configuration
const config = {
  development: {
    API_BASE_URL: 'http://localhost:5001'
  },
  production: {
    API_BASE_URL: 'https://my-website-production-e80d.up.railway.app' // Your Railway URL
  }
};

const environment = process.env.NODE_ENV || 'development';
export default config[environment];