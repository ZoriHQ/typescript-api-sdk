# V1

## Auth

Types:

- <code><a href="./src/resources/v1/auth.ts">Account</a></code>
- <code><a href="./src/resources/v1/auth.ts">AuthResponse</a></code>
- <code><a href="./src/resources/v1/auth.ts">MessageResponse</a></code>
- <code><a href="./src/resources/v1/auth.ts">Organization</a></code>

Methods:

- <code title="post /api/v1/auth/recover-confirm">client.v1.auth.<a href="./src/resources/v1/auth.ts">confirmPasswordRecovery</a>({ ...params }) -> MessageResponse</code>
- <code title="post /api/v1/auth/login">client.v1.auth.<a href="./src/resources/v1/auth.ts">login</a>({ ...params }) -> AuthResponse</code>
- <code title="post /api/v1/auth/logout">client.v1.auth.<a href="./src/resources/v1/auth.ts">logout</a>({ ...params }) -> MessageResponse</code>
- <code title="post /api/v1/auth/refresh">client.v1.auth.<a href="./src/resources/v1/auth.ts">refreshAccessToken</a>({ ...params }) -> AuthResponse</code>
- <code title="post /api/v1/auth/register">client.v1.auth.<a href="./src/resources/v1/auth.ts">registerAccount</a>({ ...params }) -> AuthResponse</code>
- <code title="post /api/v1/auth/recover">client.v1.auth.<a href="./src/resources/v1/auth.ts">requestPasswordRecovery</a>({ ...params }) -> MessageResponse</code>
