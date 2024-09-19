function callAsync(){}

//callAsync
async function callAnotherAsync(){
    console.log('callAsync-1');    
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log('callAsync-2');
    console.log(response.json())

    const response1 = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log('callAsync-3');
    console.log(response1.json())
    }catch(error) {
        console.log('Error callAsync');
        console.log(error);
    }
    console.log('callAsync-4');
}
callAnotherAsync();

function callNewAsync() {
    callAnotherAsync()
}