var ancestry = require('./helper/5-ancestry.js');

ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function hasKnownMother(person) {
    return byName[person.mother] !== undefined;
}

function difference(person) {
    return byName[person.mother].born - person.born;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(average(ancestry.filter(hasKnownMother).map(difference)));
