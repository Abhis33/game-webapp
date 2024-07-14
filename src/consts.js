export const ATTRIBUTE_LIST = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
];

export const CLASS_LIST = {
    'Barbarian': {
        'Strength': 14,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 9,
        'Wisdom': 9,
        'Charisma': 9,
    },
    'Wizard': {
        'Strength': 9,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 14,
        'Wisdom': 9,
        'Charisma': 9,
    },
    'Bard': {
        'Strength': 9,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 9,
        'Wisdom': 9,
        'Charisma': 14,
    },
}

export const SKILL_LIST = [
    { name: 'Acrobatics', key: 'acrobatics', attributeModifier: 'Dexterity' },
    { name: 'Animal Handling', key: 'animal_handling', attributeModifier: 'Wisdom' },
    { name: 'Arcana', key: 'arcana', attributeModifier: 'Intelligence' },
    { name: 'Athletics', key: 'athletics', attributeModifier: 'Strength' },
    { name: 'Deception', key: 'deception', attributeModifier: 'Charisma' },
    { name: 'History', key: 'history', attributeModifier: 'Intelligence' },
    { name: 'Insight', key: 'insight', attributeModifier: 'Wisdom' },
    { name: 'Intimidation', key: 'intimidation', attributeModifier: 'Charisma' },
    { name: 'Investigation', key: 'investigation', attributeModifier: 'Intelligence' },
    { name: 'Medicine', key: 'medicine', attributeModifier: 'Wisdom' },
    { name: 'Nature', key: 'nature', attributeModifier: 'Intelligence' },
    { name: 'Perception', key: 'perception', attributeModifier: 'Wisdom' },
    { name: 'Performance', key: 'performance', attributeModifier: 'Charisma' },
    { name: 'Persuasion', key: 'persuasion', attributeModifier: 'Charisma' },
    { name: 'Religion', key: 'religion', attributeModifier: 'Intelligence' },
    { name: 'Sleight of Hand', key: 'sleight_of_hand', attributeModifier: 'Dexterity' },
    { name: 'Stealth', key: 'stealth', attributeModifier: 'Dexterity' },
    { name: 'Survival', key: 'survival', attributeModifier: 'Wisdom' },

]