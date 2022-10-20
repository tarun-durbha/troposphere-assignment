import React, { useEffect,useState } from 'react'
import ExamFeeService from './services/ExamFeeService'
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton,Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
function Fee() {

    const [nationalities,setNationalities]=useState([]);
    const location = useLocation()
    const { pathVariable } = location.state

    useEffect(()=>{
        getNationalities(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getNationalities=()=>{
        ExamFeeService.getExamFeeNationalities(pathVariable).then(response=>{
            setNationalities(response.data);
        })
        .catch(error=>{
            console.log("Something Went wrong..",error);
        })
    }
    console.log(nationalities);
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Nationality">
                { 
                    nationalities.map((element)=>(
                        <Dropdown.Item 
                        title={element}>
                            <Link 
                                to={"/courses"}
                                class="btn btn-secondary btn-sm"
                                state={{feeType:pathVariable,nation:element}}>
                                    {element}
                            </Link>
                        </Dropdown.Item>
                    ))
                }               
            </DropdownButton>
        </div>
    ) 
}
export default Fee