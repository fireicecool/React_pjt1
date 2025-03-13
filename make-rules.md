# React Project Guidelines

## 🎯 Objective

This rule ensures consistent **React project** code style and maintainability.

It helps automatically generated code adhere to the project's patterns.

## 🔧 Applicable Files

- `*.tsx`, `*.jsx`, `*.ts`, `*.js`
- `src/components/**/*.tsx`
- `src/pages/**/*.tsx`
- `src/hooks/**/*.ts`
- `src/config/**/*.json`

## ✨ Code Style

1. **Use Functional Components**

- All components must be written as function components using the `function` keyword.

- Class-based components are not allowed.

2. **Define Props and State Types (TypeScript)**

- All props must be defined using an `interface` or `type`.

- Avoid using `any`; use `unknown` if necessary.

3. **CSS Styling Guide**

- Use `styled-components` or `TailwindCSS`.

- Avoid global CSS (e.g., `index.css`).

## 🚀 Auto-Generated Code Template

> This defines the base template for automatically generated React components.

```tsx

import React from "react";

interface Props {

title: string;

}

const ExampleComponent: React.FC<Props> = ({ *title* }) => {

return <h1>{title}</h1>;

};

export default ExampleComponent;

## 📌 Project Structure

•   src/components/ → Reusable UI components

•   src/pages/ → Page-level components

•   src/hooks/ → Custom hooks

•   src/context/ → Global state management

•   src/utils/ → Utility functions

## ⚠️ Project Initialization Cautions

1. **Preventing Nested Folder Structures**

When initializing a project, prevent the creation of nested folder structures.

•   **Correct Methods**:
```bash
# Method 1: Create directly in an empty folder
mkdir project-name
cd project-name
npm create vite@latest .  # '.' refers to the current directory

# Method 2: Create and navigate immediately
npm create vite@latest project-name
cd project-name
```

•   **Incorrect Method** (Creates Nested Folders):
```bash
mkdir project-name
cd project-name
npm create vite@latest project-name  # Creates project-name/project-name nested structure!
```

## ✅ Best Practices

1.  Apply ESLint + Prettier

•   Use ESLint and Prettier to maintain consistent code style.

2.  Utilize React Query

•   Use react-query instead of fetch for API calls and caching optimization.

3.  Use React Router

•   Implement client-side routing with react-router-dom.

By applying this rule in Cursor AI, all auto-generated code will follow these standards.

You can also customize and extend it to fit your project's specific needs! 🚀