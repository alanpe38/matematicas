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

  '<table border="2"><tr><td><b>Tips:</b><p><ul><li>En el anterior video, aprendiste la ley de los signos y las operaciones con numeros enteros. de acuerdo a eso vas a responder las siguientes preguntas. <li>Importante: lleva tus registros en un cuaderno, y desarrolla cada ejercicio en este, pues escribir fortalece lo que se quiere aprender.</ul><p></tr></td></table><br>',

  '<img src="assets/img/u1_img_1.png" height=450 width=785><p/>',
  '<b>1.</b> Cual es la respuesta correcta para la multiplicación que se ve en la imagen anterior?<p>',

  { questionType: 'multiple choice',
    choices: [['-54', false, 'Te recomendaria que repases un poco las tablas de multiplicar.'],
              ['54', false, 'Te recomendaria estudiar las tablas de multiplicar y las leyes de los signos.'],
              ['63', false, 'Vuelve a ver la primera parte del video anterior, para que entiendas correctamente las leyes de los signos.'],
              ['-63', true, 'Correcto! esta es la respuesta correcta, sigue adelante con el curso.']]},

	'<img src="assets/img/u1_img_2.png" height=450 width=785><p/>',
  '<b>2.</b> Cual es la respuesta correcta para la división que se ve en la imagen anterior?<p>',

  { questionType: 'multiple choice',
    choices: [['-9', false, 'Es bueno que practiques un poco la división y veas nuevamente el video anterior para que tengas claro las leyes de los signos.'],
              ['8', true, 'Excelente, continua con la siguiente pregunta.'],
              ['9', false, 'Es bueno que practiques un poco la división.'],
              ['-8', false, 'Vuelve a ver la primera parte del video anterior, para que entiendas correctamente las leyes de los signos.']]},

  '<br><br><br><img src="assets/img/u1_img_3.png" height=450 width=785><p/>',
  '<br><b>3.</b> Escribe el resultado correspondiente a la operación de la imagen',

  { questionType: 'freetext',
    correctAnswerRegex: /-36/i,
    correctAnswerOutput: 'Correcto! entendiste muy bien lo visto en el video.',
    incorrectAnswerOutput: 'No, sumaste mal, por favor revisa el video nuevamente y responde correctamente.',
    showAnswerOutput: 'La respuesta es número "-36", recuerda hacer este ejercicio ubicando los numeros en la recta numerica como se explica en el video anterior, para entender bien este ejercicio.' },

 '<br><br><br><img src="assets/img/u1_img_4.png" height=450 width=785><p/>',
  '<br><b>4.</b> Escribe el resultado correspondiente a la operación de la imagen',

  { questionType: 'freetext',
    correctAnswerRegex: /-54/i,
    correctAnswerOutput: 'Correcto! entendiste muy bien lo visto en el video.',
    incorrectAnswerOutput: 'No, sumaste mal, por favor revisa el video nuevamente y responde correctamente.',
    showAnswerOutput: 'La respuesta es número "-54", recuerda hacer este ejercicio ubicando los numeros en la recta numerica como se explica en el video anterior, para entender bien este ejercicio.' },
  '<br><br><br><b>3.</b> What is something you have wanted to find that color filtering might have helped you locate faster? Try it out and share your story in the <a href="LINK_TO_COURSE_FORUM" target="_blank">forum</a>.',

];

