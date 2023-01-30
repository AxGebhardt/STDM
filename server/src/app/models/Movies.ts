import { release } from "os";
import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "./config";

interface MovieAttributes {
    id: number;
    name: string;
    description: string;
    rating?: number;
    released: boolean;
    createdAt?: Date;
    updatesAt?: Date;
    deletedAt?: Date;
}

export interface MovieInput extends Optional<MovieAttributes, 'id'> {}
export interface MovieOutput extends Required<MovieAttributes> {}

class Movie extends Model<MovieAttributes, MovieInput> implements MovieAttributes {
    public id!: number
    public name!: string
    public description!: string;
    public rating!: number;
    public released!: boolean;

    //timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Movie.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    },
    rating: {
        type: DataTypes.DECIMAL
    },
    released: {
        type: DataTypes.BOOLEAN
    }
}, 
{
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Movie