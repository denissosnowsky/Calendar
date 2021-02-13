class Vaults{
    constructor(parent, text, isOrdered, display, id){
        this.parent = parent;
        this.text = text;
        this.isOrdered = isOrdered;
        this.display = display;
        this.id = id;
    }
    render(){
        const vault = document.createElement('div');
        vault.classList.add('calendarWindow__wrapper-content-vaults-order');
        vault.setAttribute("id", `${this.id}`);
        vault.innerHTML = `
            <div class="calendarWindow__wrapper-content-vaults-order-appeared" data-ordered=${this.isOrdered} style="display:${this.display};">
                <div class="calendarWindow__wrapper-content-vaults-order-appeared-text"><span class="calendarWindow__wrapper-content-vaults-order-appeared-text-balancer">${this.text}</span></div>
                <div class="calendarWindow__wrapper-content-vaults-order-appeared-image">
                    <img src="icons/delete.png">
                </div>
            </div>
        `;

        this.parent.append(vault);
    }
};

export default Vaults;