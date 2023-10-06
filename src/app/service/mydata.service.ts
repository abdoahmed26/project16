import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  productData:any[] = [
    {
      id: 1,
      title: "Blue Beetle",
      price: 9.95,
      description:
      "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
      category: "men's clothing",
      image: "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Retribution",
      price: 12.3,
      description:
        "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.",
      category: "men's clothing",
      image: "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Gran Turismo",
      price: 15.99,
      description:
        "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
      category: "men's clothing",
      image: "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Meg 2: The Trench",
      price: 15.99,
      description:
        "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
      category: "men's clothing",
      image: "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:"Talk to Me",
      price: 6.95,
      description:
        "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
      category: "jewelery",
      image: "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Fast X",
      price: 16.8,
      description:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      category: "jewelery",
      image: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "The Nun II",
      price: 9.99,
      description:
        "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
      category: "jewelery",
      image: "/c9kVD7W8CT5xe4O3hQ7bFWwk68U.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "Barbie",
      price: 10.99,
      description:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      category: "jewelery",
      image: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "No One Will Save You",
      price: 6.4,
      description:
        "An exiled anxiety-ridden homebody must battle an alien who's found its way into her home.",
      category: "electronics",
      image: "/ehGIDAMaYy6Eg0o8ga0oqflDjqW.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "Operation Napoleon",
      price: 10.9,
      description:
        "A modern-day lawyer is sucked into an international conspiracy after being accused of a murder she didn't commit. Her only chance of freedom lies in uncovering the secret of an old German WWII aeroplane, long buried deep beneath the ice, before the CIA.",
      category: "electronics",
      image: "/j2Or0w69bpPXrmkE0hpTzw6hzsr.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 11,
      title: "Sound of Freedom",
      price: 9.1,
      description:
        "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
      category: "electronics",
      image: "/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title: "Elemental",
      price: 11.4,
      description:
        "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
      category: "electronics",
      image: "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 13,
      title: "Mondocane",
      price: 5.99,
      description:
        "In the near future, the southern Italian city of Taranto is surrounded by barbed wire that no one, not even the police, dares to cross. The poorest are left fighting for survival, while gangs compete for the territory. Two thirteen-year-old orphans who grew up together, dream of joining one of the gangs.",
      category: "electronics",
      image: "/gOuJBz9u1YVWwvx12lJX56yUT6I.jpg",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 14,
      title: "Kandahar",
      price: 9.99,
      description:
        "After his mission is exposed, an undercover CIA operative stuck deep in hostile territory in Afghanistan must fight his way out, alongside his Afghan translator, to an extraction point in Kandahar, all whilst avoiding elite enemy forces and foreign spies tasked with hunting them down.",
      category: "electronics",
      image: "/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 15,
      title: "Saw X",
      price: 6.99,
      description:
        "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
      category: "women's clothing",
      image: "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 16,
      title:"Let Her Kill You",
      price: 9.95,
      description:
        "Alone in the mountains of Switzerland, Anne discovers that her isolated chalet is on surveillance and has been bugged. Caught up by her former life as an intelligence secret agent and an affair with her handler, Anne can only count on herself to get out alive.",
      category: "women's clothing",
      image: "/qx81rP4b4UFcxjabCqfe79F24Z0.jpg",
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 17,
      title: "Carl's Date",
      price: 13.99,
      description:
        "Carl Fredricksen reluctantly agrees to go on a date with a lady friend—but admittedly has no idea how dating works these days. Ever the helpful friend, Dug steps in to calm Carl's pre-date jitters and offer some tried-and-true tips for making friends—if you're a dog.",
      category: "women's clothing",
      image: "/y8NtM6q3PzntqyNRNw6wgicwRYl.jpg",
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      id: 18,
      title: "Indiana Jones",
      price: 9.85,
      description:
        "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
      category: "women's clothing",
      image: "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
    {
      id: 19,
      title: "Spy Kids: Armageddon",
      price: 7.95,
      description:
        "When the children of the world’s greatest secret agents unwittingly help a powerful game developer unleash a computer virus that gives him control of all technology, they must become spies themselves to save their parents and the world.",
      category: "women's clothing",
      image: "/vd8YdaH7dzeIMGTNwQinlSiA1gV.jpg",
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 20,
      title: "Transformers: Rise of the Beasts",
      price: 12.99,
      description:
        "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      category: "women's clothing",
      image: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
  ];
  getAllPro(){
    return this.productData;
  }
  constructor(){
  }
  allFood:any[] = [
    {
      id:1,
      image:"assets/imgs/download.jpg",
      title:"Popcorn",
      description: "",
      price:1.5,
    },
    {
      id:2,
      image:"assets/imgs/images2.jpg",
      title:"Cola",
      description: "",
      price:2,
    },
    {
      id:3,
      image:"assets/imgs/images3.jpg",
      title:"Tea",
      description: "",
      price:1,
    },
    {
      id:4,
      image:"assets/imgs/images4.jpg",
      title:"Coffee",
      description: "",
      price:2.5,
    },
  ]
  getAllFood(){
    return this.allFood;
  }
  //`https://image.tmdb.org/t/p/original${mov.poster_path}`
  //`https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg`
}
