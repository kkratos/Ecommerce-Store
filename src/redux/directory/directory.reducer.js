const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            imageUrl:
                "https://cutt.ly/3jgDQvj",
            id: 1,
            linkUrl: "shop/hats",
        },
        {
            title: "jackets",
            // imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            imageUrl: "https://cutt.ly/2jgSxpp",
            id: 2,
            linkUrl: "shop/jackets",
        },
        {
            title: "sneakers",
            // imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            imageUrl: "https://cutt.ly/djgSVNJ",
            id: 3,
            linkUrl: "shop/sneakers",
        },
        {
            title: "womens",
            // imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            imageUrl: "https://cutt.ly/ujgDeOY",
            size: "large",
            id: 4,
            linkUrl: "shop/womens",
        },
        {
            title: "mens",
            imageUrl: "https://cutt.ly/ZjgDvil",
            size: "large",
            id: 5,
            linkUrl: "shop/mens",
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;