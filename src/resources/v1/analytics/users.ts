// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Users extends APIResource {
  /**
   * Get daily, weekly, and monthly active user counts
   *
   * @example
   * ```ts
   * const activeUsersResponse =
   *   await client.v1.analytics.users.active({
   *     project_id: 'project_id',
   *   });
   * ```
   */
  active(query: UserActiveParams, options?: RequestOptions): APIPromise<AnalyticsAPI.ActiveUsersResponse> {
    return this._client.get('/api/v1/analytics/users/active', { query, ...options });
  }
}

export interface UserActiveParams {
  /**
   * Project ID
   */
  project_id: string;
}

export declare namespace Users {
  export { type UserActiveParams as UserActiveParams };
}
