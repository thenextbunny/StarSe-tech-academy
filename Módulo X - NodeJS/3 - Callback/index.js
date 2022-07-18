function message(callback) {
    setTimeout(() => {
        console.log('Beba água');
        callback();
    }, 0);
}

function message2() {
    console.log('First...')
}

message2();