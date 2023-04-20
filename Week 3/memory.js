var cards = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10"]
var shuffledArray = [];
var flipedCards = [];
var matchedCards = [];

function shuffle(Array){
    for (let i = Array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * Array.length);
        [Array[i], Array[j]] = [Array[j], Array[i]];
    }
    return Array;
}

function startGame(){
    let newArray = Array.from(Array(2 * cards.length).keys());
    shuffledArray = shuffle(newArray);
    matchedCards = [];
    flippedCards = [];
    renderCards();
}

function renderCards(){
    var container = document.getElementById("cardContainer");
    for (let i = 0; i < shuffledArray.length; i++) {
        var card = document.createElement("div");
        card.className = "card";
        card.id = "card" + i;
        card.addEventListener("click", function(){
            flipCard(i);
        });

        var card_inner = document.createElement("div");
        card_inner.className = "card-inner";
        var card_back = document.createElement("div");
        card_back.className = "card-back";
        card_back.innerHTML = cards[shuffledArray[i] % cards.length];
        var card_front = document.createElement("div");
        card_front.className = "card-front";
        card_inner.appendChild(card_front);
        card_inner.appendChild(card_back);
        card.appendChild(card_inner);
        container.appendChild(card);
    }
}

function flipCard(cardId){
    if (matchedCards.includes(cardId)){
        return;
    }
    if (flipedCards.includes(cardId)){
        return;
    }
    document.getElementById("card" + cardId).classList.add("flipped");
    if (flipedCards.length === 0){
        flipedCards.push(cardId);
    }
    else if (flipedCards.length == 1){
        flipedCards.push(cardId);
        if (shuffledArray[flipedCards[0]] % cards.length == shuffledArray[flipedCards[1]] % cards.length){
            document.getElementById("card" + flipedCards[0]).classList.add("matched");
            document.getElementById("card" + flipedCards[1]).classList.add("matched");
            matchedCards.push(flipedCards[0]);
            matchedCards.push(flipedCards[1]);
            flipedCards = [];
        }
        else{
            setTimeout(function(){
                document.getElementById("card" + flipedCards[0]).classList.remove("flipped");
                document.getElementById("card" + flipedCards[1]).classList.remove("flipped");
                flipedCards = [];
            }, 500);
        }
    }
    
}

startGame()