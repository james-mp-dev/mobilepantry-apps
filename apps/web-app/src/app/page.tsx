import { sampleApiFunction } from '@mobilepantry/api';

export default function HomePage() {
  const apiResponse = sampleApiFunction();

  return (
    <div>
      <h1>Welcome to the Mobile Pantry Web App!</h1>
      <p>This is a placeholder page.</p>
      <p>Message from shared API: <strong>{apiResponse.message}</strong></p>
      <p>
        To get started, edit <code>src/app/page.tsx</code> and save to reload.
      </p>
    </div>
  );
}
