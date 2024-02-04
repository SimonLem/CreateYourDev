import Item from '../../Interfaces/ItemInterface'

export const AccessoriesList: Array<Item>  = [
    {
        id: 0,
        name: "Lunettes de geek",
        description: "Améliore la détection des bugs, des typos et des horcruxes.",
        imageName: "AccessoriesGlasses",
        stats: {
            devSkill: 2,
            professionalLook: 2,
            fun: 1,
            catchSkill: 0,
        }
    },
    {
        id: 1,
        name: "Collier de fleur",
        description: "C",
        imageName: "AccessoriesNeckless",
        stats: {
            devSkill: 0,
            professionalLook: 0,
            fun: 2,
            catchSkill: 0,
        }
    },
    {
        id: 2,
        name: "Moustaches de chat",
        description: "Rend mignon et facilite le camouflage en territoire félin. Risque de sieste chronique.",
        imageName: "AccessoriesWhiskers",
        stats: {
            devSkill: 0,
            professionalLook: 1,
            fun: 1,
            catchSkill: 0,
        }
    },
];