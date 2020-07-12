import { Component, OnInit } from '@angular/core';
import { GroupsService, GroupsView } from '../services/groups.service';
import { stringify } from 'querystring';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public messg: string;

  constructor(private _wfServise: GroupsService) { }

  public ResetMessg(): void{
    this.messg = 'Please fill all the fields to continue';
  }

  ngOnInit(): void {
    this.ResetMessg();
  }

  public NewGroup(info: { id: number, name: string })
  {
    console.log(info);
    this._wfServise.addGroup(info).subscribe(
      status =>
      {
        if (status == 201)
        {
          this.messg = 'Success';
        }
        else {
            this.messg = `Something went wrong (${status})`;
        }
      });
  }

  public NewStudent(data: {id: number, groupId: number, name: string})
  {
    this._wfServise.addStudent(data).subscribe(
      status =>
      {
        if (status == 201)
        {
          this.messg = 'Success';
        }
        else {
          this.messg = `Something went wrong (${status})`;
        }
      });
  }
}
