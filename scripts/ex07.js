function Picole(){
    let codigo = String
    let menu = prompt(`
        a Chocolate R$ 1,50
        b Morango R$ 2,50
        c Creme R$ 2,50
        d Manga R$ 3,20
        e Melancia R$ 3,40
        f Vanilla Ice R$ 3,00
        g Céu Azul R$ 3,60
        h Brownie R$ 4,00
        i Hawaiano R$ 5,00  
        `);
        if(typeof menu ==='string'){
            switch(menu.toLowerCase()){
                case 'a':
                    alert("preço: R$1,50");
                    break
                case 'b':
                    alert("preço: R$2,50");
                    break
                case 'c':
                    alert("preço: R$2,50");
                    break
                case 'd':
                    alert("preço: R$3,20");
                    break
                case 'e':
                    alert("preço: R$3,40");
                    break
                case 'f':
                    alert("preço: R$3,00");
                    break
                case 'g':
                    alert("preço: R$3,60");
                    break
                case 'h':
                    alert("preço: R$4,00");
                    break
                case 'i':
                    alert("preço: R$5,00");
                    break
            }
        }
}