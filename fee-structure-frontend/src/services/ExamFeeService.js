import httpClient from '../http-common';

const getExamFeeNationalities=(feeType)=>{
    return httpClient.get(`/get/nationalities/${feeType}`);
}

const getCoursesForNation=(feeType,nation)=>{
    return httpClient.get(`/get/courses/${feeType}/${nation}`);
}

const getCourseTypes=(feeType,nation,course)=>{
    return httpClient.get(`/get/courseTypes/${feeType}/${nation}/${course}`)
}

const getFeeAmount=(feeType,nation,course,courseType)=>{
    return httpClient.get(`/get/feeAmount/${feeType}/${nation}/${course}/${courseType}`)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {getExamFeeNationalities,
                getCoursesForNation,
                getCourseTypes,
                getFeeAmount
            };