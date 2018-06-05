class Player {
    constructor(name, deck) {
        this.deck = deck;
        this.name = name;
        this.hand = [this.deck.deal(), this.deck.deal()];
    }
    //card is accessed through hand
    return_card(card) {
        if (this.hand.indexOf(card) > -1) {
            let cardIndex = this.hand.indexOf(card);
            this.deck.cards.push(card);
            this.hand.splice(cardIndex,1)
        } else {
            console.log("Player can only return her own cards.")
        }
        return this;
    }
    take_card() {
        let card = this.deck.deal();
        if (card) {
            this.hand.push(card);
        } else {
            console.log("Error: no cards in deck.")
        }
        return this;
    }
}

class Deck {
    constructor() {
        this.cards = []
        for (var i=0; i<4; i++) {
            for (var j=0; j<13; j++) {
                this.cards.push(new Card(i,j))
            }
        }
    }
    shuffle() {
        // idea: swap each card with a random card for all cards in deck.
        for (var i=0; i<this.cards.length; i++) {
            var random = Math.floor(Math.random()*this.cards.length)
            var temp = this.cards[i];
            this.cards[i] = this.cards[random];
            this.cards[random] = temp;
        }
        return this;
    }
    reset() {
        //repeats logic from constructor function...
        this.cards = []
        for (var i=0; i<4; i++) {
            for (var j=0; j<13; j++) {
                this.cards.push(new Card(i,j))
            }
        }
        return this;
    }
    deal() {
        if (this.cards.length > 0) {
            this.shuffle()
            return this.cards.pop();
        } else {
            console.log("Error: no more cards.");
            return false;
        }
    }
}

class Card {
    constructor(suit, number) {
        this.suits = {
            0: "hearts",
            1: "clubs",
            2: "spades",
            3: "diamonds"
        }
        this.numbers = {
            0: "ace",
            1: "2",
            2: "3",
            3: "4",
            4: "5",
            5: "6",
            6: "7",
            7: "8",
            8: "9",
            9: "10",
            10: "Jack",
            11: "Queen",
            12: "King"
        }
        this.suit = this.suits[suit]
        this.number = this.numbers[number]
    }
}

var deck1 = new Deck();
deck1.shuffle();
console.log(deck1);

var me = new Player("chet", deck1);
console.log(me.hand);
