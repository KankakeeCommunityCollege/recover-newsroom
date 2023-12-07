# Newsroom Archiving Process

#### *Documentation for the process of archiving newsroom posts.*

---

To archive a past year's posts use the following steps:
1. Switch the post layout to `post-for-archive`.
2. Run a local build.
3. Copy that years folder from `_site/` and paste into `archive/`.
4. In `_site/archive/index.html`, copy the HTML for that year's list of articles and paste into `archive.html`:
   1. Adjust the URL for each post.
5. Delete that year's posts from the `_posts/` folder.
6. Revert the post layout to `post`.

-----

## Switch post layout to `post-for-archive`

In the site's `_config.yml` file adjust the post layout to be `post-for-archive`:

```yaml
defaults:
  - scope:
      path: ''
      type: posts
    values:
      layout: post-for-archive ## Normal value is "post"
```

-----

## Run a local build

Run a production build locally using:

```bash
npm run production
```

-----

## Copy that years folder from `_site/` and paste into `archive/`

Copy the folder, and everything in it, corresponding to that years posts from the `_site` folder and paste into `archive/` folder. For example, copy `_site/2022/*` and paste into `archive/2022/*`.

## Copy the HTML for that year's list of articles

Find the file `_site/archive/index.html` and copy the HTML for that year's unordered list of posts (and the year heading):

```html
<h2>2022</h2>
<ul class="archive__list">
  <li><a
      href="/2022/12/14/temporary-locations-for-several-departments.html"
      class="archive__link-item"
    ><span class="archive__post-meta">December 14, 2022</span> - Temporary location for several departments</a></li>
  <li><a
      href="/2022/12/14/elevator-repair-begins-dec-19.html"
      class="archive__link-item"
    ><span class="archive__post-meta">December 14, 2022</span> - Elevator repair begins Dec. 19</a></li>
  <!-- ...remaining list items omitted... -->
</ul>
```

Find the file `archive.html` and paste the HTML in the appropriate location.

### Adjust the URL for each post

Next, adjust the URL for each post to point to the new archive location — prefix with `{{ page.baseurl }}`.
Be sure to remove the `.html` extension and replace with `/`:
```html
<div class="row">
  <div class="col">
    <h2>2022</h2>
    <ul class="archive__list">
      <li><a
          href="{{ page.baseurl }}archive/2022/12/14/temporary-locations-for-several-departments/"
          class="archive__link-item"
        ><span class="archive__post-meta">December 14, 2022</span> - Temporary location for several departments</a></li>
      <li><a
          href="{{ page.baseurl }}archive/2022/12/14/elevator-repair-begins-dec-19/"
          class="archive__link-item"
        ><span class="archive__post-meta">December 14, 2022</span> - Elevator repair begins Dec. 19</a></li>
        <!-- ...remaining list items omitted... -->
    </ul>
```

## Delete that year's posts from the `_posts/` folder

Delete all the posts for the year you are archiving from the `_posts/` folder.

## Revert the post layout to `post`

In `_config.yml` adjust the post layout back to `post`:

```yaml
defaults:
  - scope:
      path: ''
      type: posts
    values:
      layout: post
```
