toArab();
toRoman();

function toArab() {
    let num = "MDLXXXIV"; //1584

    if (validateRoman(num)) {

        let result = 0;
        let value = 0;
        let previous = 0;

        for (let i = 0; i < num.length; i++) {

            let actual = letterToNumber(num.charAt(i));

            if (actual > previous) {
                // Elimina la suma realizada anteriormente, convirtiendola en una resta
                result -= 2 * value;
            }

            if (actual !== previous) { // Si es una letra diferente
                value = 0; // reinicia la suma para el nuevo simbolo
            }

            value += actual; // suma las mismas letras
            result += actual;
            previous = actual;
        }

        console.log(result);
    } else {
        console.log("Introduzca un numero romano valido");
    }
}

function toRoman() {
    let num = 1584; //MDLXXXIV
    if (!isNaN(num)) {
        if (num >= 1 && num <= 3999) {
            let unidades = 0;
            let decenas = 0;
            let centenas = 0;
            let millar = 0;
            let result = "";

            unidades = num % 10;
            num = Math.floor(num / 10);

            decenas = num % 10;
            num = Math.floor(num / 10);

            centenas = num % 10;
            num = Math.floor(num / 10);

            millar = num % 10;
            num = Math.floor(num / 10);

            switch (millar) {
                case 1:
                    result += "M";
                    break;
                case 2:
                    result += "MM";
                    break;
                case 3:
                    result += "MMM";
                    break;
            }

            switch (centenas) {
                case 1:
                    result += "C";
                    break;
                case 2:
                    result += "CC";
                    break;
                case 3:
                    result += "CCC";
                    break;
                case 4:
                    result += "CD";
                    break;
                case 5:
                    result += "D";
                    break;
                case 6:
                    result += "DC";
                    break;
                case 7:
                    result += "DCC";
                    break;
                case 8:
                    result += "DCCC";
                    break;
                case 9:
                    result += "CM";
                    break;
            }

            switch (decenas) {
                case 1:
                    result += "X";
                    break;
                case 2:
                    result += "XX";
                    break;
                case 3:
                    result += "XXX";
                    break;
                case 4:
                    result += "XL";
                    break;
                case 5:
                    result += "L";
                    break;
                case 6:
                    result += "LX";
                    break;
                case 7:
                    result += "LXX";
                    break;
                case 8:
                    result += "LXXX";
                    break;
                case 9:
                    result += "XC";
                    break;
            }

            switch (unidades) {
                case 1:
                    result += "I";
                    break;
                case 2:
                    result += "II";
                    break;
                case 3:
                    result += "III";
                    break;
                case 4:
                    result += "IV";
                    break;
                case 5:
                    result += "V";
                    break;
                case 6:
                    result += "VI";
                    break;
                case 7:
                    result += "VII";
                    break;
                case 8:
                    result += "VIII";
                    break;
                case 9:
                    result += "IX";
                    break;
            }

            console.log(result);
        } else {
            console.log("Introduzca un numero entre 1 y 3999");
        }
    } else {
        console.log("Introduzca un numero valido");
    }
}

function validateRoman(numStr) {
    let valido = true;

    if (numStr == "") {
        valido = false;
    }

    if (numStr.split("I").length - 1 > 3 || numStr.split("X").length - 1 > 3 || numStr.split("C").length - 1 > 3 || numStr.split("M").length - 1 > 3) {
        valido = false;
    }

    if (numStr.split("V").length - 1 > 1 || numStr.split("L").length - 1 > 1 || numStr.split("D").length - 1 > 1) {
        valido = false;
    }

    if (numStr.split("IL").length - 1 > 0 || numStr.split("IC").length - 1 > 0 || numStr.split("ID").length - 1 > 0 || numStr.split("IM").length - 1 > 0 || numStr.split("XD").length - 1 > 0 || numStr.split("XM").length - 1 > 0) {
        valido = false;
    }

    if (numStr.split("VX").length - 1 > 0 || numStr.split("VL").length - 1 > 0 || numStr.split("VC").length - 1 > 0 || numStr.split("VD").length - 1 > 0 || numStr.split("VM").length - 1 > 0 || numStr.split("LC").length - 1 > 0 || numStr.split("LD").length - 1 > 0 || numStr.split("LM").length - 1 > 0 || numStr.split("DM").length - 1 > 0) {
        valido = false;
    }

    return valido;
}

function letterToNumber(letra) {
    switch (letra) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            return -1;
    }
}