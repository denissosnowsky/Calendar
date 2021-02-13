import store from "../../../store/store";
import { chosenSlotStorageFirstId, chosenSlotStorageSecondId, emptyMembersStorage, fillMembersStorage, localCreatorStorage, pushMembersStorage } from "../localCreatorStorage/localCreatorStorage";

function listButtons(){
    const listBlocks = document.querySelectorAll("[data-list]"),
        listItems = document.querySelectorAll("[data-list] div"),
        widthOfItem = window.getComputedStyle(listItems[0]).height,
        widthOfItemWithoutPX = widthOfItem.replace(/\D/g, ''),
        memberListWrapperInCreator = document.querySelectorAll('.creatorWindow__wrapper-creation-button-list')[0],
        listBtnsInCreator = document.querySelectorAll('[data-down]'),
        listBtnTextInCreator = document.querySelectorAll('.creatorWindow__wrapper-creation-button-inner-text'),
        listBtnTextSpanInCreator = document.querySelectorAll('.creatorWindow__wrapper-creation-button-inner-text span'),
        listBtnArrowInCreator = document.querySelectorAll('.creatorWindow__wrapper-creation-button-inner-arrow'),
        listItemsOfDays = document.querySelectorAll('#days div'),
        listItemsOfHours = document.querySelectorAll('#hours div'),
        creatorWindow = document.querySelector('.creatorWindow');
        let listItemsOfMembers;

    class MemberListInCreator{
        constructor(name, parent, value){
            this.name = name;
            this.parent = parent;
            this.value = value;
        }
        render() {
            const name = document.createElement('div');
            name.classList.add("creatorWindow__wrapper-creation-button-list-person");
            name.innerHTML = `
                    <span>${this.name}</span>
                    <div value=${this.value} type="checkbox" class="creatorWindow__wrapper-creation-button-list-person-input"></div>
            `;
            this.parent.append(name);
        }
    }

    store.members.forEach((item, i)=>{
        new MemberListInCreator(item, memberListWrapperInCreator, item).render();
        listItemsOfMembers = document.querySelectorAll('#members .creatorWindow__wrapper-creation-button-list-person');
    });    

    listBlocks.forEach((item, i)=>{
        if(item.querySelectorAll("div").length > 3){
            item.style.height = widthOfItemWithoutPX*3 + "px";
            item.style.overflow = "auto";
        } 
    });

    listBtnsInCreator.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            listBlocks[i].classList.toggle('activeBlock');
        });
    });

    creatorWindow.addEventListener('click', (e)=>{
        listBtnsInCreator.forEach((item, i)=>{
            if(listBlocks[i].classList.contains('activeBlock')){
                if(e.target && e.target!=listBtnsInCreator[i] && e.target!=listBtnTextInCreator[i] && e.target!=listBtnTextSpanInCreator[i] && e.target!=listBtnArrowInCreator[i] && e.target!=listBlocks[i]){
                    listBlocks[i].classList.remove('activeBlock');
                }
            }
        });

        listBlocks[0].querySelectorAll('div').forEach((item, j)=>{
            if(e.target==item || e.target==item.querySelector('span')){
                listBlocks[0].classList.add('activeBlock');
           }
        });

        if(listBlocks[0].classList.contains('activeBlock')){
            let allInputs = listBlocks[0].querySelectorAll('.creatorWindow__wrapper-creation-button-list-person-input');
            let chosenInputs = listBlocks[0].querySelectorAll('[data-checked]');

            if(e.target==listItemsOfMembers[0] || e.target==listItemsOfMembers[0].firstElementChild){
                allInputs = listBlocks[0].querySelectorAll('.creatorWindow__wrapper-creation-button-list-person-input');
                chosenInputs = listBlocks[0].querySelectorAll('[data-checked]');

                if(chosenInputs.length!=allInputs.length){
                fillMembersStorage(store.members);
                    listBtnTextSpanInCreator[0].innerHTML="All members";
                    listItemsOfMembers.forEach((item)=>{
                        if(item.querySelector('div')){
                            item.querySelector('div').style.backgroundColor = '#ddd';
                            item.setAttribute('data-checked',"");
                        }
                    });
                }else if(chosenInputs.length==allInputs.length){
                    emptyMembersStorage();
                    listBtnTextSpanInCreator[0].innerHTML="";
                    listItemsOfMembers.forEach((item)=>{
                        if(item.querySelector('div')){
                            item.querySelector('div').style.backgroundColor = "";
                            item.removeAttribute('data-checked');
                        }
                    });
                }
            }else{
                listItemsOfMembers.forEach((item, j)=>{
                    if(e.target==item || e.target==item.firstElementChild || e.target==item.lastElementChild){
                        if(item.getAttribute('data-checked')==null){
                            item.lastElementChild.style.backgroundColor = '#ddd';
                            item.setAttribute('data-checked',"");
                        }else {
                            item.lastElementChild.style.backgroundColor = "";
                            item.removeAttribute('data-checked');
                        }
                    }
                });

                emptyMembersStorage();

                chosenInputs = listBlocks[0].querySelectorAll('[data-checked]');
                chosenInputs.forEach(item=>{
                    pushMembersStorage(item.firstElementChild.innerHTML);
                });

                if(localCreatorStorage.membersStorage.length==allInputs.length){
                    listBtnTextSpanInCreator[0].innerHTML="All members";
                }else{
                    listBtnTextSpanInCreator[0].innerHTML=localCreatorStorage.membersStorage.join(', ');
                    if(listBtnTextSpanInCreator[0].innerHTML.length>20){
                        listBtnTextSpanInCreator[0].innerHTML=listBtnTextSpanInCreator[0].innerHTML.slice(0, 17)+"...";
                    }
                }

            }
        }
    });


    listItemsOfDays.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            listBtnTextInCreator[1].firstElementChild.innerHTML = item.firstElementChild.innerHTML;
            chosenSlotStorageSecondId(item.getAttribute('data-dayId'));
        });
    });

    listItemsOfHours.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            listBtnTextInCreator[2].firstElementChild.innerHTML = item.firstElementChild.innerHTML;
            chosenSlotStorageFirstId(item.getAttribute('data-hourId'));
        });
    });
}

export default listButtons;