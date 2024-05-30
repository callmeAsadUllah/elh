import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { CourseComponent } from '../pages/course/course.component';
import { InstructorComponent } from '../pages/instructor/instructor.component';
import { LogInComponent } from '../components/auth/log-in/log-in.component';
import { TagComponent } from '../components/tag/tag.component';
import { CourseDetailComponent } from '../components/course-detail/course-detail.component';
import { NotFound404Component } from '../pages/not-found-404/not-found-404.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home | ELH App',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | ELH App',
  },
  {
    path: 'courses',
    component: CourseComponent,
    title: 'Courses | ELH App',
  },
  {
    path: 'course-detail/:id',
    component: CourseDetailComponent,
    title: 'Courses | ELH App',
  },
  {
    path: 'instructors',
    component: InstructorComponent,
    title: 'Instructors | ELH App',
  },
  {
    path: 'log-in',
    component: LogInComponent,
    title: 'Log In | ELH App',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register | ELH App',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | ELH App',
  },
  {
    path: '**',
    component: NotFound404Component
  },
];
