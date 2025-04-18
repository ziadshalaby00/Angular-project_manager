import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VirtualiService {

  constructor() { }

  setVirtuali() {
    let data: any = []

    for(let i=1; i <= 10; i++) {
      
      let des: any = `# A full-stack Django and Angular website ${i}
## is a project management system. 
    The platform includes registration, login, a homepage, 
    and a profile page where users can edit their personal information. 
    Once logged in, users are directed to a page displaying all their projects, 
    along with an invitations page and a page for creating new projects.

    Users can click on any project to view its details,
    leading them to the project page, 
    which consists of four main sections: Description, Tasks, Notes, Members
    
    Only the project owner can create and edit the description and tasks, 
    while any team member can complete assigned tasks and submit notes.

### Technologies Used:
        Frontend: Angular, Tailwind CSS, FontAwesome
        Backend: Django REST Framework

### Concepts Implemented:
        Pagination, Auth & Permission, REST API, Filtering, CRUD Operations`

      let members: any = []
      for(let k=1; k<=8; k++) {
        members.push({
          "id": k,
          "member": {
            "id": k,
            "username": `ziad shalaby ${k}`,
            "img": "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
          },
          "project": i,
          "created_at": "4/15/2025",
        })
      }

      let notes: any = []
      for(let k=1; k<=8; k++) {
        notes.push({
          "id": k,
          "title": `Title Note ${k}`,
          "description": 

`Note Sub Title 1 test
    Note description test ${k} Note description test ${k}
    Note description test ${k} Note description test ${k}
    Note description test ${k} Note description test ${k}
Note Sub Title 2 test
    Note description test ${k} Note description test ${k}
    Note description test ${k} Note description test ${k}
    Note description test ${k} Note description test ${k}`,

          "project": i,
          "created_at": "4/15/2025",
          "author": {
            "id": k < 4 ? 1 : k,
            "username": `ziad shalaby ${k < 4 ? 1 : k}`,
            "img": "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
          }
        })
      }

      let tasks: any = []
      for(let k=1; k<=8; k++) {
        tasks.push({
          "id": k,
          "title": `Title Task ${k}`,
          "description":
`task Sub Title 1 test
    task description test ${k} task description test ${k}
    task description test ${k} task description test ${k}
    task description test ${k} task description test ${k}
task Sub Title 2 test
    task description test ${k} task description test ${k}
    task description test ${k} task description test ${k}
    task description test ${k} task description test ${k}`,

          "assign_to": {
            "id": k,
            "username": `ziad shalaby ${k}`,
            "img": "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
          },

          "is_Complete": k<4 ? true : false,
          "Complete_by": k<4 ? {
            "id": k,
            "username": `ziad shalaby ${k}`,
            "img": "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
          } : null,
          "Complete_at": "3/12/2025",

          "project": i,
          "created_at": "4/15/2025",

          "is_dpr": k == 3 ? true : false,
        })
      }

      let model: any = {
        "id": i,
        "title": "Project Title "+i,
        "description": `${des}`,
        "author": {
          "id": i < 5 ? 1 : i,
          "username": `ziad shalaby ${i < 5 ? 1 : i}`,
          "img": "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"
        },
        "created_at": "3/30/2025",
        "status": i%2 == 0 ? "Ongoing" : "Complete",
        "members": members,
        "notes": notes,
        "tasks": tasks
      }
      
      data.push(model);
    }
    return data;
  }

  getUsersinv() {
    let usersinv: any = []
    for(let k=1; k<=30; k++) {
      usersinv.push({
        "id": k,
        "username": `ziad shalaby ${k}`,
        "img": "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
        "invited": k <= 8 ? true : false,
        "created_at": "4/15/2025",
      })
    }

    return usersinv;
  }

}
