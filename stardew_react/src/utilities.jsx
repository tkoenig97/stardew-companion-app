import Flag from '../src/assets/images/calendar/calendar-flag.png'
import Star from '../src/assets/images/calendar/calendar-star.png'
import Vincent from '../src/assets/images/calendar/calendar-vincent.png'
import Caroline from '../src/assets/images/calendar/calendar-vincent.png'
import Kent from '../src/assets/images/calendar/calendar-kent.png'
import Lewis from '../src/assets/images/calendar/calendar-lewis.png'
import Haley from '../src/assets/images/calendar/calendar-haley.png'
import Pam from '../src/assets/images/calendar/calendar-pam.png'
import Shane from '../src/assets/images/calendar/calendar-shane.png'
import Pierre from '../src/assets/images/calendar/calendar-pierre.png'
import Emily from '../src/assets/images/calendar/calendar-emily.png'
import Jas from '../src/assets/images/calendar/calendar-jas.png'
import Gus from '../src/assets/images/calendar/calendar-gus.png'
import Maru from '../src/assets/images/calendar/calendar-maru.png'
import Alex from '../src/assets/images/calendar/calendar-alex.png'
import Sam from '../src/assets/images/calendar/calendar-sam.png'
import Demetrius from '../src/assets/images/calendar/calendar-demetrius.png'
import Dwarf from '../src/assets/images/calendar/calendar-dwarf.png'
import Willy from '../src/assets/images/calendar/calendar-willy.png'
import Penny from '../src/assets/images/calendar/calendar-penny.png'
import Elliott from '../src/assets/images/calendar/calendar-elliott.png'
import Jodi from '../src/assets/images/calendar/calendar-jodi.png'
import Abigail from '../src/assets/images/calendar/calendar-abigail.png'
import Sandy from '../src/assets/images/calendar/calendar-sandy.png'
import Marnie from '../src/assets/images/calendar/calendar-marnie.png'
import Robin from '../src/assets/images/calendar/calendar-robin.png'
import George from '../src/assets/images/calendar/calendar-george.png'
import Krobus from '../src/assets/images/calendar/calendar-krobus.png'
import Linus from '../src/assets/images/calendar/calendar-linus.png'
import Sebastian from '../src/assets/images/calendar/calendar-sebastian.png'
import Harvey from '../src/assets/images/calendar/calendar-harvey.png'
import Wizard from '../src/assets/images/calendar/calendar-wizard.png'
import Evelyn from '../src/assets/images/calendar/calendar-evelyn.png'
import Leah from '../src/assets/images/calendar/calendar-leah.png'
import Clint from '../src/assets/images/calendar/calendar-clint.png'


export const getSeasonalData = ({ season }) => {
    const seasonalData = {
        spring: {
            4: Kent,
            7: Lewis,
            10: Vincent,
            13: Flag,
            14: Haley,
            18: Pam,
            20: Shane,
            24: Flag,
            26: Pierre,
            27: Emily,
        },
        summer: {
            4: Jas,
            8: Gus,
            10: Maru,
            11: Flag,
            13: Alex,
            17: Sam,
            19: Demetrius,
            22: Dwarf,
            24: Willy,
            29: Flag,
        },
        fall: {
            2: Penny,
            5: Elliott,
            11: Jodi,
            13: Abigail,
            15: Sandy,
            16: Flag,
            18: Marnie,
            21: Robin,
            24: George,
            27: Flag,
        },
        winter: {
            1: Krobus,
            3: Linus,
            7: Caroline,
            8: Flag,
            10: Sebastian,
            14: Harvey,
            15: Star,
            16: Star,
            17: [Star, Wizard],
            20: Evelyn,
            23: Leah,
            25: Flag,
            26: Clint,
        },
    };
    return seasonalData[season]
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}