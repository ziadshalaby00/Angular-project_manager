import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project-id.service';
import { VirtualiService } from '../virtual-data.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-members',
    imports: [FormsModule],
    templateUrl: './members.component.html',
    styleUrl: './members.component.css'
})
export class MembersComponent {
    data: any = []
    usersinv: any = []
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
        this.usersinv = this.myVirtualData.getUsersinv()
        
        this.project_id = this.projectService.getProjectId();
        this.item = this.data.filter((p: any) => p.id == this.project_id)[0]
    }

    inviteMember!: boolean
    openim() {
        this.inviteMember = !this.inviteMember
    }

    memberSearch: string = "ziad shalaby 1"
    resultAddMember!: any
    addMember() {
        this.resultAddMember = this.usersinv.filter((u: any) => u.username === this.memberSearch)[0]
    }

    deleteMember(member_id: number) {
        let c: boolean = confirm(`Are you sure you want to delete this Member? ${member_id}`)
    }
}
