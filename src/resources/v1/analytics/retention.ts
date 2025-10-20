// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Retention extends APIResource {
  /**
   * Get metrics about user churn based on inactivity threshold
   *
   * @example
   * ```ts
   * const churnRateResponse =
   *   await client.v1.analytics.retention.churnRate({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  churnRate(
    query: RetentionChurnRateParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.ChurnRateResponse> {
    return this._client.get('/api/v1/analytics/retention/churn-rate', { query, ...options });
  }

  /**
   * Get cohort retention analysis showing how user groups retain over time
   *
   * @example
   * ```ts
   * const cohortAnalysisResponse =
   *   await client.v1.analytics.retention.cohorts({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  cohorts(
    query: RetentionCohortsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.CohortAnalysisResponse> {
    return this._client.get('/api/v1/analytics/retention/cohorts', { query, ...options });
  }

  /**
   * Get metrics about user return rate and time between sessions
   *
   * @example
   * ```ts
   * const returnRateResponse =
   *   await client.v1.analytics.retention.returnRate({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  returnRate(
    query: RetentionReturnRateParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.ReturnRateResponse> {
    return this._client.get('/api/v1/analytics/retention/return-rate', { query, ...options });
  }
}

export interface RetentionChurnRateParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  /**
   * Days of inactivity to consider churned (default: 30)
   */
  churn_threshold_days?: number;
}

export interface RetentionCohortsParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export interface RetentionReturnRateParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export declare namespace Retention {
  export {
    type RetentionChurnRateParams as RetentionChurnRateParams,
    type RetentionCohortsParams as RetentionCohortsParams,
    type RetentionReturnRateParams as RetentionReturnRateParams,
  };
}
