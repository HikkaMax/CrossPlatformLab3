import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService, GroupsView } from '../services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  public groupsView: GroupsView;
  public AllGroupsView: GroupsView[];
  public IsAll = true;

  constructor(private activatedRoute: ActivatedRoute, private _wfServise: GroupsService, private route: Router) {
    this.IsAll = true;
  }

  ngOnInit(): void {
    this._wfServise.getGroups().subscribe(res => {
      this.AllGroupsView = res;
    });
  }

}
