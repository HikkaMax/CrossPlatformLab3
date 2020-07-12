import { Component, OnInit } from '@angular/core';
import { GroupsService, GroupsView } from '../services/groups.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public groupsView: GroupsView;
  public IdGroup: number;

  constructor(private activatedRoute: ActivatedRoute, private _wfServise:GroupsService, private route:Router) {
    this.IdGroup = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this._wfServise.getGroup(this.IdGroup).subscribe(res => {this.groupsView=res;});
  }

}
