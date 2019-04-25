var Bet = require('./Bet.js');

class Bet extends Face {
    const bet = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, funds);
    if(totalBet === 7) {
        totalBet = funds;
        bet.hearts = totalBet;
    } else {

    }
    funds = funds - totalBet;
    }

}
let remaining = totalBet;
do {
    let bet = rand(1, remaining);
    let face = randFace();
    bet[face] = bet[face] + bet;
} while(remaining > 0);

module.exports = Bet;