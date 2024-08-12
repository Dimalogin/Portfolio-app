import { ruLang, enLang } from "./date.js";

import EnLanguage from "./pages/en-lang.js";
import RuLanguage from "./pages/ru-lang.js";

export default {
  enRoute: function () {
    EnLanguage.render(enLang);
  },

  ruRoute: function () {
    RuLanguage.render(ruLang);
  },
};
