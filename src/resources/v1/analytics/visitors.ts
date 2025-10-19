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

export declare namespace Visitors {
  export {
    type VisitorByCountryParams as VisitorByCountryParams,
    type VisitorByDeviceParams as VisitorByDeviceParams,
    type VisitorByOriginParams as VisitorByOriginParams,
  };
}
