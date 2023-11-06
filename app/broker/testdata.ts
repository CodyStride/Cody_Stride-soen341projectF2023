import { IPropertyData } from "./PropertyTable";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomType() {
  const types = ["House", "Apartment", "Condo", "Villa"];
  const randomIndex = getRandomInt(0, types.length - 1);
  return types[randomIndex];
}

function getRandomDescription() {
  const descriptions = [
    "Spacious and modern",
    "Cozy and comfortable",
    "Luxurious living",
    "Affordable and convenient",
  ];
  const randomIndex = getRandomInt(0, descriptions.length - 1);
  return descriptions[randomIndex];
}

function getRandomLocation() {
  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Miami",
    "San Francisco",
  ];
  const randomIndex = getRandomInt(0, locations.length - 1);
  return locations[randomIndex];
}

function getRandomImage() {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  const randomIndex = getRandomInt(0, images.length - 1);
  return images[randomIndex];
}

export function generateRandomPropertyData(count: number) {
  const searchCards: IPropertyData[] = [];
  for (let i = 1; i <= count; i++) {
    const searchCard = {
      id: i,
      type: getRandomType(),
      price: getRandomInt(100000, 1000000),
      description: getRandomDescription(),
      location: getRandomLocation(),
      bedrooms: getRandomInt(1, 5),
      bathrooms: getRandomInt(1, 3),
      image: getRandomImage(),
    };
    searchCards.push(searchCard);
  }
  return searchCards;
}
