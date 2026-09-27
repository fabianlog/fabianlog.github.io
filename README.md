# fabianlog

Personal website of Fabian Roh: https://fabianlog.github.io/

## Write an article

1. Click **Write** on the site, or open https://fabianlog.github.io/admin/.
2. GitHub opens its editor using your existing account. Sign in as `fabiankmroh`
   if needed. No extra app or service is required.
3. Change the title in the starter text, give the file a readable name ending
   in `.md`, and write below the second `---` line. The date is filled in for you.
4. Add links with `[link text](https://example.com)`. Drag, paste, or attach pictures
   using the **Attach files** button below the editor.
5. Use **Preview** to review the article, then **Commit changes** to `main` to publish.
   GitHub Pages updates automatically, usually within a minute or two.

To edit an article, use **Edit article** at the bottom of its page, or open
https://github.com/fabianlog/fabianlog.github.io/tree/main/_articles and select
its pencil/edit button. Saving a change to `main` updates the public site.

## Access and privacy

GitHub enforces repository write access. `fabiankmroh` is currently the only
human collaborator with write access. Other visitors cannot publish to this
site, even if they know the editor link. Keep the repository's collaborator
list limited to yourself to preserve that setup.

Articles and attachments are public after publishing. No account credentials
or API tokens are stored in this repository or sent to the public website.
The `/admin/` page is a shortcut to the authenticated GitHub editor.

## Development

GitHub Pages builds this Jekyll site from the root of `main`. Articles live in
`_articles/`, and the article layout supports Markdown links and images.
Run `bundle install`, then `bundle exec jekyll serve` for a local preview.
