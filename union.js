"use strict";
function area(shape) {
    if (shape.kind === 'square') { // Square타입
        return shape.size * shape.size;
    }
    else { // Rectangle 타입
        return shape.width * shape.height;
    }
}
