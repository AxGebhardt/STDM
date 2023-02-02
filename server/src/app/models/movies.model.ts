
import { Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, DataType, AutoIncrement } from 'sequelize-typescript'
import sequelizeConnection from "./config";

@Table({
    timestamps: true,
})
export class Movie extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column(DataType.STRING)
    name!: string
    
    @Column(DataType.TEXT)
    description!: string;
    
    @Column(DataType.DECIMAL)
    rating!: number;
    
    @Column
    releaseDate!: Date;

    @CreatedAt
    createdAt!: Date;
    
    @UpdatedAt
    updatedAt!: Date;

    @DeletedAt
    deletedAt!: Date;
}

/* Nicht benötigt?
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
*/
export default Movie