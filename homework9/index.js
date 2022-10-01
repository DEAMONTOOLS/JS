// Your code goes here

const getNumbers = (inputStr) => {
    const numberInputStr = [];
    for (char of inputStr) {
        if (char >= '0' && char <= '9') {
            numberInputStr.push(parseInt(char));
        }        
    }
    return numberInputStr;
};

const findTypes = (...parametrs) => {
    const parametrObject = {};
    parametrs.forEach(element => {
        parametrObject[typeof element] = 0;
    });

    parametrs.forEach(element => {
        keys(parametrObject).forEach(key => {
            if (key === typeof element){
                parametrObject[key] += 1;
            }
        });
    });

    return parametrObject;
};


const executeforEach = (parametr, func) => {
    return parametr.map(func);
};

const mapArray = (parametr, func) => {
    return parametr.map(func);;
}

const filterArray = (parametr, func) => {
    const inputParametr = parametr.map(func);
    const valueToPrint = [];
    for (i in parametr){
        if (inputParametr[i] === true){
            valueToPrint.push(parametr[i])
        }
    }
    return valueToPrint;
};

const showFormattedDate = date => {
    return 'Date: ' + date.toDateString().slice(4);
} 

const canConvertToDate = date => {
    const a = new Date(date)
    if (a == 'Invalid Date'){
        return false
    }
    return true
}

const daysBetween = (firstDate, secondDate) => {
    millisecondsInDay = 86400000;
    differenceBetweenDate = Math.abs(firstDate.valueOf() - secondDate.valueOf())
    return Math.round(differenceBetweenDate / millisecondsInDay)
}

const getAmountOfAdultPeople = data => {
    const adultUser = filterArray(data, el => {
        const userBirthday = el[" birthday "];

        if(canConvertToDate(userBirthday)){
            const daysInYear = 365;
            const userAge = daysBetween(new Date(userBirthday), Date.now()) / daysInYear;
            return userAge >= 18;
        }

        return false 
    });
    return adultUser.length
}

const keys = data => {
    return Object.keys(data)   
}

const values = data => {
    return Object.values(data)   
}

values({keyOne: 1, keyTwo: 2, keyThree: 3})




const data = [
    {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    " birthday ": '2016-03-18T00:00:00',
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
    },
    {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    " birthday ": '1991-02-11T00:00:00',
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
    },
    {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    " birthday ": '1984-04-17T00:00:00',
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
    },
    {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    " birthday ": '1994-04-17T00:00:00',
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
    }
]
