// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RevenueAPI from './revenue';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Attribution extends APIResource {
  /**
   * Get revenue metrics grouped by traffic origin (referrer domain) using
   * first-touch attribution
   *
   * @example
   * ```ts
   * const attributionByOriginResponse =
   *   await client.v1.revenue.attribution.byOrigin({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  byOrigin(
    query: AttributionByOriginParams,
    options?: RequestOptions,
  ): APIPromise<RevenueAPI.AttributionByOriginResponse> {
    return this._client.get('/api/v1/revenue/attribution/origin', { query, ...options });
  }

  /**
   * Get revenue metrics grouped by UTM source, medium, or campaign using first-touch
   * attribution
   *
   * @example
   * ```ts
   * const attributionByUtmResponse =
   *   await client.v1.revenue.attribution.byUtm({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  byUtm(
    query: AttributionByUtmParams,
    options?: RequestOptions,
  ): APIPromise<RevenueAPI.AttributionByUtmResponse> {
    return this._client.get('/api/v1/revenue/attribution/utm', { query, ...options });
  }
}

export interface AttributionByOriginParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export interface AttributionByUtmParams {
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

export declare namespace Attribution {
  export {
    type AttributionByOriginParams as AttributionByOriginParams,
    type AttributionByUtmParams as AttributionByUtmParams,
  };
}
