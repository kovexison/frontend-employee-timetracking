import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getEmployee} from "../services/employee";
import {Card, Image, Button, Label} from 'semantic-ui-react'

const EmployeeDetail = () => {
    const {id} = useParams();
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await getEmployee(id);
                setEmployee(response.data);
            } catch (error) {
                console.log(error);
            };
            fetchData();
        }
    },[id]);

    return (
        <div>
            <Card>
                <Card.Content>
                    <Image src={employee.image} wrapped ui={false} />
                    <Card.Header>{employee.name}</Card.Header>
                    <Card.Meta>
                        <Label color={employee.isActive ? 'green' : 'red'}>
                            {employee.isActive ? 'Active' : 'Inactive'}
                        </Label>
                    </Card.Meta>
                    <Card.Description>
                        {employee.position}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button primary>Edit</Button>
                    <Button secondary>Delete</Button>
                </Card.Content>
            </Card>
        </div>
    )
}

export default EmployeeDetail;