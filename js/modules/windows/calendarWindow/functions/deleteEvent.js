import { emptyTheVault } from '../../../store/store';
import renderTheCalendar from './renderTheCalendar';

function deleteEvent(){
    const deleteWindow = document.querySelector('.deleteWindow'),
        noAnswer = deleteWindow.querySelector('.deleteWindow__window-answers-no'),
        yesAnswer = deleteWindow.querySelector('.deleteWindow__window-answers-yes'),
        eventNameInTheDeleteWindow = deleteWindow.querySelector('.deleteWindow__window-question-text-span-eventName');

    let deleteButtons = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order-appeared-image'),
        vaultsHoldersForClosing = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order');

    deleteButtons.forEach((btn, i)=>{
        btn.addEventListener('click', (e)=>{
            let nameOfEvent;
            store.state.forEach(vault=>{
                if(vault.id==vaultsHoldersForClosing[i].getAttribute('id')){
                    nameOfEvent=vault.text;
                }
            });
            eventNameInTheDeleteWindow.innerHTML = `"${nameOfEvent}"`;
            deleteWindow.style.display="block";
            noAnswer.addEventListener('click', ()=>{
                deleteWindow.style.display="none";
            });
            yesAnswer.addEventListener('click', ()=>{
                store.state.forEach((deletedItem, j)=>{
                    if(deletedItem.id==vaultsHoldersForClosing[i].getAttribute("id")){
                        emptyTheVault(deletedItem);
                        renderTheCalendar();
                    }
                });
                deleteWindow.style.display="none";
            }, {once: true});
        });
    });
}

export default deleteEvent;