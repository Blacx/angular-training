function insertItemAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [4, 5, 6];
const updatedArray = insertItemAtBeginning(demoArray, 3);

function methodA(array: string[], value: string) {
    const newArray = [value, ...array];
    return newArray;
}

function methodB(array: number[], value: number) {
    const newArray = [value, ...array];
    return newArray;
}