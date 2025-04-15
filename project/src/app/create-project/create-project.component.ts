import { Component } from '@angular/core';
import { marked } from 'marked';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-create-project',
    imports: [FormsModule],
    templateUrl: './create-project.component.html',
    styleUrl: './create-project.component.css'
})
export class CreateProjectComponent {
  markdownContent: string = `# 📝 Welcome to My Markdown Editor  

## ✨ How to Use  
- **Type Markdown** on the left  
- **See the formatted preview** on the right  

## 🎯 Features  
✔ Supports **headings**, **bold**, *italics*, \`\`\`code\`\`\`, and more!  

\`\`\`
<p class="text-red-500">RED</p>
\`\`\`
✔ Live preview updates automatically  
✔ Easy to copy and paste into **GitHub READMEs**`;

  getHtmlContent() {
    return marked(this.markdownContent);
  }
}
