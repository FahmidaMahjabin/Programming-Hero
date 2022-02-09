var friendList = ["monica", "chandler", "rachel", "joye", "ross", "phoebe"];
var markList = [100, 80, 30, 0, 60, 40]
function getGrade(mark){
        if (mark >= 80 && mark <=100){
            return"got A+"
        }
        else if (mark >=70 && mark < 80){
            return"got A"
        }
        else if (mark >=60 && mark < 70){
            return"got A-"
        }
        else if (mark >=50 && mark < 60){
            return"got B"
        }
        else if (mark >=40 && mark < 50){
            return"got C"
        }
        else{
            return"failed"
        }
}

for (let number = 0; number < friendList.length; number++){
    console.log(`${friendList[number]}  ${getGrade(markList[number])} `)


}