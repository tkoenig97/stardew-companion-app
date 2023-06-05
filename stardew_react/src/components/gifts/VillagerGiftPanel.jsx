import { useState, useEffect } from 'react';
import { villagerData } from '../../utils/utilities';
import { GiftList } from './GiftList';

export const VillagerGiftPanel = ({ currentVillager }) => {
    const [heartClicked, setHeartClicked] = useState();
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        setHearts(
            villagerData[currentVillager].marriage
                ? new Array(8)
                      .fill('greyed')
                      .concat(new Array(2).fill('locked'))
                : new Array(10).fill('greyed')
        );
    }, [currentVillager]);

    const villagerImage = (
        <img
            className="villager-pic"
            src={villagerData[currentVillager].picture}
            alt={currentVillager}
        />
    );

    const handleHeartChange = (index) => {
        const newHearts = [...hearts];
        if (newHearts[index] === 'locked') return;
        if (heartClicked) {
            newHearts[index] = 'greyed';
        } else {
            newHearts[index] = 'heart';
        }
        setHearts(newHearts);
        setHeartClicked(!heartClicked);
    };

    return (
        <div className="gift-panel">
            <h1>{currentVillager}</h1>
            <div className="panel-content">
                {villagerImage}
                <div>
                    <div className="relationship">
                        <h2>Relationship:</h2>
                        {hearts.map((heart, index) => (
                            <img
                                key={index}
                                className="heart"
                                onClick={() => handleHeartChange(index)}
                                src={
                                    heart === 'locked'
                                        ? 'src/assets/images/locked-heart.png'
                                        : heart === 'heart'
                                        ? 'src/assets/images/heart.png'
                                        : 'src/assets/images/greyed-heart.png'
                                }
                            />
                        ))}
                    </div>
                    <h2>
                        Marriable:
                        {villagerData[currentVillager].marriage ? (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: ' &#x2713;',
                                }}
                            ></span>
                        ) : (
                            ' X'
                        )}
                    </h2>
                </div>
            </div>
            <div className="gift-lists">
                <GiftList emotion="Loves" />
                <GiftList emotion="Likes" />
                <GiftList emotion="Neutral" />
                <GiftList emotion="Dislikes" />
                <GiftList emotion="Hates" />
            </div>
        </div>
    );
};
