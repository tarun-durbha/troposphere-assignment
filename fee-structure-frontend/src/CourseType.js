import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ExamFeeService from './services/ExamFeeService'
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton,Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function CourseType() {
    const [courseType,setCourseType]=useState([]);
    const location = useLocation();
    const { feeType,nation,course } = location.state;
    const [showFee,setShowFee]=useState(false);
    const [feeAmount,setFeeAmount]=useState(0);

    useEffect(()=>{
        getCourseTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getCourseTypes=()=>{
        ExamFeeService.getCourseTypes(feeType,nation,course).then(response=>{
            console.log(response);
            setCourseType(response.data);
        })
        .catch(error=>{
            console.log("Something Went wrong..",error);
        })
    }

    const handleClick=element=>event=>{
        console.log(element);
        ExamFeeService.getFeeAmount(feeType,nation,course,element).then(response=>{
            console.log(response);
            setFeeAmount(response.data);
        })
        .catch(error=>{
            console.log("Something Went wrong..",error);
        })
        setShowFee(true);
    }
      return (
        <div>
                { 
                    courseType.map((element)=>(
                        <button style={{margin:"10px"}}
                            value={element}
                            onClick={handleClick(element)}
                            class="btn btn-primary">
                                 {element}
                        </button>     
                    ))
                }               
            {/* <div>{
                    <>
                        {showFee?{feeAmount}:{feeAmount}}
                    </>
                }
                
            </div> */}
            <h3>Fee to be Paid: {feeAmount}</h3>
        </div>
  )
}

export default CourseType