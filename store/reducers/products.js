import PRODUCTS from '../../data/dummy-data';

const initialState = {
    availableProducts: [],
    userProducts: PRODUCTS.filter(prod =>prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    return state;
}