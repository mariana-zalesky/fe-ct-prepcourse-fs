function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if ("aeiou".includes(letra.toLowerCase())){
    return "es vocal"
  } else {
  return "dato incorrecto";
}
}
console.log(esVocal("cAldo"));
console.log(esVocal("a"))

module.exports = esVocal;
