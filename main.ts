import { Gpio } from "onoff";
import { TradfriClient, Accessory, AccessoryTypes } from "node-tradfri-client";

const button = new Gpio(4, "in", "both");
const tradfri = new TradfriClient("gw-abcdef012345");
const lightbulbs = {};
const light = lightbulbs[65537].lightList[0];
try {
    const {identity, psk} = await tradfri.authenticate("code");
    await tradfri.connect(identity, psk);
} catch (e) {
}


button.watch((err, value) => {
    if (value === 1) {
        light.toggle();
    }
    
    });