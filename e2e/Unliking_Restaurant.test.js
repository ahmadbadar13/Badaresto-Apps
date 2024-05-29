Feature('Unliking Restaurant');

Scenario('unliking one restaurant', async ({ I }) => {
    I.amOnPage('/#/like');

    I.see("Anda belum menambahkan restoran ke favorit anda.", '.restaurant-not-found');

    I.amOnPage('/');

    I.waitForElement('.post__item', 15);
    I.seeElement('.post__item .post__item__title a');
    I.click(locate('.post__item .post__item__title a').first());

    I.waitForElement('#likeButton', 10);
    I.click('#likeButton');

    I.amOnPage('/#/like');

    I.seeElement('.post__item .post__item__title a');
    I.click(locate('.post__item .post__item__title a').first());

    I.waitForElement('#likeButton', 10);
    I.click('#likeButton');

    I.amOnPage('/#/like');

    I.see("Anda belum menambahkan restoran ke favorit anda.", '.restaurant-not-found');
});
