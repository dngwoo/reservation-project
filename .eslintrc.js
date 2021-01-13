exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: 'module',
  },
  env: {
    node: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended", 
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ]
}