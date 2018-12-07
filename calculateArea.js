//площадь прямоугольника =  длина * высота

function calculateArea(length, width, measure = "cm", figure = 'rectangle') {
  let area = length*width + `${measure}^2`;

  // сюда можно  = {...arguments}, но тогда значения по умолчанию не попадут
  let input = {length, width, measure};
  return console.log({area, figure, input});
}