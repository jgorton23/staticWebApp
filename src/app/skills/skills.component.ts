import { Component, OnInit } from '@angular/core';
import { skill } from '../shared/skillInterface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})

export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.skills.sort((a,b) => {return b.level - a.level})
  }

  skills: skill[] = [
    {skillName: "Java", years: 4, level: 5, description: ''},
    {skillName: "Git", years: 5, level: 5, description: ''},
    {skillName: "Python", years: 1, level: 4, description: ''},
    {skillName: "SQL", years: 2, level: 3, description: ''},
    {skillName: "C/C++", years: 2, level: 4, description: ''},
    {skillName: "Docker", years: 1, level: 2, description: ''},
    {skillName: "AWS", years: 1, level: 2, description: ''},
    {skillName: "TypeScript", years: 3, level: 4, description: ''},
    {skillName: "Angular", years: 1, level: 4, description: ''},
    {skillName: "React Native", years: 1, level: 3, description: ''},
    {skillName: "React.js", years: 1, level: 3, description: ''},
    {skillName: "CSS", years: 5, level: 3, description: ''},
    {skillName: "HTML", years: 5, level: 3, description: ''},
  ]

}
