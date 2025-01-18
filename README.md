# Next.js Client Component Error: Cannot read properties of undefined (reading 'router')

This repository demonstrates a common error in Next.js applications when using the `useRouter` hook within a client component.  The error arises because `useRouter` is only available within pages rendered on the server-side.  Attempting to use it directly within a client component that doesn't have access to the router object will lead to an error.

## Problem
The `pages/about.js` file attempts to use the `useRouter` hook within a client component. This results in a runtime error: `Cannot read properties of undefined (reading 'router')`.

## Solution
The solution involves moving the code that relies on `useRouter` to a page component or using alternative methods for client-side routing. The `pages/aboutSolution.js` file provides a corrected implementation.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You should observe the error.
5. Replace `pages/about.js` with `pages/aboutSolution.js`. Rerun the application. The error should be resolved.