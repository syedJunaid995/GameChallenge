import { Skills } from './skills';

export class User {
    user_name : string
    id : number
    character_name : string
    damage : number
    base_attributes : BaseAttributes = new BaseAttributes()
    combat_attributes : CombatAttributes = new CombatAttributes()
    // base_attributes : {
    //     strength: number
    //     dexterity: number
    //     mind : number
    //     presence : number
    // }
    // combat_attributes : {
    //     vitality: number
    //     evasion : number
    //     armor : number
    //     alacrity : number
    //     tenacity : number
    //     power : number
    // }
    skills : Skills = new Skills()
}

export class BaseAttributes {
    strength: number
    dexterity: number
    mind : number
    presence : number
}

export class CombatAttributes {
    vitality: number
    evasion : number
    armor : number
    alacrity : number
    tenacity : number
    power : number
}