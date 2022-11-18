//**Instructions:** Define a function called `introduction` that defines a
//parameter, `name`, and returns the phrase: "Hi, my name is ${name}."

//function getLoadingMessage(isLoading) {
  //  return `Data is ${isLoading ? 'loading...' : 'done!'}`;
  //}

function introduction(name="Aki") {
    return `Hi, my name is ${name}.`
}
//**Instructions:** To pass the second test, you'll need to define a function
//called `introductionWithLanguage` that defines two parameters, `name` and
//`language`, and returns the phrase: "Hi, my name is [name] and I am learning to
//program in [language]."
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

//**Instructions:** Copy the function you created for the second test and name it
//`introductionWithLanguageOptional`. It should have two parameters, `name` and
//`language`, and the second parameter should have a default value of
//"JavaScript".

function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

