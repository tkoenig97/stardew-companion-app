import { villagerData } from '../utilities';

export const VillagerGiftPanel = ({ currentVillager = 'Abigail' }) => {
    console.log(currentVillager);
    const villagerImage = (
        <img
            className="villager-pic"
            src={villagerData[currentVillager].picture}
            alt={currentVillager}
        />
    );

    return (
        <div className="gift-panel">
            <h1>{currentVillager}</h1>
            <div className="panel-content">
                {villagerImage}
                <div>
                    <div className="hearts">
                        <h2>Relationship:</h2>
                        <img src="src/assets/images/heart.png" />
                    </div>
                    <h2>Marriageable: X</h2>
                </div>
            </div>
        </div>
    );
};
