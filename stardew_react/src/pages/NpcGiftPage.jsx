import { villagerData } from "../utilities"

export const NpcGiftPage = () => {
    const villagerImages = []

    for (const villager in villagerData) {
        villagerImages.push(
            <img className="navimg" key={villager} src={villagerData[villager].image} alt={villager} />
        )
    }
    return (
        <div className="menu page-content">
            <h1>NPC Gifts</h1>
            <div className="menu villager-selector">
                <h2>Select the Villager You Wish to View</h2>
                <div>{villagerImages}</div>
            </div>
        </div>
    )
}