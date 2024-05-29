import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = { 
    async render() {
        return `
        <section class="content">
            <h1 class="content__label">RESTORAN FAVORIT</h1>
            <div class="posts" id="restaurant"></div>
        </section>
        `;
    },

    async afterRender() {
        try {
            const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
            const restaurantsContainer = document.querySelector('#restaurant');
        
            if (restaurants.length === 0) {
                restaurantsContainer.innerHTML = `
                    <div class="no-data">
                        <p class="restaurant-not-found">Anda belum menambahkan restoran ke favorit anda.</p>
                    </div>
                `;
            } else {
                restaurantsContainer.innerHTML = '';

                restaurants.forEach((restaurant) => {
                    restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
                });
            }
        } catch (error) {
            console.error('Failed to render favorite restaurants:', error);
        }
    }
};

export default Favorite;
