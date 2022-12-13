import { Component, OnInit } from '@angular/core';
import { skill } from '../shared/skillInterface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
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
    {skillName: "AWS", years: 1, level: 2, description: 'I hvae started working with several AWS services within the past year. I have developed several personal projects using tools such as Lambda, Amplify, SNS, DynamoDB, and more.'},
    {skillName: "TypeScript", years: 3, level: 4, description: 'I have been learning JavaScript for over 5 years, and within the past year I have been transitioning to TypeScript. I have used it for personal projects and during my internship.'},
    {skillName: "Angular", years: 1, level: 4, description: 'Within the past year I began using the Angular framework for front-end development. I primarily used it for my internship, and to build this website.'},
    {skillName: "React Native", years: 1, level: 3, description: 'I learned React Native for a year, and used it to develop a basic mobile app as a personal project.'},
    {skillName: "React.js", years: 1, level: 3, description: 'I learned React.js for a year and primarily used it to develop responsive front-ends for my academic projects.'},
    {skillName: "CSS", years: 5, level: 3, description: 'I have been learning CSS3 for 5 years. I have used it everywhere, from academic and personal projects to professional code at Thinix.'},
    {skillName: "HTML", years: 5, level: 3, description: 'HTML5 was the topic of my first Computer Science course in highschool. I have been improving and learning since then, and have used HTML academic projects, personal projects, and at Thinix.'},
  ]

}
