import Car from '../entities/Car';
import mongoose from "../database/index";

export class CarRepository{
    constructor(){}

    async createCar(car){
       return await Car.create(car);
    }

    async getAllCars(){
      return await Car.find();
    }

    async getCarById(id){

        /**Verify carId Exists */
        if(!mongoose.Types.ObjectId.isValid(id)) return false;

        return await Car.findById(id);
    }

    async editCarById(car){
        return await Car.findByIdAndUpdate(car.id, car);
    }
}