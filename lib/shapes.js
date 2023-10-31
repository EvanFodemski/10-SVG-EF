class Circle{
    constructor(cx, cy, r){
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    render(color){
        const fill = color ? `fill="${color}"`:'';
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" ${fill}/>`;
    }
}
 
class Triangle{
    constructor(x, y, side){
        this.x=x;
        this.y=y;
        this.side=side;
    }
    render(color){
        const fill = color
        const halfSide = this.side/2;
        const height = (Math.sqrt(3) / 2) *this.side;
        const points = `${this.x},${this.y + height} ${this.x + halfSide},${this.y} ${this.x - halfSide},${this.y}`;
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
      const fill = color ? `fill="${color}"` : '';
      return `<rect x="${this.x - this.side / 2}" y="${this.y - this.side / 2}" width="${this.side}" height="${this.side}" ${fill}/>`;
    }
  }

  function generateSVG(answers) {
    const shapeColor = answers.shapeColor; // Store shape color in a variable

    let svgContent = '<svg width="300" height="200">';
    svgContent += `<text x="50" y="50" fill="${answers.textColor}">${answers.svgLetter}</text>`;

    if (answers.shapeSelect === "Circle") {
        const circle = new Circle(150, 100, 50);
        svgContent += circle.render(shapeColor); // Use shapeColor variable here
    } else if (answers.shapeSelect === "Triangle") {
        const triangle = new Triangle(150, 100, 50);
        svgContent += triangle.render(shapeColor); // Use shapeColor variable here
    } else if (answers.shapeSelect === "Square") {
        const square = new Square(150, 100, 100);
        svgContent += square.render(shapeColor); // Use shapeColor variable here
    }
    svgContent += '</svg>';
    return svgContent;
}

module.exports = {
    Circle,
    Triangle,
    Square, 
    generateSVG
}




