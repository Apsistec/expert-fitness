import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree
} from '@angular/router';
import { Storage } from '@ionic/storage';

Injectable({
    providedIn: "root",
});
export class HomeRouteGuard implements CanActivate {
    constructor(private storage: Storage, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        console.log("check welcome guard");
        return this.storage.get("ion_did_tutorial").then((res: boolean) => {
            if ( res && res != null ) {
                this.router.navigate(["/home"]);
                return true;
            } 
                return false;
        });
    }
}
