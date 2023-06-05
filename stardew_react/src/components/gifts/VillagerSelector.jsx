import { useEffect, useState } from 'react';
import { villagerData } from '../../utils/utilities';
import { VillagerGiftPanel } from './VillagerGiftPanel';

export const VillagerSelector = () => {
    const [currentVillager, setCurrentVillager] = useState();

    const handleVillagerChange = (event) => {
        setCurrentVillager(event.target.alt);
    };

    useEffect(() => {
        console.log(currentVillager);
    }, [currentVillager]);

    const villagerImages = Object.keys(villagerData)
        .sort((a, b) => a.localeCompare(b))
        .map((villager) => (
            <img
                onClick={handleVillagerChange}
                className="navimg"
                key={villager}
                src={villagerData[villager].calendarSprite}
                alt={villager}
            />
        ));

    return (
        <>
            <div className="menu villager-selector">
                <h2>Select the Villager You Wish to View</h2>
                <div>{villagerImages}</div>
            </div>
            <div>
                {currentVillager && (
                    <VillagerGiftPanel currentVillager={currentVillager} />
                )}
            </div>
        </>
    );
};
