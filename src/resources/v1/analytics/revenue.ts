// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Revenue extends APIResource {
  /**
   * Get revenue metrics grouped by UTM source, medium, or campaign
   *
   * @example
   * ```ts
   * const revenueByUtmResponse =
   *   await client.v1.analytics.revenue.byUtm({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  byUtm(query: RevenueByUtmParams, options?: RequestOptions): APIPromise<AnalyticsAPI.RevenueByUtmResponse> {
    return this._client.get('/api/v1/analytics/revenue/by-utm', { query, ...options });
  }

  /**
   * Get revenue metrics over time for chart visualization
   *
   * @example
   * ```ts
   * const revenueTimelineResponse =
   *   await client.v1.analytics.revenue.timeline({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  timeline(
    query: RevenueTimelineParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.RevenueTimelineResponse> {
    return this._client.get('/api/v1/analytics/revenue/timeline', { query, ...options });
  }
}

export interface RevenueByUtmParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  /**
   * UTM type: source, medium, or campaign (default: source)
   */
  utm_type?: string;
}

export interface RevenueTimelineParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export declare namespace Revenue {
  export {
    type RevenueByUtmParams as RevenueByUtmParams,
    type RevenueTimelineParams as RevenueTimelineParams,
  };
}
