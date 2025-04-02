const readAndCreate = async () => {
    const fileData = await readFile();
    console.log("File Data", fileData);

    const array = await createStringArray(fileData);
    console.log("Array generated", array);

    return array;

}