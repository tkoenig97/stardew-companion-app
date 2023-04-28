import Kent from '../src/assets/images/kent-calendar-sprite.png'

export const getSeasonalData = ({ season }) => {
    const seasonalData = {
        spring: {
            4: Kent,
            7: 'Lewis',
            10: 'Vincent',
            13: 'Event',
            14: 'Haley',
            18: 'Pam',
            20: 'Shane',
            24: 'Event',
            26: 'Pierre',
            27: 'Emily',
        },
        summer: {
            4: 'Jas',
            8: 'Gus',
            10: 'Maru',
            11: 'Event',
            13: 'Alex',
            17: 'Sam',
            19: 'Demetrius',
            22: 'Dwarf',
            24: 'Willy',
            29: 'Event',
        },
        fall: {
            2: 'Penny',
            5: 'Elliott',
            11: 'Jodi',
            13: 'Abigail',
            15: 'Sandy',
            16: 'Event',
            18: 'Marnie',
            21: 'Robin',
            24: 'George',
            27: 'Event',
        },
        winter: {
            1: 'Krobus',
            3: 'Linus',
            7: 'Caroline',
            8: 'Event',
            10: 'Sebastian',
            14: 'Harvey',
            17: 'Wizard',
            20: 'Evelyn',
            23: 'Leah',
            25: 'Event',
            26: 'Clint',
        },
    };
    return seasonalData[season]
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}