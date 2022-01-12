import {IClear} from "./itask";


export class ColorOs implements IClear {
    clear(): void {
        assistant.accessibility.action.recents();

        if (assistant.device.os.version == 'V12') {
            assistant.accessibility.wait({id: 'com.android.launcher:id/btn_clear'})[0].click()
        } else {
            assistant.accessibility.wait({id: 'com.oppo.launcher:id/btn_clear'})[0].click()
        }
    }
}
