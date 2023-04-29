import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("cliente")
class Cliente{
    @PrimaryColumn({generated: "uuid"})
    id: string;

    @Column()
    nome: string;

    @Column()
	documento: string;

    @Column()
	telefone: string;

    @Column()
	email: string;

    @CreateDateColumn()
	created_at: Date;

    @UpdateDateColumn()
	updated_at: Date;
}

export { Cliente }