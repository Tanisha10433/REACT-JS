function FreeCourse({ course }) {
    return (
        <>
            <h2>Free Course</h2>
            {course.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.course.join(", ")}</p>
                </div>
            ))}
        </>
    );
}

function PaidCourse({ course }) {
    return (
        <>
            <h2>Paid Course</h2>
            {course.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.course.join(", ")}</p>
                </div>
            ))}
        </>
    );
}

function Course() {
   

    const freeCourses = [
      
    return (
        <>
            <FreeCourse course={freeCourses} />
            <PaidCourse course={paidCourses} />
        </>
    );
}

export default Course
