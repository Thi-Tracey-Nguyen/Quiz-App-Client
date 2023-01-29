let question = {
  correctAnswer: 'Oscar',
  incorrectAnswers: ['Buddy', 'Cheese', 'Sushi'] 

}

const answersArray = [question.correctAnswer]
console.log(answersArray)

question.incorrectAnswers.forEach(incorrectAnswer => answersArray.push(incorrectAnswer))

console.log(answersArray)

// function to shuffle answers
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(answersArray).map(item => console.log(item))

const test = shuffle(answersArray)
