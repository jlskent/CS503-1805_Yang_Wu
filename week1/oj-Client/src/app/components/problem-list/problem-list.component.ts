import { Component, OnInit } from '@angular/core';
import { Problem } from "../../models/problem.model";

import { DataService } from "../../services/data.service";

// data source should be imported
// const PROBLEMS: Problem[] = [
// 	{
// 		"id":1,
// 		"name":"Two Sum",
// 		"desc":"Given an array of integers, find two numbers such that they add up to a specific target number.\n\nThe function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
// 		"difficulty":"easy"
// 	}
// ];


@Component({
  // select
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})

// below is actually the code of ProblemListComponent Class
// export means it can be accesseed by ?
export class ProblemListComponent implements OnInit {
  problems: Problem[];

  // out component needs dataService, angular will inject this for us as long we specify
  constructor(private dataService: DataService) { }

  // like viewdidload in swift
  ngOnInit() {
    this.getProblems();
  }

  getProblems(){
    this.problems = this.dataService.getProblems();
  }

}
