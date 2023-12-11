import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechIntelligencesService {

  constructor(
    private http: HttpClient) { }

  getTechIntelligences(){
    return this.http.get('http://localhost/backend/Controller/Tech_intelligencesController.php', {responseType: 'json'});
  }
}
