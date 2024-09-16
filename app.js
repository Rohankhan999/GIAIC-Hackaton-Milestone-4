// Get refrence to the form and display area//
var form = document.getElementById('resume-form');
var resumeDisplayelement = document.getElementById('resume-display');
// handle form submission//
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values//
    var name = document.getElementById('Name').value;
    var fathername = document.getElementById('fathername').value;
    var Phone = document.getElementById('phno').value;
    var email = document.getElementById('email').value;
    var Address = document.getElementById('Address').value;
    var Education = document.getElementById('Education').value;
    var Skills = document.getElementById('Skills').value;
    var WorkExperience = document.getElementById('WorkExperience').value;
    //Generate the resume content dynamicaly//
    var resumeoutput = "\n<h2><b> Editable Resume</b></h2>\n<h3>Personal Informaion</h3>\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Father name:</b> <span contenteditable=\"true\">").concat(fathername, "</span></p>\n<p><b>Phone number:</b> <span contenteditable=\"true\">").concat(Phone, "</span></p>\n<p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Address:</b> <span contenteditable=\"true\">").concat(Address, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(Education, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(Skills, "</p>\n\n<h3>Work Experience</h3>\n<p contenteditable=\"true\">").concat(WorkExperience, "</p>\n");
    if (resumeDisplayelement) {
        resumeDisplayelement.innerHTML = resumeoutput;
    }
    else {
        console.error('The Resume Display Element is Missing!');
    }
});
