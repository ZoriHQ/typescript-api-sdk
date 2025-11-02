// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StripeAPI from './stripe/stripe';
import { Stripe } from './stripe/stripe';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PaymentProviders extends APIResource {
  stripe: StripeAPI.Stripe = new StripeAPI.Stripe(this._client);

  /**
   * Connect a new payment provider to a project
   *
   * @example
   * ```ts
   * const paymentProviderResponse =
   *   await client.v1.paymentProviders.create({
   *     api_key: 'sk_test_xxxxx',
   *     project_id: '550e8400-e29b-41d4-a716-446655440000',
   *     provider_type: 'stripe',
   *     webhook_secret: 'whsec_xxxxx',
   *   });
   * ```
   */
  create(body: PaymentProviderCreateParams, options?: RequestOptions): APIPromise<PaymentProviderResponse> {
    return this._client.post('/api/v1/payment-providers', { body, ...options });
  }

  /**
   * Update payment provider credentials or settings
   *
   * @example
   * ```ts
   * const paymentProviderResponse =
   *   await client.v1.paymentProviders.update('id');
   * ```
   */
  update(
    id: string,
    body: PaymentProviderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentProviderResponse> {
    return this._client.put(path`/api/v1/payment-providers/${id}`, { body, ...options });
  }

  /**
   * Get all payment providers for the organization
   *
   * @example
   * ```ts
   * const listPaymentProvidersResponse =
   *   await client.v1.paymentProviders.list();
   * ```
   */
  list(
    query: PaymentProviderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListPaymentProvidersResponse> {
    return this._client.get('/api/v1/payment-providers', { query, ...options });
  }

  /**
   * Disconnect a payment provider from a project
   *
   * @example
   * ```ts
   * const paymentProvider =
   *   await client.v1.paymentProviders.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PaymentProviderDeleteResponse> {
    return this._client.delete(path`/api/v1/payment-providers/${id}`, options);
  }

  /**
   * Get a single payment provider by ID
   *
   * @example
   * ```ts
   * const paymentProviderResponse =
   *   await client.v1.paymentProviders.get('id');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PaymentProviderResponse> {
    return this._client.get(path`/api/v1/payment-providers/${id}`, options);
  }

  /**
   * Get instructions for connecting a payment provider (OAuth URL or manual
   * credentials)
   *
   * @example
   * ```ts
   * const providerInstructionsResponse =
   *   await client.v1.paymentProviders.instructions({
   *     provider_type: 'stripe',
   *   });
   * ```
   */
  instructions(
    query: PaymentProviderInstructionsParams,
    options?: RequestOptions,
  ): APIPromise<ProviderInstructionsResponse> {
    return this._client.get('/api/v1/payment-providers/instructions', { query, ...options });
  }
}

export interface CreatePaymentProviderRequest {
  api_key: string;

  project_id: string;

  provider_type: 'stripe' | 'paddle' | 'paypal' | 'lemon_squeezy' | 'square';

  webhook_secret: string;
}

export interface ListPaymentProvidersResponse {
  providers?: Array<PaymentProviderResponse>;

  total?: number;
}

export interface PaymentProviderResponse {
  id?: string;

  created_at?: string;

  is_active?: boolean;

  last_synced_at?: string;

  organization_id?: string;

  project_id?: string;

  provider_type?: 'stripe' | 'paddle' | 'paypal' | 'lemon_squeezy' | 'square';

  updated_at?: string;
}

export interface ProviderField {
  help_text?: string;

  label?: string;

  name?: string;

  placeholder?: string;

  required?: boolean;

  type?: string;
}

export interface ProviderInstructionsResponse {
  /**
   * "oauth" or "manual"
   */
  connection_method?: string;

  fields?: Array<ProviderField>;

  instructions?: string;

  oauth_url?: string;

  provider_type?: 'stripe' | 'paddle' | 'paypal' | 'lemon_squeezy' | 'square';
}

export interface UpdatePaymentProviderRequest {
  api_key?: string;

  is_active?: boolean;

  webhook_secret?: string;
}

export type PaymentProviderDeleteResponse = { [key: string]: string };

export interface PaymentProviderCreateParams {
  api_key: string;

  project_id: string;

  provider_type: 'stripe' | 'paddle' | 'paypal' | 'lemon_squeezy' | 'square';

  webhook_secret: string;
}

export interface PaymentProviderUpdateParams {
  api_key?: string;

  is_active?: boolean;

  webhook_secret?: string;
}

export interface PaymentProviderListParams {
  /**
   * Filter by project ID
   */
  project_id?: string;
}

export interface PaymentProviderInstructionsParams {
  /**
   * Provider type
   */
  provider_type: 'stripe' | 'paddle' | 'paypal' | 'lemon_squeezy' | 'square';

  /**
   * Project ID (required for Stripe Connect)
   */
  project_id?: string;
}

PaymentProviders.Stripe = Stripe;

export declare namespace PaymentProviders {
  export {
    type CreatePaymentProviderRequest as CreatePaymentProviderRequest,
    type ListPaymentProvidersResponse as ListPaymentProvidersResponse,
    type PaymentProviderResponse as PaymentProviderResponse,
    type ProviderField as ProviderField,
    type ProviderInstructionsResponse as ProviderInstructionsResponse,
    type UpdatePaymentProviderRequest as UpdatePaymentProviderRequest,
    type PaymentProviderDeleteResponse as PaymentProviderDeleteResponse,
    type PaymentProviderCreateParams as PaymentProviderCreateParams,
    type PaymentProviderUpdateParams as PaymentProviderUpdateParams,
    type PaymentProviderListParams as PaymentProviderListParams,
    type PaymentProviderInstructionsParams as PaymentProviderInstructionsParams,
  };

  export { Stripe as Stripe };
}
