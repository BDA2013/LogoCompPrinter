const generateLogo = require('./shapes.js');


describe('Index', () => {
    describe('userInput', () => {
        it('should return a string making a triangle logo', () => {
            const userInput = {
                text: 'ABC',
                textColor: 'red',
                shape: 'Triangle',
                shapeColor: 'blue'
            };
            const expected = `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          
          <polygon points="150, 18 244, 182 56, 182" fill="blue" />
          <text x="122" y="120" font-size="30" fill=red>ABC</text>
          
          </svg>`;
            const actual = generateLogo(userInput);
            expect(actual).toEqual(expected);
        });
        it('should return a string making a circle logo', () => {
            const userInput = {
                text: 'ABC',
                textColor: 'red',
                shape: 'Circle',
                shapeColor: 'blue'
            };
            const expected = `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">

          <circle cx="55" cy="75" r="30" fill="blue" stroke-width="5"/> 
        
          <text x="44" y="80" fill="red">ABC</text>

          </svg>`;
            const actual = generateLogo(userInput);
            expect(actual).toEqual(expected);
        });
        it('should return a string making a square logo', () => {
            const userInput = {
                text: 'ABC',
                textColor: 'red',
                shape: 'Square',
                shapeColor: 'blue'
            };
            const expected = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100" height="100" fill="blue" />
        <text x="21.5" y="60" font-size="30" fill="red">ABC</text>

        </svg>`;
            const actual = generateLogo(userInput);
            expect(actual).toEqual(expected);
        })
            
    });
});