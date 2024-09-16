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
<h2><b>Resume</b></h2>
<h3>Personal Informaion</h3>
<p><b>Name:</b> ${name}</p>
<p><b>fathername:</b> ${fathername}</p>
<p><b>Phone number:</b> ${Phone}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Address:</b> ${Address}</p>

<h3>Education</h3>
<p>${Education}</p>

<h3>Skills</h3>
<p>${Skills}</p>

<h3>Work Experience</h3>
<p>${WorkExperience}</p>
`;

if (resumeDisplayelement) {   
    resumeDisplayelement.innerHTML = resumeoutput;
}else{
    console.error('The Resume Display Element is Missing!');
}

});
  

