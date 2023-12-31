import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient) { }

  getProjects(){
    return this.http.get('http://localhost/backend/Controller/ProjectsController.php', {responseType: 'json'});
  }
}