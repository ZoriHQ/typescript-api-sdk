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
   *     limit: 1,
   *     offset: 0,
   *     projectID: 'projectID',
   *     timeBoundaries: 'last_hour',
   *   });
   * ```
   */
  active(query: UserActiveParams, options?: RequestOptions): APIPromise<AnalyticsAPI.ActiveUsersResponse> {
    return this._client.get('/api/v1/analytics/users/active', { query, ...options });
  }
}

export interface UserActiveParams {
  limit: number;

  offset: number;

  projectID: string;

  timeBoundaries: 'last_hour' | 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  customerID?: string;

  referrer?: string;

  utmtag?: string;

  utmtagValue?: string;

  visitorID?: string;
}

export declare namespace Users {
  export { type UserActiveParams as UserActiveParams };
}
