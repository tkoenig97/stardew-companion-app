import { villagerData } from '../utilities';

export const VillagerGiftPanel = ({ currentVillager = 'Abigail' }) => {
    console.log(currentVillager)
    const villagerImage = (
        <img
            className="navimg"
            src={villagerData[currentVillager].picture}
            alt={currentVillager}
        />
    );

    return (
        <div className="gift-panel">
            <h1>{currentVillager}</h1>
            {villagerImage}
        </div>
    );
};
