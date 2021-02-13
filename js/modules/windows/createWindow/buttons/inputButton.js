function inputButton(){
    let nameOfTheEvent = document.querySelector('.creatorWindow__wrapper-creation-button-inner-input');
    
    nameOfTheEvent.addEventListener('input', ()=>{
        if(nameOfTheEvent.value.length>=17){
            nameOfTheEvent.value=nameOfTheEvent.value.slice(0, 17);
        }
    });
}

export default inputButton;