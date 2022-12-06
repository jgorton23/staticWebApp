import { Component, Input, OnInit } from '@angular/core';
import { skill } from 'src/app/shared/skillInterface';

@Component({
  selector: 'app-single-skill',
  templateUrl: './single-skill.component.html',
  styleUrls: ['./single-skill.component.css'],
})
export class SingleSkillComponent implements OnInit {
  
  constructor() { }

  showDetails: boolean = false;

  @Input()
  skill: skill | undefined

  ngOnInit(): void {
    console.log('open')
  }

  onClick(){
    console.log('test')
    this.showDetails = !this.showDetails;
  }
}
