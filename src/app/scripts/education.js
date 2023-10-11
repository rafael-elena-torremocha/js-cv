var education = [
    {
        focus: "Developer C",
        school: "Telefonica Tech 42",
        description: "Student of telefonica fundation 42 Málaga, programing on C",
        year: "2023",
        city: "Málaga",
    },
    {
        focus: "Front End Developer",
        school: "Upgrade Hub",
        description: "Certificated on FrontEnd developer with Html, Css, Javascript & React",
        year: "2021",
        city: "Madrid",
    },
    {
        focus: "Graphic Designer & Motion Graphics",
        school: "EA, san Telmo",
        description: "Certificated on Graphic design & Motion",
        year: "2012-2016",
        city: "Madrid",
    },
    {
        focus: "Photography Technician",
        school: "EA, san Telmo",
        description: "Certificated on photography Technician",
        year: "2011-2014",
        city: "Madrid",
    }
];

var onLoadEducation = () => {
    var educationList = document.getElementById("education_list");
  education.forEach((educ) => {
    var li = document.createElement('li');
    li.setAttribute('class', 'education-list__item');
    li.innerHTML = educ.focus + '|' + educ.school + '|' + educ.description + '|' + educ.year + '|' + educ.city;
    educationList.appendChild(li);
  });
}

var toggleEducation = () => {
    console.log('toggleEducation');
    var education = document.getElementById("education");
    if (education.style.display === "none") {
      education.style.display = "block";
    } else {
      education.style.display = "none";
    }
  }
  
export { onLoadEducation, toggleEducation };

