export enum drinksType{
    biereSpecial = "green",
    biere = "blue",
    chaud ="blue",
    soft = "green",
    biereFruite = "blue",
    cooktail= "grey",
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
    {name: "Eupeuner bier 25cl", short: "Eupener", price: 4.5, type: drinksType.biere},
    {name: "Jupiler N.A 25cl", short: "NA", price: 4.5, type: drinksType.biere},

    {name: "Liefmans 25cl", short: "Liefmans", price: 5.5, type: drinksType.biereFruite},

    {name: "Val Dieu Noel 33cl", short: "V.D. Noel", price: 6.5, type: drinksType.biereSpecial},
    {name: "Tongerlo Noel 33cl", short: "Tong Noel", price: 6.5, type: drinksType.biereSpecial},
    {name: "Chouffe 33cl", short: "Chouffe", price: 6.5, type: drinksType.biereSpecial},
    {name: "Fourchette 33cl", short: "Fourchet", price: 6.5, type: drinksType.biereSpecial},
    {name: "Ville basse debut 33cl", short: "Ville basse", price: 6.5, type: drinksType.biereSpecial},
    {name: "Kasteel rouge 33cl", short: "Kasteel rouge", price: 6.5, type: drinksType.biereSpecial},

    {name: "Vin rouge chaud", short: "V. chaud rouge", price: 4.5, type: drinksType.chaud},
    {name: "Vin blanc chaud", short: "V. chaud blanc", price: 5, type: drinksType.chaud},
    {name: "Cacao", short: "Cacao", price: 3.5, type: drinksType.chaud},
    {name: "GlûhGin", short: "GlûhGin", price: 5, type: drinksType.chaud},
    {name: "Supplement alcool", short: "+Supp alc", price: 1, type: drinksType.soft, supplement: true},

    {name: "Aperol/Gin", short: "Aperol/GIN", price: 10, type: drinksType.cooktail},
    {name: "Jager", short: "Jager", price: 2, type: drinksType.cooktail},

    {name: "SOFT", short: "SOFT", price: 4, type: drinksType.soft},
  /*  {name: "Coca Zero", short: "Coca Zero", price: 4, type: drinksType.soft},
    {name: "Sprite", short: "Sprite", price: 4, type: drinksType.soft},
    {name: "Eau plate", short: "Eau pl", price: 4, type: drinksType.soft},
    {name: "Eau pétiante", short: "Eau pet.", price: 4, type: drinksType.soft},*/
]



