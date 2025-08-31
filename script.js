var foods = ""
var kgs_or_packs = 0
var totalamount = 0
function add_cart () {
    foods=document.getElementById("dropdown").value 
    kgs_or_packs=document.getElementById("entry_box").value 
    switch (foods) {
        case "strawberry":
            totalamount=kgs_or_packs*160
            break;
        case "Malkist double chocolately":
            totalamount=kgs_or_packs*95
            break;
        case "GoodDay biscuits":
            totalamount=kgs_or_packs*70
            break;
        case "pomogranete":
            totalamount=kgs_or_packs*220
            break;
        case "Cadbury Dairy Milk minis":
            totalamount=kgs_or_packs*135
            break;
    
        default:
            break;
    }
    document.getElementById("texta_bruh").innerHTML+=foods+" - "+totalamount+"                                                                                                                   "  
}