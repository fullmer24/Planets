import { galaxysService } from "../services/GalaxysService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxysController extends BaseController {
    constructor() {
        super('api/galaxys')
        this.router
            .get('', this.getGalaxys)
            .post('', this.createGalaxy)
            .get('/:galaxyId', this.getGalaxyById)
            .delete('/:galaxyId', this.deleteGalaxy)
    }

    async getGalaxys(req, res, next) {
        try {
            let galaxy = await galaxysService.getGalaxy()
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next) {
        try {
            let galaxyData = req.body
            let galaxy = await galaxysService.createGalaxy(galaxyData)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxyById(req, res, next) {
        try {
            let galaxy = await galaxysService.getGalaxyById(req.params.galaxyId)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async deleteGalaxy(req, res, next) {
        try {
            let galaxy = await galaxysService.deleteGalaxy(req.params.galaxyId)
        } catch (error) {
            next(error)
        }
    }




}