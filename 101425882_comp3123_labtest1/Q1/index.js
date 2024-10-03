const lowerCaseWords = (inputArray) => {
    return new Promise((resolve, reject) => {
        // Check if the input is an array
        if (!Array.isArray(inputArray)) {
            return reject('Input must be an array');
        }

        // Filter and lowercase the strings
        const result = inputArray
            .filter(item => typeof item === 'string') // Filter non-strings
            .map(item => item.toLowerCase()); // Lowercase remaining strings

        resolve(result);
    });
};

lowerCaseWords(['PIZZA', 10, true, 25, false, 'WINGS'])
    .then(result => console.log(result))
    .catch(error => console.error(error));
