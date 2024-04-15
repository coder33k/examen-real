//karla diaz anaya 740480

class Game {
  // inicializa los atributos del juego
  constructor() {
    this.secretNumber = this.generateSecretNumber();
    this.guesses = [];
    this.maxGuesses = 10;
    this.remainingGuesses = this.maxGuesses;
  }

  // Método para generar un número secreto aleatorio entre 1 y 100
  generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Método para registrar una conjetura del usuario y verificar si es correcta
  guess(number) {
    // Verifica si el juego ya ha terminado
    if (this.remainingGuesses === 0) {
      return "¡El juego ha terminado!";
    }

    // Registra la conjetura del usuario y disminuye el contador de conjeturas restantes
    this.guesses.push(number);
    this.remainingGuesses--;

    // Verifica si la conjetura es correcta
    if (number === this.secretNumber) {
      return "¡Felicidades! ¡Lo has adivinado!";
    } else if (number < this.secretNumber) {
      return "¡El número secreto es mayor!";
    } else {
 