// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  /**
   * Authenticate with admin credentials and receive a JWT token (OSS mode only)
   *
   * @example
   * ```ts
   * const loginResponse = await client.v1.auth.login({
   *   password: 'password',
   *   username: 'username',
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<LoginResponse> {
    return this._client.post('/api/v1/auth/login', { body, ...options });
  }
}

export interface LoginRequest {
  password: string;

  username: string;
}

export interface LoginResponse {
  token?: string;

  org_id?: string;
}

export interface AuthLoginParams {
  password: string;

  username: string;
}

export declare namespace Auth {
  export {
    type LoginRequest as LoginRequest,
    type LoginResponse as LoginResponse,
    type AuthLoginParams as AuthLoginParams,
  };
}
