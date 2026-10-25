import { useState } from 'react'

function FreeCourse({freeCourse}){
    return(
        <>
        <h1>Free Course</h1>
        <p>{freeCourse}</p>
        </>
    )
}
function PaidCourse({paidCourse}){
    return(
        <>
        <h1>Paid Course</h1>
        <p>{paidCourse}</p>
        </>
    )
}
function Course(){
    const[freeCourse]=useState("Html,Css,Js")
    const[paidCourse]=useState("React,Node,Express,MongoDB")
    return(
        <>
        <PaidCourse paidCourse={paidCourse}/>
        <FreeCourse freeCourse={freeCourse}/>
        </>
    )
}

export default Course