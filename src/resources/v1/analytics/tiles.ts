// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Tiles extends APIResource {
  /**
   * Get bounce rate percentage for current period compared to the previous period
   *
   * @example
   * ```ts
   * const bounceRateResponse =
   *   await client.v1.analytics.tiles.bounceRate({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  bounceRate(
    query: TileBounceRateParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.BounceRateResponse> {
    return this._client.get('/api/v1/analytics/tiles/bounce-rate', { query, ...options });
  }

  /**
   * Get daily active user count (last 24h) compared to the previous day
   *
   * @example
   * ```ts
   * const dauResponse = await client.v1.analytics.tiles.dau({
   *   project_id: 'project_id',
   *   time_range: 'last_hour',
   * });
   * ```
   */
  dau(query: TileDauParams, options?: RequestOptions): APIPromise<AnalyticsAPI.DauResponse> {
    return this._client.get('/api/v1/analytics/tiles/dau', { query, ...options });
  }

  /**
   * Get monthly active user count (last 30 days) compared to the previous month
   *
   * @example
   * ```ts
   * const mauResponse = await client.v1.analytics.tiles.mau({
   *   project_id: 'project_id',
   *   time_range: 'last_hour',
   * });
   * ```
   */
  mau(query: TileMauParams, options?: RequestOptions): APIPromise<AnalyticsAPI.MauResponse> {
    return this._client.get('/api/v1/analytics/tiles/mau', { query, ...options });
  }

  /**
   * Get average number of pages viewed per session for current period compared to
   * the previous period
   *
   * @example
   * ```ts
   * const pagesPerSessionResponse =
   *   await client.v1.analytics.tiles.pagesPerSession({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  pagesPerSession(
    query: TilePagesPerSessionParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.PagesPerSessionResponse> {
    return this._client.get('/api/v1/analytics/tiles/pages-per-session', { query, ...options });
  }

  /**
   * Get percentage of visitors with more than one session for current period
   * compared to the previous period
   *
   * @example
   * ```ts
   * const returnRateResponse =
   *   await client.v1.analytics.tiles.returnRate({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  returnRate(
    query: TileReturnRateParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.ReturnRateResponse> {
    return this._client.get('/api/v1/analytics/tiles/return-rate', { query, ...options });
  }

  /**
   * Get average session duration in seconds for current period compared to the
   * previous period
   *
   * @example
   * ```ts
   * const sessionDurationResponse =
   *   await client.v1.analytics.tiles.sessionDuration({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  sessionDuration(
    query: TileSessionDurationParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.SessionDurationResponse> {
    return this._client.get('/api/v1/analytics/tiles/session-duration', { query, ...options });
  }

  /**
   * Get average hours between consecutive visits per visitor for current period
   * compared to the previous period
   *
   * @example
   * ```ts
   * const timeBetweenVisitsResponse =
   *   await client.v1.analytics.tiles.timeBetweenVisits({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  timeBetweenVisits(
    query: TileTimeBetweenVisitsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.TimeBetweenVisitsResponse> {
    return this._client.get('/api/v1/analytics/tiles/time-between-visits', { query, ...options });
  }

  /**
   * Get unique visitor counts grouped by country code
   *
   * @example
   * ```ts
   * const countryTrafficSourceResponse =
   *   await client.v1.analytics.tiles.trafficByCountry({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  trafficByCountry(
    query: TileTrafficByCountryParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.CountryTrafficSourceResponse> {
    return this._client.get('/api/v1/analytics/tiles/traffic-by-country', { query, ...options });
  }

  /**
   * Get unique visitor counts grouped by referrer domain (traffic source)
   *
   * @example
   * ```ts
   * const refererTrafficSourceResponse =
   *   await client.v1.analytics.tiles.trafficByReferer({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  trafficByReferer(
    query: TileTrafficByRefererParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.RefererTrafficSourceResponse> {
    return this._client.get('/api/v1/analytics/tiles/traffic-by-referer', { query, ...options });
  }

  /**
   * Get unique visitor counts grouped by UTM source, medium, and campaign
   *
   * @example
   * ```ts
   * const utmTrafficSourceResponse =
   *   await client.v1.analytics.tiles.trafficByUtm({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  trafficByUtm(
    query: TileTrafficByUtmParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.UtmTrafficSourceResponse> {
    return this._client.get('/api/v1/analytics/tiles/traffic-by-utm', { query, ...options });
  }

  /**
   * Get unique session count for current period compared to the previous period
   *
   * @example
   * ```ts
   * const uniqueSessionsResponse =
   *   await client.v1.analytics.tiles.uniqueSessions({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  uniqueSessions(
    query: TileUniqueSessionsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.UniqueSessionsResponse> {
    return this._client.get('/api/v1/analytics/tiles/unique-sessions', { query, ...options });
  }

  /**
   * Get unique visitor count for current period compared to the previous period
   *
   * @example
   * ```ts
   * const uniqueVisitorsResponse =
   *   await client.v1.analytics.tiles.uniqueVisitors({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  uniqueVisitors(
    query: TileUniqueVisitorsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.UniqueVisitorsResponse> {
    return this._client.get('/api/v1/analytics/tiles/unique-visitors', { query, ...options });
  }

  /**
   * Get number of visitors by browser for current period compared to the previous
   * period
   *
   * @example
   * ```ts
   * const visitorsByBrowserResponse =
   *   await client.v1.analytics.tiles.visitorsByBrowser({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  visitorsByBrowser(
    query: TileVisitorsByBrowserParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.VisitorsByBrowserResponse> {
    return this._client.get('/api/v1/analytics/tiles/visitors-by-browser', { query, ...options });
  }

  /**
   * Get number of visitors by OS for current period compared to the previous period
   *
   * @example
   * ```ts
   * const visitorsByOsResponse =
   *   await client.v1.analytics.tiles.visitorsByOs({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  visitorsByOs(
    query: TileVisitorsByOsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.VisitorsByOsResponse> {
    return this._client.get('/api/v1/analytics/tiles/visitors-by-os', { query, ...options });
  }

  /**
   * Get weekly active user count (last 7 days) compared to the previous week
   *
   * @example
   * ```ts
   * const wauResponse = await client.v1.analytics.tiles.wau({
   *   project_id: 'project_id',
   *   time_range: 'last_hour',
   * });
   * ```
   */
  wau(query: TileWauParams, options?: RequestOptions): APIPromise<AnalyticsAPI.WauResponse> {
    return this._client.get('/api/v1/analytics/tiles/wau', { query, ...options });
  }
}

export interface TileBounceRateParams {
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

export interface TileDauParams {
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

export interface TileMauParams {
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

export interface TilePagesPerSessionParams {
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

export interface TileReturnRateParams {
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

export interface TileSessionDurationParams {
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

export interface TileTimeBetweenVisitsParams {
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

export interface TileTrafficByCountryParams {
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

export interface TileTrafficByRefererParams {
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

export interface TileTrafficByUtmParams {
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

export interface TileUniqueSessionsParams {
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

export interface TileUniqueVisitorsParams {
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

export interface TileVisitorsByBrowserParams {
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

export interface TileVisitorsByOsParams {
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

export interface TileWauParams {
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
    type TileBounceRateParams as TileBounceRateParams,
    type TileDauParams as TileDauParams,
    type TileMauParams as TileMauParams,
    type TilePagesPerSessionParams as TilePagesPerSessionParams,
    type TileReturnRateParams as TileReturnRateParams,
    type TileSessionDurationParams as TileSessionDurationParams,
    type TileTimeBetweenVisitsParams as TileTimeBetweenVisitsParams,
    type TileTrafficByCountryParams as TileTrafficByCountryParams,
    type TileTrafficByRefererParams as TileTrafficByRefererParams,
    type TileTrafficByUtmParams as TileTrafficByUtmParams,
    type TileUniqueSessionsParams as TileUniqueSessionsParams,
    type TileUniqueVisitorsParams as TileUniqueVisitorsParams,
    type TileVisitorsByBrowserParams as TileVisitorsByBrowserParams,
    type TileVisitorsByOsParams as TileVisitorsByOsParams,
    type TileWauParams as TileWauParams,
  };
}
