import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface InterfaceQuiz {
  question: string;
  items: InterfaceQuizItem[];
}
export interface InterfaceQuizItem {
  answer: string;
  iscomplete: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AppService {
  questions$ = new BehaviorSubject<InterfaceQuiz[]>([
    {
      question: 'What is sql ?',
      items: [
        {
          answer: 'sql programming',
          iscomplete: true,
        },
        {
          answer: 'none-sql language',
          iscomplete: false,
        },
        {
          answer: 'sql nature',
          iscomplete: false,
        },
        {
          answer: 'sql ceit',
          iscomplete: false,
        },
      ],
    },
    {
      question: 'What is java ?',
      items: [
        {
          answer: 'java programming',
          iscomplete: true,
        },
        {
          answer: 'none java language',
          iscomplete: false,
        },
        {
          answer: 'java miww',
          iscomplete: false,
        },
        {
          answer: 'java oppa',
          iscomplete: false,
        },
      ],
    },
    {
      question: 'What is vue ?',
      items: [
        {
          answer: 'vue programming',
          iscomplete: false,
        },
        {
          answer: 'vue framework',
          iscomplete: true,
        },
        {
          answer: 'vue sensitive',
          iscomplete: false,
        },
        {
          answer: 'vue render',
          iscomplete: false,
        },
      ],
    },
    {
      question: 'What is angular ?',
      items: [
        {
          answer: 'angular programming',
          iscomplete: false,
        },
        {
          answer: 'angular framework',
          iscomplete: true,
        },
        {
          answer: 'angular suck',
          iscomplete: false,
        },
        {
          answer: 'angular universal is shit',
          iscomplete: false,
        },
      ],
    },
  ]);

  get questions() {
    return this.questions$.getValue();
  }
}
