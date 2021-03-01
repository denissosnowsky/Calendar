import { fromStringToArray, getData } from "../../../api";
import filterMembers from "../functions/filterMembers";
import { emptyMembersStorage, fillMembersStorage, localCalendarStorage, pushMembersStorage } from "../localCalendarStorage/localCalendarStorage";


function memberListButton(){
    const listBtn = document.querySelector('.calendarWindow__wrapper-header-listInput-button'),
        listBtnText = document.querySelector('.calendarWindow__wrapper-header-listInput-button-text'),
        listBtnTextSpan = document.querySelector('.calendarWindow__wrapper-header-listInput-button-text span'),
        listBtnArrow = document.querySelector('.calendarWindow__wrapper-header-listInput-button-arrow'),
        memberList = document.querySelector('.calendarWindow__wrapper-header-listInput-list'),
        nameInTheCalendar = document.querySelectorAll('.calendarWindow__wrapper-header-listInput-list-person')[0],
        widthOfNameInTheCalendar = window.getComputedStyle(nameInTheCalendar).height,
        widthOfNameInTheCalendarWithoutPX = widthOfNameInTheCalendar.replace(/\D/g, ''),
        calendarWindow = document.querySelector('.calendarWindow');
    let listItemsOfMembersInCalendar;

    class MemberList{
        constructor(name, parent, value){
            this.name = name;
            this.parent = parent;
            this.value = value;
        }
        render() {
            const name = document.createElement('div');
            name.classList.add("calendarWindow__wrapper-header-listInput-list-person");
            name.innerHTML = `
                    <span>${this.name}</span>
                    <div value=${this.value} type="checkbox" class="calendarWindow__wrapper-header-listInput-list-person-input"></div>
            `;
            this.parent.append(name);
        }
    }

    getData('members')
        .then((json) => json[0].data)
        .then((data)=>fromStringToArray(data))
        .then(members=>{
        members.forEach((item, i)=>{
            new MemberList(item, memberList).render();
            listItemsOfMembersInCalendar = document.querySelectorAll('.calendarWindow__wrapper-header-listInput-list-person');
            
            listItemsOfMembersInCalendar.forEach((item)=>{
                if(item.querySelector('div')){
                    item.querySelector('div').style.backgroundColor = '#ddd';
                    item.setAttribute('data-checked',"");
                }
            });
        });

        if(memberList.querySelectorAll('div').length>3){
            memberList.style.height = widthOfNameInTheCalendarWithoutPX*3 + "px";
            memberList.style.overflow = "auto";
        }


        listBtn.addEventListener('click', ()=>{
            memberList.classList.toggle('activeBlock');
        });

        calendarWindow.addEventListener('click', (e)=>{
            if(e.target && e.target!=listBtn && e.target!=listBtnText && e.target!=listBtnTextSpan && e.target!=listBtnArrow && e.target!=memberList){
                memberList.classList.remove('activeBlock');    
            }

            memberList.querySelectorAll('div').forEach((item, j)=>{
                if(e.target==item || e.target==item.querySelector('span')){
                    memberList.classList.add('activeBlock');
            }
            });

            if(memberList.classList.contains('activeBlock')){
                let allInputs = memberList.querySelectorAll('.calendarWindow__wrapper-header-listInput-list-person-input');
                let chosenInputs = memberList.querySelectorAll('[data-checked]');

                if(e.target==listItemsOfMembersInCalendar[0] || e.target==listItemsOfMembersInCalendar[0].firstElementChild){
                    allInputs = memberList.querySelectorAll('.calendarWindow__wrapper-header-listInput-list-person-input');
                    chosenInputs = memberList.querySelectorAll('[data-checked]');
                    
                    if(chosenInputs.length!=allInputs.length){
                        fillMembersStorage(members);
                        listBtnTextSpan.innerHTML="All members";
                        listItemsOfMembersInCalendar.forEach((item)=>{
                            if(item.querySelector('div')){
                                item.querySelector('div').style.backgroundColor = '#ddd';
                                item.setAttribute('data-checked',"");
                            }
                        });
                    }else if(chosenInputs.length==allInputs.length){
                        emptyMembersStorage();
                        listBtnTextSpan.innerHTML="";
                        listItemsOfMembersInCalendar.forEach((item)=>{
                            if(item.querySelector('div')){
                                item.querySelector('div').style.backgroundColor = "";
                                item.removeAttribute('data-checked');
                            }
                        });
                    }
                }else{
                    listItemsOfMembersInCalendar.forEach((item, j)=>{
                        if(e.target==item || e.target==item.firstElementChild || e.target==item.lastElementChild){
                            if(item.getAttribute('data-checked')==null){
                                item.lastElementChild.style.backgroundColor = '#ddd';
                                item.setAttribute('data-checked',"");
                            }else {
                                item.lastElementChild.style.backgroundColor = "";
                                item.removeAttribute('data-checked');
                            }

                            emptyMembersStorage();
                            chosenInputs = memberList.querySelectorAll('[data-checked]');
                            chosenInputs.forEach(item=>{
                                pushMembersStorage(item.firstElementChild.innerHTML);
                            });
            
                            if(localCalendarStorage.membersStorage.length==allInputs.length){
                                listBtnTextSpan.innerHTML="All members";
                            }else{
                                listBtnTextSpan.innerHTML=localCalendarStorage.membersStorage.join(', ');
                                if(listBtnTextSpan.innerHTML.length>20){
                                    listBtnTextSpan.innerHTML=listBtnTextSpan.innerHTML.slice(0, 17)+"...";
                                }
                            }
                        }
                    });

                }
                filterMembers();
            };
        });
    });
}

export default memberListButton;