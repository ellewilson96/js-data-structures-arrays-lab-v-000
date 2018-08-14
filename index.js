// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
}

function appendDriver(name) {

}

function prependDriver(name) {

}

function removeLastDriver() {
  drivers.slice(-1);
}

function removeFirstDriver() {
  drivers.slice(1);
}
