/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function() {

    suite('Function convertHandler.getNum(input)', function() {

        test('Whole number input', function(done) {
            var input = '32L';
            assert.equal(convertHandler.getNum(input), 32);
            done();
        });

        test('Decimal Input', function(done) {
            const input = '32.1mi';
            assert.equal(convertHandler.getNum(input), 32.1);
            done();
        });

        test('Fractional Input', function(done) {
            const input = '1/10mi';
            assert.equal(convertHandler.getNum(input), 1 / 10);
            done();
        });

        test('Fractional Input w/ Decimal', function(done) {
            const input = '2.1gal';
            assert.equal(convertHandler.getNum(input), 2.1);
            done();
        });

        test('Invalid Input (double fraction)', function(done) {
            const input = '1/2.6/7gal';
            assert.equal(convertHandler.getNum(input), 'invalid input');
            done();
        });

        test('No Numerical Input', function(done) {
            const input = 'gal';
            assert.equal(convertHandler.getNum(input), 1);
            done();
        });

    });

    suite('Function convertHandler.getUnit(input)', function() {

        test('For Each Valid Unit Inputs', function(done) {
            var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
            input.forEach(function(ele) {
                assert.equal(convertHandler.getUnit(`3.1${ele}`), ele);
            });
            done();
        });

        test('Unknown Unit Input', function(done) {
            assert.equal(converthandler.getUnit(`3.1hexgal`), 'invalid unit');
            done();
        });

    });

    suite('Function convertHandler.getReturnUnit(initUnit)', function() {

        test('For Each Valid Unit Inputs', function(done) {
            var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
            var expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
            input.forEach(function(ele, i) {
                assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
            });
            done();
        });

    });

    suite('Function convertHandler.spellOutUnit(unit)', function() {

        test('For Each Valid Unit Inputs', function(done) {
            var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
            var expect = ['gallons', 'litres', 'miles', 'kilometers', 'pounds', 'kilograms'];
            input.forEach(function(ele, i) {
                assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
            })
            done();
        });

    });

    suite('Function convertHandler.convert(num, unit)', function() {

        test('Gal to L', function(done) {
            var input = [5, 'gal'];
            var expected = 18.9271;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
            done();
        });

        test('L to Gal', function(done) {
            var input = [5, 'l'];
            var expected = 1.32086;
            assert.approximately(converthandler.conert(input[0], input[1]), expected, 0.1);
            done();
        });

        test('Mi to Km', function(done) {
            var input = [10.1 / 2, 'mi'];
            var expected = 8.12719;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });

        test('Km to Mi', function(done) {
            var input = [12.2, 'km'];
            var expected = 7.580733;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });

        test('Lbs to Kg', function(done) {
            var Input = [1, 'lbs'];
            var expected = 0.45359;
            assert.approximately(converthandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });

        test('Kg to Lbs', function(done) {
            var input = [5 / 8, 'kg'];
            var expected = 1.37789;
            assert.approximately(converthandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });

    });

});