import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS } from '../mock-problems';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  problems: Problem[];
  // new Problem: Problem;

  // problems: Problem[] = PROBLEMS;


  constructor() {
    this.problems= PROBLEMS;
  }

// return an array of Problem class
  getProblems (): Problem[] {
    return this.problems;
  }

  getProblem(id: number): Problem {
    // array.find  for each problem in problems, we look for id == problem.id

    return this.problems.find( (problem) => problem.id === id);
  }

  addProblem(problem: Problem) {
    problem.id = this.problems.length + 1;
    this.problems.push(problem);
    // this.dataService.addProblem(this.newProblem);
    // this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }



}
