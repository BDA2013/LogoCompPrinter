function selectedShape(shape, shapeColor) {
    if (shape === 'circle') {
        return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
        return `<polygon points="50 15, 100 100, 0 100" fill="${shapeColor}" />`;
    } else if (shape === 'square') {
        return `<rect x="50" y="20" width="150" height="150" fill="${shapeColor}" />`;
    } else {
        return 'ERROR! Invalid Input!'
    }
}

function addedText(shape, text, textColor) {
    if (shape === 'circle') {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    } else if (shape === 'triangle') {
        return `<text x="51" y="75" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>`;
    } else if (shape === 'square') {
        return `<text x="125" y="110" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`;
    } else {}   
}

function generateLogo(data) {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    ${selectedShape(data.shape, data.shapeColor)}

    ${addedText(data.shape, data.characters, data.textColor)}

    </svg>`
}

module.exports = generateLogo;