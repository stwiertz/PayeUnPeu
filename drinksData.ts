export enum drinksType{
    biereSpecial = "green",
    biere = "blue",
    chaud ="lightgreen",
    soft = "pink",
    biereFruite = "blue",
    cooktail= "lightblue",
    caution= "grey",
};

export type drinkData = {
    name: string;
    short: string;
    price: number;
    type: drinksType;
    supplement?: boolean;
    icon?: string;
}

export const drinksData: Array<drinkData> = [
    {name: "Eupeuner bier 25cl", short: "Eupener", price: 3.5, type: drinksType.biere},
    {name: "Jupiler N.A 25cl", short: "NA", price: 3.5, type: drinksType.biere},

    {name: "Liefmans 25cl", short: "Liefmans", price: 4.5, type: drinksType.biereFruite},

    {name: "Val Dieu Noel 33cl", short: "V.D. Noel", price: 5.5, type: drinksType.biereSpecial},
    {name: "Tongerlo Noel 33cl", short: "Tong Noel", price: 5.5, type: drinksType.biereSpecial},
    {name: "Chouffe 33cl", short: "Chouffe", price: 5.5, type: drinksType.biereSpecial},
    {name: "Fourchette 33cl", short: "Fourchet", price: 5.5, type: drinksType.biereSpecial},
    {name: "Ville basse debut 33cl", short: "Ville basse", price: 5.5, type: drinksType.biereSpecial},
    {name: "Kasteel rouge 33cl", short: "Kasteel rouge", price: 5.5, type: drinksType.biereSpecial},

    {name: "Vin rouge chaud", short: "V. chaud rouge", price: 3.5, type: drinksType.chaud},
    {name: "Vin blanc chaud", short: "V. chaud rouge", price: 4, type: drinksType.chaud},
    {name: "Cacao", short: "Cacao", price: 3.5, type: drinksType.chaud},
    {name: "GlûhGin", short: "GlûhGin", price: 4, type: drinksType.chaud},
    {name: "Supplement alcool", short: "+Supp alc", price: 1, type: drinksType.chaud, supplement: true},

    {name: "Aperol", short: "Aperol", price: 9, type: drinksType.cooktail},
    {name: "Gin Tonic", short: "Gin To", price: 9, type: drinksType.cooktail},

    {name: "Coca", short: "coca", price: 3, type: drinksType.soft},
    {name: "Coca Zero", short: "Coca Zero", price: 3, type: drinksType.soft},
    {name: "Sprite", short: "Sprite", price: 3, type: drinksType.soft},
    {name: "Eau plate", short: "Eau pl", price: 3, type: drinksType.soft},
    {name: "Eau pétiante", short: "Eau pet.", price: 3, type: drinksType.soft},
]



