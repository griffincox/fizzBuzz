for (var i=1; i <= 100; i++) {
  var mod3 = (i % 3);
  var mod5 = (i % 5);
  var el = document.createElement("p");
  if (mod3 == 0 && mod5 == 0) {
    el.innerHTML = "FizzBuzz";
    document.body.appendChild(el);
  }
  else if (mod3 == 0) {
    el.innerHTML = "Fizz";
    document.body.appendChild(el);
  }
  else if (mod5 == 0) {
    el.innerHTML = "Buzz";
    document.body.appendChild(el);
  }
  else {
    el.innerHTML = i;
    document.body.appendChild(el);
  }
}
