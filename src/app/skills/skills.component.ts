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
    {skillName: "Java", years: 4, level: 5, description: 'I have been learning and using Java since 2017. It was the first language I learned. I have used it in both personal and academic projects.'},
    {skillName: "Git", years: 5, level: 5, description: 'I have used git for close to 5 years for personal and academic projects, and also in a professional setting during my internship.'},
    {skillName: "Python", years: 1, level: 4, description: 'I have been learning Python for just over a year. I have used it to develop personal projects and to solve leetcode problems.'},
    {skillName: "SQL", years: 2, level: 3, description: 'I have been learning and using SQL for over a year. I developed multiple academic projects that relied on SQL, and I also usead it heavily during internship.'},
    {skillName: "C/C++", years: 2, level: 4, description: 'I have been learning C/C++ for multiple years. I have completed several academic projects using C and C++, including a functional operating system.'},
    {skillName: "C#", years: 1, level: 4, description: 'I have learned within the past year, but I have picked it up very fast. I have primarily used C# while working at my internship.'},
    {skillName: "Docker", years: 1, level: 2, description: 'I have just begun to use docker within the past year. I have developed small dockerized projects to familiarize myself with using it.'},
    {skillName: "AWS", years: 1, level: 2, description: ''},
    {skillName: "TypeScript", years: 3, level: 4, description: ''},
    {skillName: "Angular", years: 1, level: 4, description: ''},
    {skillName: "React Native", years: 1, level: 3, description: ''},
    {skillName: "React.js", years: 1, level: 3, description: ''},
    {skillName: "CSS", years: 5, level: 3, description: ''},
    {skillName: "HTML", years: 5, level: 3, description: ''},
  ]

}
