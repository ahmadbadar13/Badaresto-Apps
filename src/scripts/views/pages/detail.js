import Source from "../../data/source";
import UrlParser from "../../routes/url-parser";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <section class="content">
            <h1 class="content__label">DETAIL RESTORAN</h1>
            <div class="detail__content" id="detail"></div>
            <div id="likeButtonContainer"></div>
        </section>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        let restaurant;
        try {
            restaurant = await Source.detailRestaurant(url.id);
        } catch (error) {
            console.error('Failed to fetch restaurant data:', error);
            restaurant = null;
        }

        const restaurantContainer = document.querySelector('.detail__content');
        const likeButtonContainer = document.querySelector('#likeButtonContainer');

        if (restaurant) {
            restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

            LikeButtonInitiator.init({
                likeButtonContainer,
                restaurant: {
                    id: restaurant.id,
                    name: restaurant.name,
                    description: restaurant.description,
                    pictureId: restaurant.pictureId,
                    city: restaurant.city,
                    rating: restaurant.rating,
                },
            });
        }
    },
};

export default Detail;
