import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Problem } from "../../models/problem.model";
import { DataService } from "../../services/data.service";




@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
// variables
  problem: Problem;


// param: dataservice for data, current route value #1
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route is the current route
    // params['id'] returns a string +cast string to number
    this.route.params.subscribe(params =>{
      // this.problem = this.dataService.getProblem(+params['id']);})

      this.dataService.getProblem(+params['id']).then(problem => this.problem = problem);
    });
  }




}
