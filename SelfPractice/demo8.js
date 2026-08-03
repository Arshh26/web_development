function add(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

console.log(add(10, 20, 30, 40, 50));
