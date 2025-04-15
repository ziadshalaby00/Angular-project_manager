import { Component } from '@angular/core';
import { VirtualiService } from '../virtual-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project-id.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-notes',
    imports: [CommonModule],
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css'
})
export class NotesComponent {
    data: any = []
    project_id: any
    item: any = []

    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private myVirtualData: VirtualiService,
        private projectService: ProjectService
    ) {}

    ngOnInit(): void {
        this.data = this.myVirtualData.setVirtuali();
        
        this.project_id = this.projectService.getProjectId();
        this.item = this.data.filter((p: any) => p.id == this.project_id)[0]
    }

    currentNote: number = 0
    openNote(id: number){
        if(this.currentNote == id) {
            this.currentNote = 0;
            this.currentEdit = 0;
            return
        }
        this.currentNote = id;
        this.currentEdit = 0;
    }

    currentEdit: number = 0
    openEdit(id: number){
        if(this.currentEdit == id) {
            this.currentNote = 0;
            this.currentEdit = 0;
            return
        }
        this.currentEdit = id;
        this.currentNote = 0;
    }

    addNote: boolean = false
    openAddNote() {
        this.addNote = !this.addNote
    }

    deleteNote(note_id: number) {
        let c: boolean = confirm(`Are you sure you want to delete this note? ${note_id}`)
    }
}
