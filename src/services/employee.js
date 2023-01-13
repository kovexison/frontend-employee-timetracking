import axios from 'axios';

export const getEmployees = () => {
    return axios.get('http://localhost:3000/employees');
}

export const getEmployee = (id) => {
    return axios.get("http://localhost:3000/${id}")
}

export const addEmployee = (employee) => {
    return axios.post("http://localhost:3000/", employee);
}

export const updateEmployee = (id, employee) => {
    return axios.put('http://localhost:3000/${id}', employee);
}

export const deleteEmployee = (id) => {
    return axios.delete('http://localhost:3000/${id}')
}

