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

          <circle cx="55" cy="75" r="30" fill="${this.color}" stroke-width="5"/> 
        
          <text x="44" y="80" fill="${this.textColor}">${this.text}</text>

          </svg>`;
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    render() {
        return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          
          <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
          <text x="122" y="120" font-size="30" fill="${this.textColor}">${this.text}</text>
          
          </svg>`;
    }
}

class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100" height="100" fill="${this.color}" />
        <text x="21.5" y="60" font-size="30" fill="${this.textColor}">${this.text}</text>

        </svg>`;
    }
}

function generateLogo(data) {
    console.log(data.shape, data.shapeColor, data.text, data.textColor);
    switch (data.shape) {
        case 'Circle':
            console.log("Circle Selected");
            if (data.text.length > 3 || data.text.length < 3) {
                console.error("Please enter only three characters");
                return;
            } else {
                selectedShape = new Circle(data.shapeColor, data.text, data.textColor);
                return selectedShape.render();
            }
        case 'Triangle':
            console.log("Triangle Selected");
            if (data.text.length > 3 || data.text.length < 3) {
                console.error("Please enter only three characters");
                return;
            } else {
                selectedShape = new Triangle(data.shapeColor, data.text, data.textColor);
                return selectedShape.render();
            }

        case 'Square':
            console.log("Square Selected");
            if (data.text.length > 3 || data.text.length < 3) {
                console.error("Please enter only three characters");
                return;
            } else {
                selectedShape = new Square(data.shapeColor, data.text, data.textColor);
                return selectedShape.render();
            }
        default:
            console.error("No shape selected");
            return;
    }
}

module.exports = generateLogo;