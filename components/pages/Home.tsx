import React, { Suspense } from "react";
import CategoriesList from "../templates/categoriesList/CategoriesList";
import MenuList from "../templates/menulist/MenuList";

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

type PageProps = {
  restaurantId: string;
  categoryname: string;
};

export default function Home(props: PageProps) {
  return <div></div>;
}
