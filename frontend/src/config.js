// API Configuration
const config = {
  development: {
    API_BASE_URL: 'http://localhost:5001'
  },
  production: {
    API_BASE_URL: 'https://your-railway-url.railway.app' // Update this with your Railway URL
  }
};

const environment = process.env.NODE_ENV || 'development';
export default config[environment];