class Mesa{
    constructor(id, cuenta = 0){
        this.id = id;
/*         if(cuenta == undefined){
            cuenta = 0;
        } */
        this.cuenta = cuenta;
    }
}

try {
    module.exports = Mesa;
 } catch (e) {}
