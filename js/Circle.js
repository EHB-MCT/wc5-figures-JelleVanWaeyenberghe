"use strict";

import Figure from "./Figure.js";

class Circle extends Figure {
    constructor(radius) {
        super("Circle");
        this._radius = radius;
    };

    set radius(radius) {
        this._radius = radius; // update radius 
    }

    get diameter() {
        return 2 * this._radius;
    }

    get area() {
        return Math.PI * this._radius * this._radius;
    }

    get circumference() {
        return Math.PI * this._radius * 2;
    }

    get htmlString() {
        return `
        <div class="result">
            <div class="figure circle" style="width: ${this.diameter}px; height: ${this.diameter}px;"></div>
            <div class="infoBox">
            <h3>Circle</h3>
            <dl>
                <dt>Radius</dt>
                <dd>${this._radius} px</dd>
        
                <dt>Diameter</dt>
                <dd>${this.diameter} px</dd>
        
                <dt>Area</dt>
                <dd>${this.area} px</dd>
        
                <dt>Circumference</dt>
                <dd>${this.circumference} px</dd>
            </dl>
            </div>
      </div>`
    }
}

export default Circle;