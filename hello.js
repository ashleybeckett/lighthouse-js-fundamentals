const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Ashley");

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('Ashley # 2'); 

const returnSayHello = function(name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John");
console.log(greeting);