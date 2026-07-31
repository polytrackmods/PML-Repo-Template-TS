import { PolyMod } from "https://cdn.polymodloader.com/pml/PolyModLoader/0.6.2/PolyTypes.js";
class templateMod extends PolyMod {
    constructor() {
        super(...arguments);
        this.preInit = (pml) => {
            // pre init
        };
        this.init = (pml) => {
            // regular init
        };
        this.postInit = () => {
            // post init
        };
    }
}
export let polyMod = new templateMod();
