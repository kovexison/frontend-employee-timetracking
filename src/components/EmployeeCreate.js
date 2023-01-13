import React, { useState } from 'react';
import {addEmployee} from "../services/employee";
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';

const EmployeeCreate = () => {
    const [employee, setEmployee] = useState({
        name: '',
        position: '',
        hourlyRate: '',
        isActive: false,
        imageUrl: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleCheckboxChange = (event, data) => {
        setEmployee({ ...employee, isActive: data.checked });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addEmployee(employee);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Name</label>
                <Input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Position</label>
                <Input
                    type="text"
                    name="position"
                    value={employee.position}
                    onChange={handleInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Hourly rate</label>
                <Input
                    type="number"
                    name="hourlyRate"
                    value={employee.hourlyRate}
                    onChange={handleInputChange}
                />
            </Form.Field>
            <Form.Field>
                <Checkbox
                    label='Is active'
                    name="isActive"
                    checked={employee.isActive}
                    onChange={handleCheckboxChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Image url</label>
                <Input
                    type="text"
                    name="imageUrl"
                    value={employee.imageUrl}
                    onChange={handleInputChange}
                />
            </Form.Field>
            <Button type="submit">Create</Button>
        </Form>
    );
};

export default EmployeeCreate;
