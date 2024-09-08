window.onload = function () {
  const studentName = localStorage.getItem("studentName");
  const studentID = localStorage.getItem("studentID");
  const studentScore = localStorage.getItem("studentScore");

  if (studentName && studentID && studentScore) {
    document.getElementById("studentName").textContent = studentName;
    document.getElementById("studentID").textContent = studentID;
    document.getElementById("studentScore").textContent = `${studentScore}%`;
  } else {
    document.getElementById("studentName").textContent = "Not Available";
    document.getElementById("studentID").textContent = "Not Available";
    document.getElementById("studentScore").textContent = "Not Available";
  }
};
