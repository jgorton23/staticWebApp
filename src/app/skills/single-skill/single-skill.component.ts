import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-skill',
  templateUrl: './single-skill.component.html',
  styleUrls: ['./single-skill.component.css'],
})
export class SingleSkillComponent implements OnInit {

  @Input()
  level: number | undefined;
  
  constructor() { }

  showDetails: boolean = false;

  ngOnInit(): void {
  }

  onClick(){
    this.showDetails = !this.showDetails;
  }
}
