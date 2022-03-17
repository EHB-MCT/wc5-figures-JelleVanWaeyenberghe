"use strict";

import Rectangle from "./Rectangle.js";

class Square extends Rectangle {
    constructor(size) {
        super(size, size, "square");
    };
}

export default Square;