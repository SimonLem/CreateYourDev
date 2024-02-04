import ItemStats from './ItemStatsInterface'

export default interface Item {
    id: number,
    name: string,
    description: string,
    imageName: string,
    stats: ItemStats,
}