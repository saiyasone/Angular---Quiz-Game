import { Component, VERSION } from '@angular/core';
import { AppService, InterfaceQuiz, InterfaceQuizItem } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  currentIndex = 0;
  totalScore = 0;
  timer = 5;
  start = false;
  isAnswer = false;
  finishGame = false;
  questions: InterfaceQuiz[] = [];
  select: InterfaceQuizItem = {
    answer: '',
    iscomplete: false,
  };
  // correctAnswers: InterfaceQuizItem[] = [];

  constructor(private appService: AppService) {
    appService.questions$.subscribe((data) => {
      this.questions = data;
    });

    // this.startTime();
  }

  startTime() {
    setInterval(() => {
      if (this.start) {
        if (this.timer === 1) {
          if (this.finishGame) {
            return;
          }
          return this.submitAnswer();
        }
        this.timer--;
      }
    }, 1000);
  }

  isStart() {
    this.start = !this.start;
  }
  startGame() {
    this.resetQuiz();
    this.isStart();
  }
  selectedAnswer(item: InterfaceQuizItem) {
    this.select = item;
    this.isAnswer = false;
  }

  previous() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.questions.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex === this.questions.length - 1) {
      this.currentIndex = 0;
      this.finishGame = true;
    } else {
      this.currentIndex++;
    }
  }

  submitAnswer() {
    this.isAnswer = true;
    // iscomplete => true ? totalScore++
    if (this.select.iscomplete) {
      this.totalScore += 1;
    }
    this.select = {
      answer: '',
      iscomplete: false,
    };
    this.next();
    this.timer = 5;
  }

  resetQuiz() {
    this.currentIndex = 0;
    this.totalScore = 0;
    this.isAnswer = true;
    this.finishGame = false;
    this.select = {
      answer: '',
      iscomplete: false,
    };
    this.timer = 5;
    // this.correctAnswers = [];
  }
}
