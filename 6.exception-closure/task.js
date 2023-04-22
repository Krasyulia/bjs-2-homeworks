function parseCount(value) {
    const parsedValue = parseInt(value, 10);
    if(isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    return parsedValue;
}

function validateCount(value) {
    try {
        const parsedValue = parseCount(value);
        return parsedValue;
    } catch(e) {
        console.error(e);

        return e; 
    }  
}


class Triangle {
    constructor(a, b, c) {
        if(a + b < c || a + c < b || c + b < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    getPerimeter() {
        const { a, b, c } = this;
        if(!a || !b  || !c) {
            return "Ошибка! Треугольник не существует"
        }
        return a + b + c;
    }

    getArea() {
        const { a, b, c } = this;
        if(!a || !b  || !c) {
            return "Ошибка! Треугольник не существует"
        }
        const p = this.getPerimeter() / 2;
        return parseFloat(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) {
        return new Error("Ошибка! Треугольник не существует");
    }
}