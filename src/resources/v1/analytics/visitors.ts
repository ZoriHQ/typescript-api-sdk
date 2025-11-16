// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Visitors extends APIResource {
  /**
   * Get visitor counts grouped by device type (mobile, desktop, tablet) over a
   * specified time range
   *
   * @example
   * ```ts
   * const visitorsByDeviceResponse =
   *   await client.v1.analytics.visitors.byDevice({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  byDevice(
    query: VisitorByDeviceParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.VisitorsByDeviceResponse> {
    return this._client.get('/api/v1/analytics/visitors/device', { query, ...options });
  }

  /**
   * Manually identify a visitor by updating their profile information from the
   * dashboard
   *
   * @example
   * ```ts
   * const manualIdentifyResponse =
   *   await client.v1.analytics.visitors.identify({
   *     project_id: 'project_id',
   *     visitor_id: 'visitor_id',
   *   });
   * ```
   */
  identify(
    body: VisitorIdentifyParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.ManualIdentifyResponse> {
    return this._client.post('/api/v1/analytics/visitors/identify', { body, ...options });
  }

  /**
   * Get detailed information about a specific visitor including their event history
   * and aggregated statistics
   *
   * @example
   * ```ts
   * const visitorProfileResponse =
   *   await client.v1.analytics.visitors.profile({
   *     project_id: 'project_id',
   *   });
   * ```
   */
  profile(
    query: VisitorProfileParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.VisitorProfileResponse> {
    return this._client.get('/api/v1/analytics/visitors/profile', { query, ...options });
  }

  /**
   * Get top visitors grouped by identified information (user_id, external_id, email)
   * with payment metrics including revenue, distinct payments, and time to first
   * purchase
   *
   * @example
   * ```ts
   * const topVisitorsResponse =
   *   await client.v1.analytics.visitors.top({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  top(query: VisitorTopParams, options?: RequestOptions): APIPromise<AnalyticsAPI.TopVisitorsResponse> {
    return this._client.get('/api/v1/analytics/visitors/top', { query, ...options });
  }
}

export interface VisitorByDeviceParams {
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

export interface VisitorIdentifyParams {
  project_id: string;

  visitor_id: string;

  additional_properties?: { [key: string]: unknown };

  email?: string;

  external_id?: string;

  name?: string;

  phone?: string;

  user_id?: string;
}

export interface VisitorProfileParams {
  project_id: string;

  customer_id?: string;

  visitor_id?: string;
}

export interface VisitorTopParams {
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

export declare namespace Visitors {
  export {
    type VisitorByDeviceParams as VisitorByDeviceParams,
    type VisitorIdentifyParams as VisitorIdentifyParams,
    type VisitorProfileParams as VisitorProfileParams,
    type VisitorTopParams as VisitorTopParams,
  };
}
