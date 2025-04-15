import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectId: any; 

  setProjectId(id: any) {
    this.projectId = id;
  }

  getProjectId() {
    return this.projectId;
  }
}