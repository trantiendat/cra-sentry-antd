# Testing CRA + Typescript + Sentry + Antd

## Initial CRA Project + TypeScript
Run command
```
npx create-react-app cra-sentry-antd --template typescript
```
References: https://create-react-app.dev/docs/getting-started/

## Add Sentry
Install these packages
- @sentry/react
- @sentry/tracing

Actually, inserted these code into src/index.tsx
```
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "your_dns",
  release: "my-project-name@" + process.env.npm_package_version,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
```
References: https://docs.sentry.io/platforms/javascript/guides/react/

For testing sentry catch error, add these code into src/App.tsx
```
function App() {
  const onErrorButtonClickHandle = React.useCallback(() => {
    throw new Error ("This button throw error");
  }, []);

  return (
    <div className="App">
      <input type="button" onClick={onErrorButtonClickHandle} value="Throw Error" />
    </div>
  );
}
```

![Step 1](/screenshots/step1.png)
