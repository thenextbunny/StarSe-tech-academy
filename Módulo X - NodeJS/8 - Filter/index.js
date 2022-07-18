import { getPeople } from './star-wars-service.js';

async function main () {
    const starWarsPeople = await getPeople(1);
    const starWarsPeopleFiltered = starWarsPeople
        .filter(person => {
            return person.gender === 'male'
        })
        .map((person) => {
            return {
                name: person.name, 
                gender: person.gender
            } 
        });
    console.log(starWarsPeopleFiltered)
}

main();