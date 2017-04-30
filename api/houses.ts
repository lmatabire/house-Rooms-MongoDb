import * as express from 'express';
import IHouse from '../models/house';

let router = express.Router();

//get all houses and rooms
router.get('/', (req, res)=>{
  IHouse.find()
    .then((houses)=>{
      console.log('houses get successful .....')
      res.json(houses);
    })
      .catch((err)=>{
        console.log('houses get successful .....')
        res.json(err)
      });
});
//get a single house and its corresponding rooms
router.get('/:id', (req, res)=>{
  IHouse.findOne({_id: req.params.id})
    .then((house)=>{
      console.log('server responded accordingly...');
      res.json(house);
    })
    .catch((err)=>{
      console.log('server failed...')
      res.json(err.message);
    });
});
//add a house and rooms
router.post('/', (req, res)=>{
  let house = new IHouse();
  house.name = req.body.name;
  house.rooms = req.body.rooms;
    house.save()
      .then((savedHouse)=>{
        console.log('successful ...')
        res.json(savedHouse);
      })
      .catch((err)=>{
        console.log('failure ...')
        res.json(err.message);
      });
});
export default router;
