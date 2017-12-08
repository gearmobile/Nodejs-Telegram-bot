

module.exports.random = function(minfactor = 0, maxfactor = 100) {

  return `Случайное число: ${Math.floor(minfactor + (Math.random() * (maxfactor + 1 - minfactor)))}`;
}
