function auxString(num) {
    result = '';
    if (num === 3) {
        result = 'Foo';
    } else if (num === 5) {
        result = 'Bar';
    } else if (num === 7) {
        result = 'Quix'
    }
    return result;
}

function recycleString(num) {
    result = '';

    if (num % 3 == 0) {
        result = result + "Foo";
    }

    if (num % 5 == 0) {
        result = result + "Bar";
    }

    if (num % 7 == 0) {
        result = result + "Quix";
    }

    return result;
}

function divisibleNumbers(num) {
    if (num >= 1 && num <= 100) { //check number between 1-100
        let result = "";

        result = recycleString(num);

        let numDer = num % 10;
        let numIzq = Math.trunc(num / 10); //float to int number

        result = result + auxString(numIzq);
        result = result + auxString(numDer);

        console.log(result)
        return result


    } else {
        console.log("error: " + num + " is not between 1-100") //validator
    }

}
divisibleNumbers(33);