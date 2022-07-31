// Your code goes here
const check = confirm('Do you want to play a game?')
const maxCount = 3
let running = true
let winSum = 0
let range = 9
let earn = 100;

while(running){
    if (check) {
        alert('Lets play')
        const num = Math.floor(Math.random() * range);
        for(let count = 0; count < maxCount; count++){
            let userNum = prompt('Enter number: ')
            if (userNum == num){
                if (count === 0){
                    alert('Congratulation, you won')
                    winSum += earn;
                    break
                } else if (count === 1){
                    alert('Congratulation, you won')
                    winSum += earn / 2;
                    break 
                } else { 
                    alert('Congratulation, you won')
                    winSum += earn / 4;
                    break
                } 
            }
        }
        running = confirm('Do you want to continue?')
        if (running){
            range += 4
            earn *= 2
        }
        else {
            alert(`You win ${winSum}$`)
        }
    }
    else {
        running = false
        alert('You did not become a billionaire, but can.')
    }

}