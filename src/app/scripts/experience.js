var experience = [
  {
    nameJob: "Motion Graphics Desginer",
    companyName: "Freepik Company",
    date: '2021 - Now',
  },
  {
    nameJob: "Designer & Motion Graphics",
    companyName: "Burns",
    date: '2018 - 2021',
  },
  {
    nameJob: "Designer & Motion Graphics",
    companyName: "Pumalu, SL",
    date: '2020 - Now',
  }
];

var onLoadExperience = () => {
  console.log('onLoadExperience');
  var experienceList = document.getElementById("experience_list");
  experience.forEach((job) => {
    console.log(job);
    var li = document.createElement('li');
    li.setAttribute('class', 'experience-list__item');
    li.innerHTML = job.nameJob + ' | ' + job.companyName;
    experienceList.appendChild(li);
  });
}

var toggleExperience = () => {
  console.log('toggleExperience');
  var experience = document.getElementById("experience");
  if (experience.style.display === "none") {
    experience.style.display = "block";
  } else {
    experience.style.display = "none";
  }
}

export { onLoadExperience, toggleExperience };
