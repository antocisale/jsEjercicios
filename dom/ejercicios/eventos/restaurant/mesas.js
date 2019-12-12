class Mesa{
    constructor(id, cuenta){
        this.id = id;
        if(cuenta == undefined){
            cuenta = 0;
        }
        this.cuenta = cuenta;
    }
}

module.exports=Mesa;