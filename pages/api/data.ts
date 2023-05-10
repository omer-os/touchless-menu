export const data = [
  {
    Restaurant: {
      _id: "r1",
      name: "Delicious Deli",
      logo: "deli_logo.png",
      contact: {
        address: "123 Deli St, Food City",
        phone: "555-1234",
        email: "contact@deliciousdeli.com",
        social_media: ["facebook", "instagram", "twitter"],
      },
      billing: {
        status: "active",
        payment_method: "credit_card",
      },
      subdomain: "delicious",
    },
    Menu: [
      {
        _id: "m1",
        restaurant_id: "r1",
        name: "Sandwiches",
        description: "Tasty and freshly made sandwiches",
        image:
          "https://img.freepik.com/free-icon/sandwich_318-619606.jpg?size=626&ext=jpg&ga=GA1.1.183644258.1674764907&semt=sph",
        categories: [
          {
            _id: "c1",
            name: "Sandwiches",
            description: "Traditional sandwiches",
            image:
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            items: [
              {
                _id: "i1",
                name: "Turkey Club",
                description: "Sliced turkey, bacon, lettuce, tomato",
                image:
                  "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                base_price: 7.99,
                type: "sandwich",
                customizable_options: [
                  {
                    name: "Bread",
                    options: ["white", "wheat", "rye", "sourdough"],
                  },
                  {
                    name: "Cheese",
                    options: ["american", "cheddar", "swiss", "provolone"],
                  },
                ],
                variations: [
                  {
                    name: "Size",
                    options: [
                      { name: "Half", price: 4.99 },
                      { name: "Whole", price: 7.99 },
                    ],
                  },
                ],
                category_id: "c1",
              },
              {
                _id: "i2",
                name: "BLT",
                description: "Bacon, lettuce, tomato",
                image:
                  "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                base_price: 6.99,
                type: "sandwich",
                customizable_options: [
                  {
                    name: "Bread",
                    options: ["white", "wheat", "rye", "sourdough"],
                  },
                  {
                    name: "Cheese",
                    options: ["american", "cheddar", "swiss", "provolone"],
                  },
                ],
                variations: [
                  {
                    name: "Size",
                    options: [
                      { name: "Half", price: 3.99 },
                      { name: "Whole", price: 6.99 },
                    ],
                  },
                ],
                category_id: "c1",
              },
            ],
          },
          {
            _id: "c2",
            name: "cold drinks",
            description: "Traditional wraps",
            image:
              "https://img.freepik.com/free-icon/soft-drink_318-689186.jpg?size=626&ext=jpg&ga=GA1.1.183644258.1674764907&semt=ais",
            items: [
              {
                _id: "i3",
                name: "Turkey Club Wrap",
                description: "Sliced turkey, bacon, lettuce, tomato",
                image:
                  "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                base_price: 7.99,
                type: "wrap",
                customizable_options: [
                  {
                    name: "Bread",
                    options: ["white", "wheat", "rye", "sourdough"],
                  },
                  {
                    name: "Cheese",
                    options: ["american", "cheddar", "swiss", "provolone"],
                  },
                ],
                variations: [
                  {
                    name: "Size",
                    options: [
                      { name: "Half", price: 4.99 },
                      { name: "Whole", price: 7.99 },
                    ],
                  },
                ],
                category_id: "c2",
              },
              {
                _id: "i4",
                name: "BLT Wrap",
                description: "Bacon, lettuce, tomato",
                image:
                  "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                base_price: 6.99,
                type: "wrap",
                customizable_options: [
                  {
                    name: "Bread",
                    options: ["white", "wheat", "rye", "sourdough"],
                  },
                  {
                    name: "Cheese",
                    options: ["american", "cheddar", "swiss", "provolone"],
                  },
                ],
                variations: [
                  {
                    name: "Size",
                    options: [
                      { name: "Half", price: 3.99 },
                      { name: "Whole", price: 6.99 },
                    ],
                  },
                ],
                category_id: "c2",
              },
            ],
          },
        ],
      },
      // More menu items...
    ],
    Order: {
      _id: "o1",
      restaurant_id: "r1",
      menu_items: [
        {
          item_id: "i1",
          item_name: "Turkey Club",
          item_price: 7.99,
          quantity: 1,
          customizable_options: [
            { name: "Bread", value: "wheat", variation: "" },
            { name: "Cheese", value: "cheddar", variation: "" },
          ],
        },
        // More menu items...
      ],
      customer: {
        name: "John Doe",
        phone: "555-9876",
        address: "456 Customer St, Food City",
      },
      status: "pending",
      created_at: new Date("2023-05-10T08:00:00Z"),
      updated_at: new Date("2023-05-10T08:00:00Z"),
    },
    Feedback: {
      _id: "f1",
      restaurant_id: "r1",
      customer_name: "Jane Smith",
      customer_email: "jane.smith@example.com",
      rating: 4,
      comment: "Great food, but the delivery took too long.",
      created_at: new Date("2023-05-09T18:30:00Z"),
    },
  },
  // More restaurant data...
];
