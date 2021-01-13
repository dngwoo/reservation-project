module.exports = {
  env: {
      "browser": true,
      "es2021": true
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // plugins에 있는 것 적용
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module"
  },
  // https://stackoverflow.com/questions/63118405/how-to-fix-eslintrc-the-file-does-not-match-your-project-config
  ignorePatterns: ["dist/", "node_modules/",".eslintrc.js"],
  plugins: [
      "@typescript-eslint"
  ],
  rules: {
  }
}
