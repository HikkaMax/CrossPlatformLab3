import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(
    private _http: HttpClient,
  ) { }

  public getGroups(): Observable<GroupsView[]>{
    //return this.WeekForecast[0];
    return this._http.get<GroupsView[]>(`/Groups`);
   }
   public getGroup(id: number): Observable<GroupsView>
   {
     return this._http.get<GroupsView>(`/Groups/${id}`);
   }
   public addGroup(newGroup: GroupsView): any {
     return this._http.post(`/Groups/`, newGroup); //check this for the correct post
   }
   public addStudent(data: StudentView): any {
     return this._http.post(`/Students/`, data); //this one too
   }
}

export interface GroupsView
{
  id?: number;
  name: string;
  students?: StudentView[];
}

export interface StudentView {
  groupId: number;
  id: number;
  name: string;
}
