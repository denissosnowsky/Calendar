const store = {
    state: [
        {
            id: 11,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 12,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 13,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 14,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 15,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 21,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 22,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 23,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 24,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 25,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 31,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 32,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 33,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 34,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 35,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 41,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 42,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 43,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 44,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 45,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 51,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 52,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 53,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 54,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 55,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 61,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 62,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 63,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 64,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 65,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 71,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 72,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 73,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 74,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 75,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 81,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 82,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 83,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 84,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 85,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 91,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 92,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 93,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 94,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 95,
            isOrdered: false,
            text: "",
            members: []
        }
    ],
    members: ["Dmitry", "Oleg", "Maria", "Natalia", "Artem", "Denis", "Inna"],
    admins: ["Denis", "Inna"]
};

export function emptyTheVault(vault){
    vault.isOrdered=false;
    vault.text="";
    vault.members=[];
}

export function fillTheVault(vault, text, members){
    vault.isOrdered = true;
    vault.text = text;
    vault.members = [...members];
}

export default store;