import {IClear} from "./task/itask";
import {ColorOs} from "./task/coloros";

let iClear: IClear = null;

switch (assistant.device.os.name) {
    case "color_os":
        iClear = new ColorOs();
        break;

    default:
        throw new Error("不支持的系统");
}
iClear.clear()
