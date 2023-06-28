const Index = require('../index.js');

describe('Index', () => {
    describe('userInput', () => {
        it('should not accept characters that is more than the length of 3', () => {
            const characters = "BDA2013";
            const newInput = new Index();
            expect(newInput.characters(characters.length).toEqual(newInput.characters.length < 3));
        });
    });
});