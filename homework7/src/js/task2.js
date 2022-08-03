// Your code goes here
const check = confirm('Do you want to play a game?');
const maxCount = 3;
let running = true;
let winSum = 0;
let range = 9;
let earn = 100;

// running while player want to play
while(running){
    if (check) {
        alert('Lets play. You have 3 try');
        const num = Math.floor(Math.random() * range); // create random range

        // loop to check input number
        for(let count = 0; count < maxCount; count++){
            let userNum = prompt(`Enter number from 0 to ${range -1}: `)

            //how much player earn if he guessed
            if (userNum == num){
                if (count === 0){
                    alert('Congratulation, you won');
                    winSum += earn;
                    break;
                } else if (count === 1){
                    alert('Congratulation, you won')
                    winSum += earn / 2;
                    break; 
                } else { 
                    alert('Congratulation, you won');
                    winSum += earn / 4;
                    break;
                } 
            }
        }

        running = confirm('Do you want to continue?');

        // if you want continue play the range and winning money will be incresed
        if (running){
            range += 4;
            earn *= 2;
        }
        else {
            alert(`You win ${winSum}$`);
        }
    }
    else {
        running = false; // close game
        alert('You did not become a billionaire, but can.');
    }

}
