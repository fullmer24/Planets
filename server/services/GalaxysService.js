import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class GalaxysService {
    async getGalaxy() {
        let galaxy = await dbContext.Galaxy.find()
        return galaxy
    }

    async getGalaxyById(galaxyId) {
        let galaxy = await dbContext.Galaxy.findById(galaxyId)
        if (!galaxy) {
            throw new BadRequest('invalid galaxy Id')
        }
        return galaxy
    }

    async createGalaxy(galaxyData) {
        let galaxy = await dbContext.Galaxy.create(galaxyData)
    }

    async deleteGalaxy(galaxyId) {
        let galaxy = await this.getGalaxyById(galaxyId)
        await galaxy.remove()
        return galaxy
    }
}

export const galaxysService = new GalaxysService()