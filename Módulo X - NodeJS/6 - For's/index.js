import { getPeople } from './star-wars-service.js';

async function main () {
    const starWarsPeople = await getPeople(1);

    // For
    /*
    for (let i = 0; i < starWarsPeople.length; i++) {
        console.log(starWarsPeople[i].name)
    }
    */

    // For... in
    /*
    for (let propertyPerson in starWarsPeople[0]) {
        console.log(starWarsPeople[0][propertyPerson]);
    }
    */

    // For... of
    for (let person of starWarsPeople) {
        console.log(person.name)
    }


}

main();