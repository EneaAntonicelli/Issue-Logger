import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class IssueService {
  uri = "http://localhost:4000";
  // Adding privade scopes it to this class and does not allow it to be accessible globally
  constructor(private http: HttpClient) {}
  // The following are methods used to send out the get requests via http. $this inside the backtick brackets allows the use of the standard url defined in variable "uri"
  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }
  getIssuesById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }
  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }
  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    // The second parameter "issue" is added so that the new issue object is part of the body data of this http request
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
