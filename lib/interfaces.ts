interface INTRestaurant {
  _id: string;
  name: string;
  logo: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    social_media: string[];
  };
  billing: {
    status: string;
    payment_method: string;
  };
  subdomain: string;
}

interface INTMenuItem {
  _id: string;
  restaurant_id: string;
  name: string;
  description: string;
  image: string;
  categories: INTcategory[];
}

interface INTOrder {
  _id: string;
  restaurant_id: string;
  menu_items: {
    item_id: string;
    item_name: string;
    item_price: number;
    quantity: number;
    customizable_options: {
      name: string;
      value: string;
      variation: string;
    }[];
  }[];
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  status: string;
  created_at: Date;
  updated_at: Date;
}

interface INTFeedback {
  _id: string;
  restaurant_id: string;
  customer_name: string;
  customer_email: string;
  rating: number;
  comment: string;
  created_at: Date;
}

interface INTMenuData {
  Restaurant: INTRestaurant;
  Menu: INTMenuItem;
  Order: INTOrder;
  Feedback: INTFeedback;
}

interface INTcategory {
  _id: string;
  name: string;
  description: string;
  image: string;
  items: {
    _id: string;
    name: string;
    description: string;
    image: string;
    base_price: number;
    type: string;
    customizable_options: {
      name: string;
      options: string[];
    }[];
    variations: {
      name: string;
      options: {
        name: string;
        price: number;
      }[];
    }[];
    category_id: string;
  }[];
}
