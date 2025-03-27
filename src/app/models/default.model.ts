import { Attribute } from "@angular/core"

export interface Ability {
    id: number,
    name: string,
    description: string,
    type: string
}

export interface attibutes {
    atributo: string,
    valor: number
}

export interface Armor {
    id: number,
    name: string,
    description: string,
    defence: number,
    price: number,
    slots: number,
    type: {
        tipo: string,
        material: string
    },
    ability: {
        penalidade: number,
        resistenciaFogo: boolean
    }
}

export interface ChClass {
    id: number,
    name: string,
    description: string,
    traits: {
        dadosDeVida: number,
        atributoChave: string
    },
    abilities: Ability[]
}

export interface God {
    id: number,
    name: string,
    description: string,
    beliefsGoals: string,
    holySymbol: string,
    channelEnergy: string,
    favoredWeapon: string,
    devotees: string,
    dutiesRestrictions: string
}

export interface Magic {
    id: number,
    name: string,
    description: string,
    levelCircle: number,
    range: string,
    duration: string,
    target: string,
    classification: string,
    school: string
}

export interface Origin {
    id: number,
    name: string,
    description: string,
    traits: {
        tamanho: string,
        atributoChave: string
    },
    abilities: Ability[]
}

export interface Power {
    id: number,
    name: string,
    description: string,
    prerequisite: string,
    type: string
}

export interface Proficiency {
    id: number,
    name: string,
    description: string
}

export interface Race {
    id: number,
    name: string,
    description: string,
    attributes: Attribute,
    abilities: Ability[]
}

export interface Shild {
    id: number,
    name: string,
    description: string,
    defence: number,
    price: number,
    slots: number,
    type: {
        tamanho: string,
        material: string
    },
    ability: {
        resistencia: string
    }
}

export interface Skill {
    id: number,
    name: string,
    description: string,
    actions: {
        ação: string,
        descrição: string
    },
    attributeKey: string,
    isProfession: boolean,
    isTraining: boolean,
    isArmorPenalty: boolean
}

export interface Weapon {
    id: number,
    name: string,
    description: string,
    price: number,
    damage: string,
    critical: string,
    range: string,
    slots: number,
    type: {
        tipo: string,
        material: string
    },
    ability: Ability,
    ammo: string
}
