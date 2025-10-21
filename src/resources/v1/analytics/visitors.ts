// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Visitors extends APIResource {
  /**
   * Get unique visitor counts grouped by country code
   *
   * @example
   * ```ts
   * const visitorsByCountryResponse =
   *   await client.v1.analytics.visitors.byCountry({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  byCountry(
    query: VisitorByCountryParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.VisitorsByCountryResponse> {
    return this._client.get('/api/v1/analytics/visitors/country', { query, ...options });
  }

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
   * Get unique visitor counts grouped by referrer domain (traffic source)
   *
   * @example
   * ```ts
   * const visitorsByOriginResponse =
   *   await client.v1.analytics.visitors.byOrigin({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  byOrigin(
    query: VisitorByOriginParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.VisitorsByOriginResponse> {
    return this._client.get('/api/v1/analytics/visitors/origin', { query, ...options });
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
   *     visitor_id: 'visitor_id',
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
   * Get unique visitor counts over time, split by mobile and desktop devices for
   * chart visualization
   *
   * @example
   * ```ts
   * const uniqueVisitorsTimelineResponse =
   *   await client.v1.analytics.visitors.timeline({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  timeline(
    query: VisitorTimelineParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.UniqueVisitorsTimelineResponse> {
    return this._client.get('/api/v1/analytics/visitors/timeline', { query, ...options });
  }

  /**
   * Get a list of the most active visitors ranked by event count
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

export interface VisitorByCountryParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export interface VisitorByDeviceParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export interface VisitorByOriginParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
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
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Visitor ID
   */
  visitor_id: string;
}

export interface VisitorTimelineParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export interface VisitorTopParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  /**
   * Maximum number of visitors to return (default: 50)
   */
  limit?: number;
}

export declare namespace Visitors {
  export {
    type VisitorByCountryParams as VisitorByCountryParams,
    type VisitorByDeviceParams as VisitorByDeviceParams,
    type VisitorByOriginParams as VisitorByOriginParams,
    type VisitorIdentifyParams as VisitorIdentifyParams,
    type VisitorProfileParams as VisitorProfileParams,
    type VisitorTimelineParams as VisitorTimelineParams,
    type VisitorTopParams as VisitorTopParams,
  };
}
