import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'E-commerce Website',
      description:
        'A modern online store built with Angular and TailwindCSS. Features include product filtering, shopping cart, and secure checkout.',
      image: 'assets/img/website-projects.jpg',
      link: '#',
    },
    {
      title: 'Portfolio Page',
      description:
        'A personal portfolio showcasing design and development skills. Fully responsive and optimized for performance.',
      image: 'assets/img/portafolio-page.jpg',
      link: '#',
    },
    {
      title: 'Task Management App',
      description:
        'A simple yet powerful task management application with drag-and-drop, real-time sync, and progress tracking.',
      image: 'assets/img/task.png',
      link: '#',
    },
    {
      title: 'Blog Platform',
      description:
        'A lightweight blogging platform where users can create, edit, and share articles. Includes a clean admin dashboard.',
      image: 'assets/img/blog.png',
      link: '#',
    },
  ];
}
