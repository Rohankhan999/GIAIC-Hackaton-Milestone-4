// Get refrence to the form and display area//
const form = document.getElementById('resume-form');
const resumeDisplayelement = document.getElementById('resume-display');


// handle form submission//
form.addEventListener("submit", (event) => {
    event.preventDefault();//prevent page reload

    //collect input values//
    const name = (document.getElementById('Name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value
    const Phone = (document.getElementById('phno') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const Address = (document.getElementById('Address') as HTMLInputElement).value
    const Education = (document.getElementById('Education') as HTMLTextAreaElement).value
    const Skills = (document.getElementById('Skills') as HTMLTextAreaElement).value
    const WorkExperience = (document.getElementById('WorkExperience') as HTMLTextAreaElement).value


//Generate the resume content dynamicaly//
const resumeoutput = `
<h2><b> Editable Resume</b></h2>
<h3>Personal Informaion</h3>
<p><b>Name:</b> <span contenteditable="true">${name}</span></p>
<p><b>Father name:</b> <span contenteditable="true">${fathername}</span></p>
<p><b>Phone number:</b> <span contenteditable="true">${Phone}</span></p>
<p><b>Email:</b> <span contenteditable="true">${email}</span></p>
<p><b>Address:</b> <span contenteditable="true">${Address}</span></p>

<h3>Education</h3>
<p contenteditable="true">${Education}</p>

<h3>Skills</h3>
<p contenteditable="true">${Skills}</p>

<h3>Work Experience</h3>
<p contenteditable="true">${WorkExperience}</p>
`;

if (resumeDisplayelement) {   
    resumeDisplayelement.innerHTML = resumeoutput;
}else{
    console.error('The Resume Display Element is Missing!');
}

});
  

