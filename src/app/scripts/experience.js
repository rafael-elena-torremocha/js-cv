var experience = [
  {
    nameJob: "Lead Teacher",
    companyName: "Upgrade Hub",
    date: '2019 - Now',
  },
  {
    nameJob: "Frontend Developer & Consultant",
    companyName: "Minsait",
    date: '2017 - Now',
  }
];

var onLoadExperience = () => {
  console.log('onLoadExperience');
  // var experienceList = document.getElementById("experience_list");
  // experience.forEach((job) => {
  //   console.log(job);
  //   var li = document.createElement('li');
  //   li.setAttribute('class', 'experience-list__item');
  //   li.innerHTML = job.nameJob + ' | ' + job.companyName;
  //   experienceList.appendChild(li);
  // });
}

var toggleExperience = () => {
  console.log('toggleExperience');
  // var experience = document.getElementById("experience");
  // if (experience.style.display === "none") {
  //   experience.style.display = "block";
  // } else {
  //   experience.style.display = "none";
  // }
}

export { onLoadExperience, toggleExperience };
