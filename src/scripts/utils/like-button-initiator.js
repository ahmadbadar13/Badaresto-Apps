import FavoriteRestaurantIdb from '../data/favorite-resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    if (!this._restaurant || !this._restaurant.id) {
      console.error('Restaurant id is not defined or invalid');
      return;
    }

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
        await this._renderButton();
      });
    } else {
      console.error('Like button not found after rendering');
    }
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
        await this._renderButton();
      });
    } else {
      console.error('Liked button not found after rendering');
    }
  },
};

export default LikeButtonInitiator;
