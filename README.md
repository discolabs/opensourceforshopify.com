Open Source for Shopify
=======================
This is a collection of open source projects developed by third parties for use
in the building of themes and applications for Shopify.  

It is a fork of [Shopify's Open Source Page][], but is ***not*** officially
supported by Shopify. It's currently maintained by [Disco][].


## Adding your repository
If you maintain a Shopify-related open source project you're more than welcome
to add your repository to this list.

### Requirements for inclusion

#### 1. Must be hosted on GitHub
This is a technical requirement, not a philosophical one.

#### 2. Must be reasonably developed
Basically, this just means that the repository should be more than just an
experiment or in an "alpha" stage.
 
#### 3. Must be actively maintained
This doesn't mean you have to be pushing commits every week, just that the
project hasn't been abandoned and that someone raising an issue or contacting
the maintainer will get a response.

### Inclusion process
The fastest way to have your repository included is to fork this repository,
add your repository to `javascripts/custom-repos.js`, and raise a pull request.

The edits you'll need to make are:

#### 1. Add your repository to the `customRepos` list
Add your GitHub repository in `<organisation/user>/<repository>` format.

```js
var customRepos = [
  'discolabs/cartjs',               // Existing repository
  'your-username/your-repository'   // Your new repository
];
```

#### 2. Specify a custom language if required
The site allows visitors to filter the repositories by language. The GitHub API
automatically detects the language of your repository, but if it gets it wrong
or you'd like to specify that your repository uses a different language, you
can override the detected language by adding to `customRepoLanguage`.

This is useful for theme-related repositories, which should classify themselves
as using the "Liquid" language.

```js
var customRepoLanguage = {
  'cartjs': 'JavaScript',                   // Existing repository
  'shopify-theme-scaffold': 'Liquid',       // Existing repository
  'your-username/your-repository': 'Liquid' // Your new repository
};
```

#### 3. Specify a category if required
In addition to filtering by language, repositories can be filtered by category
- at the moment, these categorisations are limited to "Themes" (the default)
and "Apps". If your repository is theme-related, you don't have to do anything.

If you'd like to list your repository under "Apps", simply add to
`customRepoCategory`.
  
```js
var customRepoCategory = {
  'django-shopify-auth': 'Apps',            // Existing repository
  'shopify-dev-frame': 'Apps',              // Existing repository
  'your-username/your-repository: 'Apps'    // Your new repository
};
```

### Alternative inclusion process
If you've got a repository you'd like to have listed, but don't wish to go
through the pull request process, simply [raise an issue][] against this
repository requesting it.


[Shopify's Open Source Page]: http://shopify.github.io/
[Disco]: http://discolabs.com
[raise an issue]: https://github.com/discolabs/opensourceforshopify.com/issues
