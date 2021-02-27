import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  txtCommentpageLoad = null;
  txtComment = null;
  constructor(private activatedRouter: ActivatedRoute, private router: Router) {
  }

  public history = { 'Content': '' };


  ngOnInit(): void {
    this.txtComment = "Page is Loaded";
    this.txtCommentpageLoad = this.txtComment;

    this.activatedRouter.data.subscribe((param: any) => {
      console.log(param);
      // tslint:disable-next-line: no-string-literal
      this.history["Content"] = param.Comments;
    });
  }


  canDeactivate(): Observable<boolean> | boolean {
    if (this.txtComment !== this.txtCommentpageLoad) {
      return window.confirm("Do you want to discard changes?");
      //return true;
    }
    return true;
  }

  evtSave() {
    this.txtCommentpageLoad = this.txtComment;
  }



}
