
export const main_sections = {
    "Order": {
        name: "Order",
        isValid: false,
        pane: 1,
        isSelected: true,
        isMaterial: false,
    },
    "Billing": {
        name: "Billing",
        isValid: false,
        pane: 2,
        isSelected: true,
        isMaterial: false,
    },
    "Generator": {
        name: "Generator",
        isValid: false,
        pane: 3,
        isSelected: true,
        isMaterial: false,
    },
    "Materials": {
        name: "Materials",
        isValid: true,
        pane: 4,
        isSelected: true,
        isMaterial: false,
    },
    "Ballast": {
        name: "Ballast",
        isValid: true,
        pane: 5,
        isSelected: false,
        isMaterial: true,
    },
    "Batteries": {
        name: "Batteries",
        isValid: true,
        pane: 6,
        isSelected: false,
        isMaterial: true,
    },
    "eWaste": {
        name: "eWaste",
        isValid: true,
        pane: 7,
        isSelected: false,
        isMaterial: true,
    },

    "Haz/Other": {
        name: "Haz/Other",
        isValid: true,
        pane: 8,
        isSelected: false,
        isMaterial: true,
    },
    "Lamps": {
        name: "Lamps",
        isValid: true,
        pane: 9,
        isSelected: false,
        isMaterial: true,
    },
    "Specialty": {
        name: "Specialty",
        isValid: true,
        pane: 10,
        isSelected: false,
        isMaterial: true,
    },
    "Containers": {
        name: "Containers",
        isValid: true,
        pane: 11,
        isSelected: true,
        isMaterial: false,
    },
    "Site": {
        name: "Site",
        isValid: true,
        pane: 12,
        isSelected: true,
        isMaterial: false,
        inputs: {}
    }
}

export const material_sections = {
    'Ballast': {
        selected: false,
    },
    'Batteries': {
        selected: false,
    },
    'eWaste': {
        selected: false,
    },
    'Haz/Other': {
        selected: false,
    },
    'Lamps': {
        selected: false,
    },
    'Specialty': {
        selected: false,
    }
}