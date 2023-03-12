import { CoursesService } from './courses.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";
import { Observable } from "rxjs";

@Injectable()

export class LessonsResolver implements Resolve<LessonSummary[]>{

 constructor(private courses: CoursesService){
  
 }
 resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {

  const courseUrl = route.paramMap.get("courseUrl");
  return this.courses.loadAllCourseLessonsSummary(courseUrl);
 }

}