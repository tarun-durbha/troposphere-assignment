import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ExamFeeService from './services/ExamFeeService'
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton,Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Courses() {

    const [courses,setCourses]=useState([]);
    const location = useLocation();
    const { feeType,nation } = location.state;

    useEffect(()=>{
        getCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getCourses=()=>{
        ExamFeeService.getCoursesForNation(feeType,nation).then(response=>{
            console.log(response);
            setCourses(response.data);
        })
        .catch(error=>{
            console.log("Something Went wrong..",error);
        })
    }

    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Courses">
                { 
                    courses.map((element)=>(
                        <Dropdown.Item 
                        title={element}>
                            <Link 
                                to={"/courseTypes"}
                                class="btn btn-secondary btn-sm"
                                state={{feeType:feeType,nation:nation,course:element}}>
                                    {element}
                            </Link>
                        </Dropdown.Item>
                    ))
                }               
            </DropdownButton>

        </div>
    )
}

export default Courses