import { onLoadPersonalInfo } from './scripts/personalInfo';
import { onLoadExperience, toggleExperience } from './scripts/experience';

import './styles/styles.scss';

var addListeners = () =>{
    document.getElementById("btn_hide_experience").addEventListener("click", toggleExperience);
}

window.onload = () => {
    onLoadPersonalInfo();
    onLoadExperience();

    addListeners();
};