// Opt-in repos (case sensitive)
// These repositories are loaded this way as a convenience, not because Disco has any special priority in this list.
// Opting these repositories in here reduces the number of Javascript calls we need to make to load external repos.
var optInRepos = [
  'cartjs',
  'django-shopify-auth',
  'grunt-shopify-theme-settings',
  'shopify-theme-scaffold',
  'shopify-dev-frame'
];

// Add custom repos by full_name. Take the org/user and repo name
// - e.g. luciddesign/bootstrapify from https://github.com/luciddesign/bootstrapify
var customRepos = [
  'joshrps/laravel-shopify-API-wrapper',
  'freakdesign/shopifyFD',
  'freakdesign/shopify-custom-fields'
];

// Custom repo language, different than that defined by GitHub
var customRepoLanguage = {
  'cartjs': 'JavaScript',
  'shopify-theme-scaffold': 'Liquid',
  'shopify-custom-fields': 'JavaScript'
};

// Specify how each repository should be classified.
// Currently, repositories can be classified as "Themes", "Apps" or "Tools".
// "Themes" is the default so only repositories that should be classified under "Apps" or "Tools" should be in here.
var customRepoCategory = {
  'django-shopify-auth': 'Apps',
  'shopify-dev-frame': 'Apps',
  'laravel-shopify-API-wrapper': 'Apps',
  'shopifyFD': 'Tools',
  'shopify-custom-fields': 'Tools'
};

// Custom repo avatars. Dimensions should be 40x40
// - Be sure a custom repo doesn't have the same name as a Shopify one, or a one will be overridden
var customRepoAvatar = {};
