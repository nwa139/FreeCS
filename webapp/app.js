import "@phosphor-icons/web/regular";
import "@phosphor-icons/web/fill";

import Alpine from "alpinejs";
import "./store.js";
import {init} from "./init";

window.Alpine = Alpine;

Alpine.start();

init();