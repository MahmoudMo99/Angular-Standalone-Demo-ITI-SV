import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer implements OnInit, OnDestroy {
  interval: any;

  // 1. Dependency Injection
  // 2. Variables Initialization
  constructor() {
    console.log('iam constructor');
  }

  // data load
  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('interval ...tick');
    }, 1000);
  }

  // before destroy
  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('timer component destroyed');
  }
}
