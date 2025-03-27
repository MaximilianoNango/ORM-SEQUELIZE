import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("Cafe", "root", "wonderland", {
    dialect: "mysql",
    port: 3308,
})