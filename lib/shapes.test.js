const generateLogo = require('./shapes.js');


describe('Index', () => {
    describe('userInput', () => {
        it('should not accept characters that is more than the length of 3', () => {
            const text = "BD";
            const textColor = "red";
            const shape = "Circle";
            const shapeColor = "blue";
            const data = { text, textColor, shape, shapeColor };
            const newInput = new generateLogo();
            //expect to return an error
            console.log(newInput);
            const result = newInput(data);
            expect(result).toEqual("Please enter only three characters");
        });

        // it('should not accept characters that is less than the length of 3', () => {
        //     const characters = "BD";
        //     const newInput = new Index();
        //     expect(newInput.characters(characters.length).toEqual(newInput.characters.length > 3));
        // });
    });
});