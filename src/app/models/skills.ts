import { Ranks } from './ranks';

export class Skills {
    strength : Strength = new Strength()
    dexterity : Dexterity = new Dexterity()
    mind : Mind = new Mind()
    presence : Presence = new Presence()
}

export class Strength {
    fighting: Ranks = new Ranks();
}

export class Dexterity {
    fighting: Ranks = new Ranks();
    thievery : Ranks = new Ranks();
    stealth : Ranks = new Ranks();
    archery : Ranks = new Ranks();
}

export class Mind {
    learned: Ranks = new Ranks();
    survival : Ranks = new Ranks();
    perception : Ranks = new Ranks();
    apothecary : Ranks = new Ranks();
    power : Ranks = new Ranks();
}

export class Presence {
    intimidation : Ranks = new Ranks();
    performance : Ranks = new Ranks();
    manipulation : Ranks = new Ranks();
    insight : Ranks = new Ranks();
    power : Ranks = new Ranks();
}