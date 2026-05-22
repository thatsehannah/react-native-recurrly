<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Recurrly Expo app. The following changes were made:

- **`app.config.js`** (new): Created to expose `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` from `.env` as Expo config extras, accessible via `expo-constants`.
- **`src/config/posthog.ts`** (new): PostHog client singleton configured with app lifecycle capture, batching, feature flags, and debug mode in development. Reads credentials from `Constants.expoConfig.extra`.
- **`app/_layout.tsx`**: Wrapped the app with `PostHogProvider` (inside `ClerkProvider`). Added manual screen tracking via `posthog.screen()` in a `useEffect` that fires on pathname changes — the correct approach for Expo Router.
- **`app/(auth)/sign-in.tsx`**: Added `posthog.identify()` and `user_signed_in` capture on successful password and MFA sign-in. Added `$exception` capture on sign-in errors.
- **`app/(auth)/sign-up.tsx`**: Added `posthog.identify()` and `user_signed_up` capture on successful account creation. Added `$exception` capture on sign-up errors.
- **`app/(tabs)/settings.tsx`**: Added `user_signed_out` capture and `posthog.reset()` before Clerk sign-out to clear the PostHog session.
- **`app/(tabs)/index.tsx`**: Added `subscription_expanded` capture with subscription ID and name when a card is expanded.
- **`app/subscriptions/[id].tsx`**: Added `subscription_detail_viewed` capture on mount with the subscription ID.

| Event | Description | File |
|---|---|---|
| `user_signed_in` | User successfully completes sign-in (password or MFA) | `app/(auth)/sign-in.tsx` |
| `user_signed_up` | User creates a new account and verifies email | `app/(auth)/sign-up.tsx` |
| `user_signed_out` | User signs out from the settings screen | `app/(tabs)/settings.tsx` |
| `subscription_expanded` | User expands a subscription card on the home screen | `app/(tabs)/index.tsx` |
| `subscription_detail_viewed` | User navigates to the subscription details screen | `app/subscriptions/[id].tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](https://us.posthog.com/project/362690/dashboard/1618361)
- [Sign-ins Over Time](https://us.posthog.com/project/362690/insights/oPQxb7e9)
- [New Sign-ups Over Time](https://us.posthog.com/project/362690/insights/33i7WdMV)
- [Sign-up to Sign-in Conversion Funnel](https://us.posthog.com/project/362690/insights/PHCRYTpo)
- [Subscription Engagement](https://us.posthog.com/project/362690/insights/PsTDSxMD)
- [User Sign-outs (Churn Signal)](https://us.posthog.com/project/362690/insights/c8CiCiWX)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
