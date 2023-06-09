// apiClient.ts
import { data } from "./data";

export function getAllRestaurants() {
  return data.map((restaurantData) => restaurantData.Restaurant);
}

export function getRestaurantBySubdomain(subdomain: string) {
  const restaurant = data.find(
    (restaurantData) => restaurantData.Restaurant.subdomain === subdomain
  );
  return restaurant?.Restaurant;
}

export function getMenuBySubdomain(subdomain: string) {
  const restaurant = data.find(
    (restaurantData) => restaurantData.Restaurant.subdomain === subdomain
  );
  return restaurant?.Menu;
}

export function getMenuItemBySubdomain(subdomain: string, menuItemId: string) {
  const restaurant = data.find(
    (restaurantData) => restaurantData.Restaurant.subdomain === subdomain
  );

  if (!restaurant) {
    return null;
  }

  const menuItem = restaurant.Menu.flatMap((menu) => menu.categories)
    .flatMap((category) => category.items)
    .find((item) => item.name === menuItemId);

  return menuItem;
}

export function getCategoriesBySubdomain(subdomain: string) {
  const restaurant = data.find(
    (restaurantData) => restaurantData.Restaurant.subdomain === subdomain
  );

  if (!restaurant) {
    return null;
  }

  const categories = restaurant.Menu?.flatMap((menu) => menu.categories);
  return categories;
}

export function getCategoryBySubdomain(subdomain: string, categoryId: string) {
  const restaurant = data.find(
    (restaurantData) => restaurantData.Restaurant.subdomain === subdomain
  );

  if (!restaurant) {
    return null;
  }

  const category = restaurant.Menu.flatMap((menu) => menu.categories).find(
    (cat) =>
      cat._id === categoryId ||
      cat.name?.toLocaleLowerCase().replace(" ", "-") ===
        categoryId?.toLocaleLowerCase().replace(" ", "-")
  );

  return category;
}

export function getCategoryItemsCountBySubdomain(
  subdomain: string,
  categoryId: string
) {
  const restaurant = data.find(
    (restaurantData) => restaurantData.Restaurant.subdomain === subdomain
  );

  if (!restaurant) {
    return null;
  }

  const category = restaurant.Menu.flatMap((menu) => menu.categories).find(
    (cat) => cat.name === categoryId
  );

  return category?.items.length;
}

export function getMenuItem(subdomain: string, itemId: string) {
  const cleanedSubdomain = subdomain.replace(/-/g, " ").toLowerCase();
  const cleanedItemId = itemId.replace(/-/g, " ").toLowerCase();

  const restaurant = data.find(
    (restaurantData) =>
      restaurantData.Restaurant.subdomain.replace(/-/g, " ").toLowerCase() ===
      cleanedSubdomain
  );

  if (!restaurant) {
    return null;
  }

  const menuItem = restaurant.Menu.flatMap((menu) => menu.categories)
    .flatMap((category) => category.items)
    .find(
      (item) =>
        item._id.replace(/-/g, " ").toLowerCase() === cleanedItemId ||
        item.name.replace(/-/g, " ").toLowerCase() === cleanedItemId
    );

  return menuItem;
}
