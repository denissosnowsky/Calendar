function errorRender(){
    const creatorWindow = document.querySelector('.creatorWindow');

    class Error{
        constructor(data, text, parent){
            this.data = data;
            this.text = text;
            this.parent = parent;
        }
        render(){
            const error = document.createElement('div');
            error.classList.add('creatorWindow__notation');
            error.setAttribute('data-error', `${this.data}`);
            error.innerHTML = `
                <div class="creatorWindow__notation-firstCross">
                    <div class="creatorWindow__notation-firstCross-wrapper">
                        <img src="icons/first-notion-delete.png" alt="cross">
                    </div>
                </div>
                <div class="creatorWindow__notation-text"><span>${this.text}</span></div>
                <div class="creatorWindow__notation-lastCross">
                    <div class="creatorWindow__notation-lastCross-wrapper">
                        <img src="icons/last-notion-delete.png" alt="cross">
                    </div>
                </div>
            `;
            this.parent.append(error);
        }
    }
    new Error("slot", "Failed to create an event. Time slot is already booked.", creatorWindow).render();
    new Error("name", "Failed to create an event. Please, fill the event name.", creatorWindow).render();
    new Error("members", "Failed to create an event. Please, choose participant/s", creatorWindow).render();
    new Error("day", "Failed to create an event. Please, choose the day.", creatorWindow).render();
    new Error("time", "Failed to create an event. Please, choose the time.", creatorWindow).render();
    

}

export default errorRender;