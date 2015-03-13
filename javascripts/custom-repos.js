// Opt-in repos (case sensitive)
// These repositories are loaded this way as a convenience, not because Disco has any special priority in this list.
// Opting these repositories in here reduces the number of Javascript calls we need to make to load external repos.
var optInRepos = [
  'django-shopify-auth',
  'grunt-shopify-theme-settings',
  'shopify-theme-scaffold',
  'shopify-dev-frame'
];

// Add custom repos by full_name. Take the org/user and repo name
// - e.g. luciddesign/bootstrapify from https://github.com/luciddesign/bootstrapify
var customRepos = [
  'discolabs/cartjs'
];

// Custom repo language, different than that defined by GitHub
var customRepoLanguage = {
  'cartjs': 'JavaScript',
  'shopify-theme-scaffold': 'Liquid'
};

// Specify how each repository should be classified.
// Currently, repositories can be classified as "Themes" or "Apps".
// "Themes" is the default so currently only repositories that should be classified under "Apps" should be in here.
var customRepoCategory = {
  'django-shopify-auth': 'Apps',
  'shopify-dev-frame': 'Apps'
};

// Custom repo avatars. Dimensions should be 40x40
// - Be sure a custom repo doesn't have the same name as a Shopify one, or a one will be overridden
var customRepoAvatar = {};
