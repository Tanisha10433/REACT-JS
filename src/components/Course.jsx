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
    const paidCourses = [
        {
            id: 1,
            course: ["html", "css", "javascript"],
            name: "akhil"
        },
        {
            id: 2,
            course: ["html", "css", "javascript"],
            name: "ankush"
        }
    ];

    const freeCourses = [
        {
            id: 1,
            course: ["html", "css", "javascript"],
            name: "akhil"
        },
        {
            id: 2,
            course: ["react", "angular", "typescript"],
            name: "ankush"
        }
    ];

    return (
        <>
            <FreeCourse course={freeCourses} />
            <PaidCourse course={paidCourses} />
        </>
    );
}

export default Course
