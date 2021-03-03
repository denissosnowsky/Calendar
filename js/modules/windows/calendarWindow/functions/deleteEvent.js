import { fromStringToObject, getData, putData } from '../../../api';
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
            getData('events')
            .then(events=>{
                events.forEach(obj=>{
                    let newObj = fromStringToObject(obj.data);
                    if(newObj.id==vaultsHoldersForClosing[i].getAttribute('id')){
                        nameOfEvent=newObj.text;
                    }
                })
                eventNameInTheDeleteWindow.innerHTML = `"${nameOfEvent}"`;
                deleteWindow.style.display="block";
                noAnswer.addEventListener('click', ()=>{
                    deleteWindow.style.display="none";
                });
                yesAnswer.addEventListener('click', ()=>{
                    events.forEach(obj=>{
                        let newObj = fromStringToObject(obj.data);
                        if(newObj.id==vaultsHoldersForClosing[i].getAttribute("id")){
                            let eId = obj.id;
                            let emptyObj = JSON.stringify({data:`{id:${newObj.id},isOrdered:false,text:'',members:[]}`,id:"string"});
                            putData(`events/${eId}`, emptyObj)
                                .then(()=>{
                                    renderTheCalendar();
                                });
                        }
                    });
                    deleteWindow.style.display="none";
                }, {once: true});
            });
        });
    });
}

export default deleteEvent;