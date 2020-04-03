import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  dataArray = [
    {
      "name" : "Retox Dance Academy",
      "subTitle" : "Dance",
      "location" : "Mumbai, 120km"
    },
    {
      "name" : "Retox Dance Academy",
      "subTitle" : "Dance",
      "location" : "Mumbai, 120km"
    },
    {
      "name" : "Retox Dance Academy",
      "subTitle" : "Dance",
      "location" : "Mumbai, 120km"
    }
  ];

  tabsArray = [
    {
      "img" : "../../assets/funnelimg.png",
      "title" : ""
    },
    {
      "img" : "http://fish.socialflix.in/wp-content/uploads/elementor/thumbs/Dance-olz4x8qtziw6zu189ngvnqhzg8dh3ua0u9mjw3usqo.png",
      "title" : "Dance"
    },
    {
      "img" : "http://fish.socialflix.in/wp-content/uploads/elementor/thumbs/Yoga-olz3topcdiqselhq91x387unhhce6e8oeh9xtwi8lc.png",
      "title" : "Yoga"
    },
    {
      "img" : "http://fish.socialflix.in/wp-content/uploads/elementor/thumbs/Meditation-olz55q8dooidt3phptimo3esigjrlgysc9ncv19ukg.png",
      "title" : "Meditationter"
    },
    {
      "img" : "http://fish.socialflix.in/wp-content/uploads/elementor/thumbs/Massage-olz55lj6qiby71wbh9hhtmlhjj6xizg4nmdxgngtfk.png",
      "title" : "Massage"
    },
    {
      "img" : "http://fish.socialflix.in/wp-content/uploads/elementor/thumbs/Music-olz55tzqg0nj3jk13v54y2gmw018g9dpos9as549vk.png",
      "title" : "Music"
    }
  ];
  

  imageArray = [
    {
      "image" : "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
    },
    {
      "image" : "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
    },
    {
      "image" : "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
    },
    {
      "image" : "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
    },
    {
      "image" : "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
    }
  ];
  constructor() {}


  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
