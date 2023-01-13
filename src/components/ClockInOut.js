import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {clockIn, clockOut, calculateEmployeeWorkTime} from "../services/clockinout";

import {Button, Label} from 'semantic-ui-react';



const ClockInOut = () => {
    const {id} = useParams();
    const [employee, setEmployee] = useState({});
    const [isClockedIn, setIsClockedIn] = useState(false);
    const [workTime, setWorkTime] = useState(0);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await calculateEmployeeWorkTime(id);
                setWorkTime(response.data);
                setIsClockedIn(response.data.isClockedIn);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    const handleClockIn = async () => {
        try {
            await clockIn(id);
            setIsClockedIn(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleClockOut = async () => {
        try {
            await clockOut(id);
            setIsClockedIn(false);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div>
            <Button
                primary={!isClockedIn}
                secondary={isClockedIn}
                onClick={isClockedIn ? handleClockOut : handleClockIn}
                size="large"
                style={{margin:"10px"}}
            >
                {isClockedIn ? 'Clock Out' : 'Clock In'}
            </Button>
            <Label size="large" style={{margin:"10px"}}>
                Work Time: {workTime}
            </Label>
        </div>
    )
}

export default ClockInOut;