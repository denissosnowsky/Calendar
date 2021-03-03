import memberListButton from "./buttons/memberListButton";
import renderTheCalendar from "./functions/renderTheCalendar";
import { login} from "./functions/login";
import { fromStringToArray, getData } from "../../api";
import { Admin, User } from "../../store/userClasses";

let logedUser;
function calendarComponent(){
        login();
        getData('admins')
            .then((json) => json[0].data)
            .then((data)=>fromStringToArray(data))
            .then(admins=>{
                const confirmBtn = document.querySelector('.loginWindow__window-answers-confirm'),
                    createBtn = document.querySelector('.calendarWindow__wrapper-header-addButton-button'),
                    loginWindow = document.querySelector('.loginWindow'),
                    listBtnTextSpan = document.querySelector('.loginWindow__window-selection-listInput-button-text span');
                    confirmBtn.addEventListener('click', ()=>{
                        let chosenName = listBtnTextSpan.innerHTML;
                        if(chosenName.length>0){
                            if(admins.indexOf(chosenName)!=-1){
                                logedUser = new Admin(chosenName);
                                logedUser.createEvent();
                            }else{
                                logedUser = new User(chosenName);
                                createBtn.style.opacity = '.5';
                            }
                            loginWindow.style.display = 'none';
                            renderTheCalendar();
                            memberListButton();
                        }
                    });
            });

}

export default calendarComponent;
export {logedUser};