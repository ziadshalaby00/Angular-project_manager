import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ أضف
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { VirtualiService } from '../virtual-data.service';
import { ProjectService } from '../project-id.service';

@Component({
    selector: 'app-project-info',
    imports: [FormsModule, RouterModule, CommonModule, RouterOutlet],
    templateUrl: './project-info.component.html',
    styleUrl: './project-info.component.css'
})
export class ProjectInfoComponent {
  data: any = []
  item: any = {}

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private myVirtualData: VirtualiService,
    private projectService: ProjectService
    ) {}

  ngOnInit(): void {
    this.data = this.myVirtualData.setVirtuali();
    this.router.navigate(['Description'], { relativeTo: this.route });
    
    let project_id = this.route.snapshot.paramMap.get('id')
    this.projectService.setProjectId(project_id);

    this.item = this.data.filter((p: any) => p.id == project_id)[0]
  }

  PSetting: number = 0
  togglePSetting(id: number) {
    if(this.PSetting == id) {
      this.PSetting = 0;
      return;
    }
    this.PSetting = id
  }

  Side: Boolean = false
  toggleSide() {
    this.Side = !this.Side
  }

  CompleteProject(status: string) {
    this.item.status = status === "Complete" ? "Ongoing" : "Complete"
  }

  deleteProject(project_id: number) {
    let c: boolean = confirm(`Are you sure you want to delete this project? ${project_id}`)
  }
}
