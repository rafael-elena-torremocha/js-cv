import { onLoadPersonalInfo } from './scripts/personalInfo';
import { onLoadExperience, toggleExperience } from './scripts/experience';
import { onLoadEducation, toggleEducation } from './scripts/education';

import './styles/styles.scss';


var addListeners = () =>{
    document.getElementById("btn_hide_experience").addEventListener("click", toggleExperience);
    document.getElementById("btn_hide_education").addEventListener("click", toggleEducation);
}

window.onload = () => {
    onLoadPersonalInfo();
    onLoadExperience();
    onLoadEducation();
    addListeners();
};

