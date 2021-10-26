import { CarRepository } from "../repositories/CarRepository";

export class CarService {

    constructor() { }

    async createCar(car) {

        const carRepository = new CarRepository();
        return await carRepository.createCar(car);
    }

    async getAllCars(req, res){

        const carRepository = new CarRepository();
        return await carRepository.getAllCars();
    
    }

    async getCarById(id){

        const carRepository = new CarRepository();
        return await carRepository.getCarById(id);
    }

    async editCarById(car){

        const carRepository = new CarRepository();
        return await carRepository.editCarById(car);
    }
}