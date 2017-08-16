import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class JobsService {
  constructor(private http: Http) {
    console.log('JobService started');
  }

  getJobs() {
    return this.http.get("http://localhost:3000/jobs").map(res => res.json());
  }
}
