import RestaurantSource from '../../data/source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                <div id="hero" class="hero-text">
                    <h1 tabindex="0">BADARESTO</h1>
                    <p tabindex="0">Setiap orang pasti merasakan lapar, jika orang tersebut tidak pernah merasa lapar maka dia bukanlah orang!</p>
                </div>
                <div class="hero-image">
                    <picture>
                        <source media="(max-width: 600px)" data-srcset="./public/images/heros/hero-image_4.jpg">
                        <source media="(min-width: 1050px)" data-srcset="./public/images/heros/hero-image_4.jpg">
                    </picture>
                </div>
                </div>
            </div>
        </section>
        
        <section class="content">
            <h1 class="content__label">DAFTAR RESTORAN</h1>
            <div class="posts" id="restaurant"></div>
        </section>
        `;
    },

    async afterRender() {
        try {
            const restaurants = await RestaurantSource.listRestaurant();
            const restaurantContainer = document.querySelector('#restaurant');

            restaurants.forEach((restaurant) => {
                restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
            });
        } catch (error) {
            console.error('Failed to render restaurant list:', error);
        }
    },
};

export default Home;
