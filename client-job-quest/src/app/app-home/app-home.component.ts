import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.css'
})
export class AppHomeComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log("hello");
  }
}
