import Item from '../../Interfaces/ItemInterface'

export const HandsList: Array<Item>  = [
    {
        id: 0,
        name: "MacBook Pro",
        description: "Le meilleur ami du latté bio à 16 euros.",
        imageName: "HandsComputer",
        stats: {
            devSkill: 3,
            professionalLook: 2,
            fun: 0.5,
            catchSkill: 0,
        }
    },
    {   
        id: 1,
        name: "Tequila Sunrise bien chargé",
        description: "La potion magique des adultes.",
        imageName: "HandsCocktail",
        stats: {
            devSkill: 0,
            professionalLook: 0,
            fun: 2,
            catchSkill: 0,
        }
    },
    {   
        id: 2,
        name: "Filet à papillon",
        description: "Super pour attraper les papillons et les bugs critiques.",
        imageName: "HandsButterflyNet",
        stats: {
            devSkill: 1,
            professionalLook: 0,
            fun: 2,
            catchSkill: 0,
        }
    },
];