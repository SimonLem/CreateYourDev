import Item from '../../Interfaces/ItemInterface'

export const FeetList: Array<Item>  = [
    {
        id: 0,
        name: "Baskets Kalenji",
        description: "La légende raconte que la chaussure qui va vite augmente aussi la vitesse d'écriture au clavier.",
        imageName: "FeetBaskets",
        stats: {
            devSkill: 1.5,
            professionalLook: 1,
            fun: 1,
            catchSkill: 0,
        }
    },
    {
        id: 1,
        name: "Tongs de vacancier",
        description: "Véritables bijoux de la garde-robe estivale destinés aux pieds rebelles qui refusent d'être enfermés.",
        imageName: "FeetTongs",
        stats: {
            devSkill: 0,
            professionalLook: 0,
            fun: 2,
            catchSkill: 0,
        }
    },
    {
        id: 2,
        name: "Santiags Texanes",
        description: "Pour faire régner la loi dans l'open space.",
        imageName: "FeetSantiags",
        stats: {
            devSkill: 1,
            professionalLook: 1,
            fun: 1,
            catchSkill: 0,
        }
    }
];