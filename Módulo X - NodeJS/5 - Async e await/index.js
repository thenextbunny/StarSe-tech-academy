/*
// Sem async/await

import fetch from 'node-fetch';

function main() {
    const user = 'thenextbunny';
    const apiUrl = 'https://api.github.com';
    fetch(`${apiUrl}/users/${user}`).then((response) => {
        return response.json();
    }).then((user) => {
        console.log(user); // Acessar atributo com user.name
    });
}

main();
*/

import fetch from 'node-fetch';

async function main() {
    const user1 = 'thenextbunny';
    const user2 = 'rafael';
    const apiUrl = 'https://api.github.com';

    const promise1 = fetch(`${apiUrl}/users/${user1}`);
    const promise2 = fetch(`${apiUrl}/users/${user2}`);
    const promises = await Promise.all([promise1, promise2]);
    const githubUser1 = await promises[0].json();
    const githubUser2 = await promises[1].json();
    console.log(`thenextbunny: ${githubUser1.id}`);
    console.log(`Rafael: ${githubUser2.id}`);
}

main();