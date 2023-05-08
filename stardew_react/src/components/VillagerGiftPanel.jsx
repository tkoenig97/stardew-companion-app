import { useState } from 'react';
import { villagerData } from '../utilities';
import { GiftList } from './GiftList';

export const VillagerGiftPanel = ({ currentVillager }) => {
    const [heartClicked, setHeartClicked] = useState();
    const villagerImage = (
        <img
            className="villager-pic"
            src={villagerData[currentVillager].picture}
            alt={currentVillager}
        />
    );

    const handleHeartChange = () => {
        setHeartClicked(!heartClicked);
    };

    return (
        <div className="gift-panel">
            <h1>{currentVillager}</h1>
            <div className="panel-content">
                {villagerImage}
                <div>
                    <div className="hearts">
                        <h2>Relationship:</h2>
                        <img
                            onClick={handleHeartChange}
                            src={
                                heartClicked
                                    ? 'src/assets/images/heart.png'
                                    : "src/assets/images/greyed-heart.png"
                            }
                        />
                    </div>
                    <h2>
                        Marriageable:
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
                <GiftList emotion="Hates" />
            </div>
        </div>
    );
};
