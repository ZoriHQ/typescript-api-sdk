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
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  active(query: UserActiveParams, options?: RequestOptions): APIPromise<AnalyticsAPI.ActiveUsersResponse> {
    return this._client.get('/api/v1/analytics/users/active', { query, ...options });
  }
}

export interface UserActiveParams {
  project_id: string;

  time_range: 'last_hour' | 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  customer_id?: string;

  limit?: number;

  offset?: number;

  referrer?: string;

  utmtag?: string;

  utmtagValue?: string;

  visitor_id?: string;
}

export declare namespace Users {
  export { type UserActiveParams as UserActiveParams };
}
