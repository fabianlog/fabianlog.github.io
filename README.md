# fabianlog

Personal website of Fabian Roh.

Website: https://fabianlog.github.io/

GitHub Pages builds this Jekyll site from the root of `main`. Articles live in
`_articles/`, and uploaded pictures live in `assets/images/`.

## Write an article

1. Open https://fabianlog.github.io/admin/ and choose **Open the article editor**.
2. Sign in to Pages CMS with the `fabiankmroh` GitHub account.
3. Open `fabianlog/fabianlog.github.io`, branch `main`, and choose **Articles**.
4. Create an article with a title, date, and body. Use the rich-text toolbar to
   add links, lists, headings, and inline images. A cover image is optional.
5. Save. GitHub Pages rebuilds automatically; allow a minute or two for publication.

Edits and images are stored in this **public repository**. Saving is publishing;
do not store private drafts or private attachments here. Changing an article's
filename changes its public URL.

## Access

Pages CMS authenticates with GitHub and uses repository permissions for edits.
`fabiankmroh` is the only human repository collaborator at setup. Do not add
GitHub collaborators or Pages CMS email invitations if the editor should remain
single-author. Install the Pages CMS GitHub App only on this repository.

`/admin/` is a public sign-in entry page. The editor and write operations are
protected by Pages CMS and GitHub; hiding the URL is not the access control.
No API keys, passwords, or access tokens belong in this repository or its pages.

## Local preview

Run `bundle install`, then `bundle exec jekyll serve`. The production site uses
GitHub Pages' Jekyll build. The `.pages.yml` file defines the article and media
fields for Pages CMS.
