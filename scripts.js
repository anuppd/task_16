const students = [
    {
        name: "Emily Patel",
        class: "Class 10",
        marks: 85,
        address: "123 Main St",
    },
    {
        name: "Benjamin Lee",
        class: "Class 9",
        marks: 92,
        address: "456 Elm St",
    },
    { name: "Sophia Kim", class: "Class 10", marks: 88, address: "789 Oak St" },
    {
        name: "Alexander Brown",
        class: "Class 9",
        marks: 79,
        address: "901 Maple St",
    },
    { name: "Ava Chen", class: "Class 10", marks: 95, address: "234 Pine St" },
    {
        name: "Ethan Hall",
        class: "Class 9",
        marks: 82,
        address: "567 Cedar St",
    },
    {
        name: "Lily Tran",
        class: "Class 10",
        marks: 91,
        address: "890 Birch St",
    },
    {
        name: "Noah Martin",
        class: "Class 9",
        marks: 84,
        address: "345 Spruce St",
    },
    {
        name: "Isabella White",
        class: "Class 10",
        marks: 87,
        address: "678 Fir St",
    },
    {
        name: "Julian Sanchez",
        class: "Class 9",
        marks: 80,
        address: "912 Cypress St",
    },
    {
        name: "Sofia Rodriguez",
        class: "Class 10",
        marks: 89,
        address: "345 Walnut St",
    },
    {
        name: "Logan Wright",
        class: "Class 9",
        marks: 81,
        address: "567 Larch St",
    },
];

let studentCard = document.getElementById("studentTemplate");

function getStudentCard(student) {
    let html = studentCard.outerHTML + "";
    html = html.replace("[name]", student.name);
    html = html.replace("[class]", student.class);
    html = html.replace("[marks]", student.marks);
    html = html.replace("[address]", student.address);

    return html;
}

let studentCardList = students.map(getStudentCard);

let studentList = document.getElementById("studentList");
studentList.innerHTML = studentCardList.join("\n");

// search

let searchQuery = document.getElementById("searchBtn");
searchQuery.addEventListener("click", () => {
    let searchTxt = document.getElementById("search").value.toLowerCase();
    let filteredStudents = students.filter((student) => {
        return student.name.toLowerCase().includes(searchTxt);
    });

    studentCardList = filteredStudents.map(getStudentCard);
    studentList.innerHTML = studentCardList.join("\n");
    document.getElementById("searchResult").innerHTML = "Search result for " + searchTxt + "...";
});