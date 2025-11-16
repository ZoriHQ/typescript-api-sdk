// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Tiles extends APIResource {
  /**
   * Get bounce rate percentage for current period compared to the previous period
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getBounceRate({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getBounceRate(
    query: TileGetBounceRateParams,
    options?: RequestOptions,
  ): APIPromise<TileGetBounceRateResponse> {
    return this._client.get('/api/v1/analytics/tiles/bounce-rate', { query, ...options });
  }

  /**
   * Get daily active user count (last 24h) compared to the previous day
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getDailyActiveUsers({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getDailyActiveUsers(
    query: TileGetDailyActiveUsersParams,
    options?: RequestOptions,
  ): APIPromise<TileGetDailyActiveUsersResponse> {
    return this._client.get('/api/v1/analytics/tiles/dau', { query, ...options });
  }

  /**
   * Get monthly active user count (last 30 days) compared to the previous month
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getMonthlyActiveUsers({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getMonthlyActiveUsers(
    query: TileGetMonthlyActiveUsersParams,
    options?: RequestOptions,
  ): APIPromise<TileGetMonthlyActiveUsersResponse> {
    return this._client.get('/api/v1/analytics/tiles/mau', { query, ...options });
  }

  /**
   * Get average number of pages viewed per session for current period compared to
   * the previous period
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getPagesPerSession({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getPagesPerSession(
    query: TileGetPagesPerSessionParams,
    options?: RequestOptions,
  ): APIPromise<TileGetPagesPerSessionResponse> {
    return this._client.get('/api/v1/analytics/tiles/pages-per-session', { query, ...options });
  }

  /**
   * Get percentage of visitors with more than one session for current period
   * compared to the previous period
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getReturnRate({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getReturnRate(
    query: TileGetReturnRateParams,
    options?: RequestOptions,
  ): APIPromise<TileGetReturnRateResponse> {
    return this._client.get('/api/v1/analytics/tiles/return-rate', { query, ...options });
  }

  /**
   * Get average session duration in seconds for current period compared to the
   * previous period
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getSessionDuration({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getSessionDuration(
    query: TileGetSessionDurationParams,
    options?: RequestOptions,
  ): APIPromise<TileGetSessionDurationResponse> {
    return this._client.get('/api/v1/analytics/tiles/session-duration', { query, ...options });
  }

  /**
   * Get average hours between consecutive visits per visitor for current period
   * compared to the previous period
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getTimeBetweenVisits({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getTimeBetweenVisits(
    query: TileGetTimeBetweenVisitsParams,
    options?: RequestOptions,
  ): APIPromise<TileGetTimeBetweenVisitsResponse> {
    return this._client.get('/api/v1/analytics/tiles/time-between-visits', { query, ...options });
  }

  /**
   * Get unique visitor counts grouped by country code
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getTrafficByCountry({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getTrafficByCountry(
    query: TileGetTrafficByCountryParams,
    options?: RequestOptions,
  ): APIPromise<TileGetTrafficByCountryResponse> {
    return this._client.get('/api/v1/analytics/tiles/traffic-by-country', { query, ...options });
  }

  /**
   * Get unique visitor counts grouped by referrer domain (traffic source)
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getTrafficByReferer({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getTrafficByReferer(
    query: TileGetTrafficByRefererParams,
    options?: RequestOptions,
  ): APIPromise<TileGetTrafficByRefererResponse> {
    return this._client.get('/api/v1/analytics/tiles/traffic-by-referer', { query, ...options });
  }

  /**
   * Get unique visitor counts grouped by UTM source, medium, and campaign
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getTrafficByUtm({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getTrafficByUtm(
    query: TileGetTrafficByUtmParams,
    options?: RequestOptions,
  ): APIPromise<TileGetTrafficByUtmResponse> {
    return this._client.get('/api/v1/analytics/tiles/traffic-by-utm', { query, ...options });
  }

  /**
   * Get unique session count for current period compared to the previous period
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getUniqueSessions({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getUniqueSessions(
    query: TileGetUniqueSessionsParams,
    options?: RequestOptions,
  ): APIPromise<TileGetUniqueSessionsResponse> {
    return this._client.get('/api/v1/analytics/tiles/unique-sessions', { query, ...options });
  }

  /**
   * Get unique visitor count for current period compared to the previous period
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getUniqueVisitors({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getUniqueVisitors(
    query: TileGetUniqueVisitorsParams,
    options?: RequestOptions,
  ): APIPromise<TileGetUniqueVisitorsResponse> {
    return this._client.get('/api/v1/analytics/tiles/unique-visitors', { query, ...options });
  }

  /**
   * Get weekly active user count (last 7 days) compared to the previous week
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.analytics.tiles.getWeeklyActiveUsers({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  getWeeklyActiveUsers(
    query: TileGetWeeklyActiveUsersParams,
    options?: RequestOptions,
  ): APIPromise<TileGetWeeklyActiveUsersResponse> {
    return this._client.get('/api/v1/analytics/tiles/wau', { query, ...options });
  }
}

export interface TileGetBounceRateResponse {
  previous_rate?: number;

  rate?: number;
}

export interface TileGetDailyActiveUsersResponse {
  count?: number;

  previous_count?: number;
}

export interface TileGetMonthlyActiveUsersResponse {
  count?: number;

  previous_count?: number;
}

export interface TileGetPagesPerSessionResponse {
  avg_pages?: number;

  previous_avg_pages?: number;
}

export interface TileGetReturnRateResponse {
  previous_rate?: number;

  rate?: number;
}

export interface TileGetSessionDurationResponse {
  avg_duration?: number;

  previous_avg_duration?: number;
}

export interface TileGetTimeBetweenVisitsResponse {
  avg_hours?: number;

  previous_avg_hours?: number;
}

export interface TileGetTrafficByCountryResponse {
  data?: Array<TileGetTrafficByCountryResponse.Data>;
}

export namespace TileGetTrafficByCountryResponse {
  export interface Data {
    count?: number;

    country?: string;

    previous_count?: number;
  }
}

export interface TileGetTrafficByRefererResponse {
  data?: Array<TileGetTrafficByRefererResponse.Data>;
}

export namespace TileGetTrafficByRefererResponse {
  export interface Data {
    count?: number;

    previous_count?: number;

    previous_revenue?: number;

    referer_url?: string;

    revenue?: number;
  }
}

export interface TileGetTrafficByUtmResponse {
  data?: Array<TileGetTrafficByUtmResponse.Data>;
}

export namespace TileGetTrafficByUtmResponse {
  export interface Data {
    count?: number;

    previous_count?: number;

    previous_revenue?: number;

    revenue?: number;

    utm_campaign?: string;

    utm_medium?: string;

    utm_source?: string;
  }
}

export interface TileGetUniqueSessionsResponse {
  count?: number;

  previous_count?: number;
}

export interface TileGetUniqueVisitorsResponse {
  count?: number;

  previous_count?: number;
}

export interface TileGetWeeklyActiveUsersResponse {
  count?: number;

  previous_count?: number;
}

export interface TileGetBounceRateParams {
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

export interface TileGetDailyActiveUsersParams {
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

export interface TileGetMonthlyActiveUsersParams {
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

export interface TileGetPagesPerSessionParams {
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

export interface TileGetReturnRateParams {
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

export interface TileGetSessionDurationParams {
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

export interface TileGetTimeBetweenVisitsParams {
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

export interface TileGetTrafficByCountryParams {
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

export interface TileGetTrafficByRefererParams {
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

export interface TileGetTrafficByUtmParams {
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

export interface TileGetUniqueSessionsParams {
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

export interface TileGetUniqueVisitorsParams {
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

export interface TileGetWeeklyActiveUsersParams {
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

export declare namespace Tiles {
  export {
    type TileGetBounceRateResponse as TileGetBounceRateResponse,
    type TileGetDailyActiveUsersResponse as TileGetDailyActiveUsersResponse,
    type TileGetMonthlyActiveUsersResponse as TileGetMonthlyActiveUsersResponse,
    type TileGetPagesPerSessionResponse as TileGetPagesPerSessionResponse,
    type TileGetReturnRateResponse as TileGetReturnRateResponse,
    type TileGetSessionDurationResponse as TileGetSessionDurationResponse,
    type TileGetTimeBetweenVisitsResponse as TileGetTimeBetweenVisitsResponse,
    type TileGetTrafficByCountryResponse as TileGetTrafficByCountryResponse,
    type TileGetTrafficByRefererResponse as TileGetTrafficByRefererResponse,
    type TileGetTrafficByUtmResponse as TileGetTrafficByUtmResponse,
    type TileGetUniqueSessionsResponse as TileGetUniqueSessionsResponse,
    type TileGetUniqueVisitorsResponse as TileGetUniqueVisitorsResponse,
    type TileGetWeeklyActiveUsersResponse as TileGetWeeklyActiveUsersResponse,
    type TileGetBounceRateParams as TileGetBounceRateParams,
    type TileGetDailyActiveUsersParams as TileGetDailyActiveUsersParams,
    type TileGetMonthlyActiveUsersParams as TileGetMonthlyActiveUsersParams,
    type TileGetPagesPerSessionParams as TileGetPagesPerSessionParams,
    type TileGetReturnRateParams as TileGetReturnRateParams,
    type TileGetSessionDurationParams as TileGetSessionDurationParams,
    type TileGetTimeBetweenVisitsParams as TileGetTimeBetweenVisitsParams,
    type TileGetTrafficByCountryParams as TileGetTrafficByCountryParams,
    type TileGetTrafficByRefererParams as TileGetTrafficByRefererParams,
    type TileGetTrafficByUtmParams as TileGetTrafficByUtmParams,
    type TileGetUniqueSessionsParams as TileGetUniqueSessionsParams,
    type TileGetUniqueVisitorsParams as TileGetUniqueVisitorsParams,
    type TileGetWeeklyActiveUsersParams as TileGetWeeklyActiveUsersParams,
  };
}
