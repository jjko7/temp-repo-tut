class View{

$ = {}

    constructor(){
        this.$.menu =  this.#qs('[data-id= "menu"]')
        this.$.menuItems = this.#qs('[data-id= "menu-items"]')
        this.$.menuBtn =  this.#qs('[data-id= "menu-btn"]')
        this.$.resetBtn = this.#qs('[data-id= "reset-btn"]')
        this.$.newRoundBtn =  this.#qs('[data-id= "new-round-btn"]')
        this.$.squares = this.#qsAll('[data-id= "square"]')
        this.$.modal = this.#qs ('[data-id= "modal"]')
        this.$.modalText = this.#qs ('[data-id= "modal-text"]')
        this.$. modalBtn = this.#qs ('[data-id= "modal-btn"]')
        this.$.turn =  this.#qs('[data-id= "turn"]')
        this.$.p1Wins =  this.#qs('[data-id= "p1-wins"]')
        this.$.p2Wins =  this.#qs('[data-id= "p2-wins"]')
        this.$.ties =  this.#qs('[data-id= "ties"]')



        

        //UI only eventlistener

        this.$.menuBtn.addEventListener('click', (event) =>{
           this.#toggleMenu()
        })
    }


    bindGameResetEvent(handler){
        this.$.resetBtn.addEventListener('click' , handler);
        this.$.modalBtn.addEventListener('click' , handler);
    }


    bindNewRoundEvent(handler){
        this.$.newRoundBtn.addEventListener('click', handler);

    }

    bindPlayerMoveEvent(handler){
        this.$.squares.forEach((square) =>{
            square.addEventListener('click' , ()=> handler(square))
           
        })}

        //Dom helper methods

updateScoreBoard(p1Wins,p2Wins,ties){
    this.$.p1Wins.innerText = `${p1Wins} win`
    this.$.p2Wins.innerText = `${p2Wins} win`
    this.$.ties.innerText = `${ties} `

}
        openModal(message){
            this.$.modal.classList.remove('hidden')
            this.$.modalText.innerText = message
        }
        closeModal(){
            this.$.modal.classList.add('hidden')
        }

        closeAll(){
            this.closeModal()
            this.closeMenu()
        }
        clearMove(){
            this.$.squares.forEach(square => {
                square.replaceChildren()
            })
        }
        initializeMoves(moves){
            this.$.squares.forEach(square => {
                const existingMove = moves.find(move => move.squareId === +square.id)
                if(existingMove){
                    this.handelPlayerMove(square , existingMove.player)
                }
            })
        }
        closeMenu(){
            this.$.menuItems.classList.add('hidden')
            this.$.menuBtn.classList.remove('border');
            const icon = this.$.menuBtn.querySelector("i");
            icon.classList.add('fa-chevron-down')

            icon.classList.remove('fa-chevron-up')

        }
        #toggleMenu(){
            this.$.menuItems.classList.toggle('hidden')
            this.$.menuBtn.classList.toggle('border');
            const icon = this.$.menuBtn.querySelector("i");
            icon.classList.toggle('fa-chevron-down')

            icon.classList.toggle('fa-chevron-up')
            


        }

        
    
// set the turn indicatior
// Corrected code for handelPlayerMove
handelPlayerMove(squareEl, player) {
    const squareIcon = document.createElement('i');
    squareIcon.classList.add('fa-solid', player.iconClass, player.colorClass);// Use separate arguments for class names
    squareEl.replaceChildren(squareIcon);
}


/*
handelPlayerMove(squareEl , player){
    const squareIcon = document.createElement('i');
    squareIcon.classList.add("fa-solid",player.iconClass , player.colorClass)
    

    squareEl.replaceChildren(squareIcon)
}*/
setTurnIndicator(player){
    const icon = document.createElement("i")
    const label = document.createElement("p")
icon.classList.add(player.colorClass)
label.classList.add(player.colorClass)
icon.classList.add( 'fa-solid',player.iconClass)
label.innerText = `${player.name} you are up!`

    
    icon.style.fontSize = '45px';
    this.$.turn.replaceChildren(icon , label);

}
        #qs(selector , parent ){
            const ele = parent?  parent.querySelector(selector) : document.querySelector(selector);
            if(!ele) throw new Error('element is not found')

            return ele;
        }

        #qsAll(selector){
            const megha = document.querySelectorAll(selector)
if(!megha) throw new Error ('squares are not found')
            return megha;
        }
}