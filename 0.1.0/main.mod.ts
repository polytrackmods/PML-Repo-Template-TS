import {PolyMod, PolyModLoader} from "https://cdn.polymodloader.com/pml/PolyModLoader/0.6.3/PolyTypes.js";

class templateMod extends PolyMod {
    pml!: PolyModLoader;

    override preInit = (pml: PolyModLoader) => {
        this.pml = pml; // make pml available outside of preInit/init
        // pre init
    }
    override init = async (pml: PolyModLoader) => {
        this.pml = pml;
        // regular init
    }
    override postInit = () => {
        // post init
    }
}

export let polyMod = new templateMod();