interface IClear {
    clear(): void;
}

class ColorOs implements IClear {
    clear(): void {
        assistant.accessibility.action.recents();
        assistant.accessibility.wait({ id: 'com.oppo.launcher:id/btn_clear' })[0].click()
    }
}

let iclear: IClear = null;

switch (assistant.device.os.name) {
    case "color_os":
        iclear = new ColorOs();
        break;

    default:
        throw new Error("不支持的系统");
}
iclear.clear()