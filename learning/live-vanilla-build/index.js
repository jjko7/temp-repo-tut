//actions that user can do here
//1.player can make a game move
//2. new round
//3.reset game
//4.toggel menu
/*const menu = document.querySelector('.menu');
const menuItems = menu.querySelector('.items')
menu.addEventListener('click' , (event) =>{
    console.log(event.target)
    menuItems.classList.toggle('hidden'); 
});*/

//FOR BEST PRACTICE 
//to add stability data id is being used




App = {
    $:{
        menu: document.querySelector('[data-id= "menu"]'),
        menuItems: document.querySelector('[data-id= "menu-items"]'),
        resetBtn: document.querySelector('[data-id= "reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id= "new-round-btn"]'),
        squares: document.querySelectorAll('[data-id= "square"]'),
        modal: document.querySelector('[data-id= "modal"]'),
        modalText: document.querySelector('[data-id= "modal-text"]'),
        modalBtn: document.querySelector('[data-id= "modal-btn"]'),
        turn: document.querySelector('[data-id= "turn"]'),

        



    },
 state: {

moves: [] //moves that the players has played// kon square ta ke click koreche kon player seta track kora hocche
 },
 getGameStatus(moves){
 const p1Moves = moves.filter(move => move.playerId === 1).map(move => move.squareId) // shudhu p1 er moves track hoche
    const p2Moves = moves.filter(move => move.playerId === 2).map(move => move.squareId)  //only p2 er move track hocche
    let winner = null
    const winningPatterns = [
        [1,2,3],
        [1,5,9],
        [1,4,7],
        [2,5,8],
        [3,5,7],
        [3,6,9],
        [4,5,6],
        [7,8,9],
    ];
winningPatterns.forEach(pattern => {
    const p1wins = pattern.every(v => p1Moves.includes(v))
    const p2wins = pattern.every(v => p2Moves.includes(v))

if(p1wins) winner = 1
if(p2wins) winner = 2
}) 
return{
    status: moves.length === 9 || winner != null ? 'complete' : 'in-progress',//current game er status bojha jabe ekhane game cholche na ses hoyeche
    winner //1 2 null
 }},
    init() {
      App.registerEventListeners();

},
 

registerEventListeners() {
    //DONE
    App.$.menu.addEventListener('click' , (event) =>{
        App.$.menuItems.classList.toggle('hidden');
    });
    //TODO
    App.$.resetBtn.addEventListener('click', (event) =>{
        console.log('the game is reseting')
    })
    //TODO
    App.$.newRoundBtn.addEventListener('click', (event) =>{
        console.log('new round of game')
    })  
    //TODO 
    App.$.squares.forEach( (square) => {
        square.addEventListener('click' , (event) =>{
           
            //CHECK IF THERE IS ALREADY A PLAY
            const hasMove = (squareId) => {
                const existingMove = App.state.moves.find((move) => move.squareId === squareId)
                return existingMove !== undefined
            };
            if(hasMove(+square.id)){
                return;
            }
            console.log('Div clicked:', square); 
//ICON ER JONNO
//DETERMINE WHICH PLAYER ICON TO ADD TO THE SQUARE
const lastMove = App.state.moves.at(-1)
const getOppositePlayer = (playerId) => playerId === 1? 2 : 1
            const currentPlayer = App.state.moves.length === 0? 1 : getOppositePlayer(lastMove.playerId);
            const nextPlayer = getOppositePlayer(currentPlayer)
            const icon = document.createElement('i');
            const turnLabel = document.createElement('p');
            const turnIcon = document.createElement('i');
            turnLabel.innerText = `Player, ${nextPlayer} you are up!`

            turnIcon.style.fontSize = '45px'; // Set the font size explicitly
 

            if(currentPlayer===1){
                icon.classList.add('fa-solid', 'fa-x' ,'blue');
                turnIcon.classList.add('fa-solid', 'fa-o' ,'yellow');
                turnLabel.classList = 'yellow';


                
            }else{
                icon.classList.add('fa-solid', 'fa-o' ,'yellow');
                turnIcon.classList.add('fa-solid', 'fa-x' ,'blue');
                turnLabel.classList = 'blue';



                

            } 
            //KON PLAYER KHELBE
App.$.turn.replaceChildren(turnIcon,turnLabel)
            App.state.moves.push({
                squareId: +square.id, 
                playerId: currentPlayer
            }

            )
            //TO DO  
            App.$.modalBtn.addEventListener('click' , (event) =>{
                App.state.moves = []
                App.$.squares.forEach(square => square.replaceChildren())
                App.$.modal.classList.add('hidden')
            })

            console.log(App.state)
          square.replaceChildren(icon);
 
  const game = App.getGameStatus(App.state.moves);
  if(game.status === 'complete'){
    App.$.modal.classList.remove('hidden');

    let message = '';
    if(game.winner){
        message = `player ${game.winner} wins`;
    } else{
        message = 'Tie Game!'
      }
        App.$.modalText.textContent = message
  }
        })
    });
}


}

const player = [
    {id: 1,
    name: "player 1",
    iconClass: "fa-x",
    colorClass: "blue"
    },

    {
        id: 2,
    name: "player 2",
    iconClass: "fa-o",
    colorClass: "yellow"
    }
];
function init(){
    const view = new View();
    const store = new Store(player);
    console.log(store.game)
    view.bindGameResetEvent((event) => {
        console.log('reset event')
       console.log(event)

    });

    
    view.bindNewRoundEvent((event) => {
        console.log(event)
        console.log('new round event')
    })

    view.bindPlayerMoveEvent((event) => {
        console.log('this is clicked')
        console.log(event)
        

        const existingMove = store.game.moves.find(move => move.squareId === +square.id)
        if(existingMove){
            return
        }
        //place an icon of the current player in square
        view.handlePlayerMove(square, store.game.currentPlayer )
        //advance to the next state by pushing a move to the moves array
store.playerMove(+square.id)
//set the next player turn idicator

if(store.game.status.isComplete){ 
view.openModal();
return; 
}
        view.setTurnIdicator(store.game.currentPlayer)*/
        
    })
    console.log(view.$.turn)
}
window.addEventListener('load' , init);
