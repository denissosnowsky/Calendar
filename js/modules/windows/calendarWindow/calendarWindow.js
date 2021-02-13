import memberListButton from "./buttons/memberListButton";
import newEventButton from "./buttons/newEventButton";
import renderTheCalendar from "./functions/renderTheCalendar";


function calendarComponent(){
    renderTheCalendar();
    memberListButton();
    newEventButton();
}

export default calendarComponent;
