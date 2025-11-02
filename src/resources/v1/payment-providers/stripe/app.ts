// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PaymentProvidersAPI from '../payment-providers';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class App extends APIResource {
  /**
   * Handle the OAuth redirect from Stripe App installation and create payment
   * provider
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.paymentProviders.stripe.app.handleCallback(
   *     { code: 'code', state: 'state' },
   *   );
   * ```
   */
  handleCallback(
    query: AppHandleCallbackParams,
    options?: RequestOptions,
  ): APIPromise<AppHandleCallbackResponse> {
    return this._client.get('/api/v1/payment-providers/stripe/app/callback', { query, ...options });
  }
}

export interface AppHandleCallbackResponse {
  backfill_status?: string;

  message?: string;

  provider?: PaymentProvidersAPI.PaymentProviderResponse;

  success?: boolean;
}

export interface AppHandleCallbackParams {
  /**
   * Authorization code
   */
  code: string;

  /**
   * State parameter for CSRF protection
   */
  state: string;
}

export declare namespace App {
  export {
    type AppHandleCallbackResponse as AppHandleCallbackResponse,
    type AppHandleCallbackParams as AppHandleCallbackParams,
  };
}
