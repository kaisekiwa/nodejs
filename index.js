const readline = require('readline');
const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function TestOne(a, b) {
    let z;
    z = a + b
    console.log('funtion ' + z);
}
function TestTwo(a, b) {
    let z;
    z = a + b
    console.log('funtion ' + z);
}

TestOne(1, 5);
TestTwo(1, 9);

readInterface.question('Enter your Score 0-100 : ', (ScoreInput) => {
    readInterface.close();
    ScoreInput = Number(ScoreInput);

    console.log('Test Score', ScoreInput)

})
