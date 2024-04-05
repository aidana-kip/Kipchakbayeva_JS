const args = process.argv;

const arg1 = args[2];
const arg2 = args[3];
const arg3 = args[4];

function userInput(arg1, arg2, arg3) {
  const number = parseFloat(arg1);
  if (!isNaN(number) && number > 7) {
    console.log("Привет");
  }

  if (typeof arg2 === "string") {
    if (arg2 === "Вячеслав") {
      console.log("Привет, Вячеслав");
    } else {
      console.log("Нет такого имени");
    }
  }

  let split = arg3.replace(/[\[\]]/g, "").split(",");
  let intArr = [];
  split.forEach((element) => {
    intArr.push(parseInt(element.trim()));
  });

  intArr.forEach((el) => {
    if (el % 3 === 0) {
      console.log(el);
    }
  });
}

userInput(10, "Вячеслав", "[1,2,4,5]");
