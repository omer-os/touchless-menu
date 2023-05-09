import React from "react";
import CategoriesList from "../templates/categoriesList/CategoriesList";
import MenuList from "../templates/menulist/MenuList";

const categories = [
  {
    name: "Burgers",
    img: "https://img.freepik.com/free-icon/burger_318-937720.jpg?size=626&ext=jpg&ga=GA1.2.183644258.1674764907&semt=sph",
    itemsAmount: 10,
    link: "/",
  },

  {
    name: "soups",
    img: "https://img.freepik.com/free-icon/casserole_318-894273.jpg?size=626&ext=jpg&ga=GA1.1.183644258.1674764907&semt=sph",
    itemsAmount: 10,
    link: "/",
  },
  {
    name: "sandwiches",
    img: "https://img.freepik.com/free-icon/sandwich_318-619606.jpg?size=626&ext=jpg&ga=GA1.1.183644258.1674764907&semt=sph",
    itemsAmount: 10,
    link: "/",
  },
  {
    name: "cold drinks",
    img: "https://img.freepik.com/free-icon/soft-drink_318-689186.jpg?size=626&ext=jpg&ga=GA1.1.183644258.1674764907&semt=ais",
    itemsAmount: 10,
    link: "/",
  },
  {
    name: "hot drinks",
    img: "https://img.freepik.com/free-icon/coffee-cup_318-750684.jpg?size=626&ext=jpg&ga=GA1.1.183644258.1674764907&semt=ais",
    itemsAmount: 10,
    link: "/",
  },
];

const menus = [
  {
    title: "Fried Chicken (With Bones)",
    img: "https://images.unsplash.com/photo-1683482027825-01e87aa0e435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "12.000 IQD",
    link: "/",
  },
  {
    title: "Fried Chicken (With Bones)",
    img: "https://images.unsplash.com/photo-1683482027825-01e87aa0e435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "12.000 IQD",
    link: "/",
  },
  {
    title: "Fried Chicken (With Bones)",
    img: "https://images.unsplash.com/photo-1683482027825-01e87aa0e435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "12.000 IQD",
    link: "/",
  },
  {
    title: "Fried Chicken (With Bones)",
    img: "https://images.unsplash.com/photo-1683482027825-01e87aa0e435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "12.000 IQD",
    link: "/",
  },
  {
    title: "Fried Chicken (With Bones)",
    img: "https://images.unsplash.com/photo-1683482027825-01e87aa0e435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "12.000 IQD",
    link: "/",
  },
  {
    title: "Fried Chicken (With Bones)",
    img: "https://images.unsplash.com/photo-1683482027825-01e87aa0e435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "12.000 IQD",
    link: "/",
  },
  {
    title: "Fried Chicken (With Bones)",
    img: "https://images.unsplash.com/photo-1683482027825-01e87aa0e435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "12.000 IQD",
    link: "/",
  },
];

export default function Home() {
  return (
    <div>
      <CategoriesList categories={categories} />
      <MenuList menus={menus} />
    </div>
  );
}
