import { useState } from 'react'

function FreeCourse({course}){
    return(
        <>
        <h1>Free Course</h1>
        <p>{course}</p>
        </>
    )
}
function PaidCourse({course}){
    return(
        <>
        <h1>Paid Course</h1>
        <p>{course}</p>
        </>
    )
}
function Course(){
   const [course]=useState("Web Development")
    return(
        <>
        < paidCourse course={course}/>
        <div> Course!</div>
        <FreeCourse course={course}/>
        </>
    )
}

export default Course