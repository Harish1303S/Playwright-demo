import { APIRequestContext } from '@playwright/test';

export class AuthAPI{

    constructor(private request:APIRequestContext){}

    async createToken(){

        return await this.request.post('/auth',{

            data:{

                username:'admin',

                password:'password123'

            }

        });

    }

}

// /*

// This is a TypeScript class that wraps an API call for authentication, typically used in Playwright end-to-end/API testing.

// ## Breakdown

// **Imports**
// ```typescript
// import { APIRequestContext } from '@playwright/test';
// ```
// `APIRequestContext` is a Playwright type representing an HTTP client instance — it's what lets you send requests (GET, POST, etc.) in tests without a browser.

// **Class definition**
// ```typescript
// export class AuthAPI {
//     constructor(private request: APIRequestContext) {}
//     ...
// }
// ```
// - `AuthAPI` is a helper class that groups authentication-related API calls.
// - The constructor takes an `APIRequestContext` object (usually passed in from a test fixture) and stores it as a private property called `request`. This shorthand (`private request: APIRequestContext`) both declares and assigns the class property in one line — a TypeScript convenience.

// **The `createToken` method**
// ```typescript
// async createToken(){
//     return await this.request.post('/auth', {
//         data: {
//             username: 'admin',
//             password: 'password123'
//         }
//     });
// }
// ```
// - This is an async method that sends a `POST` request to the `/auth` endpoint.
// - The `data` field is the request body (Playwright automatically serializes it as JSON).
// - It's sending hardcoded credentials (`admin` / `password123`) to log in and presumably receive back an authentication token.
// - It returns the raw response object (not yet parsed), so the caller can inspect status codes, headers, or call `.json()` on it themselves.

// ## How it would typically be used
// ```typescript
// const authAPI = new AuthAPI(request);
// const response = await authAPI.createToken();
// const body = await response.json();
// const token = body.token; // or whatever field the API returns
// ```

// ## A few notes/improvements worth considering
// 1. **Hardcoded credentials** — Fine for a quick test, but usually you'd want to pass `username`/`password` as parameters or pull them from environment variables/config, rather than hardcoding them in the class.
// 2. **No base URL shown** — `/auth` implies a `baseURL` is configured elsewhere (e.g., in `playwright.config.ts`), which Playwright prepends automatically.
// 3. **No error handling** — It just returns the response as-is; the caller is responsible for checking `response.ok()` or status codes.
// 4. **No return type annotation** — Could specify `Promise<APIResponse>` for clarity, though TypeScript infers it fine here.

// Would you like me to show a more robust version (e.g., with configurable credentials, typed responses, or token extraction built in)? 
