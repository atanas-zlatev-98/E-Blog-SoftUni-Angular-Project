import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, } from '@angular/router';
import { UserService } from '../../services/user/user-service.service';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const userService = inject(UserService);
    const router = inject(Router);

    if (userService.isLogged) {
        return true;
    }
    router.navigate(['/home']);
    return false;
};

