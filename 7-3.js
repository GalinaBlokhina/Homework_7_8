class Button {
  constructor(width, height, type, colour) {
    this.buttonWidth = width;
    this.buttonHeight = height;
    this.buttonType = type;
    this.buttonColour = colour;
    this.buttonProps = [
      this.buttonWidth,
      this.buttonHeight,
      this.buttonType,
      this.buttonColour,
    ];
  }
  onClick() {
    console.log(this.buttonProps);
  }
}

let myNewButton = new Button(5, 10, "button", "green");

myNewButton.onClick();

function testButton(width, height, type, colour) {
  if (
    myNewButton.buttonWidth == 5 &&
    myNewButton.buttonHeight == 10 &&
    myNewButton.buttonType == "button" &&
    myNewButton.buttonColour == "green"
  ) {
    console.log("Valid button");
  } else console.log("something goes wrong...");
}

testButton(myNewButton);
