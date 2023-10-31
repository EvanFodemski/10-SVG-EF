//All packages needed for the app to run  
const fs = require ("fs");
const inquirer = require("inquirer");
const { error } = require("console");
const { generateSVG, Circle,Triangle,Square } = require("./lib/shapes")


//function to validate the inputs
function validateInput(value){
    if(value != ""){
        return true;
    }else {
        return "please input some text."
    };
}

//Array of Questions for user Input
const questions = [
    {
        type:"input",
        name:"svgLetter",
        message:"Enter the Characters you want in your logo(Up to 3).",
        validate: validateInput
    },
    {
        type:"input",
        name:"textColor",
        message:"What Color do you want the text to be?This can be a color keyword or a hexadecimal number(ex:'black' or '#9AE5E6').",
        validate: validateInput
    },
    {
        type:"list",
        name:"shapeSelect",
        message:"select what shape you want your logo to be.",
        choices:[
            "Circle",
            "Triangle",
            "Square",
        ],
        validate: validateInput
    },
    {
        type:"input",
        name:"shapeColor",
        message:"What color do you want the shape of your logo to be? This can be a color keyword or a hexadecimal number(ex:'black' or '#9AE5E6').",
        validate: validateInput
        
    }
]



function writeToFile(fileName, data){
    fs.writeFile(fileName, data, function(err){
        if (err) throw (err);
        console.log("Generated logo.svg");
    })

}


//initializes the app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const generatedSVGContent = generateSVG(answers);
        const fileName = "Logo.svg";
        writeToFile(fileName,generatedSVGContent)
    }).catch((err) => {
        console.error("Error occurred:", err);
    });
}

// Function call to initialize app
init();

module.exports = questions;




