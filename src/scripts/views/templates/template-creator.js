import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Halaman Home dan Like
const createRestaurantItemTemplate = (restaurant) => `
    <div class="post__item">
        <img class="post__item__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}" />
        <div class="post__item__info">⭐${restaurant.rating} &nbsp &nbsp &nbsp📍${restaurant.city}</div>
        <div class="hr-container">
            <hr>
        </div>
        <div class="post__item__content">
            <h1 class="post__item__title"><a href="/#/detail/${restaurant.id}" data-id="${restaurant.id}">${restaurant.name}</a></h1>
            <div class="post__item__description">${restaurant.description.slice(0, 130)}...</div>
        </div>
    </div>
`;

// Halaman Detail
const createRestaurantDetailTemplate = (restaurant) => {
    const generateMenuList = (items) => {
        return items.map(item => `<div>${item.name}</div>`).join('');
    };

    const generateReviewList = (reviews) => {
        return reviews.map(review => `<div>${review.name}: ${review.review}</div>`).join('');
    };

    return `
    <div class="detail__item__container">
        <h1 class="detail__title">${restaurant.name}</h1>
        <p class="detail__address">${restaurant.address}, ${restaurant.city}</p>
        <img class="detail__item__image lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
        <div class="detail__content">
            <p class="item__description__detail">${restaurant.description}</p>
            <br>
            <div class="hr-container">
                <hr>
            </div>
            <h2 class="menu__title">MENU</h2>
            <div class="menu__container">
                <div class="menu__list">
                    <h3 class="makanan">Makanan<br></h3>
                    <div>${generateMenuList(restaurant.menus.foods)}</div>
                </div>
                <div class="menu__list">
                    <h3 class="minuman">Minuman<br></h3>
                    <div>${generateMenuList(restaurant.menus.drinks)}</div>
                </div>
            </div>

            <div class="review__container">
                <h2 class="review__title">Review<br></h2>
                <p>Review Pelanggan</p>
                <div>${generateReviewList(restaurant.customerReviews)}</div>
            </div>
        </div>
    </div>
    `;
};

// Like Button
const createLikeButtonTemplate = () => `
    <button aria-label="Tombol Suka" id="likeButton" class="like">
        <i class="fa fa-star-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="Tombol Tidak Suka" id="likeButton" class="like">
        <i class="fa fa-star" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
