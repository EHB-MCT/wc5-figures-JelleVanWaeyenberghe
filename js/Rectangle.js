"use strict";

import Figure from "./Figure.js";


class Rectangle extends Figure {
    constructor(width, height, name = "rectangle") {
        super(name);
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }

    get circumference() {
        return (this._height + this._width) * 2;
    }

    get htmlString() {
        return `
        <div class="result">
        <div class="figure rectangle" style="width: ${this._width}px; height: ${this._height} px;"></div>
             <div class="infoBox">
             <h3>${this.name}</h3>
             <dl>
             <dt>Height</dt>
             <dd>${this._height}</dd>

             <dt>Width</dt>
             <dd>${this._width} px</dd>

             <dt>Area</dt>
             <dd>${this._area} px</dd>

             <dt>Circumference</dt>
                <dd>${this._circumference} px</dd>
          </dl>
        </div>
      </div>`;
    }

}



export default Rectangle