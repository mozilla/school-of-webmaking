# Translating Webmaker Training

1. Find the language code for the language you want to translate to. (ex. `af` for Afrikaans).
1. Copy the `en` directory and all its content to the new language code (ex. copy `en` to `af`).
1. Translate all the files in this directory for the new langauge
1. Copy all the files in the `_includes/` folder that ends with `-en.html` to the new language code (ex copy `_includes/topnav-en.html` to `_includes/topnav-af.html`).
1. Create a new course (described in `docs/adding-a-course.markdown`)
1. Set the language property for the course in `_data/course.yml` to the appropriate value
1. Add a hard coded permalink property to the pages you add under `_posts`. For example, if you add a file called `_posts/2000-01-01-konsepte.markdown` with the category `onpartydigheid` add the following to the preamble: 

    permalink: /af/onpartydigheid/konsepte/
