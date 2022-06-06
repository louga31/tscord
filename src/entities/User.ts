import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { CustomBaseEntity } from './BaseEntity'

@Entity()
export class User extends CustomBaseEntity {

    @PrimaryKey()
    id: number

    @Property()
    discordId: number
}