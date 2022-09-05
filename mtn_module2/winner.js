const firstRandomNum = 
Math.floor(Math.random()*6) + 1

const firstDiceImage = 'views/dice' + firstRandomNum + '.png'

document.querySelectorAll ('img')[0].setAttribute ('src',firstDiceImage);

const secondRandomNum = 
Math.floor(Math.random()*6) + 1

const secondDiceImage = 'views/dice' + secondRandomNum + '.png'

document.querySelectorAll ('img')[1].setAttribute ('src',secondDiceImage);

const ThirdRandomNum = 
Math.floor(Math.random()*6) + 1

const ThirdDiceImage = 'views/dice' + ThirdRandomNum + '.png'

document.querySelectorAll ('img')[2].setAttribute ('src',ThirdDiceImage);


const FourthRandomNum = 
Math.floor(Math.random()*6) + 1

const FourthDiceImage = 'views/dice' + FourthRandomNum + '.png'

document.querySelectorAll ('img')[3].setAttribute ('src',FourthDiceImage);

const FifthRandomNum = 
Math.floor(Math.random()*6) + 1

const FifthDiceImage = 'views/dice' + FifthRandomNum + '.png'

document.querySelectorAll ('img')[4].setAttribute ('src',FifthDiceImage);

const sixthRandomNum = 
Math.floor(Math.random()*6) + 1

const sixthDiceImage = 'views/dice' + sixthRandomNum + '.png'

document.querySelectorAll ('img')[5].setAttribute ('src',sixthDiceImage);

if (firstRandomNum > secondRandomNum,ThirdRandomNum,FourthRandomNum,FifthRandomNum,sixthRandomNum) {
    document.querySelector ('h1').innerHTML = 'The winner of the MTN best categorie of 2022 goes to Best Consumer Solution '
}
else if (firstRandomNum < secondRandomNum,ThirdRandomNum,FourthRandomNum,FifthRandomNum,sixthRandomNum) {
    document.querySelector ('h1').innerHTML = 'The winner of the MTN best categorie of 2022 goes to the other categories '}