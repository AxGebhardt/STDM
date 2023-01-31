
import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import sequelizeConnection from "./config";

@Table
export class Movie extends Model {
    
    @Column
    id: number

    @Column
    name: string
    
    @Column
    description: string;
    
    @Column
    rating: number;
    
    @Column
    releaseYear: Date;

    @Column
    createdAt: Date;
    
    @Column
    updatedAt: Date;

    @Column
    deletedAt: Date;
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