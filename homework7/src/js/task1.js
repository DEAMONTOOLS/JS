// Your code goes here
const email = prompt('Enter your email adress: ')
const minLenEmail = 6
const minLenPass = 5

if (email === null || email === ''){
    alert('Canceled')
} else if (email.length < minLenEmail){
    alert('I don\'t know any emails having name length less than 6 symbols')
} else if (email === 'user@gmail.com') { 
    let passwd = prompt('Enter your password: ')

    if (passwd === 'UserPass'){
        const change = confirm('Do you want change pass?')

        if (change){
            let checkPass = prompt('Enter old pass')

            if (checkPass === passwd){
                const newPass = prompt('Enter new pass')

                if (newPass.length > minLenPass ) {
                    const newPasswd = prompt('Enter new pass')
                    if (newPasswd === newPass){
                        passwd = newPasswd
                        alert('You have successfully changed your password.')
                    } else {
                        alert('Wrong pass')
                    }
                } else {
                    alert('It’s too short password. Sorry.')
                }
            } else if (checkPass === null || checkPass === ''){
                alert('Canceled')
            } else {
                alert('Wrong password')
            }
        } else {
            alert('You have failed the change.')
        }
    } else if (passwd === null || passwd === ''){
        alert('Canceled')
    } else {
        alert('Wrong pass')
    }
} else if (email === 'admin@gmail.com') {
    let passwd = prompt('Enter your password: ')

    if (passwd === 'AdminPass'){
        const change = confirm('Do you want change pass?')

        if (change){
            let checkPass = prompt('Enter old pass')

            if (checkPass === passwd){
                const newPass = prompt('Enter new pass')

                if (newPass.length > minLenPass) {
                    const newPasswd = prompt('Enter new pass')
                    if (newPasswd === newPass){
                        passwd = newPasswd
                        alert('You have successfully changed your password.')
                    } else {
                        alert('Wrong pass')
                    }
                } else {
                    alert('It’s too short password. Sorry.')
                }
            } else if (checkPass === null || checkPass === ''){
                alert('Canceled')
            } else {
                alert('Wrong password')
            }
        } else {
            alert('You have failed the change.')
        }
    } else if (passwd === null || passwd === ''){
        alert('Canceled')
    } else {
        alert('Wrong pass')
    }
} else {
    alert('I don\'t know you')
}