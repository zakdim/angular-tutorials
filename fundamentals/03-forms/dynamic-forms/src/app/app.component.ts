import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid mt-3">
      <h2 class="ml-2 mb-3">Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}