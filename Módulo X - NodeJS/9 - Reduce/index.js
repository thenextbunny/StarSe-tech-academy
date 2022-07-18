import { getPeople } from './star-wars-service.js';

async function main () {
    const starWarsPeople = await getPeople(1);
    const totalHeight = starWarsPeople.reduce((total, person) => {
        total += Number(person.height);
        return total;
    }, 0);

    console.log('Média das alturas do personagens:', totalHeight / starWarsPeople.length);
}

main();