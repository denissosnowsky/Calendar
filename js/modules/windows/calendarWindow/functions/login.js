import { getData, fromStringToArray } from "../../../api";


export function login(){
    const memberList = document.querySelector('.loginWindow__window-selection-listInput-list'),
        listBtn = document.querySelector('.loginWindow__window-selection-listInput-button'),
        loginWindow = document.querySelector('.loginWindow'),
        listBtnText = document.querySelector('.loginWindow__window-selection-listInput-button-text'),
        listBtnTextSpan = document.querySelector('.loginWindow__window-selection-listInput-button-text span'),
        listBtnArrow = document.querySelector('.loginWindow__window-selection-listInput-button-arrow');
    let listItemsOfMembersInCalendar,
        nameInTheCalendar,
        widthOfNameInTheCalendar,
        widthOfNameInTheCalendarWithoutPX;

    class MemberList{
        constructor(name, parent, value){
            this.name = name;
            this.parent = parent;
            this.value = value;
        }
        render() {
            const name = document.createElement('div');
            name.classList.add("loginWindow__window-selection-listInput-list-person");
            name.innerHTML = `
                    <span>${this.name}</span>
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
            listItemsOfMembersInCalendar = document.querySelectorAll('.loginWindow__window-selection-listInput-list-person');
            nameInTheCalendar = document.querySelectorAll('.loginWindow__window-selection-listInput-list-person')[0];
            widthOfNameInTheCalendar = window.getComputedStyle(nameInTheCalendar).height;
            widthOfNameInTheCalendarWithoutPX = widthOfNameInTheCalendar.replace(/\D/g, '');
        });

        if(memberList.querySelectorAll('div').length>3){
            memberList.style.height = widthOfNameInTheCalendarWithoutPX*3 + "px";
            memberList.style.overflow = "auto";
        }

        listBtn.addEventListener('click', ()=>{
            memberList.classList.toggle('activeBlock');
        });
        
        loginWindow.addEventListener('click', (e)=>{
            if(e.target && e.target!=listBtn && e.target!=listBtnText && e.target!=listBtnTextSpan && e.target!=listBtnArrow){
                memberList.classList.remove('activeBlock');    
            }
            listItemsOfMembersInCalendar.forEach((el, i)=>{
                if(e.target==el || e.target==el.querySelector('span')){
                    listBtnTextSpan.innerHTML=el.querySelector('span').innerHTML;
                }
            });
        });
    });
}