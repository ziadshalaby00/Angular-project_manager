import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { marked } from 'marked';
import { VirtualiService } from '../virtual-data.service';
import { ProjectService } from '../project-id.service';

@Component({
    selector: 'app-description',
    imports: [],
    templateUrl: './description.component.html',
    styleUrl: './description.component.css'
})
export class DescriptionComponent {
  data: any = []
  markdownContent: string = ""

  @Input() project_id!: string;
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private myVirtualData: VirtualiService,
    private projectService: ProjectService
  ) {}

  getHtmlContent() {
    return marked(this.markdownContent);
  }

  ngOnInit(): void {
    this.data = this.myVirtualData.setVirtuali();
    
    this.project_id = this.projectService.getProjectId();
    let item: any = this.data.filter((p: any) => p.id == this.project_id)[0]
    
    this.markdownContent = item.description
  }
}
