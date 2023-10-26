const player = [
    {
        id: 1,
        name: 'player 1',
        iconClass: 'fa-x',
        colorClass: 'yellow'
    },
    {id: 2,
        name: 'player 2',
        iconClass: 'fa-o',
        colorClass: 'blue'}
]

function init(){
    const view = new View();
    const store = new Store('live-t3-storage-key' , player);
    console.log(store.game)
   function initView(){
    view.closeAll()
    view.clearMove()
    view.setTurnIndicator(store.game.currentPlayer)
    view.updateScoreBoard(store.stats.playerWithStats[0].wins, store.stats.playerWithStats[1].wins, store.stats.ties)
    view.initializeMoves(store.game.moves)
   }
   window.addEventListener('storage' , () => {
    initView()
   })
   initView();

    view.bindGameResetEvent(event => {
console.log(event)
console.log('reset')


store.reset()
initView()



console.log(store.stats)
console.log(store.stats.playerWithStats[0].wins); // Check player 1 wins
console.log(store.stats.playerWithStats[1].wins); // Check player 2 wins
console.log(store.stats.ties); // Check ties

    })

    

    view.bindNewRoundEvent(event => {

console.log(event)
store.newRound()
initView()




console.log('new round')
    })

    

    view.bindPlayerMoveEvent(square =>{
        console.log(event)
        console.log('div is clicked')

        const clickedSquare = event.target; 
        const existingMove = store.game.moves.find(move => move.squareId === +square.id)
        if(existingMove){
            return
        }
        //place an icon for currentplayer in the square
        view.handelPlayerMove(square , store.game.currentPlayer); 
//advance to the next step  by pushing a move
        store.playerMove(+square.id)//updating  the state of the game passing the id jate turn indicator ta change hoye
        //set the nex player turn indicator

        if(store.game.status.isComplete){
            view.openModal(store.game.status.winner ? `${store.game.status.winner.name} wins!` : 'tie!')
            return 
        }
        view.setTurnIndicator(store.game.currentPlayer);
        
    })

}
window.addEventListener('load' , init);