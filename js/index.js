"use strict";
import Figure from './Figure.js';
//import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {
        console.log("Changed!!!");
    },
    init() {
        console.log('Form init!');

        document.getElementById("select").addEventListener('change', this.changeSelect())
    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {

    }
};

form.init();

const testFig = new Figure("TestFig");
const rectangle1 = new Rectangle(800, 200);
const rectangle2 = new Rectangle(300, 500);
console.log(rectangle1);
console.log(rectangle2);

const resultHtml = document.getElementById("results");
resultHtml.innerHTML = rectangle2.htmlString;

const squareTest = new Square(300);
console.log(squareTest);