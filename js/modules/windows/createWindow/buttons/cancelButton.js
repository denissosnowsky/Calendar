import clearTheForm from "../functions/clearTheForm";

function cancelButton(){
    const cancelBtn = document.querySelector('.creatorWindow__wrapper-approval-cancel');

    cancelBtn.addEventListener('click', ()=>{
        clearTheForm();
    });
}

export default cancelButton;