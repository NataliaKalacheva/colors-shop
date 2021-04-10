const collectionStore = {
  namespaced: true,
  state: {
    collectionProducts: [
      {
        id: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        available: true,
        price: 6000,
        compare_at_price: null,
        contract: true,
        exclusive: false,
        featured_image: require("@/assets/products/Product1.png"),
      },
      {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        available: true,
        price: 4800,
        compare_at_price: null,
        contract: true,
        exclusive: true,
        featured_image: require("@/assets/products/Product2.png"),
      },
      {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        available: true,
        price: 5290,
        compare_at_price: null,
        contract: false,
        exclusive: false,
        featured_image: require("@/assets/products/Product3.png"),
      },
      {
        id: 4,
        title: "Краска Wallquest, Brownsone MS90102",
        available: true,
        price: 2800,
        compare_at_price: null,
        contract: true,
        exclusive: false,
        featured_image: require("@/assets/products/Product4.png"),
      },
      {
        id: 5,
        title: "Краска Wallquest, Brownsone MS90102",
        available: true,
        price: 3400,
        compare_at_price: null,
        contract: true,
        exclusive: false,
        featured_image: require("@/assets/products/Product5.png"),
      },
    ],
  },
  getters: {
    collectionProducts: ({ collectionProducts }) => collectionProducts,
    totalProducts: ({ collectionProducts }) => collectionProducts.length,
  },
};

export default collectionStore;
