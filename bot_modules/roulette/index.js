module.exports.random = function() {
  return `Случайное число: ${Math.floor(Math.random() * 100)}`;
}
module.exports.toss = function() {
  let toss = (Math.round(Math.random())) ? 'Орел' : 'Решка';
  return toss;
}
