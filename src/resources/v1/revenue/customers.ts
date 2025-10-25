// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RevenueAPI from './revenue';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Customers extends APIResource {
  /**
   * Get detailed revenue information for a specific customer including payment
   * history and attribution
   *
   * @example
   * ```ts
   * const customerProfileResponse =
   *   await client.v1.revenue.customers.profile({
   *     project_id: 'project_id',
   *     visitor_id: 'visitor_id',
   *   });
   * ```
   */
  profile(
    query: CustomerProfileParams,
    options?: RequestOptions,
  ): APIPromise<RevenueAPI.CustomerProfileResponse> {
    return this._client.get('/api/v1/revenue/customers/profile', { query, ...options });
  }

  /**
   * Get a list of customers ranked by total revenue
   *
   * @example
   * ```ts
   * const topCustomersResponse =
   *   await client.v1.revenue.customers.top({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  top(query: CustomerTopParams, options?: RequestOptions): APIPromise<RevenueAPI.TopCustomersResponse> {
    return this._client.get('/api/v1/revenue/customers/top', { query, ...options });
  }
}

export interface CustomerProfileParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Visitor ID
   */
  visitor_id: string;
}

export interface CustomerTopParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  /**
   * Maximum number of customers to return (default: 50)
   */
  limit?: number;
}

export declare namespace Customers {
  export { type CustomerProfileParams as CustomerProfileParams, type CustomerTopParams as CustomerTopParams };
}
