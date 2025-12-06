// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Llm extends APIResource {
  /**
   * Get a paginated list of LLM traces with optional filters (name, user_id,
   * session_id, model)
   *
   * @example
   * ```ts
   * const llmTracesListResponse =
   *   await client.v1.analytics.llm.traces({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  traces(query: LlmTracesParams, options?: RequestOptions): APIPromise<AnalyticsAPI.LlmTracesListResponse> {
    return this._client.get('/api/v1/analytics/llm/traces', { query, ...options });
  }

  /**
   * Get unique names, user_ids, session_ids, and models to populate filter dropdowns
   *
   * @example
   * ```ts
   * const llmTraceFilterOptionsResponse =
   *   await client.v1.analytics.llm.tracesFilterOptions({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  tracesFilterOptions(
    query: LlmTracesFilterOptionsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.LlmTraceFilterOptionsResponse> {
    return this._client.get('/api/v1/analytics/llm/traces/filter-options', { query, ...options });
  }
}

export interface LlmTracesParams {
  project_id: string;

  time_range: 'last_hour' | 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  customer_id?: string;

  limit?: number;

  model?: string;

  name?: string;

  offset?: number;

  referrer?: string;

  session_id?: string;

  user_id?: string;

  utmtag?: string;

  utmtagValue?: string;

  visitor_id?: string;
}

export interface LlmTracesFilterOptionsParams {
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

export declare namespace Llm {
  export {
    type LlmTracesParams as LlmTracesParams,
    type LlmTracesFilterOptionsParams as LlmTracesFilterOptionsParams,
  };
}
