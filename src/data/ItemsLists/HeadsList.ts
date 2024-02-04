import Item from '../../Interfaces/ItemInterface'

export const HeadsList: Array<Item>  = [
    {   
        id: 0,
        name: "Casquette classique",
        description: "Cache le soleil et les cheveux sales après une session de jeux vidéos nocturne prolongée.",
        imageName: "HeadCap",
        stats: {
            devSkill: 1,
            professionalLook: 1,
            fun: 0.5,
            catchSkill: 0,
        }
    },
    {   
        id: 1,
        name: "Chapeau de vacancier",
        description: "Pour faire tourner toutes les têtes sur la croisette.",
        imageName: "HeadHat",
        stats: {
            devSkill: 0,
            professionalLook: 1,
            fun: 2,
            catchSkill: 0,
        }
    },
    {
        id: 2,
        name: "Oreiles de chat",
        description: "Rend mignon et facilite le camouflage dans les concerts de K-Pop.",
        imageName: "HeadCatEars",
        stats: {
            devSkill: 0,
            professionalLook: 0,
            fun: 2,
            catchSkill: 0,
        }
    },
];