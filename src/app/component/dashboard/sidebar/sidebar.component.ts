import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    title = 'Property Management';

    updateTitle(label: string): void {
      this.title = label;
    }

    constructor(
      private breakpointObserver: BreakpointObserver,
      private authApi : AuthService) {}
  
    logout() {
      localStorage.setItem('isAdmin', 'false');
      localStorage.setItem('isSeller', 'false');
      this.authApi.logout();
    }

    isAdmin(): boolean {
      const isAdmin = localStorage.getItem('isAdmin');
      return isAdmin === 'true';
    }   
    
    isSeller(): boolean {
      const isSeller = localStorage.getItem('isSeller');
      return isSeller === 'true';
    } 

}
