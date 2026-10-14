function FreeCourse(){
    const name="Ankush";
    return(
        <div> {name}</div>
    )
}
function Course(){
    return(
        <>
            <FreeCourse />
            <div>Course</div>
        </>
    )
}
export default Course