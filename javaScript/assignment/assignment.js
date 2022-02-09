// problem 1 anaToVori

function anaToVori(ana){
    if (ana <= 0){
        throw "ana can't be negative or zero"
    }
    return ana / 16;
}
let vori = console.log(anaToVori(1))

// problem 2 pandaCost 

function pandaCost(shingara = 0, shomucha = 0, jilapi = 0){
    if (shingara < 0 || shomucha < 0 || jilapi < 0){
        throw "product quantity can't be negative value"
    }

    let totalCost;
    totalCost = shingara * 7 + shomucha * 10 + jilapi * 15;
    return totalCost;
}
let totalCost = console.log(pandaCost(2))

// problem 3 picnicBudget 

function picnicBudget(noOfPeople){
    let totalBudget;
    if (noOfPeople <0){
        throw "number of people can't be negative "
    }
    if (noOfPeople <=100){
        totalBudget = noOfPeople * 5000;

    }
    else if (noOfPeople > 100 && noOfPeople <= 200){
        totalBudget = 100 * 5000 + (noOfPeople- 100) * 4000;
    }
    else{
        totalBudget = 100 * 5000 + 100 * 4000 + (noOfPeople - 200) * 3000;
    }
    return totalBudget;
}

console.log(picnicBudget(201))

// problem 4 oddFriend

function oddFriend(listOfFriend){
    if (listOfFriend.length <= 0){
        throw "there is no friend in the list"
    }
    for (let friend of listOfFriend){
        if (friend.length % 2 == 1){
            return friend;
        }
    }
    console.log("there is no odd friend")

}
let list1 = ["he", "hey"]
console.log(oddFriend(list1))