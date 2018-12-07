let callback = (i) =>console.log(`${i}`);

function loop(times = 0, callbackFunction = null) {
  if (!callbackFunction) {
    console.log(`Функцию не передали, функция = ${callbackFunction}`);
  } else for (let i = 0; i < times; i++) {
    callbackFunction(i);
  }
}
