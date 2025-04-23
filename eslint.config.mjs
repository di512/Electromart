// .eslintrc.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const nextConfig = [...compat.extends("next/core-web-vitals")];

const eslintConfig = [
  ...nextConfig,
  {
    parser: '@typescript-eslint/parser', // Or 'espree' if you're not using TypeScript
  },
];

export default eslintConfig;