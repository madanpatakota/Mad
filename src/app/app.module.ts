import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SchoolLoginComponent } from './school-login/school-login.component';
import { SHomeComponent } from './shome/shome.component';
import { DetailsComponent } from './details/details.component';
import { MemberComponent } from './Details/member/member.component';
import { MemberDetailsComponent } from './Details/member/member-details/member-details.component';
import { HistoryComponent } from './history/history.component';
import { SchoolMainComponent } from './school-main/school-main.component';
import { CanActivateGuard } from './can-activate.guard';
import { CanDeActivateGuard } from './can-de-activate.guard';
import { CanLoadGuard } from './can-load.guard';
import { SchoolService } from './school.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommentsResolveService } from './comments-resolve.service';


//path: 'Details/:classID', component: DetailsComponent , outlet:'membersLayout',

// const appRoutes: Routes = [
//   { path: '', component: SchoolLoginComponent },
//   {
//     path: 'Main', component: SchoolMainComponent,
//     children: [
//       { path: '', component: SHomeComponent },
//       {
//         path: 'Details', children: [
//           {
//             path: ':classID', component: DetailsComponent,
//             children: [{
//               path: 'members', component: MemberComponent, children: [{
//                 path: 'membersDetails', component: MemberDetailsComponent
//               }]
//             }]
//           }]
//       },
//       { path: 'History', component: HistoryComponent}]
//   }];

// const appRoutes: Routes = [
//   { path: '', component: SchoolLoginComponent },
//   { path: 'Main',  component: SchoolMainComponent },
//   { path: 'Main/Details:classID', component: DetailsComponent },
//   { path: 'Main/Details:classID/members', component: MemberComponent },
//   { path: 'Main/Details:classID/members/membersDetails', component: MemberDetailsComponent },
//   { path: 'History', component: HistoryComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: "**", redirectTo: "not-found" }
// ];

const appRoutes: Routes = [
  { path: "", component: SchoolLoginComponent },
  { path: "Login", redirectTo: "" },
  {
    path: 'Main', component: SchoolMainComponent, canActivate: [CanActivateGuard],
    children: [
      { path: '', component: SHomeComponent },
      { path: 'Home', redirectTo: '' },
      {
        path: 'History', component: HistoryComponent, canDeactivate : [CanDeActivateGuard],
        resolve: { 'Comments': CommentsResolveService } 
      },
      {
        path: 'Details',
        children: [
          { path: '', component: NotFoundComponent, pathMatch: 'full' },
          {
            path: ':classID', component: DetailsComponent, children: [{
              path: 'members', component: MemberComponent, canActivate: [CanActivateGuard]
            }]
          },
        ]
      },
    ]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({

  declarations: [
    AppComponent,
    SchoolLoginComponent,
    SHomeComponent,
    DetailsComponent,
    MemberComponent,
    MemberDetailsComponent,
    HistoryComponent,
    SchoolMainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
