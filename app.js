for (var i=1; i <= 100; i++) {
  var mod3 = (i % 3);
  var mod5 = (i % 5);
  if (mod3 == 0 && mod5 == 0) {
    console.log("FizzBuzz");
  }
  else if (mod3 == 0) {
    console.log("Fizz");
  }
  else if (mod5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}
