// import { Observable } from 'rxjs';
// import { map, take } from 'rxjs/operators';

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

// import { User } from '../_models/user';
// import { AuthService } from '../_services/auth.service';

// @Injectable({
//     providedIn: "root",
// })
// export class AutomaticLoginGuard implements CanActivate {
//     ifUser: User;

//     constructor(private router: Router, private auth: AuthService) {}

//     canActivate(
//         route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot
//     ): Observable<boolean> {
//         return this.auth.user$.pipe(
//             take(1),
//             map((user) => {
//                 console.log(
//                     "auto login verifiying if user & type: "
//                     // this.ifUser ? user : 'not logged in'
//                 );
//                 if (!user) {
//                     return true;
//                 }
//                 if (user && user.role) {
//                     // tslint:disable: triple-equals
//                     const role = user["role"];
//                     if (role == "MEMBER") {
//                         this.router.navigateByUrl("/customers");
//                     } else if (role == "TRAINER") {
//                         this.router.navigateByUrl("/trainers");
//                     } else if (role == "USER") {
//                         this.router.navigateByUrl("/users");
//                     } else if (role == "ADMIN") {
//                         this.router.navigateByUrl("/admins");
//                     }
//                     return false;
//                 }
//             })
//         );
//     }
// }
