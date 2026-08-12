import AmericanoImg from "../assets/Coffees/Americano.jpg";
import LatteImg from "../assets/Coffees/Latte.png";
import EspressoImg from "../assets/Coffees/Espresso.png";
import NescafeImg from "../assets/Coffees/Nescafe.png";
import IcecoffeeImg from "../assets/Coffees/icecoffe.png";
import CappuccinoImg from "../assets/Coffees/Cappuccino.png";

import ChocolatecakeImg from "../assets/Cakes/Chocolate-cake.png";
import VictoriaspongeImg from "../assets/Cakes/Victoria-sponge.png";
import AngelfoodcakeImg from "../assets/Cakes/Angel-food-cake.png";
import BlackforestcakeImg from "../assets/Cakes/Black-forestcake.png";
import NewYorkcheesecakeImg from "../assets/Cakes/New-York-cheesecake.png";
import BlueberryCheesecakeImg from "../assets/Cakes/Blueberry-Cheesecake.png";

export const Products = {
  Coffee: [
    {
      id: 1,
      name: "Americano",
      desc: "Americano is made by adding hot water to a shot of espresso. It has the strength of espresso but a smoother, less intense taste because it’s diluted.",
      price: 70,
      pic: AmericanoImg,
    },
    {
      id: 2,
      name: "Latte",
      desc: "Latte is made from one shot of espresso mixed with a large amount of steamed milk and topped with a thin layer of milk foam. It tastes creamy and mild.",
      price: 90,
      pic: LatteImg,
    },
    {
      id: 3,
      name: "Espresso",
      desc: "Espresso is made by forcing hot water through finely ground coffee beans under high pressure. It is strong, rich, and served in a small cup.",
      price: 50,
      pic: EspressoImg,
    },
    {
      id: 4,
      name: "Nescafe",
      desc: "Nescafé is made from instant coffee granules that dissolve in hot water. It’s quick to prepare and lighter in texture compared to espresso-based drinks.",
      price: 70,
      pic: NescafeImg,
    },
    {
      id: 5,
      name: "Icecoffee",
      desc: "Iced coffee is made from brewed coffee that is cooled and poured over ice. Milk, sugar, or syrup can be added for extra flavor.",
      price: 70,
      pic: IcecoffeeImg,
    },
    {
      id: 6,
      name: "Cappuccino",
      desc: "Cappuccino is made from equal parts espresso, steamed milk, and thick milk foam. It has a stronger coffee taste than a latte because it contains less milk.",
      price: 70,
      pic: CappuccinoImg,
    },
  ],
  Bites: [
    {
      id: 7,
      name: "Chocolate cake",
      desc: "Chocolate cake is usually made from a simple mix of flour, cocoa powder, sugar, eggs, butter or oil, and baking powder. Milk or buttermilk is often added to make it soft and moist, while vanilla enhances the flavor. When baked, these ingredients combine to create a rich, fluffy cake with a deep chocolate taste. Many recipes also include chocolate frosting or ganache on top for extra sweetness and texture.",
      price: 70,
      pic: ChocolatecakeImg,
    },
    {
      id: 8,
      name: "Victoria sponge",
      desc: "Victoria sponge cake is made from a simple mixture of butter, sugar, eggs, and self-raising flour. The two sponge layers are baked until light and fluffy, then sandwiched together with jam and often whipped cream. A light dusting of powdered sugar is sometimes added on top. Its texture is soft and airy, and the flavor is mild and buttery, letting the jam stand out.",
      price: 90,
      pic: VictoriaspongeImg,
    },
    {
      id: 9,
      name: "Angel food cake",
      desc: "Angel food cake is made mainly from egg whites, sugar, and cake flour, with no butter or fat. The egg whites are whipped into a stiff foam to trap air, which gives the cake its very light, airy texture. Cream of tartar is often added to stabilize the foam, and vanilla is used for flavor. When baked, it becomes soft, fluffy, and slightly chewy, with a delicate sweetness.",
      price: 100,
      pic: AngelfoodcakeImg,
    },
    {
      id: 10,
      name: "Black forest cake",
      desc: "Black Forest cake is made from layers of rich chocolate sponge cake, whipped cream, and cherries. The sponge is usually moistened with cherry syrup or liqueur (traditionally kirsch), which gives it a deep, fruity flavor. It’s then stacked with whipped cream and cherries between the layers, and the outside is covered in more cream and chocolate shavings. The result is a dessert that’s creamy, slightly boozy, and balanced between sweet and tart.",
      price: 70,
      pic: BlackforestcakeImg,
    },
    {
      id: 11,
      name: "New York cheesecake",
      desc: "New York cheesecake is made from a rich mixture of cream cheese, sugar, eggs, and heavy cream or sour cream. The filling is poured over a crust usually made from crushed graham crackers mixed with butter, then baked until dense and smooth. It has a firm yet creamy texture and a slightly tangy flavor from the cream cheese. Unlike lighter cheesecakes, it is known for being thick, rich, and indulgent.",
      price: 80,
      pic: NewYorkcheesecakeImg,
    },
    {
      id: 12,
      name: "Blueberry Cheesecake",
      desc: "Blueberry cheesecake is made from a creamy filling of cream cheese, sugar, eggs, and cream or sour cream, poured over a buttery biscuit or graham cracker crust. After baking and cooling, it is topped with a layer of blueberry sauce made from fresh or frozen blueberries cooked with sugar and a little lemon juice. The result is a rich, smooth cheesecake balanced by the sweet and slightly tangy flavor of the blueberries.",
      price: 100,
      pic: BlueberryCheesecakeImg,
    },
  ],
};
