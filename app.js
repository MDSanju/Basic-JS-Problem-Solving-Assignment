// problem 1

// convert seer to mon
function seerToMon(seer) {
    // error message return
    if (typeof seer != 'number') {
        return 'Please enter a valid number!';
    }
    // returning mon
    let mon = seer / 40;
    return mon;
}

const convertToMon = seerToMon(80);
console.log(convertToMon);



// problem 2

// getting total sales value of shirts, pants and shoes
function totalSales(shirt, pant, shoe) {
    // error message return
    if (shirt, pant, shoe < 0) {
        return 'Please enter a positive number!';
    }
    // total sales return
    let shirtPrice = 100 * shirt;
    shirt = shirtPrice;

    let pantPrice = 200 * pant;
    pant = pantPrice;

    let shoePrice = 500 * shoe;
    shoe = shoePrice;

    let totalDisposal = shirtPrice + pantPrice + shoePrice;

    return totalDisposal;
}

const sales = totalSales(10, 5, 0);
console.log(sales);



// problem 3

// t-shirt delivery cost
function deliveryCost(tShirts) {
    // error message return
    if (tShirts < 0) {
        return 'Enter a valid number!';
    }
    // conditions
    const first100Per = 100;
    const second100Per = 80;
    const restTshirtsPer = 50;
    // apply conditions and return
    if (tShirts <= 100) {
        const first100Pitches = tShirts * first100Per;
        return first100Pitches;
    } else if (tShirts <= 200) {
        const firstHundredTshirts = 100 * first100Per;
        const upTo100 = tShirts - 100;
        const upToSecond100 = upTo100 * second100Per;
        const first200Total = firstHundredTshirts + upToSecond100;
        return first200Total;
    } else {
        const firstHundredTshirts = 100 * first100Per;
        const upTo100 = 100 * second100Per;
        const restPitches = tShirts - 200;
        const restTshirtsPrices = restPitches * restTshirtsPer;
        const restTotal = firstHundredTshirts + upTo100 + restTshirtsPrices;
        return restTotal;
    }
}

const totalDeliveryCost = deliveryCost(201);
console.log(totalDeliveryCost);



// problem 4

// first 5 characters friend's name return

// friend's names on an array
const friendNames = ['john', 'kayel', 'william', 'bob', 'robert', 'david', 'richard', 'daniel'];

// returning the perfect friend's name in a string
function perfectFriend(friends) {
    for (let i = 0; i < friends.length; i++) {
        let friendNameCharacters = friends[i];
        let characters = friendNameCharacters.length;
        if (characters == 5) {
            return friendNameCharacters;
        }
    }
}

const bestFriend = perfectFriend(friendNames);
console.log(bestFriend);

// All problems output
console.log(convertToMon, sales, totalDeliveryCost, bestFriend);