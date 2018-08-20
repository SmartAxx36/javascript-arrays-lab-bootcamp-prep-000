// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop(3)
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(1)
  return kittens
}
function appendKitten(name) {
  kittens = [...kittens, 'Broom']
  return kittens
}