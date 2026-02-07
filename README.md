# React Alert Project

This project demonstrates a reusable and customizable Alert component built with React, TypeScript, and Vite.

## Features

- **Custom Alert Component**: A flexible component for displaying notifications.
- **Variant Support**: Supports different alert types (e.g., `alert-success`, `alert-error`).
- **Icon Integration**: Uses `lucide-react` for scalable vector icons.
- **Flexible Content**: Supports both simple text descriptions and complex children elements (including links and HTML).

## Technologies

- React
- TypeScript
- Vite
- Lucide React

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

## Usage

The `Alert` component can be used as follows:

```tsx
import { Ban } from 'lucide-react';
import Alert from './components/ui/Alert';

<Alert 
  type="alert-success" 
  title="Success" 
  icon={<Ban size={20} />}
>
  <p>Your action was successful.</p>
</Alert>
```
# reactjs-alert-project
