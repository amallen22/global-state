module.exports = {
  root: true,
  extends: ['react-app', 'prettier'],
  plugins: ['@typescript-eslint'],
  settings: {
    rootDir: ['apps/*/', 'packages/*/'],
    react: {
      version: 'detect',
    }    
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}