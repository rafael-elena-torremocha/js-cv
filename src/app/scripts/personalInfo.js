var personalInfo = {
  name: "Rafael Elena Torremocha",
  mail: "torremocha.rafael@gmail.com",
  phone: "666861134",
};


var onLoadPersonalInfo = () => {
  var myName = document.getElementById("personal_info_name");
  myName.innerHTML = personalInfo.name;

  var myMail = document.getElementById("personal_info_mail");
  myMail.innerHTML = personalInfo.mail;

  var myPhone = document.getElementById("personal_info_phone");
  myPhone.innerHTML = personalInfo.phone;
}

export { onLoadPersonalInfo };
