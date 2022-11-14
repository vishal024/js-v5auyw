// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const obj1 = {
  name: 'vishal kushwah',
  printName: function (city, state) {
    console.log(this.name + ' ' + 'from' + ' ' + city + ' ' + state);
  },
};

const obj2 = {
  name: 'Ram singh',
};

const printFulName = obj1.printName.bind(obj2, 'Bhilwara', 'rajasthan');
printFulName();

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(5)(2)(4)(8)());

const multiply = function (x, y) {
  console.log(x * y);
};

const multiplybyTwo = multiply.bind(this, 2, 7);
multiplybyTwo(3);

const multiplybyThree = multiply.bind(this);
multiplybyThree(9, 5);

function subtract(a) {
  return function (b) {
    console.log(a - b);
  };
}
const sub = subtract(5);
sub(3);

const calc = {
  total: 0,
  sub: function (a) {
    this.total = this.total - a;
    return this;
  },
  mult: function (a) {
    this.total = this.total * a;
    return this;
  },
  add: function (a) {
    this.total = this.total + a;
    return this;
  },
};

const result = calc.add(20).sub(10).mult(10).add(20);
console.log(result);

console.log(null === undefined);

document.querySelector('#category').addEventListener('click', (e) => {
  console.log(e.target.id);
  if (e.target.tagName === 'LI') {
    window.location.herf = '/' + e.target.id;
  }
});

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [13, 7]],
  [8, 9, [10, 11]],
];
console.log(arr.flat(2));

function customFlat(arr, depth) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    }
     else result.push(ar)
  });
  return result
}

console.log(customFlat(arr));

let counter=0;
 const getData=()=>{
  console.log("fetching the data",counter)
}

const debounce = function(fn,d){
    let timer;
     return function(){
      let context = this;
      args= arguments;
      clearInterval(timer)
       timer=setTimeout(()=>{
         getData.apply(context,arguments)
       },d)
     }
}

const doSomeMagic = debounce(getData,3000)


const person = {
  name:"Adtiya",
  city:"Dehradun",
  PrintDetails :  function(){
    console.log(this.name +" "+ "from" + " " +this.city)
  }
}
const person1 = {
  name="Vikas"
}

person1.__proto__= person;