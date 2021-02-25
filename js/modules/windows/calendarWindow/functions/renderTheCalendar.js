import store from "../../../store/store";
//import deleteEvent from "./deleteEvent";
import filterMembers from "./filterMembers";
import { logedUser } from "./login";
//import moveVaults from "./moveVaults";
import Vaults from "./vaultsClass";

function renderTheCalendar(){
    const vaultsWrapper = document.querySelector('.calendarWindow__wrapper-content-vaults');
    let vaultsHolders = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order'),
        display;

    vaultsHolders.forEach(item=>{
        item.remove();
    })

    store.state.forEach((item, i)=>{
        if(item.isOrdered){
            display = "grid";
        } else {
            display = "none";
        }
        new Vaults(vaultsWrapper, item.text, item.isOrdered, display, item.id).render();
    });
    //moveVaults();
    filterMembers();
    //deleteEvent();
    if(logedUser){
        logedUser.moveTheEvent();
    }
    if(logedUser){
        logedUser.deleteTheEvent();
    }
    
}

export default renderTheCalendar;