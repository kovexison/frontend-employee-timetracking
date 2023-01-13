import React, {useState, useEffect} from 'react';
import {getEmployees} from "../services/employee";
import {List, Image, Label, Button} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {calculateEmployeeWorkTime} from "../services/clockinout";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
       const fetchData = async() => {
           try {
               const response = await getEmployees();
               setEmployees(response.data);
           } catch (error) {
               console.log(error);
           }
       };
       fetchData();
    }, []);

    const getTotalWorkedHoursForEmployee = async (employeeId) => {
        try {
            const response = await calculateEmployeeWorkTime(employeeId);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <List divided>
            {employees.map(async (employee) => {
                const totalWorkedHours = await getTotalWorkedHoursForEmployee(employee.id);
                return (
                    <List.Item key={employee.id}>
                        <Image avatar src={employee.image} />
                        <List.Content>
                            <List.Header as='a'>{employee.name}</List.Header>
                            <List.Description>
                                {employee.position}
                                <Label color={employee.isActive ? 'green' : 'red'}>
                                    {employee.isActive ? 'Active' : 'Inactive'}
                                </Label>
                                <Label>Total Worked Hours: {totalWorkedHours}</Label>
                            </List.Description>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button as={Link} to={`/employees/${employee.id}`} primary>View</Button>
                            <Button as={Link} to={`/employees/${employee.id}/clock`} secondary>Clock In/Out</Button>
                        </List.Content>
                    </List.Item>
                )
            })}
        </List>
    )
}

export default EmployeeList;