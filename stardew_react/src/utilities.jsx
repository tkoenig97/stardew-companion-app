import CalendarFlag from '../src/assets/images/calendar/calendar-flag.png';
import CalendarStar from '../src/assets/images/calendar/calendar-star.png';
import CalendarVincent from '../src/assets/images/calendar/calendar-vincent.png';
import CalendarCaroline from '../src/assets/images/calendar/calendar-vincent.png';
import CalendarKent from '../src/assets/images/calendar/calendar-kent.png';
import CalendarLewis from '../src/assets/images/calendar/calendar-lewis.png';
import CalendarHaley from '../src/assets/images/calendar/calendar-haley.png';
import CalendarPam from '../src/assets/images/calendar/calendar-pam.png';
import CalendarShane from '../src/assets/images/calendar/calendar-shane.png';
import CalendarPierre from '../src/assets/images/calendar/calendar-pierre.png';
import CalendarEmily from '../src/assets/images/calendar/calendar-emily.png';
import CalendarJas from '../src/assets/images/calendar/calendar-jas.png';
import CalendarGus from '../src/assets/images/calendar/calendar-gus.png';
import CalendarMaru from '../src/assets/images/calendar/calendar-maru.png';
import CalendarAlex from '../src/assets/images/calendar/calendar-alex.png';
import CalendarSam from '../src/assets/images/calendar/calendar-sam.png';
import CalendarDemetrius from '../src/assets/images/calendar/calendar-demetrius.png';
import CalendarDwarf from '../src/assets/images/calendar/calendar-dwarf.png';
import CalendarWilly from '../src/assets/images/calendar/calendar-willy.png';
import CalendarPenny from '../src/assets/images/calendar/calendar-penny.png';
import CalendarElliott from '../src/assets/images/calendar/calendar-elliott.png';
import CalendarJodi from '../src/assets/images/calendar/calendar-jodi.png';
import CalendarAbigail from '../src/assets/images/calendar/calendar-abigail.png';
import CalendarSandy from '../src/assets/images/calendar/calendar-sandy.png';
import CalendarMarnie from '../src/assets/images/calendar/calendar-marnie.png';
import CalendarRobin from '../src/assets/images/calendar/calendar-robin.png';
import CalendarGeorge from '../src/assets/images/calendar/calendar-george.png';
import CalendarKrobus from '../src/assets/images/calendar/calendar-krobus.png';
import CalendarLinus from '../src/assets/images/calendar/calendar-linus.png';
import CalendarSebastian from '../src/assets/images/calendar/calendar-sebastian.png';
import CalendarHarvey from '../src/assets/images/calendar/calendar-harvey.png';
import CalendarWizard from '../src/assets/images/calendar/calendar-wizard.png';
import CalendarEvelyn from '../src/assets/images/calendar/calendar-evelyn.png';
import CalendarLeah from '../src/assets/images/calendar/calendar-leah.png';
import CalendarClint from '../src/assets/images/calendar/calendar-clint.png';

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
    Kent: {
        birthday: {
            season: 'spring',
            day: 4,
        },
        calendarSprite: CalendarKent,
    },
    Lewis: {
        birthday: {
            season: 'spring',
            day: 7,
        },
        calendarSprite: CalendarLewis,
    },
    Vincent: {
        birthday: {
            season: 'spring',
            day: 10,
        },
        calendarSprite: CalendarVincent,
    },
    Haley: {
        birthday: {
            season: 'spring',
            day: 14,
        },
        calendarSprite: CalendarHaley,
    },
    Pam: {
        birthday: {
            season: 'spring',
            day: 18,
        },
        calendarSprite: CalendarPam,
    },
    Shane: {
        birthday: {
            season: 'spring',
            day: 20,
        },
        calendarSprite: CalendarShane,
    },
    Pierre: {
        birthday: {
            season: 'spring',
            day: 26,
        },
        calendarSprite: CalendarPierre,
    },
    Emily: {
        birthday: {
            season: 'spring',
            day: 27,
        },
        calendarSprite: CalendarEmily,
    },
    Jas: {
        birthday: {
            season: 'summer',
            day: 4,
        },
        calendarSprite: CalendarJas,
    },
    Gus: {
        birthday: {
            season: 'summer',
            day: 8,
        },
        calendarSprite: CalendarGus,
    },
    Maru: {
        birthday: {
            season: 'summer',
            day: 10,
        },
        calendarSprite: CalendarMaru,
    },
    Alex: {
        birthday: {
            season: 'summer',
            day: 13,
        },
        calendarSprite: CalendarAlex,
    },
    Sam: {
        birthday: {
            season: 'summer',
            day: 17,
        },
        calendarSprite: CalendarSam,
    },
    Demetrius: {
        birthday: {
            season: 'summer',
            day: 19,
        },
        calendarSprite: CalendarDemetrius,
    },
    Dwarf: {
        birthday: {
            season: 'summer',
            day: 22,
        },
        calendarSprite: CalendarDwarf,
    },
    Willy: {
        birthday: {
            season: 'summer',
            day: 24,
        },
        calendarSprite: CalendarWilly,
    },
    Penny: {
        birthday: {
            season: 'fall',
            day: 2,
        },
        calendarSprite: CalendarPenny,
    },
    Elliott: {
        birthday: {
            season: 'fall',
            day: 5,
        },
        calendarSprite: CalendarElliott,
    },
    Jodi: {
        birthday: {
            season: 'fall',
            day: 11,
        },
        calendarSprite: CalendarJodi,
    },
    Abigail: {
        birthday: {
            season: 'fall',
            day: 13,
        },
        calendarSprite: CalendarAbigail,
    },
    Sandy: {
        birthday: {
            season: 'fall',
            day: 15,
        },
        calendarSprite: CalendarSandy,
    },
    Marnie: {
        season: 'fall',
        day: 18,
        calendarSprite: CalendarMarnie,
    },
    Robin: {
        season: 'fall',
        day: 21,
        calendarSprite: CalendarRobin,
    },
    George: {
        season: 'fall',
        day: 24,
        calendarSprite: CalendarGeorge,
    },
    Krobus: {
        season: 'winter',
        day: 1,
        calendarSprite: CalendarKrobus,
    },
    Linus: {
        season: 'winter',
        day: 3,
        calendarSprite: CalendarLinus,
    },
    Caroline: {
        season: 'winter',
        day: 7,
        calendarSprite: CalendarCaroline,
    },
    Sebastian: {
        season: 'winter',
        day: 10,
        calendarSprite: CalendarSebastian,
    },
    Harvey: {
        season: 'winter',
        day: 14,
        calendarSprite: CalendarHarvey,
    },
    Wizard: {
        season: 'winter',
        day: 17,
        calendarSprite: CalendarWizard,
    },
    Evelyn: {
        season: 'winter',
        day: 20,
        calendarSprite: CalendarEvelyn,
    },
    Leah: {
        season: 'winter',
        day: 23,
        calendarSprite: CalendarLeah,
    },
    Clint: {
        season: 'winter',
        day: 26,
        calendarSprite: CalendarClint,
    },
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
