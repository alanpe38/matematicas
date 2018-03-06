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


// When the assessment page loads, activity-generic.js will render the contents
// of the 'assessment' variable into the enclosing HTML webpage.

// For information on modifying this page, see
// https://code.google.com/p/course-builder/wiki/CreateAssessments.


var assessment = {
  // HTML to display at the start of the page
  preamble: '<br><h3>La ingenieria de sistemas tiene como base fundamental las matematicas, es necesario que todos los estudiantes de esta carrera tengas bases firmes de ellas.</h3> <br>IMPORTANTE: Si no has entendido bien algun tema, quieres refozar lo aprendido o necesitas empezar a comprender un tema que no entendiste nunca, este es el espacio que necesitabas, acá encontraras todos los temas que se tratan en "Matematicas I" para que repases las lecciones cuantas veces creas necesario y poder pasar la asignatura con tus propios meritos:<br/><center><img src="assets/img/ei_img_1.png" height="50%" width="50%"></center><p>Administra bien tu tiempo, es lo unico que no se puede recuperar. <p>Adelante a aprender!<br><br><p><p>El siguiente test es un examen para verificar en que nivel de conocimientos te encuentras y no te debes preocuparte si no conoces ninguna respuesta; lo importantes es que son cosas que podras responder una vez acabes este curso.' ,
	

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'El numero dos (2) representado en esta recta, ¿a que conjunto de numeros pertenece?<p><img src="assets/img/ei_img_2.png" alt="search results for test question" height=120 width=500 title="search results for test question">',
     choices: ["b, c, d", "a, b, c", correct("a, b, c, d"), "b, c", "a,b"]
    },

    {questionHTML: 'Elejir la respuesta correcta al siguiente limite <p><img src="assets/img/ei_img_3.png" alt="search results for test question" height=50 width=150 title="search results for test question">',
     choices: [correct("-∞"), "+∞", "0"]
    },

    {questionHTML: 'Escriba la respuesta a la siguiente derivara (el simbolo " / " es para expresar "sobre o división" y las letras deben escribirse en minuscula)ej: 4x-5x/3x-4.<p><img src="assets/img/ei_img_4.png" alt="search results for test question" height=50 width=150 title="search results for test question">',
     correctAnswerString: '15/28x'
    },

    {questionHTML: 'Escriba la respuesta a la siguiente derivara (el simbolo " / " es para expresar "sobre o división", para expresar potenciación use el simbolo " ^ ", los parentesis deben abrir/cerrar exactamente y las letras (x) deben escribirse en minuscula)ej: 4x^3-5x^2/3x^2-4.<p><img src="assets/img/ei_img_5.png" alt="search results for test question" height=50 width=150 title="search results for test question">',
     correctAnswerString: '4x(3x^3-12x+10)/(3x^2-4)^2'
    }
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Pre', // unique name submitted along with all of the answers

  checkAnswers: false    // render a "Check your Answers" button to allow students to check answers prior to submitting?
}
