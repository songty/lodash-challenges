var _ = require('lodash');

var example = _.flatten([1, [2], [3, [[4] , 5], 6]]);

var characters = [
  { 'name': 'barney', 'age': 30, 'pets': ['hoppy'] },
  { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
];

// using "_.pluck" callback shorthand
// characters = _.flatten(_.pluck(characters, 'pets'));
// → ['hoppy', 'baby puss', 'dino']

var date = [
	{ 'month': 'January', 'week': [ {'monday': 1}, {'tuesday': 2}, ]}
];

allWeeks = _.flatten(_.pluck(date, 'month'));

console.log(allWeeks);