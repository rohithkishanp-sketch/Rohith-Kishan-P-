
const form = document.getElementById("marksForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const inputs = ["mark1", "mark2", "mark3"];
    const marks = inputs.map(id => Number(document.getElementById(id).value));

    if (!name || marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
        alert("Enter a valid name and marks between 0 and 100.");
        return;
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = total / marks.length;
    const passed = marks.every(mark => mark >= 35);

    let grade = "F";
    if (passed && percentage >= 90) grade = "A+";
    else if (passed && percentage >= 80) grade = "A";
    else if (passed && percentage >= 70) grade = "B";
    else if (passed && percentage >= 60) grade = "C";
    else if (passed && percentage >= 50) grade = "D";
    else if (passed) grade = "E";

    result.hidden = false;
    result.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = "Student Result";
    result.appendChild(heading);

    const details = [
        `Name: ${name}`,
        `Total: ${total} / 300`,
        `Percentage: ${percentage.toFixed(2)}%`,
        `Grade: ${grade}`,
        `Status: ${passed ? "PASS" : "FAIL"}`
    ];

    details.forEach(detail => {
        const line = document.createElement("p");
        line.textContent = detail;
        result.appendChild(line);
    });
});
