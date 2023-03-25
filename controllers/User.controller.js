const User = require('../models/User.model');

export const UserLogin = async(user) => {
    try {
        const response = await axios.post(`${baseUrl}/users/login`, user);
        return response.data;
    } catch (err) {
        return {
            error:true,
            message:err.message
        }
    }
}