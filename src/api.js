
export const usersAPI = {
    getUsers: (page) => {
        const response = fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
        return response;
    },
    getPositions: () => {
        const response = fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
        return response;
    }
}

export const authAPI = {
    getToken: () => {
        const response = fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        return response;
    },
    getUser: (userId) => {
        const response = fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users/${userId}`)
        return response;
    },
    authUser: (formData, token) => {
        const response = fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', 
        { method: 'POST', body: formData, headers: { 'Token': token } })
        return response;
    }
}