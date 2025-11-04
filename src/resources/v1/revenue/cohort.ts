// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Cohort extends APIResource {
  /**
   * Analyze revenue metrics for a specific cohort of visitors, including total
   * revenue, conversion rates, and time to first purchase
   *
   * @example
   * ```ts
   * const response = await client.v1.revenue.cohort.getMetrics({
   *   project_id: 'project_id',
   *   visitor_ids: ['string'],
   * });
   * ```
   */
  getMetrics(body: CohortGetMetricsParams, options?: RequestOptions): APIPromise<CohortGetMetricsResponse> {
    return this._client.post('/api/v1/revenue/cohort/metrics', { body, ...options });
  }
}

export interface CohortGetMetricsResponse {
  anonymous_customers?: number;

  avg_order_value?: number;

  avg_payments_per_customer?: number;

  avg_revenue_per_customer?: number;

  avg_revenue_per_visitor?: number;

  avg_time_to_first_purchase_hours?: number;

  conversion_rate?: number;

  currency?: string;

  identified_customers?: number;

  median_time_to_first_purchase_hours?: number;

  paying_customers?: number;

  total_customers?: number;

  total_payments?: number;

  total_revenue?: number;

  total_visitors?: number;

  visitor_conversion_rate?: number;
}

export interface CohortGetMetricsParams {
  project_id: string;

  visitor_ids: Array<string>;

  time_range?: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export declare namespace Cohort {
  export {
    type CohortGetMetricsResponse as CohortGetMetricsResponse,
    type CohortGetMetricsParams as CohortGetMetricsParams,
  };
}
