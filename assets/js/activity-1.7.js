// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Usage instructions: Create a single array variable named 'activity'. This
// represents explanatory text and one or more questions to present to the
// student. Each element in the array should itself be either
//
// -- a string containing a set of complete HTML elements. That is, if the
//    string contains an open HTML tag (such as <form>), it must also have the
//    corresponding close tag (such as </form>). You put the actual question
//    text in a string.
//
// -- a JavaScript object representing the answer information for a question.
//    That is, the object contains properties such as the type of question, a
//    regular expression indicating the correct answer, a string to show in
//    case of either correct or incorrect answers or to show when the student
//    asks for help. For more information on how to specify the object, please
//    see http://code.google.com/p/course-builder/wiki/CreateActivities.

var activity = [

  '<table border="2"><tr><td><b>Tips:</b><p><ul><li>En los video anteriores aprendiste las operaciones con números decimales, es importante que si no te quedo algo claro, repases nuevamente los videos. <li>Te recomendamos tener a la mano tus apuntes para que puedas responder y repasar lo aprendido.</ul><p></tr></td></table><br>',

   '<br>Resuelve las siguientes operaciones en tu cuaderno sin ayuda de calculadoras.<br><br><img src="assets/img/u1_img_5.png" width="785" height="500" usemap="#Image1" border="0"><p>Responde correctamente el siguiente Quiz<p>',
  
  'En las siguientes preguntas debes contestar verdadero o falso, recuerda  desarrollar los ejercicios en tu cuaderno y sin ayudas de calculadoras<p>',

  { questionType: 'multiple choice group',
    questionsList: [{questionHTML: ' El resultado de la pregunta 1. ¿es verdadero o falso?. ',
                     choices: ['Verdadero', 'Falso'], correctIndex: 1},
                    {questionHTML: ' El resultado de la pregunta 2. ¿es verdadero o falso?',
                      choices: ['Verdadero', 'Falso'], correctIndex: 0},
                    {questionHTML: ' El resultado de la pregunta 3. ¿es verdadero o falso?',
                     choices: ['Verdadero', 'Falso'], correctIndex: 0},
                    {questionHTML: ' El resultado de la pregunta 4. ¿es verdadero o falso?',
                     choices: ['Verdadero', 'Falso'], correctIndex: 0},
                    {questionHTML: ' El resultado de la pregunta 5. ¿es verdadero o falso?',
                     choices: ['True', 'False'], correctIndex: 1},
                    {questionHTML: ' El resultado de la pregunta 6. ¿es verdadero o falso?',
                     choices: ['True', 'False'], correctIndex: 1}],
    allCorrectOutput: 'Por favor continua con el examen.',
    someIncorrectOutput: 'Vuelve a intentarlo hay algo que te quedo mal.'},

  '<br><br><br>Identifique en la siguiente imagen las partes de las operaciones y diga cuales ejemplos estan correctos.<br><br><img src="assets/img/u1_img_6.png" width="797" height="342" usemap="#Image1" border="0"><p>Hay partes de las operaciones que son incorrectas, seleccione de las siguientes opciones la que tenga todas las partes correctas<p>',

  { questionType: 'multiple choice',
    choices: [['a', false, 'Tu respuesta es incorrecta. En la suma no hay minuendo. Por favor vuelve a intentarlo.'],
              ['b', false, 'Tu respuesta es incorrecta. Pues ademas de esta opción existe otra que esta correcta. Por favor vuelve a intentarlo.'],
              ['c', false, 'Tu respuesta es incorrecta. Pues ademas de esta opción existe otra que esta correcta. Por favor vuelve a intentarlo.'],
              ['d', false, 'Tu respuesta es incorrecta. En la división no hay factor. Por favor vuelve a intentarlo.'],
              ['a y b', false, 'Respuesta incorrecta. La opción "a" es incorrecta. Por favor vuelve a intentarlo.'],
              ['b y c', true, 'Felicitaciones tu respuesta es correcta, sigue adelante con el curso.'],
              ['c y d', false, 'Respuesta incorrecta. La opción "d" es incorrecta. Por favor vuelve a intentarlo.']]}

];

