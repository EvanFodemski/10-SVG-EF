const { generateSVG, Circle,Triangle,Square } = require("./shapes.js")

describe('shapes', () =>{
  test('Triangle should render correctly', ()=>{
    const triangle = new Triangle(100,100,100);
    expect(triangle.render("black")).toBe(`<polygon points=\"100,200 186.60254037844385,100 13.397459621556138,100\" fill=\"black\"/>`)

  })
  test('Circle should render correctly', ()=>{
    const circle = new Circle(100,100,50);
    expect(circle.render("black")).toBe('<circle cx="100" cy="100" r="50" fill="black"/>')
  })
  test('Square should render correctly', ()=>{
    const square = new Square(100,100,100);
    expect(square.render("black")).toBe('<rect x=\"50\" y=\"0\" width=\"100\" height=\"100\" fill=\"black\"/>')
  })
})