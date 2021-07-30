function introduction(name) { //One parameter function
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) { //Two parameters function
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") { //Setting parameter equal to a default value
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}