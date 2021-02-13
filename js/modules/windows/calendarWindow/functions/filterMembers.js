import store from "../../../store/store";
import { localCalendarStorage } from "../localCalendarStorage/localCalendarStorage";

function filterMembers(){
    const calendarWindow = document.querySelector('.calendarWindow');
    let vaultsHolders = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order');

    vaultsHolders.forEach((item)=>{
        item.querySelector('.calendarWindow__wrapper-content-vaults-order-appeared').style.display="none";
    });
    store.state.forEach((vault, j)=>{
        if(localCalendarStorage.membersStorage.some(name=>vault.members.indexOf(name)!=-1)){
            calendarWindow.querySelector(`[id="${vault.id}"]`).querySelector('.calendarWindow__wrapper-content-vaults-order-appeared').style.display="grid";
        }
    });
}

export default filterMembers;