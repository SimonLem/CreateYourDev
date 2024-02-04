import Item from '../../Interfaces/ItemInterface'

export const ChestsList: Array<Item>  = [
    {
        id: 0,
        name: "Tee-Shirt uniforme",
        description: "L'armure légère du quotidien.",
        imageName: "ChestTeeShirt",
        stats: {
            devSkill: 1,
            professionalLook: 1,
            fun: 1,
            catchSkill: 0,
        }
    },
    {
        id: 1,
        name: "Chemise Hawaienne",
        description: "Une chemise qui crie l'été, le soleil, et une certaine insouciance vestimentaire discutable.",
        imageName: "ChestShirt",
        stats: {
            devSkill: 0,
            professionalLook: 0,
            fun: 2,
            catchSkill: 0,
        }
    },
    {
        id: 2,
        name: "Crop top de soirée",
        description: "Pour les nombrils qui veulent dire 'coucou' au reste du monde.",
        imageName: "ChestTop",
        stats: {
            devSkill: 1,
            professionalLook: 0,
            fun: 1,
            catchSkill: 0,
        }
    },
];