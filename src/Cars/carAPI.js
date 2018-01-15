const cars = [
  { id: 'a864', name: 'Tesla Roadster', img: 'https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg' },
  { id: 'w840', name: 'Bugatti Chiron', img: 'http://static3.businessinsider.com/image/59b7f90e9803c51e008b4be0-1200/bugatti-chiron.jpg' },
  { id: 'r643', name: 'Nissan Skyline', img: 'https://www.supercars.net/blog/wp-content/uploads/2016/02/V2Z7Bes.jpg' },
  { id: 't372', name: 'Audi R8', img: 'https://buyersguide.caranddriver.com/media/assets/submodel/8238.jpg' },
  { id: 'w639', name: 'Mitsubishi Evo', img: 'https://i.pinimg.com/736x/99/ae/99/99ae998ca3bcdc2f315086d6d179bb9c--evo-x-mitsubishi-lancer-evolution.jpg' },
  { id: 'j726', name: 'Koenigsegg One', img: 'http://i.dailymail.co.uk/i/pix/2014/03/06/article-2574459-1C0DF26200000578-725_634x410.jpg' }
]

const getAll = () => cars
const getOne = id => cars.find(car => car.id === id)
const getName = name => cars.find(car=> car.name === name)
const getImg = img => cars.find(car => car.img === img)

export default{
  getAll,
  getOne,
  getName,
  getImg
}
