function drinkPotion(type){
    if (type === "vermelho"){
        alert("Você recuperou seus pontos de vida");
    }
    else if (type === "azul"){
        alert("Você recuperou seus pontos de mana");
    }
    else{
        alert("Oh não! Era veneno!");
    }
}