// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RevenueAPI from './revenue';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Conversion extends APIResource {
  /**
   * Get conversion funnel metrics including conversion rate, time to purchase, and
   * customer lifetime value
   *
   * @example
   * ```ts
   * const conversionMetricsResponse =
   *   await client.v1.revenue.conversion.metrics({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  metrics(
    query: ConversionMetricsParams,
    options?: RequestOptions,
  ): APIPromise<RevenueAPI.ConversionMetricsResponse> {
    return this._client.get('/api/v1/revenue/conversion/metrics', { query, ...options });
  }
}

export interface ConversionMetricsParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export declare namespace Conversion {
  export { type ConversionMetricsParams as ConversionMetricsParams };
}
