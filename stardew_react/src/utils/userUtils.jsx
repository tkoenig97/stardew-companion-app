import axios from 'axios'

export const signUp = async(firstName, lastName, password, email) => {
    let response = await axios.post('/signup/', {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': password
    })
    return response.data.success
}