// This package will contain shared API types, DTOs, validation schemas,
// and potentially client-side helper functions or hooks for interacting with the API.

export type SampleApiResponse = {
  message: string;
  data?: any;
};

export const sampleApiFunction = (): SampleApiResponse => {
  return { message: 'Hello from shared API package!' };
};
