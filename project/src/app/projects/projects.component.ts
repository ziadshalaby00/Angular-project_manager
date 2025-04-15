import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { VirtualiService } from '../virtual-data.service';
import { marked } from 'marked';

@Component({
    selector: 'app-projects',
    imports: [CommonModule, RouterModule, FormsModule, DatePipe],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  data: any = []
  $data: any = []


  constructor(private myVirtualData: VirtualiService) {

  }

  ngOnInit(): void {
    this.data = this.myVirtualData.setVirtuali();
    this.$data = this.data
    console.log(this.$data)
  }

  filters = [
    {
      "filter": 'All',
      "count": 20,
    },
    {
      "filter": 'Created',
      "count": 0,
    },
    {
      "filter": 'Done',
      "count": 10,
    }, 
    {
      "filter": 'Ongoing',
      "count": 10,
    }, 
    {
      "filter": 'Invited',
      "count": 10,
    }, 
  ];
  activeFilter = 'All';

  filterData(filter: string, fromSearch: boolean = false) {
    this.activeFilter = filter

    if(fromSearch) {
      this.$data = this.data.filter((e: any) => e.title.includes(filter));
      this.activeFilter = ''
      return
    }

    if(filter == "All" || filter == "Invited") {
      this.$data = this.data;
      return;
    }
    this.$data = this.data.filter((e: any) => e.status === filter);
  }

  startSearch() {
    this.filterData(this.searchValue, true);
  }
  searchValue: any = ''
  
  PSetting: number = 0
  togglePSetting(id: number) {
    if(this.PSetting == id) {
      this.PSetting = 0;
      return;
    }
    this.PSetting = id
  }

  getHtmlContent(markdownContent: string) {
    return marked(markdownContent);
  }

  deleteProject(project_id: number) {
    let c: boolean = confirm(`Are you sure you want to delete this project? ${project_id}`)
  }
}
