import { getPeople } from './star-wars-service.js';

async function main () {
    const starWarsPeople = await getPeople(1);
    const starWarsPeopleName = starWarsPeople.map((person) => {
        // const name = person.name;
        // const height = person.height;
        const { name, height } = person;
        return {name, height}

    });
    console.log(starWarsPeopleName);
}

main();