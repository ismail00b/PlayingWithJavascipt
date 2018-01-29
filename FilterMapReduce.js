data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

Array.prototype.threeFun = function(filterCbk, mapCbk, reduceCbk)
{
	return this.filter(filterCbk)
	.map(mapCbk)
	.reduce(reduceCbk);
}

filterCbk = function(animal){return animal.type == 'dog';};
mapCbk = function(animal){return animal.age*7;};
reduceCbk = function(sum,age){ return sum+age;};
data.threeFun(filterCbk, mapCbk, reduceCbk);


