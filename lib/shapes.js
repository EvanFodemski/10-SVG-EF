class Circle{
    constructor(cx, cy, r){
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    render(color){
        const fill = color 
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${fill}"/>`;
    }
}
 
class Triangle {
    constructor(x, y, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.side = height * Math.sqrt(3); // Calculate the base side length based on the height
    }

    render(color) {
        const fill = color;
        const halfSide = this.side / 2;
        const points = `${this.x},${this.y + this.height} ${this.x + halfSide},${this.y} ${this.x - halfSide},${this.y}`;
        return `<polygon points="${points}" fill="${fill}"/>`;
    }
}


class Square {
    constructor(x, y, side) {
      this.x = x;
      this.y = y;
      this.side = side;
    }
  
    render(color) {
      const fill = color 
      return `<rect x="${this.x - this.side / 2}" y="0" width="${this.side}" height="${this.side}" fill="${fill}"/>`;
    }
  }

  function generateSVG(answers) {
    const shapeColor = answers.shapeColor; // Store shape color in a variable

    let svgContent = '<svg width="300" height="200">';


    if (answers.shapeSelect === "Circle") {
        const circle = new Circle(150, 100, 100);
        svgContent += circle.render(shapeColor); // Use shapeColor variable here
    } else if (answers.shapeSelect === "Triangle") {
        const triangle = new Triangle(150, 10, 170);
        svgContent += triangle.render(shapeColor); // Use shapeColor variable here
    } else if (answers.shapeSelect === "Square") {
        const square = new Square(150, 200, 200);
        svgContent += square.render(shapeColor); // Use shapeColor variable here
    }
    svgContent += `<text x="150" y="100" font-weight="bold" font-size="60" fill="${answers.textColor}" text-anchor="middle" alignment-baseline="middle">${answers.svgLetter}</text>`;
    svgContent += '</svg>';
    return svgContent;
}

module.exports = {
    Circle,
    Triangle,
    Square, 
    generateSVG
}




