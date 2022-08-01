// Your code goes here
const email = prompt('Enter your email adress: ')
const minLengthEmail = 6
const minLengthPassword = 5

if (email === null || email === ''){
    alert('Canceled')
} else if (email.length < minLengthEmail){
    alert('I don\'t know any emails having name length less than 6 symbols')
} else if (email === 'user@gmail.com') {  
    let password = prompt('Enter your password: ')

    // check user password
    if (password === 'UserPass'){
        const change = confirm('Do you want change pass?')

        // check, did player want to change him password
        if (change){
            let checkPassword = prompt('Enter old pass')

            if (checkPassword === password){
                const newPassword = prompt('Enter new pass')
                
                // create new password
                if (newPassword.length > minLengthPassword ) {
                    const checkNewPassword = prompt('Enter new pass')

                    // check new password by repeating second time
                    if (checkNewPassword === newPassword){ 
                        password = checkNewPassword
                        alert('You have successfully changed your password.')
                    } else {
                        alert('Wrong pass')
                    }

                } else {
                    alert('It’s too short password. Sorry.')
                }

            } else if (checkPassword === null || checkPassword === ''){
                alert('Canceled')
            } else {
                alert('Wrong password')
            }

        } else {
            alert('You have failed the change.')
        }
    } else if (password === null || password === ''){
        alert('Canceled')
    } else {
        alert('Wrong pass')
    }
} else if (email === 'admin@gmail.com') {
    let password = prompt('Enter your password: ')

    // check admin password
    if (password === 'AdminPass'){
        const change = confirm('Do you want change pass?')

        // check, did player want to change him password
        if (change){
            let checkPassword = prompt('Enter old pass')

            if (checkPassword === password){
                const newPassword = prompt('Enter new pass')

                // create new password
                if (newPassword.length > minLengthPassword) {
                    const checkNewPassword = prompt('Enter new pass')

                    if (checkNewPassword === newPassword){
                        password = newPasswd
                        alert('You have successfully changed your password.')
                    } else {
                        alert('Wrong pass')
                    }

                } else {
                    alert('It’s too short password. Sorry.')
                }

            } else if (checkPassword === null || checkPassword === ''){
                alert('Canceled')
            } else {
                alert('Wrong password')
            }

        } else {
            alert('You have failed the change.')
        }
    } else if (password === null || password === ''){
        alert('Canceled')
    } else {
        alert('Wrong pass')
    }
} else {
    alert('I don\'t know you')
}