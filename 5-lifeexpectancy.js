var ancestry = require('./helper/5-ancestry.js');

ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function gatherCenturies(ancestry) {
    var centuryGroups = {};
    ancestry.forEach(function(person) {
        var century = Math.ceil(person.died / 100);
        if (centuryGroups.hasOwnProperty(century))
            centuryGroups[century].push(person.died - person.born);
        else
            centuryGroups[century] = [person.died - person.born];

    });
    return centuryGroups;
}

var centuries = gatherCenturies(ancestry);

for (var century in centuries) {
    console.log(average(centuries[century]));

}
