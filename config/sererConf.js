const port = process.env.PORT || 3200
const mongodb = 'mongodb://localhost:27017/vue-login'
const baseApi = 'api';
const secret = 'jwt_secret';
//const secret = fs.readFileSync('/path/to/public.pub');
const publicApi = [/\/register/,/\/login/];

export {port,mongodb,baseApi,secret,publicApi}