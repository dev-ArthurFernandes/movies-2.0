import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')
class Movie {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 50})
    name: string

    @Column({ type:"text", nullable: true})
    description: string | null | undefined

    @Column({ type: "integer"})
    duration: number

    @Column({ type: "integer"})
    price: number

}

export default Movie;
