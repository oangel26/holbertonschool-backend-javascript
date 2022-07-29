import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    const b1 = new TestBuilding(200)
    console.log(b1);
}
catch(err) {
    console.log(err);
}
