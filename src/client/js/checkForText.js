function checkForText(formlocation) {
    console.log("::: Running checkForText :::", formlocation);
    if (formlocation === "") {
        return false;
    }
    return true;
}

export { checkForText }
