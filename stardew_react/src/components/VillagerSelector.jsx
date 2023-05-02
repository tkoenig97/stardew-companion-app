import { useEffect, useState } from 'react';
import { villagerData } from '../utilities';

export const VillagerSelector = () => {
    const [currentVillager, setCurrentVillager] = useState('Default');

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
                src={villagerData[villager].image}
                alt={villager}
            />
        ));
    return (
        <div className="menu villager-selector">
            <h2>Select the Villager You Wish to View</h2>
            <div>{villagerImages}</div>
        </div>
    );
};
