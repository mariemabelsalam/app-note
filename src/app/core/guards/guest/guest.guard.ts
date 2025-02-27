import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
   const id = inject(PLATFORM_ID)
    const router=inject(Router)
    if (isPlatformBrowser(id)) {
      if (! localStorage.getItem('token')) {
       return true
      }
      else {
        router.navigate(['/home'])
        return false;
      }
    }
    return false;
};
