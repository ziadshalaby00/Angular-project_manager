import { DescriptionComponent } from './../description/description.component';
import { Component } from '@angular/core';
import { marked } from 'marked';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { VirtualiService } from '../virtual-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-project',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css'
})

export class EditProjectComponent {
  data: any = []
  item: any = {}
  markdownContent: string = ""

  constructor(private route: ActivatedRoute, private router: Router, private myVirtualData: VirtualiService) {
  }

  getHtmlContent() {
    return marked(this.markdownContent);
  }

  ngOnInit(): void {
    this.data = this.myVirtualData.setVirtuali();
    let projecct_id = this.route.snapshot.paramMap.get('id')
    
    this.item = this.data.filter((p: any) => p.id == projecct_id)[0]
    this.markdownContent = this.item.description
  }

  CompleteProject(status: string) {
    this.item.status = status === "Complete" ? "Ongoing" : "Complete"
  }
}
