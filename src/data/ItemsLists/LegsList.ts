import Item from '../../Interfaces/ItemInterface'

export const LegsList: Array<Item>  = [
    {   
        id: 0,
        name: "Jean confortable",
        description: "Intemporel, indestructible, indétrônable.",
        imageName: "LegsJean",
        stats: {
            devSkill: 1,
            professionalLook: 2,
            fun: 1,
            catchSkill: 0,
        }
    },
    {
        id: 1,
        name: "Short de plage",
        description: "Transforme chaque mollet en toile blanche pour le Soleil et ses nuances de rouge.",
        imageName: "LegsShort",
        stats: {
            devSkill: 1,
            professionalLook: 1,
            fun: 1,
            catchSkill: 0,
        }
    },
    {
        id: 2,
        name: "Jupe de soirée",
        description: "Tissé de rires et de paillettes",
        imageName: "LegsSkirt",
        stats: {
            devSkill: 0,
            professionalLook: 0,
            fun: 2,
            catchSkill: 0,
        }
    },
];