module.exports = {
  printWidth: 140,         // Specify the line length that the printer will wrap on.
  tabWidth: 4,             // Specify the number of spaces per indentation-level.
  useTabs: false,          // Indent lines with tabs instead of spaces.
  semi: true,              // Print semicolons at the ends of statements.
  singleQuote: true,       // Use single quotes instead of double quotes.
  quoteProps: 'as-needed', // Change when properties in objects are quoted.
  trailingComma: 'all',    // Print trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.)
  bracketSpacing: true,    // Print spaces between brackets in object literals.
  arrowParens: 'always',   // Include parentheses around a sole arrow function parameter.
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: '.stylelintrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.less',
      options: {
        parser: 'less',
      },
    },
    {
      files: ['*.template.html', '*.component.html'],
      options: {
        parser: 'angular',
      },
    },
  ],
};
