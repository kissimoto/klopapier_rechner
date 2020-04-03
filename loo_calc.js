
function process(){
    const amountLooRolls = document.getElementById('looRollNumber').value
    const poovisits = document.getElementById('poovisits').value
    const weevisits = document.getElementById('weevisits').value
    const squares4poo =  document.getElementById('squares4poo').value
    const squares4wee =  document.getElementById('squares4wee').value

    //1 - Anzahl der Klopapierrollen in Squares
    const squaresOfPurchasedLoorolls = amountLooRolls * 150

    // 2 - Anzahl der Klopapierrollen pro Tag- number of loo rolls used per day
    const dailyUseOfSquares = (squares4poo * poovisits ) + (squares4wee * weevisits)
    
    //  3 - Klopapierrolle = 150 Abschnitte minus 
    const sumOfRollsUsedOverTime = squaresOfPurchasedLoorolls / dailyUseOfSquares 

document.write("<link rel='stylesheet' href='loo_style.css'>");
    document.write(`<br><h3>Your loo rolls will last ${sumOfRollsUsedOverTime.toFixed ()} 
    days</h3>`)
    document.close();
    
}
