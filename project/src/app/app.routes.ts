import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { ProjectsComponent } from './projects/projects.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { DescriptionComponent } from './description/description.component';
import { NotesComponent } from './notes/notes.component';
import { TasksComponent } from './tasks/tasks.component';
import { MembersComponent } from './members/members.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Projects', component: ProjectsComponent },

    { 
        path: 'ProjectInfo/:id',
        component: ProjectInfoComponent,
        children: [
            { path: 'Description', component: DescriptionComponent },
            { path: 'Notes', component: NotesComponent },
            { path: 'Tasks', component: TasksComponent },
            { path: 'Members', component: MembersComponent },
        ] 
    },

    { path: 'CreateProject', component: CreateProjectComponent },
    { path: 'EditProject/:id', component: EditProjectComponent },
    { path: 'Invitations', component: InvitationsComponent },
    { path: 'Profile', component: ProfileComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Signup', component: SignupComponent },
    { path: '**', component: Page404Component },
];