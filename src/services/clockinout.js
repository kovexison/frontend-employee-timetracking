import axios from "axios";

export const clockIn = (employeeId) => {
    return axios.post('https://localhost:3000/${employeeId}/clock-in');
}

export const clockOut = (employeeId) => {
    return axios.post('http://localhost:3000/${employeeId}/clock-out');
}

export const calculateEmployeeWorkTime = (employeeId) => {
    return axios.get("http://localhost:3000/${employeeId}/work-time");
}