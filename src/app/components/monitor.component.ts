import {Component} from '@angular/core';
import {JobsService} from '../services/jobs.service';

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  providers: [JobsService]
})

export class MonitorComponent {
  title: 'Monitor';
  jobs: Job[];

  constructor(private jobsService: JobsService) {
    this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }
}

interface Job {
  id: number;
  company: string;
  date: string;
  state: string;
}
