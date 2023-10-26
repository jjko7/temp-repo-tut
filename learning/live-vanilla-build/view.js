
 class View {
    $ = {};
    constructor(){
        this.$.menu =  this.qs('[data-id= "menu"]')
        this.$.menuItems = this.qs('[data-id= "menu-items"]')
        this.$.menuBtn =  this.qs('[data-id= "menu-btn"]')
        this.$.resetBtn = this.qs('[data-id= "reset-btn"]')
        this.$.newRoundBtn = this.qs('[data-id= "new-round-btn"]')
        this.$.squares = this.qsAll('[data-id= "square"]')
        this.$.modal = this.qs('[data-id= "modal"]')
        this.$.modalText = this.qs('[data-id= "modal-text"]')
        this.$. modalBtn = this.qs('[data-id= "modal-btn"]')
        this.$.turn = this.qs('[data-id= "turn"]')
//ui-only event listener
this.$.menuBtn.addEventListener('click' , event => {
   this.toggleMenu()
})
    }
//register all the eventlistener
    bindGameResetEvent(handler){
        this.$.resetBtn.addEventListener('click' , handler);
    }

    bindNewRoundEvent(handler){
        this.$.newRoundBtn.addEventListener('click', handler);

    }

    bindPlayerMoveEvent(handler){
        this.$.squares.forEach((square) =>{
            square.addEventListener('click' , handler)
           
        })
}

//DOM helper method

openModal(message){
this.$.modal.classList.remove('hidden')
}

toggleMenu(){
    this.$.menuItems.classList.toggle('hidden')
    const icon = this.$.menuBtn.querySelector('i');
    icon.classList.toggle('fa-chevron-down')
    icon.classList.toggle('fa-chevron-up')



}
qs(selector){
    const el = document.querySelector(selector)
    if(!el) throw new Error('could not find element');
    return el;
}
handlePlayerMove(squareEl , player){
    const squareIcon = document.createElement('i')
    squareIcon.classList.add('fa-solid' , player.iconClass, player.colorClass)

    
    squareEl.replaceChildren(squareIcon )
}
setTurnIdicator(player){
    const icon = document.createElement('i')
    const label = document.createElement('p')
icon.classList.add(player.colorClass)
icon.classList.add("fa-solid",player.iconClass)


icon.style.fontSize = '45px';
    

    label.classList.add(player.colorClass)
    label.innerText = `${player.name}, you are up!`

    this.$.turn.replaceChildren(icon,label)
}

qs(selector){
    const el = document.querySelector(selector)
    if(!el) throw new Error('could not find element');
    return el;
}

qsAll(selector){
    const eList = document.querySelectorAll(selector)
    if(!eList) throw new Error('could not find element');
    return eList;
}
}
    