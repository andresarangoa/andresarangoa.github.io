// custom-route-reuse-strategy.ts
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

/**
 * Custom RouteReuseStrategy that prevents component reuse
 * This forces Angular to recreate components when navigating to the same route
 */
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  /**
   * Whether the given route should detach for later reuse
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  /**
   * Store the detached route
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    // Not storing detached routes
  }

  /**
   * Whether the given route should be reattached
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  /**
   * Retrieve the previously stored route
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }

  /**
   * Whether the given route should be reused
   * Return false to prevent reuse, forcing component recreation
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // Don't reuse routes - always recreate components
    return false;
  }
}