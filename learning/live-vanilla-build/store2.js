const initialValue = {
    moves: [],
    history : {
        currentRoundGames : [],
        allGames: []
    }
}

class Store{
    
    constructor(key , player){
        this.storageKey = key

        this.player = player;
    }
get stats(){
    const state = this.#getState()

    return{
        playerWithStats : this.player.map(player => {
            const wins = state.history.currentRoundGames.filter(game => game.status.winner?.id === player.id).length //numbers of wins player has
            return{
                ...player,wins
            }
        }),
   ties: state.history.currentRoundGames.filter(game => game.status.winner === null).length,
   
    }
}
    get game (){
        const state = this.#getState();
        const currentPlayer = this.player[state.moves.length % 2];
        
        // CURRENT PLAYER KE SETA CHECK KORA HOCCHE

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

        let winner = null;
        for(const player of this.player){
            const selectedSquareIds = state.moves.filter(move  => move.player.id === player.id).map(move => move.squareId) //check kora hocche currentplayer kon squareid select koreche seigulo jodi winning pattern ersathe mile jaye then current player is winner
            for(const pattern of winningPatterns){
                if(pattern.every(v => selectedSquareIds.includes(v))){
                    winner = player
                }
            }
        }
        return { 
            moves: state.moves,
            currentPlayer,
        status: {
            isComplete: winner != null || state.moves.length === 9,
            winner
        }
        };
    }//jehetu shob kota object private ekhne tai getter method diye oigulo ke new.js a call kora hobe

    playerMove(squareId){
const stateClone = structuredClone (this.#getState());
 // CURRENT PLAYER MOVE DEWAR POR STATE UPDATE HOCCHE 
stateClone.moves.push({
    squareId, 
    player: this.game.currentPlayer
    
})
this.#saveState(stateClone)
    }
    reset(){

const stateClone = structuredClone (this.#getState());

const {status, moves} = this.game
        if(status.isComplete){
stateClone.history.currentRoundGames.push({
    moves,status
})


        }

        stateClone.moves=[]
        this.#saveState(stateClone)
    }
    newRound(){
        this.reset();
        const stateClone = structuredClone(this.#getState())
        stateClone.history.allGames.push( ... stateClone.history.currentRoundGames)
        stateClone.history.currentRoundGames = []
        this.#saveState(stateClone)
    }
    #getState(){
         const item = window.localStorage.getItem(this.storageKey);
          // private state variable ke return korbe// It returns the #state private field.
          return item? JSON.parse(item) : initialValue
    }

    //It's used to update the state of the Store 
    #saveState(stateOrFn){
        const prevState = this.#getState();
        let newState;
        switch(typeof stateOrFn){
            case 'function':
                newState = stateOrFn(prevState); // it is expected to take the previous state as an argument and return a new state. 
                break;
                case 'object':
                    newState = stateOrFn//it directly replaces the existing state with the provided object.
                    break;
                    default:
                         throw new Error ("invalid agruement passed to saveState")
        }

        window.localStorage.setItem(this.storageKey, JSON.stringify(newState))

    }
}