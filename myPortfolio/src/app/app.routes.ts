import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { CvComponent } from './components/cv/cv.component';

export const routes: Routes = [
    {path: '', pathMatch:'full', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'cv', component: CvComponent},
    {path: 'contact', component: ContactComponent}
];
