import { CarService } from "../services/CarService";

export class CarController {

    carService = new CarService();

    constructor() { }

    async createCar(req, res) {

        const carService = new CarService();

        const { brand, model, version, age, mileage, type_of_exchange, price } = req.body;

        const car = {
            brand,
            model,
            version,
            age,
            mileage,
            type_of_exchange,
            price
        };

        const createdCar = await carService.createCar(car);

        return res.json(createdCar);
    }

    async getAllCars(req, res) {

        const carService = new CarService();

        const cars = await carService.getAllCars();

        if (!cars) {
            return res.status(400).json({
                error: 'Nobody cars cadastred!'
            });
        }

        return res.json(cars);
    }

    async getCarById(req, res) {


        const { id } = req.params;

        const carService = new CarService();

        const car = await carService.getCarById(id);

        if (!car) {
            return res.status(400).json({
                error: 'Car not found!'
            })
        }

        return res.json(car);

    }

    async editCarById(req, res) {
        const { id } = req.params;

        const carService = new CarService();

        const verifyCarExists = await carService.getCarById(id);

        if (!verifyCarExists) {
            return res.status(400).json({
                error: 'Car not found!'
            })
        }

        const { brand, model, version, age, mileage, type_of_exchange, price } = req.body;

        const car = {
            id,
            brand,
            model,
            version,
            age,
            mileage,
            type_of_exchange,
            price
        };

        const editedCar = await carService.editCarById(car);

        return res.json(editedCar);
    }
}
