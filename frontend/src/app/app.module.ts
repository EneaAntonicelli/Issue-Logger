import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListComponent } from "./components/list/list.component";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";
// Allows you to inject issue services into our component classes stemming from the root
import { IssueService } from "./issue.service";

const routes: Routes = [
  { path: "create", component: CreateComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "list", component: ListComponent },
  // This route is the default path. rederecting it to 'list' route and specifying that the redirect is only taking place if we have an exact match.
  { path: "", redirectTo: "list", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, ListComponent, CreateComponent, EditComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Allows you to inject http client service into the IssueService to then make use of http client to send out http requests to the node.js endpoints
    HttpClientModule,
    // Configures the routing at the root level
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule {}
