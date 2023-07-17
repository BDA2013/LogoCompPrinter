class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        //Inherrence from Shape
        super(color, text, textColor);    
    }

    render() {    
        `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">

          <circle cx="25" cy="75" r="20" fill="${this.color}" stroke-width="5"/> 
        
          <text x="10" y="10" color=${this.textColor}>${this.text}</text>

          </svg>`
    }
}

class Triangle extends Shape {
    constructor (color, text, textColor){
        //Inherrence from Shape
        super(color, text, textColor);
    }

    render() {
        `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${color}" /> 
         
          <text x="10" y="10" color=${textColor}>${text}</text>
          
          </svg>`
    }
}

class Square extends Shape {
    constructor (color, text, textColor){
        //Inherrence from Shape
        super(color, text, textColor);
    }

    render() {
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="150, 18 244, 182 56, 182" fill="${color}" /> 
        <text x="10" y="10" color=${textColor}>${text}</text>
        
        </svg>`
    }
}

function generateLogo(data) {
    console.log(data.shape, data.shapeColor, data.characters, data.textColor);
    switch (data.shape) {
        case 'Circle':
            console.log("Shape Selected")
            var selectedShape = new Circle(data.shapeColor, data.characters, data.textColor);
            selectedShape.render();
            break;
        case 'Square':
            selectedShape = new Triangle(data.shapeColor, data.characters, data.textColor);
            selectedShape.render();
            break;
        case 'Triangle':
            selectedShape = new Square(data.shapeColor, data.characters, data.textColor);
            selectedShape.render();
            break;
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