import { emptyChosenSlotStorage, emptyMembersStorage } from "../localCreatorStorage/localCreatorStorage";

function clearTheForm(){
    const listBtnTextSpanInCreator = document.querySelectorAll('.creatorWindow__wrapper-creation-button-inner-text span'),
        creatorWindow = document.querySelector('.creatorWindow'),
        calendarWindow = document.querySelector('.calendarWindow');
    let nameOfTheEvent = document.querySelector('.creatorWindow__wrapper-creation-button-inner-input'),
        errorWindows = document.querySelectorAll('.creatorWindow__notation'),
        listItemsOfMembers = document.querySelectorAll('#members .creatorWindow__wrapper-creation-button-list-person');
    

    listBtnTextSpanInCreator.forEach(item=>{
        item.innerHTML="";
    });
    emptyMembersStorage();
    listItemsOfMembers.forEach((item, i)=>{
        item.lastElementChild.style.backgroundColor = "";
        item.removeAttribute('data-checked');
    });
    
    nameOfTheEvent.value="";
    creatorWindow.style.display="none";
    calendarWindow.style.display="block";
    errorWindows.forEach(item=>{
        item.style.display="none";
    });
    emptyChosenSlotStorage();
};

export default clearTheForm;