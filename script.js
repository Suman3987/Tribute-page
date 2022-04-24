let js = "amazing";
//if (js==="amazing") alert("Hello suman");
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

//

function myFunction(p1, p2) {
  return p1 * p2;
  // The function returns the product of p1 and p2
}


function greeter(suman) {
  return (" Hello " + suman);
}
let greeting = greeter("london");
console.log(greeting)

function checkType(london) {
  return (typeof (london))
}
console.log(checkType(true))

function checkLength(unitedkingdom) {
  return unitedkingdom.length
}

console.log(checkLength("wembley"))


function addTwoNumber(one, two) {
  return one + two
}
console.log(addTwoNumber(4, 6))

function addAndMultiply(one, two, three, four) {
  let firstadd = one + two;
  let secondadd = three + four;
  let result = firstadd * secondadd;
  return result
}

console.log(addAndMultiply(3, 5, 7, 8))
console.log(addAndMultiply(6, 6, 3, 8))

function CheckLarger(one, two) {
  if (one > two) {
    return one
  } else {
    return two
  }
}
console.log(CheckLarger(73, 56));

function addArrNums(one) {
  let result = 0
  for (let i = 0; i < one.length; i++) {
    result = result + one[i]
  } return result
}
console.log(addArrNums([4, 3, 6, 8, 9, 7, 5]))
console.log(addArrNums([3, 5, 7, 2, 9, 8]))


function squareNumber(one) {
  return one * one
}
console.log(squareNumber(4))

function oddOrEven(numberOne) {
  if (numberOne % 2 == 0) {
    return "Even"
  } else {
    return "odd"
  }
}
console.log(oddOrEven(8))

function sumOfPositive(one) {
  let resultsum = 0
  for (let i = 0; i < one.length; i++) {
    if (0 < one[i]) {
      resultsum = resultsum + one[i]
    }
  }
  return resultsum
}
console.log(sumOfPositive([7, 3, 6, -9, -8, 2, 4, 0, 1]))


/* const name = document.getElementById('name')
 const password = document.getElementById('password')
 const form = document.getElementById('form')
 const errorElement = document.getElementById('error')
 
 form.addEventListener('submit', (e) => {
   let messages=[]
   if (name.value === '' || name.value == null) {
     messages.push('Name is required')
   }

     if (password.value.length <=6 {
       messages.push('Password must be more than 6 characters')
     }
       
   if (password.value.length >=20 {
         messages.push('Password must be less than  20 characters')
       }
   
   if (password.value==="password") {
     messages.push("Password cannot be password   ")
   }
 
       if (messages.length >0){
         e.preventDefault()
         errorElement.innerText = messages.joint(',')
       }  
       */

function codeName() {
  let name = document.getElementById("name").value

  let result = upperCaseAndLowerCase(name) && Length(name) && checkNumber(name);
  if (result == true) {
    alert("your input is valid")
  } else {
    alert("your input is not valid")
  }
}



function Length(word) {
  if (word.length >= 5) {
    return true
  } else {
    return false
  }
}

function upperCaseAndLowerCase(word) {

  let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).+$");

  if (pattern.test(word)) {
    return true
  } else {
    return false
  }

}

function checkNumber(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (isNaN(word[i])) {

    } else {
      count++
    }
  }
  if (count >= 2) {
    return true
  } else {
    return false
  }

}

function displayValue() {
  var ele = document.getElementsByName("methods");
  let arrayValue = document.getElementById("array").value.replace(/\s+/g, '');
  let arr = String(arrayValue).split(",").map((num) => {
    return Number(num);
  })
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      if (ele[i].value == "filter") {
        let result = divisibleByTwo(arr);
        document.getElementById("result").innerHTML
          = "value: " + result;
      }
      else {
        let result = reduceMethod(arr);
        document.getElementById("result").innerHTML
          = "value: " + result;
      }
    }
  }
}

function divisibleByTwo(numlist) {
  let newArray = numlist.filter(num => num % 2 == 0);
  return newArray
}

function reduceMethod(numlist) {

  let initialValue = 0;
  let sumWithInitial = numlist.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial
}
