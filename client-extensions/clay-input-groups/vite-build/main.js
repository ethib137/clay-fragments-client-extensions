import e, { useState as F } from "react";
import a from "@clayui/form";
import { Picker as x, Option as I } from "@clayui/core";
import $ from "@clayui/icon";
function N(m) {
  const {
    errorMessage: r = "",
    helpText: s = "",
    label: n = "",
    name: i = "",
    namespace: t = "",
    options: p = [],
    placeholder: u = "",
    readOnly: d = !1,
    required: b = !1,
    showHelpText: f = !1,
    showLabel: h = !0,
    spritemap: o,
    value: k = ""
  } = m, c = r.length > 0, [E, y] = F(k);
  return /* @__PURE__ */ e.createElement(a.Group, { className: `mb-0 ${c ? "has-error" : ""}` }, /* @__PURE__ */ e.createElement("label", { className: !h || n.length === 0 ? "sr-only" : "", htmlFor: `${t}Input` }, n, b && /* @__PURE__ */ e.createElement($, { className: "reference-mark", symbol: "asterisk", spritemap: o })), /* @__PURE__ */ e.createElement(
    x,
    {
      "aria-describedby": `${t}Feedback`,
      disabled: d,
      id: `${t}Picker`,
      items: p,
      onSelectionChange: (l) => y(l),
      placeholder: u
    },
    (l) => /* @__PURE__ */ e.createElement(I, { key: l.value }, l.label)
  ), /* @__PURE__ */ e.createElement("input", { name: i, type: "hidden", value: E }), /* @__PURE__ */ e.createElement(a.FeedbackGroup, { id: `${t}Feedback` }, c && /* @__PURE__ */ e.createElement(a.FeedbackItem, null, /* @__PURE__ */ e.createElement(a.FeedbackIndicator, { spritemap: o, symbol: "exclamation-full" }), r), f && /* @__PURE__ */ e.createElement(a.Text, null, s)));
}
export {
  N as default
};
