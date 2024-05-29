const assert = require('assert');

Feature('Liking Restaurant');

Scenario('liking one restaurant', async ({ I }) => {
    I.amOnPage('/');

    I.waitForElement('.post__item', 15);
    I.seeElement('.post__item .post__item__title a');

    const firstRestaurant = locate('.post__item .post__item__title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 10);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.waitForElement('.post__item', 10);
    I.seeElement('.post__item .post__item__title a');
    const likedRestaurantTitle = await I.grabTextFrom('.post__item .post__item__title a');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
