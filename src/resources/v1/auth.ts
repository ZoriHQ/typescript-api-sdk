// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  /**
   * Reset password using recovery token received via email
   *
   * @example
   * ```ts
   * const messageResponse =
   *   await client.v1.auth.confirmPasswordRecovery({
   *     token: 'recovery-token-from-email',
   *     password: 'NewSecurePassword123!',
   *   });
   * ```
   */
  confirmPasswordRecovery(
    body: AuthConfirmPasswordRecoveryParams,
    options?: RequestOptions,
  ): APIPromise<MessageResponse> {
    return this._client.post('/api/v1/auth/recover-confirm', { body, ...options });
  }

  /**
   * Authenticate a user with email and password
   *
   * @example
   * ```ts
   * const authResponse = await client.v1.auth.login({
   *   email: 'user@example.com',
   *   password: 'SecurePassword123!',
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthResponse> {
    return this._client.post('/api/v1/auth/login', { body, ...options });
  }

  /**
   * Invalidate the current session and refresh token
   *
   * @example
   * ```ts
   * const messageResponse = await client.v1.auth.logout({
   *   refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
   * });
   * ```
   */
  logout(body: AuthLogoutParams, options?: RequestOptions): APIPromise<MessageResponse> {
    return this._client.post('/api/v1/auth/logout', { body, ...options });
  }

  /**
   * Exchange a valid refresh token for new access and refresh tokens
   *
   * @example
   * ```ts
   * const authResponse =
   *   await client.v1.auth.refreshAccessToken({
   *     refresh_token:
   *       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
   *   });
   * ```
   */
  refreshAccessToken(body: AuthRefreshAccessTokenParams, options?: RequestOptions): APIPromise<AuthResponse> {
    return this._client.post('/api/v1/auth/refresh', { body, ...options });
  }

  /**
   * Create a new user account with an organization
   *
   * @example
   * ```ts
   * const authResponse = await client.v1.auth.registerAccount({
   *   email: 'user@example.com',
   *   organization_name: 'Acme Corporation',
   *   password: 'SecurePassword123!',
   * });
   * ```
   */
  registerAccount(body: AuthRegisterAccountParams, options?: RequestOptions): APIPromise<AuthResponse> {
    return this._client.post('/api/v1/auth/register', { body, ...options });
  }

  /**
   * Send a password recovery email to the registered email address
   *
   * @example
   * ```ts
   * const messageResponse =
   *   await client.v1.auth.requestPasswordRecovery({
   *     email: 'user@example.com',
   *   });
   * ```
   */
  requestPasswordRecovery(
    body: AuthRequestPasswordRecoveryParams,
    options?: RequestOptions,
  ): APIPromise<MessageResponse> {
    return this._client.post('/api/v1/auth/recover', { body, ...options });
  }
}

export interface Account {
  email: string;

  id?: string;

  created_at?: string;

  email_verified?: boolean;

  first_name?: string;

  last_name?: string;

  /**
   * Relations
   */
  organizations?: Array<Organization>;

  updated_at?: string;
}

export interface AuthResponse {
  access_token?: string;

  account?: Account;

  expires_in?: number;

  organization?: Organization;

  refresh_token?: string;
}

export interface MessageResponse {
  message?: string;
}

export interface Organization {
  name: string;

  slug: string;

  id?: string;

  created_at?: string;

  /**
   * Relations
   */
  members?: Array<Account>;

  updated_at?: string;
}

export interface AuthConfirmPasswordRecoveryParams {
  token: string;

  password: string;
}

export interface AuthLoginParams {
  email: string;

  password: string;
}

export interface AuthLogoutParams {
  refresh_token: string;
}

export interface AuthRefreshAccessTokenParams {
  refresh_token: string;
}

export interface AuthRegisterAccountParams {
  email: string;

  organization_name: string;

  password: string;

  first_name?: string;

  last_name?: string;
}

export interface AuthRequestPasswordRecoveryParams {
  email: string;
}

export declare namespace Auth {
  export {
    type Account as Account,
    type AuthResponse as AuthResponse,
    type MessageResponse as MessageResponse,
    type Organization as Organization,
    type AuthConfirmPasswordRecoveryParams as AuthConfirmPasswordRecoveryParams,
    type AuthLoginParams as AuthLoginParams,
    type AuthLogoutParams as AuthLogoutParams,
    type AuthRefreshAccessTokenParams as AuthRefreshAccessTokenParams,
    type AuthRegisterAccountParams as AuthRegisterAccountParams,
    type AuthRequestPasswordRecoveryParams as AuthRequestPasswordRecoveryParams,
  };
}
