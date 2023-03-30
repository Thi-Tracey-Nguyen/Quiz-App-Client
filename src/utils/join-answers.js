export default function joinAnswers(question) {
  const answersArray = [question.correctAnswer]
  question.incorrectAnswers.forEach(incorrectAnswer => answersArray.push(incorrectAnswer))
  return answersArray
}