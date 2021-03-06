import { Injectable } from '@angular/core';
import { Category, Product } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<Product> = [
    {
      name: 'HOKA SPEEDGOAT 4 WOMEN\'S TRAIL RUNNING SHOES - SS20',
      description: 'Constructed using an updated mesh upper, the Hoka Speedgoat 4 wrap the foot in breathable comfort whilst providing a secure, locked-down fit. Lightweight and breathable, the mesh allows cool air to flow through the shoe removing uncomfortable heat build-up and regulating internal temperature to create a healthy environment that feet can thrive in. The fabrication hugs the foot offering lightweight support whilst strategically placed 3D printed overlays across the midfoot helps to lock the foot down in the shoe keeping you feeling secure and locked in for a stable and supportive fit. Ensuring much-needed support, the overlays also increase durability by protecting both the shoe and the foot from possible damage that the shoe may encounter along the trail. A gusseted tongue has also been added to the upper to provide next to skin comfort plus, it prevents loose debris from entering inside the shoe. The tongue also features strategic cut-outs for increased ventilation. Completing the upper is a lacing system which ensures a secure, lock-down fit to reduce in-shoe slippage so you can enjoy distraction-free strides.',
      price: 152.49,
      category: Category.Running,
      isAvailable: true,
      sizes: [38, 39, 41],
      color: 'Black',
      photo: 'assets/HOK947_1000_1.jpg'
    },
    {
      name: 'UNDER ARMOUR HOVR INFINITE WOMEN\'S RUNNING SHOES',
      description: 'The engineered mesh upper will allow you to keep going for hour after hour in maximised comfort. Air can constantly flow in and out of the mesh, which will remove all of the warm air produced from exercise, replacing it with cooler air from outside, providing a cycle of ventilation. Once your foot begins to sweat, the mesh will allow the moisture to escape out of the shoe. Once wicked away, the material will dry off quickly, returning the shoe to its original weight and feel. Thicker material covers the forefoot, which will absorb shocks instantly, preventing them from reaching and damaging the toes. For rearfoot protection and durability, there is an internal heel counter. This will provide additional support, keeping your foot in a firm and upright position, and it will keep the rearfoot locked in place. To improve your visibility during night time running, the shoe has 360-degree reflectivity, making you easy to spot. The laces are elasticated and are easy to tighten and loosen all the way up the foot for a secure fit. A soft padded tongue will make the fitting feel extremely comfortable.',
      price: 79.29,
      category: Category.Running,
      isAvailable: true,
      color: 'Grey',
      sizes: [35, 38, 41],
      photo: 'assets/UND5180_1000_4.jpg'
    },
    {
      name: 'ADIDAS TERREX FOLGIAN HIKER GORE-TEX WOMEN\'S WALKING SHOES - AW20',
      description: 'Offering you full waterproof protection all the way around the upper, the boot boasts using a GORE-TEX membrane to provide you with durable waterproofing. This will mean that no moisture is able to penetrate through the upper, which will keep your feet completely dry in any conditions. Despite sealing all moisture out, the air is still able to travel in and out of the upper. This will mean that the warm air that builds up within each boot can escape out freely, ensuring that the temperature within the shoes is maintained. Designed to stand up against abuse, the upper is extremely durable, protecting both itself and the feet from any heavy contacts or forces. Firm and thick protection also surround vulnerable areas like the toes and ankles, providing further protection. The material on the upper is able to stretch, making it ideal for a variety of different activities and intensities. To add security and stability, an EVA stabilisation frame will keep your feet in a strong and healthy position. A lace closure system will allow you to secure the fit all the way up the feet, providing a snug and comfortable fit no matter what. A soft and padded tongue paired with an ankle collar will reduce the risk of irritation caused by rubbing and chafing.',
      price: 117.06,
      category: Category.Outdor,
      isAvailable: true,
      sizes: [37, 38, 41],
      color: 'Grey',
      photo: 'assets/ADI13299_1000_1.jpg'
    },
    {
      name: 'UNDER ARMOUR TRIBASE REIGN 2 WOMEN\'S TRAINING SHOES - SS20',
      description: 'When you hit the gym, you need to feel as connected with the floor as possible. Every lift, rep and WOD starts from the ground up. Under Armour\'s TriBase technology maximises ground control with three points of contact for a low, stable base that allows natural foot flexibility.    The TriBase Reign are another in a long-line of well constructed shoes from Under Armour, built using tough ripstop materials and a durable mesh for lightweight support these are the perfect gym shoe. An external heel counter has also been added for increased stability and heel lock-in helping keep your feet in place. This helps reduces the risk of injury in the gym and gives you a more comfortable and tailored fit for your feet.',
      price: 102.47,
      category: Category.Gym,
      isAvailable: true,
      sizes: [40],
      color: 'Black',
      photo: 'assets/UND5940_1000_1.jpg'
    },
    {
      name: 'ADIDAS SOLECOURT WOMEN\'S TENNIS SHOES - AW19',
      description: 'The extremely lightweight construction of the upper will ensure that you are able to glide across the court quickly. This will mean that you won\'t feel any excessive weight from below, freeing you up to make sharp movements from sudden bursts of pace. In addition to this, air is able to transfer from inside the shoe to the outside. This will mean that as you begin to exercise, the build-up of hot air and sweat within the shoe is able to escape, being transferred out of it. This will mean that your feet will feel fresh in a controlled climate. The upper is designed to fit around the foot to lock it into place. This will mean that your feet will always be in a strong and stable position as you make shot, which will improve your confidence to make shots as you won\'t be let down by your shoes. Abrasion-resistant Adituff wraps around the toe and medial forefoot to help protect against foot drag that occurs during serves, volleys and extreme lateral movements. The heel is also held in a secure and stabilised position, which will prevent injuries from occurring as well as holding you in a firm position. Up the foot laces and a flat-lying tongue will ensure that you will always be able to find a comfortable, non-restrictive and secure fit.',
      price: 85.34,
      category: Category.Tennis,
      isAvailable: true,
      sizes: [35],
      color: 'Grey',
      photo: 'assets/ADI12222_1000_1.jpg'
    },
    {
      name: 'ADIDAS ADIZERO CLUB COURT SHOE - SS20',
      description: 'The adidas Adizero Court Tennis shoes are an extremely durable outsole rubber assisted by ADIWEAR to secure grip in all directions. An ADITUFF feature has been introduced for better abrasion and resistance. A lightweight design is imperative for and tennis player and this shoe provides this and extra with the mesh upper.',
      price: 51.20,
      category: Category.Tennis,
      isAvailable: false,
      color: 'Black',
      photo: 'assets/ADI12827_1000_6.jpg'
    }
  ]

  constructor() { }

  getProducts(): Array<Product> {
    return this.products;
  }
}
