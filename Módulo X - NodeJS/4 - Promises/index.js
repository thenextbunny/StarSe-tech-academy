// Callback
function message() {
    const promiseMessage = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Beba água');
            resolve();
        }, 0);
    });
    return promiseMessage;
}

function message2() {
    console.log('hoje...')
}

message().then(message2);

// Promises
