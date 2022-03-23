"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {
        console.log("Changed!!!");
        console.log(this.value);

        const inputHtml = document.getElementById('otherInputs'); // input field ophalen
        let htmlString = ''; // lege string maken

        if (this.value == 'rectangle') {
            htmlString += form.inputElementsWithLabel('width (px) ', 'width')
            htmlString += form.inputElementsWithLabel('height (px) ', 'height')

        } else if (this.value == 'square') {
            htmlString += form.inputElementsWithLabel('size (px) ', 'size')

        } else if (this.value == 'circle') {
            htmlString += form.inputElementsWithLabel('radius (px) ', 'radius')
        }

        inputHtml.innerHTML = htmlString;
    },
    init() {
        console.log('Form init!');

        document.getElementById("select").addEventListener('change', this.changeSelect); //event listener toevoegen
        document.getElementById('form').addEventListener('submit', this.submitForm);
    },
    inputElementsWithLabel(label, id) {
        return `<label>
            ${label}
            <input id="${id}" type="number">
        </label>`


    },
    submitForm(e) { // cdoe wilt niet naar select.value gaan (lijn 46), this blijft gedefinieerd op form
        e.preventDefault();
        console.log('Form submitted')
        console.log(this);
        const figureSelected = document.getElementById('select').value;

        let figure;

        if (this.figureSelected == 'rectangle') {
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;

            const resultHtml = document.getElementById('result');
            figure = new Rectangle(width, height);

        } else if (this.figureSelected == 'square') {

            const size = document.getElementById('size').value;
            figure = new Square(size);

        } else if (this.figureSelected == 'circle') {

            const radius = document.getElementById('radius').value;
            figure = new Circle(radius);
        }

        console.log(figure);
        const resultHtml = document.getElementById('radius').value

    }
};

form.init();