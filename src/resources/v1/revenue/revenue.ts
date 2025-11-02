// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AttributionAPI from './attribution';
import { Attribution, AttributionByOriginParams, AttributionByUtmParams } from './attribution';
import * as CohortAPI from './cohort';
import { Cohort, CohortGetMetricsParams, CohortGetMetricsResponse } from './cohort';
import * as ConversionAPI from './conversion';
import { Conversion, ConversionMetricsParams } from './conversion';
import * as CustomersAPI from './customers';
import { CustomerProfileParams, CustomerTopParams, Customers } from './customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Revenue extends APIResource {
  attribution: AttributionAPI.Attribution = new AttributionAPI.Attribution(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  conversion: ConversionAPI.Conversion = new ConversionAPI.Conversion(this._client);
  cohort: CohortAPI.Cohort = new CohortAPI.Cohort(this._client);

  /**
   * Get key revenue metrics including total revenue, conversion rate, and average
   * order value
   *
   * @example
   * ```ts
   * const dashboardResponse = await client.v1.revenue.dashboard(
   *   { project_id: 'project_id', time_range: 'last_hour' },
   * );
   * ```
   */
  dashboard(query: RevenueDashboardParams, options?: RequestOptions): APIPromise<DashboardResponse> {
    return this._client.get('/api/v1/revenue/dashboard', { query, ...options });
  }

  /**
   * Get revenue metrics over time for chart visualization
   *
   * @example
   * ```ts
   * const timelineResponse = await client.v1.revenue.timeline({
   *   project_id: 'project_id',
   *   time_range: 'last_hour',
   * });
   * ```
   */
  timeline(query: RevenueTimelineParams, options?: RequestOptions): APIPromise<TimelineResponse> {
    return this._client.get('/api/v1/revenue/timeline', { query, ...options });
  }
}

export interface AttributionByOriginResponse {
  data?: Array<OriginAttributionDataPoint>;
}

export interface AttributionByUtmResponse {
  data?: Array<UtmAttributionDataPoint>;
}

export interface ConversionMetricsResponse {
  avg_purchases_per_customer?: number;

  /**
   * Time to conversion
   */
  avg_time_to_first_purchase_hours?: number;

  /**
   * % of visitors who paid
   */
  conversion_rate?: number;

  /**
   * Customer value
   */
  customer_lifetime_value?: number;

  median_time_to_first_purchase_hours?: number;

  paying_customers?: number;

  /**
   * Repeat purchase metrics
   */
  repeat_purchase_rate?: number;

  total_visitors?: number;
}

export interface CustomerProfileResponse {
  avg_order_value?: number;

  currency?: string;

  email?: string;

  external_id?: string;

  first_payment_date?: string;

  /**
   * Attribution
   */
  first_traffic_origin?: string;

  first_utm_campaign?: string;

  first_utm_medium?: string;

  first_utm_source?: string;

  last_payment_date?: string;

  name?: string;

  payment_count?: number;

  /**
   * Payment history
   */
  payments?: Array<Payment>;

  /**
   * Revenue over time (last 90 days)
   */
  revenue_over_time?: Array<RevenueOverTimeDataPoint>;

  /**
   * Revenue summary
   */
  total_revenue?: number;

  user_id?: string;

  /**
   * Identity
   */
  visitor_id?: string;
}

export interface DashboardResponse {
  /**
   * Average metrics
   */
  avg_order_value?: number;

  /**
   * Average revenue per paying customer
   */
  avg_revenue_per_customer?: number;

  avg_revenue_per_identified_customer?: number;

  /**
   * Average revenue per session
   */
  avg_revenue_per_session?: number;

  /**
   * % of visitors who paid
   */
  conversion_rate?: number;

  currency?: string;

  identified_customer_revenue?: number;

  /**
   * Identified customers (have email/user_id)
   */
  identified_customers?: number;

  /**
   * Customer metrics
   */
  paying_customers?: number;

  /**
   * Count of successful payments
   */
  total_payments?: number;

  /**
   * Core revenue metrics
   */
  total_revenue?: number;
}

export interface OriginAttributionDataPoint {
  /**
   * Average revenue per paying customer
   */
  avg_revenue_per_customer?: number;

  /**
   * paying_customers / unique_visitors \* 100
   */
  conversion_rate?: number;

  currency?: string;

  origin?: string;

  paying_customers?: number;

  payment_count?: number;

  revenue_percentage?: number;

  /**
   * Revenue in smallest currency unit (cents)
   */
  total_revenue?: number;

  unique_visitors?: number;
}

export interface Payment {
  amount?: number;

  currency?: string;

  payment_id?: string;

  payment_timestamp?: string;

  product_name?: string;

  provider_type?: string;

  status?: string;
}

export interface RevenueOverTimeDataPoint {
  payment_count?: number;

  timestamp?: string;

  total_revenue?: number;
}

export interface TimelineDataPoint {
  currency?: string;

  payment_count?: number;

  timestamp?: string;

  /**
   * Revenue in smallest currency unit (cents)
   */
  total_revenue?: number;
}

export interface TimelineResponse {
  data?: Array<TimelineDataPoint>;
}

export interface TopCustomer {
  avg_order_value?: number;

  currency?: string;

  /**
   * Resolved customer identity (user_id > external_id > visitor_id)
   */
  customer_id?: string;

  email?: string;

  external_id?: string;

  first_payment_date?: string;

  first_traffic_origin?: string;

  last_payment_date?: string;

  location_country_iso?: string;

  name?: string;

  payment_count?: number;

  /**
   * Total revenue in smallest currency unit (cents)
   */
  total_revenue?: number;

  user_id?: string;

  /**
   * Representative visitor_id for this customer
   */
  visitor_id?: string;

  /**
   * All visitor_ids for this customer
   */
  visitor_ids?: Array<string>;
}

export interface TopCustomersResponse {
  customers?: Array<TopCustomer>;

  total?: number;
}

export interface UtmAttributionDataPoint {
  /**
   * Average revenue per paying customer
   */
  avg_revenue_per_customer?: number;

  /**
   * paying_customers / unique_visitors \* 100
   */
  conversion_rate?: number;

  currency?: string;

  paying_customers?: number;

  payment_count?: number;

  revenue_percentage?: number;

  /**
   * Revenue in smallest currency unit (cents)
   */
  total_revenue?: number;

  unique_visitors?: number;

  utm_value?: string;
}

export interface RevenueDashboardParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export interface RevenueTimelineParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

Revenue.Attribution = Attribution;
Revenue.Customers = Customers;
Revenue.Conversion = Conversion;
Revenue.Cohort = Cohort;

export declare namespace Revenue {
  export {
    type AttributionByOriginResponse as AttributionByOriginResponse,
    type AttributionByUtmResponse as AttributionByUtmResponse,
    type ConversionMetricsResponse as ConversionMetricsResponse,
    type CustomerProfileResponse as CustomerProfileResponse,
    type DashboardResponse as DashboardResponse,
    type OriginAttributionDataPoint as OriginAttributionDataPoint,
    type Payment as Payment,
    type RevenueOverTimeDataPoint as RevenueOverTimeDataPoint,
    type TimelineDataPoint as TimelineDataPoint,
    type TimelineResponse as TimelineResponse,
    type TopCustomer as TopCustomer,
    type TopCustomersResponse as TopCustomersResponse,
    type UtmAttributionDataPoint as UtmAttributionDataPoint,
    type RevenueDashboardParams as RevenueDashboardParams,
    type RevenueTimelineParams as RevenueTimelineParams,
  };

  export {
    Attribution as Attribution,
    type AttributionByOriginParams as AttributionByOriginParams,
    type AttributionByUtmParams as AttributionByUtmParams,
  };

  export {
    Customers as Customers,
    type CustomerProfileParams as CustomerProfileParams,
    type CustomerTopParams as CustomerTopParams,
  };

  export { Conversion as Conversion, type ConversionMetricsParams as ConversionMetricsParams };

  export {
    Cohort as Cohort,
    type CohortGetMetricsResponse as CohortGetMetricsResponse,
    type CohortGetMetricsParams as CohortGetMetricsParams,
  };
}
