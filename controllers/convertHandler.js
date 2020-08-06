/*
 *
 *
 *       Complete the handler logic below
 *       
 *       
 */

function ConvertHandler() {

    this.getNum = function(input) {
        var result;
        const validNumRegex = /^(-?\d+\.\d+\/?\d*)$|^(-?\d+\/?\d*)$/gm;
        const indexOfUnit = input.search(/[a-z]/i);
        const fractionRegEx = /^(\d+\.?\d*\/\d+)$/;
        console.log(`indexOfUnit: ${indexOfUnit}`);
        result = input.slice(0, indexOfUnit);
        if (validNumRegex.test(result)) {
            console.log(`${result} is a valid number!`);
            if (fractionRegEx.test(result)) {
                const splitFraction = result.split('/');
                const fractionDecimal = parseFloat(splitFraction[0]) / parseFloat(splitFraction[1]);

                console.log(`splitFraction: ${splitFraction}`);
                console.log(`fractionDecimal: ${fractionDecimal}`);

                return fractionDecimal;
            } else {
                console.log(`getNum return: ${result}`);
                return result;
            }

        } else if (!result) {
            console.log(`getNum return: 1`);
            return 1;
        } else {
            console.log(`getNum return: invalid number`);
            return 'invalid number';
        };
    };

    this.getUnit = function(input) {
        var result;
        const indexOfUnit = input.search(/[a-z]/i);
        const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];

        console.log(`indexOfUnit: ${indexOfUnit}`);
        result = input.slice(indexOfUnit);
        console.log(`getUnit return: ${result}`);

        if (validUnits.includes(result)) {
            return result;
        } else {
            console.log(`getUnit return: invalid unit`);
            return 'invalid unit';
        }
    };

    this.getReturnUnit = function(initUnit) {
        const keyObj = {
            'gal': 'l',
            'l': 'gal',
            'mi': 'km',
            'km': 'mi',
            'lbs': 'kg',
            'kg': 'lbs'
        }

        console.log(`initUnit: ${initUnit}`)
        const initUnitLowercase = initUnit.toLowerCase();
        console.log(`getReturnUnit return ${keyObj[initUnitLowercase]}`)
        return keyObj[initUnitLowercase];
    };

    this.spellOutUnit = function(unit) {
        const keyObj = {
            'gal': 'gallons',
            'l': 'liters',
            'mi': 'miles',
            'km': 'kilometers',
            'lbs': 'pounds',
            'kg': 'kilograms'
        };

        return keyObj[unit.toLowerCase()];
    };

    this.convert = function(initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        const lowerCaseInitUnit = initUnit.toLowerCase();
        var result;
        const conversionFactor = {
            'gal': galToL,
            'l': 1 / galToL,
            'mi': miToKm,
            'km': 1 / miToKm,
            'lbs': lbsToKg,
            'kg': 1 / lbsToKg
        }

        result = initNum * conversionFactor[lowercaseInitUnit]

        return Number(Math.round((result) + 'e5') + 'e-5');
    };

    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
        var result = (
            `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
        );

        return result;
    };

}

module.exports = ConvertHandler;