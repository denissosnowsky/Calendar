import store from './modules/store/store';
import calendarComponent from './modules/windows/calendarWindow/calendarWindow';
import creationComponent from './modules/windows/createWindow/createWindow';

window.addEventListener("DOMContentLoaded",()=>{
    calendarComponent();
    creationComponent();
    window.store = store; // it helps to explore the store in the browser console
});