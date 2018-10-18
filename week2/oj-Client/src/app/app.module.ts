import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";

import { routing} from "./app.routes";
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { EditorComponent } from './editor/editor.component';
// import { DataService} from "./services/data.service";


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
