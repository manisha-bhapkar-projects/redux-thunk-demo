let API_BASE_URL = 'https://run.mocky.io/v3/'

export default {
    API_BASE_URL: !process.env.REACT_APP_API_BASE_URL ? API_BASE_URL : process?.env?.REACT_APP_API_BASE_URL
} 