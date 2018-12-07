// функция - запрашивает на ввод параметры и передаёт их в генератор, генернеатор записывает все ответы в объект

function* Generator() {
  yield prompt('Как Вас зовут?');
  yield prompt ('Сколько Вам лет"');
  yield prompt('Довольны жизнью?');
}

let iterator = Generator();

function personalFile (name, age, goodLife) {
return {name, age, goodLife}
}

