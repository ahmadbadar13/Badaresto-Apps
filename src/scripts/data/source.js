import ENDPOINT from '../globals/end-point';

class sourceData {
    static async listRestaurant() {
        try {
            const response = await fetch(ENDPOINT.LIST);
            if (!response.ok) {
                throw new Error('Failed to fetch restaurant data: ' + response.statusText);
            }
            const responseJson = await response.json();
            return responseJson.restaurants;
        } catch (error) {
            console.error('Error fetching restaurant data:', error);
            throw error;
        }
    }

    static async detailRestaurant(id) {
        try {
            const response = await fetch(ENDPOINT.DETAIL(id));
            if (!response.ok) {
                throw new Error('Failed to fetch restaurant details: ' + response.statusText);
            }
            const responseJson = await response.json();
            return responseJson.restaurant;
        } catch (error) {
            console.error('Error fetching restaurant details:', error);
            throw error;
        }
    }
}

export default sourceData;
