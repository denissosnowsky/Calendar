import memberListButton from "./buttons/memberListButton";
//import newEventButton from "./buttons/newEventButton";
import renderTheCalendar from "./functions/renderTheCalendar";
import login from "./functions/login";


function calendarComponent(){
    login();
    renderTheCalendar();
    memberListButton();
    //newEventButton();
}

export default calendarComponent;