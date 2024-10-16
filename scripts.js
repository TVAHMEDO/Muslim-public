const students = [
    { name: "Sohail", rollNumber: 45206, marks: { Sindhi: 100, English: 100, Science: 100, Math: 100, Urdu: 100, Islamiyat: 100 }, total: 700, percentage: 100 },
    { name: "akaoa", rollNumber: 45207, marks: { Sindhi: 30, English: 30, Science: 30, Math: 30, Urdu: 30, Islamiyat: 30 }, total: 180, percentage: 25.71 },
    { name: "jsnsla", rollNumber: 45208, marks: { Sindhi: 50, English: 50, Science: 50, Math: 50, Urdu: 50, Islamiyat: 50 }, total: 300, percentage: 42.86 }
];

const adminCredentials = { username: "AHMED_XD", password: "MUSLIM" };

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("admin-dashboard").style.display = "block";
    } else {
        alert("Incorrect credentials.");
    }
});

function searchStudent() {
    const rollSearch = document.getElementById("rollSearch").value;
    const student = students.find(s => s.rollNumber == rollSearch);
    
    if (student) {
        displayStudentDetails(student);
    } else {
        alert("Student not found!");
    }
}

function displayStudentDetails(student) {
    const table = document.getElementById("result-table");
    const studentResultDiv = document.getElementById("student-result");
    studentResultDiv.style.display = "block";

    // Clear previous results
    table.innerHTML = `
        <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Sindhi</th>
            <th>English</th>
            <th>Science</th>
            <th>Math</th>
            <th>Urdu</th>
            <th>Islamiyat</th>
            <th>Total Marks</th>
            <th>Percentage</th>
            <th>download pdf</th>
        </tr>
    `;

    const row = table.insertRow();
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.rollNumber}</td>
        <td>${student.marks.Sindhi}</td>
        <td>${student.marks.English}</td>
        <td>${student.marks.Science}</td>
        <td>${student.marks.Math}</td>
        <td>${student.marks.Urdu}</td>
        <td>${student.marks.Islamiyat}</td>
        <td>${student.total}</td>
        <td>${student.percentage}%</td>
        <td><button onclick="downloadPDF(${student.rollNumber})">Download</button></td>
    `;
}

function downloadPDF(rollNumber) {
    const student = students.find(s => s.rollNumber === rollNumber);
    const doc = new jsPDF();
    doc.text(`Result for ${student.name} (Roll Number: ${student.rollNumber})`, 10, 10);
    let yPosition = 20;
    for (let subject in student.marks) {
        doc.text(`${subject}: ${student.marks[subject]}/100`, 10, yPosition);
        yPosition += 10;
    }
    doc.text(`Total Marks: ${student.total}`, 10, yPosition);
    doc.text(`Percentage: ${student.percentage}%`, 10, yPosition + 10);
    doc.save(`${student.name}_Result.pdf`);
}

function logout() {
    document.getElementById("login-page").style.display = "block";
    document.getElementById("admin-dashboard").style.display = "none";
}