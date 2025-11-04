// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Sessions extends APIResource {
  /**
   * Get bounce rate metrics including overall bounce rate and per-page breakdown
   *
   * @example
   * ```ts
   * const bounceRateResponse =
   *   await client.v1.analytics.sessions.bounceRate({
   *     limit: 1,
   *     offset: 0,
   *     projectID: 'projectID',
   *     timeBoundaries: 'last_hour',
   *   });
   * ```
   */
  bounceRate(
    query: SessionBounceRateParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.BounceRateResponse> {
    return this._client.get('/api/v1/analytics/sessions/bounce-rate', { query, ...options });
  }

  /**
   * Get session metrics including average duration and pages per session
   *
   * @example
   * ```ts
   * const sessionMetricsResponse =
   *   await client.v1.analytics.sessions.metrics({
   *     limit: 1,
   *     offset: 0,
   *     projectID: 'projectID',
   *     timeBoundaries: 'last_hour',
   *   });
   * ```
   */
  metrics(
    query: SessionMetricsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.SessionMetricsResponse> {
    return this._client.get('/api/v1/analytics/sessions/metrics', { query, ...options });
  }
}

export interface SessionBounceRateParams {
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

export interface SessionMetricsParams {
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

export declare namespace Sessions {
  export {
    type SessionBounceRateParams as SessionBounceRateParams,
    type SessionMetricsParams as SessionMetricsParams,
  };
}
