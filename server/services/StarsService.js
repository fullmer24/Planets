import { dbContext } from "../db/DbContext.js";


class StarsServices {
    async getStarsByGalaxyId(galaxyId) {
        let stars = await dbContext.Stars.find({ galaxyId })
        return stars
    }

    async createStar(starData) {
        let star = await dbContext.Stars.create(starData)
        return star
    }
}

export const starsService = new StarsServices()

