// Напишите функцию interviewQuestion, которая вызывается как:
// interviewQuestion('teacher')('John')
// и возвращает строку, с вопросом для интервью, для указанной
// профессии.

function interviewQuestion(job) {
  return function(name) {
    if (job == 'teacher') {
      return 'What subject do you teach ' + name + '?';
    } else if (job == 'designer') {
      return name + ' can you please explain what UX design is?';
    } else {
      return 'Hello ' + name + ', what do you do?';
    }
  }
}
console.log(interviewQuestion('teacher')('John'));
console.log(interviewQuestion('designer')('John'));
console.log(interviewQuestion('other')('Rob'));