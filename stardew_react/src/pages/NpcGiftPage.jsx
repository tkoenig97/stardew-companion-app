import { VillagerGiftPanel } from '../components/VillagerGiftPanel';
import { VillagerSelector } from '../components/VillagerSelector';

export const NpcGiftPage = () => {
    return (
        <div className='menu page-content'>
            <h1>NPC Gift Page</h1>
            <VillagerSelector />
            <VillagerGiftPanel />
        </div>
    );
};
