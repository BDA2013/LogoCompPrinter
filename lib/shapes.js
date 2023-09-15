class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    render() {  
        return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">

          <circle cx="25" cy="75" r="20" fill="${this.color}" stroke-width="5"/> 
        
          <text x="10" y="10" color=${this.textColor}>${this.text}</text>

          </svg>`;
    }
}

class Triangle extends Shape {
    constructor (color, text, textColor){
        super(color, text, textColor);
    }

    render() {
        `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${color}" /> 
         
          <text x="10" y="10" color=${textColor}>${text}</text>
          
          </svg>`;
    }
}

class Square extends Shape {
    constructor (color, text, textColor){
        super(color, text, textColor);
    }

    render() {
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="150, 18 244, 182 56, 182" fill="${color}" /> 
        <text x="10" y="10" color=${textColor}>${text}</text>
        
        </svg>`;
    }
}

function generateLogo(data) {
    console.log(data.shape, data.shapeColor, data.text, data.textColor);
    switch (data.shape) {
        case 'Circle':
            console.log("Circle Selected");
            selectedShape = new Circle(data.shapeColor, data.text, data.textColor);
            return selectedShape.render();
        case 'Square':
            console.log("Square Selected");
            selectedShape = new Square(data.shapeColor, data.text, data.textColor);
            return selectedShape.render();

        case 'Triangle':
            console.log("Triangle Selected");
            selectedShape = new Triangle(data.shapeColor, data.text, data.textColor);
            return selectedShape.render();
        default:
            console.log("No shape selected");
            break;
    }
    /*
    if (data.shape = 'Circle') {
        const selectedShape = new Circle(data.color, data.text, data.textColor);
        selectedShape.render();
    } else if (data.shape === "Triangle") {
        const selectedShape = new Triangle(data.color, data.text, data.textColor);
        selectedShape.render()
    } else if (data.shape === "Square") {
        const selectedShape = new Square(data.color, data.text, data.textColor);
        selectedShape.render()
    }
    */
}

module.exports = generateLogo;