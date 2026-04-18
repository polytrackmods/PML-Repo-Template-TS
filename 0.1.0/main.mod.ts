import { PolyMod, PolyModLoader } from "https://cdn.polymodloader.com/cb/polytrackmods/PolyModLoader/0.6.0/PolyTypes.js";

class templateMod extends PolyMod {
    override preInit = (pml:PolyModLoader) => {
        // pre init
    }
    override init = (pml:PolyModLoader) => {
        // regular init
    }
    override postInit = () => {
        // post init
    }
    override simInit = () => {
        // sim init here
    } 
}

export let polyMod = new templateMod();