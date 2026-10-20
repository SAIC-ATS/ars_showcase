# ars_showcase
Website showcasing SAIC's participation in the Ars Electronica Art and Technology Festival since 2018

# How to add a new year to the site
Each year follows a similar structure:

1. **Update the navigation menu**: Add the new year to the `NAV_YEARS` array in [docs/scripts/nav.js](file:///Users/dougrosman/GitHub/ars_showcase/docs/scripts/nav.js). It will automatically populate the top navigation bar and mobile dropdown on all pages.
2. **Create the new year's page**: Copy an existing year folder (e.g., `docs/2026/`) to the new year folder (e.g., `docs/2027/`), and update its title, curator, statement, and artist list in `index.html`.
3. **Add images**: Generate and place the image assets in `docs/images/<YEAR>/` and update `docs/scripts/image-info.json`.
4. **Update the home page cards**: Add the new year card to `docs/index.html` and its background image in `docs/stylesheets/home.css`.
