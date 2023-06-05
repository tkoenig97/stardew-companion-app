import Abigail from '../assets/images/villagers/abigail.png';
import Alex from '../assets/images/villagers/alex.png';
import Caroline from '../assets/images/villagers/caroline.png';
import Clint from '../assets/images/villagers/clint.png';
import Demetrius from '../assets/images/villagers/demetrius.png';
import Dwarf from '../assets/images/villagers/dwarf.png';
import Elliott from '../assets/images/villagers/elliott.png';
import Emily from '../assets/images/villagers/emily.png';
import Evelyn from '../assets/images/villagers/evelyn.png';
import George from '../assets/images/villagers/george.png';
import Gus from '../assets/images/villagers/gus.png';
import Haley from '../assets/images/villagers/haley.png';
import Harvey from '../assets/images/villagers/harvey.png';
import Jas from '../assets/images/villagers/jas.png';
import Jodi from '../assets/images/villagers/jodi.png';
import Kent from '../assets/images/villagers/kent.png';
import Krobus from '../assets/images/villagers/krobus.png';
import Leah from '../assets/images/villagers/leah.png';
import Lewis from '../assets/images/villagers/lewis.png';
import Linus from '../assets/images/villagers/linus.png';
import Marnie from '../assets/images/villagers/marnie.png';
import Maru from '../assets/images/villagers/maru.png';
import Pam from '../assets/images/villagers/pam.png';
import Penny from '../assets/images/villagers/penny.png';
import Pierre from '../assets/images/villagers/pierre.png';
import Robin from '../assets/images/villagers/robin.png';
import Sam from '../assets/images/villagers/sam.png';
import Sandy from '../assets/images/villagers/sandy.png';
import Sebastian from '../assets/images/villagers/sebastian.png';
import Shane from '../assets/images/villagers/shane.png';
import Vincent from '../assets/images/villagers/vincent.png';
import Willy from '../assets/images/villagers/willy.png';
import Wizard from '../assets/images/villagers/wizard.png';
import CalendarFlag from '../assets/images/calendar/calendar-flag.png';
import CalendarStar from '../assets/images/calendar/calendar-star.png';
import CalendarAbigail from '../assets/images/calendar/calendar-abigail.png';
import CalendarAlex from '../assets/images/calendar/calendar-alex.png';
import CalendarCaroline from '../assets/images/calendar/calendar-vincent.png';
import CalendarClint from '../assets/images/calendar/calendar-clint.png';
import CalendarDemetrius from '../assets/images/calendar/calendar-demetrius.png';
import CalendarDwarf from '../assets/images/calendar/calendar-dwarf.png';
import CalendarElliott from '../assets/images/calendar/calendar-elliott.png';
import CalendarEmily from '../assets/images/calendar/calendar-emily.png';
import CalendarEvelyn from '../assets/images/calendar/calendar-evelyn.png';
import CalendarGeorge from '../assets/images/calendar/calendar-george.png';
import CalendarGus from '../assets/images/calendar/calendar-gus.png';
import CalendarHaley from '../assets/images/calendar/calendar-haley.png';
import CalendarHarvey from '../assets/images/calendar/calendar-harvey.png';
import CalendarJas from '../assets/images/calendar/calendar-jas.png';
import CalendarJodi from '../assets/images/calendar/calendar-jodi.png';
import CalendarKent from '../assets/images/calendar/calendar-kent.png';
import CalendarKrobus from '../assets/images/calendar/calendar-krobus.png';
import CalendarLeah from '../assets/images/calendar/calendar-leah.png';
import CalendarLewis from '../assets/images/calendar/calendar-lewis.png';
import CalendarLinus from '../assets/images/calendar/calendar-linus.png';
import CalendarMarnie from '../assets/images/calendar/calendar-marnie.png';
import CalendarMaru from '../assets/images/calendar/calendar-maru.png';
import CalendarPam from '../assets/images/calendar/calendar-pam.png';
import CalendarPenny from '../assets/images/calendar/calendar-penny.png';
import CalendarPierre from '../assets/images/calendar/calendar-pierre.png';
import CalendarRobin from '../assets/images/calendar/calendar-robin.png';
import CalendarSam from '../assets/images/calendar/calendar-sam.png';
import CalendarSandy from '../assets/images/calendar/calendar-sandy.png';
import CalendarSebastian from '../assets/images/calendar/calendar-sebastian.png';
import CalendarShane from '../assets/images/calendar/calendar-shane.png';
import CalendarVincent from '../assets/images/calendar/calendar-vincent.png';
import CalendarWilly from '../assets/images/calendar/calendar-willy.png';
import CalendarWizard from '../assets/images/calendar/calendar-wizard.png';

export const getSeasonalData = ({ season }) => {
    const seasonalData = {
        spring: {
            4: CalendarKent,
            7: CalendarLewis,
            10: CalendarVincent,
            13: CalendarFlag,
            14: CalendarHaley,
            18: CalendarPam,
            20: CalendarShane,
            24: CalendarFlag,
            26: CalendarPierre,
            27: CalendarEmily,
        },
        summer: {
            4: CalendarJas,
            8: CalendarGus,
            10: CalendarMaru,
            11: CalendarFlag,
            13: CalendarAlex,
            17: CalendarSam,
            19: CalendarDemetrius,
            22: CalendarDwarf,
            24: CalendarWilly,
            29: CalendarFlag,
        },
        fall: {
            2: CalendarPenny,
            5: CalendarElliott,
            11: CalendarJodi,
            13: CalendarAbigail,
            15: CalendarSandy,
            16: CalendarFlag,
            18: CalendarMarnie,
            21: CalendarRobin,
            24: CalendarGeorge,
            27: CalendarFlag,
        },
        winter: {
            1: CalendarKrobus,
            3: CalendarLinus,
            7: CalendarCaroline,
            8: CalendarFlag,
            10: CalendarSebastian,
            14: CalendarHarvey,
            15: CalendarStar,
            16: CalendarStar,
            17: [CalendarStar, CalendarWizard],
            20: CalendarEvelyn,
            23: CalendarLeah,
            25: CalendarFlag,
            26: CalendarClint,
        },
    };
    return seasonalData[season];
};

export const villagerData = {
    Abigail: {
        birthday: {
            season: 'fall',
            day: 13,
        },
        calendarSprite: CalendarAbigail,
        picture: Abigail,
        marriage: true,
    },
    Alex: {
        birthday: {
            season: 'summer',
            day: 13,
        },
        calendarSprite: CalendarAlex,
        picture: Alex,
        marriage: true,
    },
    Caroline: {
        birthday: {
            season: 'winter',
            day: 7,
        },
        calendarSprite: CalendarCaroline,
        picture: Caroline,
        marriage: false,
    },
    Clint: {
        birthday: {
            season: 'winter',
            day: 26,
        },
        calendarSprite: CalendarClint,
        picture: Clint,
        marriage: false,
    },
    Demetrius: {
        birthday: {
            season: 'summer',
            day: 19,
        },
        calendarSprite: CalendarDemetrius,
        picture: Demetrius,
        marriage: false,
    },
    Dwarf: {
        birthday: {
            season: 'summer',
            day: 22,
        },
        calendarSprite: CalendarDwarf,
        picture: Dwarf,
        marriage: false,
    },
    Elliott: {
        birthday: {
            season: 'fall',
            day: 5,
        },
        calendarSprite: CalendarElliott,
        picture: Elliott,
        marriage: true,
    },
    Emily: {
        birthday: {
            season: 'spring',
            day: 27,
        },
        calendarSprite: CalendarEmily,
        picture: Emily,
        marriage: true,
    },
    Evelyn: {
        birthday: {
            season: 'winter',
            day: 20,
        },
        calendarSprite: CalendarEvelyn,
        picture: Evelyn,
        marriage: false,
    },
    George: {
        birthday: {
            season: 'fall',
            day: 24,
        },
        calendarSprite: CalendarGeorge,
        picture: George,
        marriage: false,
    },
    Gus: {
        birthday: {
            season: 'summer',
            day: 8,
        },
        calendarSprite: CalendarGus,
        picture: Gus,
        marriage: false,
    },
    Haley: {
        birthday: {
            season: 'spring',
            day: 14,
        },
        calendarSprite: CalendarHaley,
        picture: Haley,
        marriage: true,
    },
    Harvey: {
        birthday: {
            season: 'winter',
            day: 14,
        },
        calendarSprite: CalendarHarvey,
        picture: Harvey,
        marriage: true,
    },
    Jas: {
        birthday: {
            season: 'summer',
            day: 4,
        },
        calendarSprite: CalendarJas,
        picture: Jas,
        marriage: false,
    },
    Jodi: {
        birthday: {
            season: 'fall',
            day: 11,
        },
        calendarSprite: CalendarJodi,
        picture: Jodi,
        marriage: false,
    },
    Kent: {
        birthday: {
            season: 'spring',
            day: 4,
        },
        calendarSprite: CalendarKent,
        picture: Kent,
        marriage: false,
    },
    Krobus: {
        birthday: {
            season: 'winter',
            day: 1,
        },
        calendarSprite: CalendarKrobus,
        picture: Krobus,
        marriage: false,
    },
    Leah: {
        birthday: {
            season: 'winter',
            day: 23,
        },
        calendarSprite: CalendarLeah,
        picture: Leah,
        marriage: true,
    },
    Lewis: {
        birthday: {
            season: 'spring',
            day: 7,
        },
        calendarSprite: CalendarLewis,
        picture: Lewis,
        marriage: false,
    },
    Linus: {
        birthday: {
            season: 'winter',
            day: 3,
        },
        calendarSprite: CalendarLinus,
        picture: Linus,
        marriage: false,
    },
    Marnie: {
        birthday: {
            season: 'fall',
            day: 18,
        },
        calendarSprite: CalendarMarnie,
        picture: Marnie,
        marriage: false,
    },
    Maru: {
        birthday: {
            season: 'summer',
            day: 10,
        },
        calendarSprite: CalendarMaru,
        picture: Maru,
        marriage: true,
    },
    Pam: {
        birthday: {
            season: 'spring',
            day: 18,
        },
        calendarSprite: CalendarPam,
        picture: Pam,
        marriage: false,
    },
    Penny: {
        birthday: {
            season: 'fall',
            day: 2,
        },
        calendarSprite: CalendarPenny,
        picture: Penny,
        marriage: true,
    },
    Pierre: {
        birthday: {
            season: 'spring',
            day: 26,
        },
        calendarSprite: CalendarPierre,
        picture: Pierre,
        marriage: false,
    },
    Robin: {
        birthday: {
            season: 'fall',
            day: 21,
        },
        calendarSprite: CalendarRobin,
        picture: Robin,
        marriage: false,
    },
    Sam: {
        birthday: {
            season: 'summer',
            day: 17,
        },
        calendarSprite: CalendarSam,
        picture: Sam,
        marriage: true,
    },
    Sandy: {
        birthday: {
            season: 'fall',
            day: 15,
        },
        calendarSprite: CalendarSandy,
        picture: Sandy,
        marriage: false,
    },
    Sebastian: {
        season: 'winter',
        day: 10,
        calendarSprite: CalendarSebastian,
        picture: Sebastian,
        marriage: true,
    },
    Shane: {
        birthday: {
            season: 'spring',
            day: 20,
        },
        calendarSprite: CalendarShane,
        picture: Shane,
        marriage: true,
    },
    Vincent: {
        birthday: {
            season: 'spring',
            day: 10,
        },
        calendarSprite: CalendarVincent,
        picture: Vincent,
        marriage: false,
    },
    Willy: {
        birthday: {
            season: 'summer',
            day: 24,
        },
        calendarSprite: CalendarWilly,
        picture: Willy,
        marriage: false,
    },
    Wizard: {
        birthday: {
            season: 'winter',
            day: 17,
        },
        calendarSprite: CalendarWizard,
        picture: Wizard,
        marriage: false,
    },
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
