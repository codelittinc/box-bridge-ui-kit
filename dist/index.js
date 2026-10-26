"use client";
import e, { createElement as t, forwardRef as n, useId as r, useImperativeHandle as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { Alert as l, AlertTitle as u, Box as d, Button as f, Card as p, Checkbox as m, Chip as h, CircularProgress as g, CssBaseline as ee, Dialog as _, DialogActions as v, DialogContent as y, DialogContentText as b, DialogTitle as x, Divider as S, Drawer as C, FormControl as w, FormControlLabel as T, FormHelperText as E, IconButton as D, InputAdornment as O, InputLabel as te, Link as ne, Menu as re, MenuItem as ie, Paper as ae, Radio as oe, RadioGroup as se, Select as ce, Snackbar as le, Stack as k, Table as ue, TableBody as de, TableCell as fe, TableContainer as pe, TableHead as me, TableRow as he, TableSortLabel as ge, TextField as A, ThemeProvider as _e, Tooltip as ve, Typography as j, createTheme as ye } from "@mui/material";
import { decomposeColor as be, getContrastRatio as xe } from "@mui/material/styles";
import { Fragment as M, jsx as N, jsxs as P } from "react/jsx-runtime";
import Se from "@mui/icons-material/ExpandMore";
import { Combobox as Ce, ComboboxItem as we, ComboboxList as Te, ComboboxProvider as Ee } from "@ariakit/react";
import { matchSorter as De } from "match-sorter";
import F from "classnames";
import { visuallyHidden as Oe } from "@mui/utils";
import ke from "react-paginate";
import Ae, { default as je } from "@mui/icons-material/Close";
import Me from "@mui/icons-material/Add";
import Ne from "@mui/icons-material/Clear";
import Pe from "@mui/icons-material/Delete";
import Fe from "@mui/icons-material/DeleteOutlineOutlined";
import Ie from "@mui/icons-material/Edit";
import Le from "@mui/icons-material/Menu";
import Re from "@mui/icons-material/MoreHoriz";
import ze from "@mui/icons-material/Search";
import Be from "@mui/icons-material/Send";
import Ve from "@mui/icons-material/SmartToy";
import { Controller as I } from "react-hook-form";
//#region src/theme/defaultTheme.ts
var L = {
	palette: {
		primary: { main: "#006CB7" },
		error: { main: "#d32f2f" },
		success: { main: "#2e7d32" },
		warning: { main: "#ed6c02" },
		background: { default: "#ffffff" },
		common: {
			white: "#ffffff",
			black: "#000000"
		}
	},
	components: {
		MuiTypography: { styleOverrides: { root: {
			overflowWrap: "anywhere",
			minWidth: 0
		} } },
		MuiFormControl: { styleOverrides: { root: {
			minWidth: 0,
			maxWidth: "100%"
		} } },
		MuiFormControlLabel: { styleOverrides: {
			root: { minWidth: 0 },
			label: {
				minWidth: 0,
				overflowWrap: "anywhere"
			}
		} },
		MuiMenuItem: { styleOverrides: { root: {
			whiteSpace: "normal",
			overflowWrap: "anywhere"
		} } },
		MuiInputBase: { styleOverrides: {
			root: {
				minWidth: 0,
				maxWidth: "100%"
			},
			input: { "@media (max-width: 599.95px)": { fontSize: "16px" } }
		} },
		MuiCssBaseline: { styleOverrides: { ":root": {
			"--primary-main": "#016bb6",
			"--primary-text": "white",
			"--error-main": "#d32f2f",
			"--success-main": "#2e7d32",
			"--warning-main": "#ed6c02",
			"--common-white": "#ffffff",
			"--common-black": "#000000",
			"--gray-1": "#505050",
			"--gray-2": "#e8e8e8",
			"--gray-3": "#f0f0f0",
			"--gray-4": "#cacaca",
			"--gray-5": "#eaeaea",
			"--gray-6": "#f9f9f9"
		} } }
	},
	typography: { fontFamily: "\"Inter\", sans-serif" }
};
//#endregion
//#region src/theme/deepMerge.ts
function R(e, t) {
	let n = { ...e };
	for (let r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
		let i = e[r], a = t[r];
		n[r] = i && a && typeof i == "object" && typeof a == "object" && !Array.isArray(i) && !Array.isArray(a) ? R(i, a) : a;
	}
	return n;
}
//#endregion
//#region src/theme/focusRing.ts
var He = 3, Ue = .12, We = (e, t, n) => {
	let [r, i, a] = be(e).values, [o, s, c] = be(t).values, l = (e, t) => Math.round(t * n + e * (1 - n));
	return `rgb(${l(r, o)}, ${l(i, s)}, ${l(a, c)})`;
}, Ge = (e) => be(e).type.startsWith("rgb");
function Ke(e) {
	let t = e["--primary-main"], n = e["--gray-6"], r = e["--gray-3"], i = e["--common-black"];
	if (!t || !n || !r) return i;
	try {
		return [
			t,
			n,
			r
		].every(Ge) && [
			n,
			r,
			We(n, t, Ue)
		].every((e) => xe(t, e) >= He) ? t : i;
	} catch {
		return i;
	}
}
function qe(e) {
	let t = e.components?.MuiCssBaseline?.styleOverrides?.[":root"];
	if (!t || t["--focus-ring"]) return e;
	let n = Ke(t);
	return n ? R(e, { components: { MuiCssBaseline: { styleOverrides: { ":root": { "--focus-ring": n } } } } }) : e;
}
//#endregion
//#region src/theme/BoxBridgeThemeProvider.tsx
function Je({ children: e, themeConfig: t }) {
	let n = o(() => {
		let e = t ? R(L, t) : L;
		return ye(qe(e));
	}, [t]);
	return /* @__PURE__ */ P(_e, {
		theme: n,
		children: [/* @__PURE__ */ N(ee, {}), e]
	});
}
var Ye = {
	default: L,
	dark: {
		palette: {
			primary: { main: "#90caf9" },
			error: { main: "#f44336" },
			success: { main: "#66bb6a" },
			warning: { main: "#ffa726" },
			background: { default: "#121212" },
			common: {
				white: "#ffffff",
				black: "#000000"
			}
		},
		components: { MuiCssBaseline: { styleOverrides: { ":root": {
			"--primary-main": "#90caf9",
			"--primary-text": "#121212",
			"--error-main": "#f44336",
			"--success-main": "#66bb6a",
			"--warning-main": "#ffa726",
			"--common-white": "#1e1e1e",
			"--common-black": "#ffffff",
			"--gray-1": "#b0b0b0",
			"--gray-2": "#333333",
			"--gray-3": "#2a2a2a",
			"--gray-4": "#555555",
			"--gray-5": "#444444",
			"--gray-6": "#1a1a1a"
		} } } },
		typography: { fontFamily: "\"Inter\", sans-serif" }
	},
	teal: {
		palette: {
			primary: { main: "#009688" },
			error: { main: "#d32f2f" },
			success: { main: "#2e7d32" },
			warning: { main: "#ed6c02" },
			background: { default: "#ffffff" },
			common: {
				white: "#ffffff",
				black: "#000000"
			}
		},
		components: { MuiCssBaseline: { styleOverrides: { ":root": {
			"--primary-main": "#009688",
			"--primary-text": "white",
			"--error-main": "#d32f2f",
			"--success-main": "#2e7d32",
			"--warning-main": "#ed6c02",
			"--common-white": "#ffffff",
			"--common-black": "#000000",
			"--gray-1": "#505050",
			"--gray-2": "#e8e8e8",
			"--gray-3": "#f0f0f0",
			"--gray-4": "#cacaca",
			"--gray-5": "#eaeaea",
			"--gray-6": "#f9f9f9"
		} } } },
		typography: { fontFamily: "\"Inter\", sans-serif" }
	},
	orange: {
		palette: {
			primary: { main: "#e65100" },
			error: { main: "#d32f2f" },
			success: { main: "#2e7d32" },
			warning: { main: "#ed6c02" },
			background: { default: "#fff8f0" },
			common: {
				white: "#ffffff",
				black: "#000000"
			}
		},
		components: { MuiCssBaseline: { styleOverrides: { ":root": {
			"--primary-main": "#e65100",
			"--primary-text": "white",
			"--error-main": "#d32f2f",
			"--success-main": "#2e7d32",
			"--warning-main": "#ed6c02",
			"--common-white": "#ffffff",
			"--common-black": "#000000",
			"--gray-1": "#505050",
			"--gray-2": "#e8e8e8",
			"--gray-3": "#f0f0f0",
			"--gray-4": "#cacaca",
			"--gray-5": "#eaeaea",
			"--gray-6": "#f9f9f9"
		} } } },
		typography: { fontFamily: "\"Inter\", sans-serif" }
	},
	navyEstate: {
		palette: {
			primary: { main: "#003e69" },
			error: { main: "#d32f2f" },
			success: { main: "#2e7d32" },
			warning: { main: "#ed6c02" },
			background: { default: "#ffffff" },
			common: {
				white: "#ffffff",
				black: "#000000"
			}
		},
		components: { MuiCssBaseline: { styleOverrides: { ":root": {
			"--primary-main": "#003e69",
			"--primary-text": "white",
			"--error-main": "#d32f2f",
			"--success-main": "#2e7d32",
			"--warning-main": "#ed6c02",
			"--common-white": "#ffffff",
			"--common-black": "#000000",
			"--gray-1": "#313131",
			"--gray-2": "#eeeeee",
			"--gray-3": "#f5f5f5",
			"--gray-4": "#cccccc",
			"--gray-5": "#e0e0e0",
			"--gray-6": "#fafafa"
		} } } },
		typography: { fontFamily: "\"Inter\", sans-serif" }
	},
	glacierTeal: {
		palette: {
			primary: { main: "#09779e" },
			error: { main: "#b0133a" },
			success: { main: "#077f4e" },
			warning: { main: "#c14701" },
			background: { default: "#ffffff" },
			common: {
				white: "#ffffff",
				black: "#000000"
			}
		},
		components: { MuiCssBaseline: { styleOverrides: { ":root": {
			"--primary-main": "#09779e",
			"--primary-text": "white",
			"--error-main": "#b0133a",
			"--success-main": "#077f4e",
			"--warning-main": "#c14701",
			"--common-white": "#ffffff",
			"--common-black": "#01151d",
			"--gray-1": "#56656b",
			"--gray-2": "#eaeff1",
			"--gray-3": "#f6f9fa",
			"--gray-4": "#ced5d8",
			"--gray-5": "#dfe5e8",
			"--gray-6": "#f6f9fa"
		} } } },
		typography: { fontFamily: "\"Inter\", sans-serif" }
	}
}, z = {
	accordionContainer: "_accordionContainer_1sy4c_1",
	accordionHeader: "_accordionHeader_1sy4c_5",
	accordionContent: "_accordionContent_1sy4c_10",
	chevronOpen: "_chevronOpen_1sy4c_14",
	chevronClosed: "_chevronClosed_1sy4c_19"
}, Xe = ({ title: t, children: n, defaultOpen: r = !0 }) => {
	let [i, a] = e.useState(r);
	return /* @__PURE__ */ P(d, {
		className: z.accordionContainer,
		children: [/* @__PURE__ */ P(k, {
			direction: "row",
			sx: {
				justifyContent: "space-between",
				alignItems: "center"
			},
			className: z.accordionHeader,
			onClick: () => a(!i),
			children: [/* @__PURE__ */ N(j, {
				variant: "body2",
				sx: { fontWeight: "medium" },
				children: t
			}), /* @__PURE__ */ N(Se, {
				className: i ? z.chevronOpen : z.chevronClosed,
				fontSize: "small"
			})]
		}), i && /* @__PURE__ */ N(d, {
			className: z.accordionContent,
			children: n
		})]
	});
};
//#endregion
//#region src/components/Autocomplete/icons/ChevronUpDownIcon.tsx
function Ze() {
	return /* @__PURE__ */ P("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ N("path", { d: "m7 15 5 5 5-5" }), /* @__PURE__ */ N("path", { d: "m7 9 5-5 5 5" })]
	});
}
//#endregion
//#region src/components/Autocomplete/icons/CheckIcon.tsx
function Qe() {
	return /* @__PURE__ */ N("svg", {
		viewBox: "0 0 16 16",
		fill: "currentColor",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ N("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
		})
	});
}
//#endregion
//#region src/components/Autocomplete/useAutoCompleteController.ts
var $e = ({ options: e, value: t, onChange: n, ref: r }) => {
	let [a, l] = c(!1), [u, d] = c(""), f = s(null);
	i(r, () => ({ focus: () => {
		f.current && f.current.focus();
	} }));
	let p = o(() => e.find((e) => String(e.value) === String(t))?.label, [t, e]);
	return {
		matches: o(() => {
			if (!u) return e;
			let n = De(e, u, { keys: ["label", "value"] }), r = e.find((e) => e.value === t);
			return r && !n.includes(r) && n.push(r), n;
		}, [
			u,
			t,
			e
		]),
		open: a,
		setOpen: l,
		searchValue: u,
		setSearchValue: d,
		selectedLabel: p
	};
}, B = {
	wrapper: "_wrapper_3c5hj_1",
	label: "_label_3c5hj_11",
	"input-wrapper": "_input-wrapper_3c5hj_17",
	combobox: "_combobox_3c5hj_24",
	"toggle-button": "_toggle-button_3c5hj_55",
	listbox: "_listbox_3c5hj_72",
	item: "_item_3c5hj_91",
	"item-text": "_item-text_3c5hj_130",
	"item-indicator": "_item-indicator_3c5hj_134"
}, V = n(({ value: e, onChange: t, options: n, placeholder: r, label: i }, a) => {
	let { matches: o, open: s, setOpen: c, searchValue: l, setSearchValue: u, selectedLabel: d } = $e({
		options: n,
		value: e,
		onChange: t,
		ref: a
	});
	return /* @__PURE__ */ P("div", {
		className: B.wrapper,
		children: [i && /* @__PURE__ */ N("label", {
			className: B.label,
			children: i
		}), /* @__PURE__ */ P(Ee, {
			open: s,
			setOpen: c,
			resetValueOnHide: !0,
			value: l,
			setValue: u,
			children: [/* @__PURE__ */ P("div", {
				className: B["input-wrapper"],
				children: [/* @__PURE__ */ N(Ce, {
					placeholder: d || r || "Select...",
					className: B.combobox,
					autoSelect: !0
				}), /* @__PURE__ */ N("button", {
					type: "button",
					className: B["toggle-button"],
					onClick: () => c(!s),
					tabIndex: -1,
					children: /* @__PURE__ */ N(Ze, {})
				})]
			}), s && o.length > 0 && /* @__PURE__ */ N(Te, {
				className: B.listbox,
				children: o.map(({ label: n, value: r }) => /* @__PURE__ */ P(we, {
					className: B.item,
					onClick: () => {
						t(r), c(!1);
					},
					children: [/* @__PURE__ */ N("span", {
						className: B["item-text"],
						children: n
					}), String(r) === String(e) && /* @__PURE__ */ N("span", {
						className: B["item-indicator"],
						children: /* @__PURE__ */ N(Qe, {})
					})]
				}, r))
			})]
		})]
	});
});
V.displayName = "Autocomplete";
//#endregion
//#region src/components/Box/Box.ts
var et = d, tt = {
	breadcrumb: "_breadcrumb_1ge7e_1",
	"breadcrumb-item": "_breadcrumb-item_1ge7e_11"
}, nt = ({ breadcrumbs: e, onBreadcrumbClick: t }) => /* @__PURE__ */ N(d, {
	className: tt.breadcrumb,
	children: e.map((n, r) => /* @__PURE__ */ P(d, {
		onClick: r < e.length - 1 ? () => t(n.id, r) : void 0,
		className: tt["breadcrumb-item"],
		children: [/* @__PURE__ */ N(j, {
			variant: "body2",
			children: n.name
		}), /* @__PURE__ */ N(d, { children: r < e.length - 1 && /* @__PURE__ */ N(j, {
			variant: "body2",
			children: "/"
		}) })]
	}, n.id ? `${n.name}-${n.id}` : `crumb-${r}`))
}), H = {
	button: "_button_9cnxv_1",
	"button-secondary": "_button-secondary_9cnxv_17",
	"button-outlined": "_button-outlined_9cnxv_22",
	"button-small": "_button-small_9cnxv_30",
	"button-medium": "_button-medium_9cnxv_35",
	"button-large": "_button-large_9cnxv_40",
	"button-text": "_button-text_9cnxv_45"
}, U = /* @__PURE__ */ function(e) {
	return e.outlined = "outlined", e.primary = "primary", e.secondary = "secondary", e.text = "text", e;
}({}), W = /* @__PURE__ */ function(e) {
	return e.small = "small", e.medium = "medium", e.large = "large", e;
}({}), G = n(({ category: e = "primary", className: t, height: n = "large", ...r }, i) => {
	let a = "contained";
	return e === "outlined" && (a = "outlined"), e === "text" && (a = "text"), /* @__PURE__ */ N(f, {
		...r,
		variant: r.variant ?? a,
		disableRipple: r.disableRipple ?? e === "text",
		ref: i,
		className: F(H[`button-${e}`], H[`button-${n}`], H.button, t)
	});
});
G.displayName = "Button";
//#endregion
//#region src/components/Icon/Icon.tsx
var rt = /* @__PURE__ */ function(e) {
	return e.THREE_D = "3d", e.AUDIO = "audio", e.BOX_CANVAS = "box-canvas", e.BOX_NOTE = "box-note", e.DOCUMENT = "document", e.DRAWING = "drawing", e.FILE = "file", e.FOLDER = "folder", e.IMAGE = "image", e.PDF = "pdf", e.PRESENTATION = "presentation", e.SPREADSHEET = "spreadsheet", e.VIDEO = "video", e;
}({}), it = ({ iconKey: e, width: t = 24, height: n = 24, className: r, style: i, basePath: a = "/assets/icons/" }) => {
	let o = `${a}${e}.svg`;
	return /* @__PURE__ */ N("img", {
		src: o,
		alt: `${e} icon`,
		width: t,
		height: n,
		className: r,
		style: {
			width: t,
			height: n,
			...i
		}
	});
}, at = {
	checkboxLabel: "_checkboxLabel_1cuf9_1",
	checkbox: "_checkbox_1cuf9_1"
}, ot = ({ label: e, checked: t, onChange: n, iconKey: r }) => /* @__PURE__ */ P("label", {
	className: at.checkboxLabel,
	children: [
		/* @__PURE__ */ N(m, {
			size: "small",
			checked: t,
			className: at.checkbox,
			onChange: (e) => n(e.target.checked)
		}),
		r && /* @__PURE__ */ N(it, { iconKey: r }),
		/* @__PURE__ */ N(j, {
			variant: "body2",
			children: e
		})
	]
}), st = k, ct = {
	typography: "_typography_b7f5k_1",
	bold: "_bold_b7f5k_4",
	error: "_error_b7f5k_7",
	success: "_success_b7f5k_10",
	warning: "_warning_b7f5k_13"
}, K = ({ variant: e = "body1", bold: t = !1, state: n, children: r, ...i }) => {
	let a = [
		ct.typography,
		t ? ct.bold : "",
		n ? ct[n] : "",
		i.className || ""
	].join(" ");
	return /* @__PURE__ */ N(j, {
		variant: e,
		...i,
		className: a,
		children: r
	});
}, lt = {
	label: "_label_1r3bj_1",
	input: "_input_1r3bj_5"
}, ut = n(({ id: e, label: t, value: n, className: i, ...a }, o) => {
	let s = r(), c = e ?? s;
	return /* @__PURE__ */ P(st, {
		direction: "row",
		spacing: 2,
		useFlexGap: !0,
		sx: {
			alignItems: "center",
			flexWrap: "wrap"
		},
		children: [
			/* @__PURE__ */ N("label", {
				htmlFor: c,
				className: lt.label,
				children: /* @__PURE__ */ N(K, {
					component: "span",
					variant: "body1",
					children: t
				})
			}),
			/* @__PURE__ */ N("input", {
				...a,
				ref: o,
				id: c,
				type: "color",
				value: n,
				className: [lt.input, i].filter(Boolean).join(" ")
			}),
			/* @__PURE__ */ N(K, {
				variant: "body2",
				sx: { color: "text.secondary" },
				children: n
			})
		]
	});
});
ut.displayName = "ColorField";
var dt = {
	skeleton: "_skeleton_1ioze_1",
	pulse: "_pulse_1ioze_1"
};
//#endregion
//#region src/components/LoadingContent/LoadingContent.tsx
function ft() {
	return /* @__PURE__ */ N(k, {
		direction: "column",
		spacing: 2,
		sx: {
			maxWidth: "100%",
			width: "100%",
			minWidth: 0
		},
		children: [...[
			,
			,
			,
			,
			,
		]].map((e, t) => /* @__PURE__ */ N(d, {
			className: dt.skeleton,
			sx: {
				height: "24px",
				bgcolor: "grey.300",
				borderRadius: 1
			}
		}, t))
	});
}
//#endregion
//#region src/components/EmptyContent/EmptyContent.tsx
function pt({ message: e, isVisible: t, style: n }) {
	return t ? /* @__PURE__ */ N(d, {
		sx: {
			textAlign: "center",
			minWidth: 0,
			maxWidth: "100%",
			boxSizing: "border-box",
			overflowWrap: "anywhere",
			fontSize: "21px",
			fontWeight: "bolder",
			border: "1px dashed var(--gray-1)",
			padding: "20px",
			borderRadius: "5px",
			backgroundColor: "var(--gray-2)",
			...n || {}
		},
		children: e
	}) : null;
}
var q = {
	container: "_container_4w464_1",
	"table-container": "_table-container_4w464_5",
	table: "_table_4w464_5",
	"table-row": "_table-row_4w464_22",
	"table-row-selected": "_table-row-selected_4w464_30",
	"table-row-current": "_table-row-current_4w464_34",
	title: "_title_4w464_50",
	"header-item": "_header-item_4w464_54",
	"body-item-default": "_body-item-default_4w464_64",
	"body-item-approved": "_body-item-approved_4w464_65",
	"body-item-declined": "_body-item-declined_4w464_66",
	"body-item-pending": "_body-item-pending_4w464_67",
	"header-cell": "_header-cell_4w464_88",
	"cell-content": "_cell-content_4w464_96",
	"sort-button": "_sort-button_4w464_131"
}, mt = ke.default ?? ke, J = (...e) => (t) => e.forEach((e) => e?.(t)), ht = ({ activeRowIndex: e, "aria-label": n, columns: r, emptyTableMessage: i = "No data available", getRowId: o, getRowProps: c, isLoading: l = !1, onActiveRowChange: u, onPageChange: f, onRowHover: p, pageStatusLabel: m, pagination: h, selectedPage: g = 0, selectedRows: ee, title: _ }) => {
	let v = s(null), y = s(e), b = s(null), x = h?.entries || [], S = h?.limit ? Math.ceil(h.totalCount / h.limit) : 1, C = e !== void 0, w = n ?? _, T = e != null && e >= 0 && e < x.length ? e : 0, E = e == null ? void 0 : x[e], D = E && e != null ? o?.(E, e) : void 0;
	a(() => {
		let t = y.current !== e;
		if (l || (y.current = e, e == null)) return;
		let n = v.current, r = n?.tBodies[0]?.rows[e];
		if (!n || !r) return;
		let i = document.activeElement, a = !i || i === document.body;
		(i && n.contains(i) && !r.contains(i) || a && t) && (r.focus({ preventScroll: !0 }), r.scrollIntoView({ block: "nearest" }));
	}, [
		e,
		D,
		l
	]);
	let O = m !== void 0 && /* @__PURE__ */ N(d, {
		"aria-live": "polite",
		sx: Oe,
		"data-testid": "data-table-page-status",
		children: m
	});
	if (l) return /* @__PURE__ */ P(M, { children: [O, /* @__PURE__ */ N(ft, {})] });
	if (h?.totalCount === 0) return /* @__PURE__ */ P(M, { children: [O, /* @__PURE__ */ N(pt, {
		isVisible: !0,
		message: i
	})] });
	let te = (e, t) => e.render ? /* @__PURE__ */ N("div", {
		className: q["cell-content"],
		children: e.render(t[e.name], t)
	}) : /* @__PURE__ */ N(j, {
		variant: "body2",
		sx: { color: "text.secondary" },
		children: String(t[e.name])
	}), ne = (e) => e === "end" ? "right" : e === "center" ? "center" : "left";
	return /* @__PURE__ */ P(M, { children: [O, /* @__PURE__ */ N(d, {
		className: q.container,
		children: /* @__PURE__ */ P(d, {
			className: q.table,
			children: [
				_ && /* @__PURE__ */ N(j, {
					className: q.title,
					children: _
				}),
				/* @__PURE__ */ N(pe, {
					component: ae,
					elevation: 0,
					className: q["table-container"],
					tabIndex: C ? void 0 : 0,
					role: "region",
					"aria-label": w ? `${w} table` : "Data table",
					children: /* @__PURE__ */ P(ue, {
						ref: v,
						"aria-label": w ?? "data table",
						size: "medium",
						children: [/* @__PURE__ */ N(me, { children: /* @__PURE__ */ N(he, { children: r.map((e, t) => /* @__PURE__ */ N(fe, {
							align: ne(e.justify),
							className: q["header-cell"],
							sortDirection: e.onSort ? e.sortDirection ?? !1 : !1,
							children: /* @__PURE__ */ N(d, {
								className: q["header-item"],
								children: e.onSort ? /* @__PURE__ */ N(ge, {
									component: "button",
									type: "button",
									active: !!e.sortDirection,
									direction: e.sortDirection ?? "asc",
									onClick: e.onSort,
									className: q["sort-button"],
									"data-testid": `data-table-sort-${String(e.name)}-button`,
									children: e.header
								}) : /* @__PURE__ */ P(M, { children: [e.header, e.icon] })
							})
						}, t)) }) }), /* @__PURE__ */ N(de, { children: x.map((n, i) => {
							let a = o?.(n, i), s = !!ee?.includes(a ?? n.id), l = i === e, { className: f, onClick: m, onFocus: h, onMouseLeave: g, onMouseOver: _, onPointerDown: v, ...y } = c?.(n, i, {
								isActive: l,
								isSelected: s
							}) ?? {}, x = i === T, S = (e, t) => e === "status" && t.status?.toLowerCase() || "default";
							return /* @__PURE__ */ t(he, {
								...y,
								key: a ?? i,
								tabIndex: C ? x ? 0 : -1 : void 0,
								"aria-current": l ? "true" : void 0,
								onPointerDown: J(v, () => {
									b.current = null;
								}),
								onFocus: J(h, (e) => {
									e.target === e.currentTarget && (b.current = i, u?.(i));
								}),
								onClick: J(m, () => {
									let e = b.current === i;
									b.current = null, e || u?.(i);
								}),
								onMouseOver: J(_, () => p?.(n)),
								onMouseLeave: J(g, () => p?.(void 0)),
								className: F(q["table-row"], f, {
									[q["table-row-selected"]]: s,
									[q["table-row-current"]]: l
								})
							}, r.map((e, t) => /* @__PURE__ */ N(fe, {
								align: ne(e.justify),
								children: /* @__PURE__ */ N(d, {
									className: q[`body-item-${S(e.name, n)}`],
									children: te(e, n)
								})
							}, t)));
						}) })]
					})
				}),
				S > 1 && /* @__PURE__ */ N(mt, {
					containerClassName: "box-bridge-pagination",
					pageRangeDisplayed: 2,
					marginPagesDisplayed: 1,
					breakLabel: "...",
					nextLabel: "next >",
					onPageChange: f,
					forcePage: g,
					disableInitialCallback: !0,
					pageCount: S,
					previousLabel: "< previous"
				})
			]
		})
	})] });
}, Y = {
	drawer: "_drawer_jr4qi_1",
	drawerHeader: "_drawerHeader_jr4qi_18",
	title: "_title_jr4qi_24",
	closeButton: "_closeButton_jr4qi_29",
	drawerContent: "_drawerContent_jr4qi_34",
	drawerFooter: "_drawerFooter_jr4qi_40",
	drawerLayout: "_drawerLayout_jr4qi_55"
}, gt = ({ isOpen: e, headerTitle: t, onClose: n, onSave: r, saveLabel: i, children: a, onCancel: o, cancelLabel: s }) => /* @__PURE__ */ N(C, {
	anchor: "right",
	open: e,
	onClose: n,
	classes: { paper: Y.drawer },
	children: /* @__PURE__ */ P(k, {
		direction: "column",
		className: Y.drawerLayout,
		children: [
			/* @__PURE__ */ P(k, {
				direction: "row",
				sx: {
					justifyContent: "space-between",
					alignItems: "center"
				},
				className: Y.drawerHeader,
				children: [/* @__PURE__ */ N(j, {
					variant: "h6",
					className: Y.title,
					children: t
				}), /* @__PURE__ */ N(D, {
					size: "small",
					"aria-label": "Close drawer",
					onClick: n,
					className: Y.closeButton,
					children: /* @__PURE__ */ N(je, { fontSize: "small" })
				})]
			}),
			/* @__PURE__ */ N(d, {
				className: Y.drawerContent,
				children: a
			}),
			/* @__PURE__ */ P(k, {
				direction: {
					xs: "column",
					sm: "row"
				},
				spacing: 1,
				sx: { justifyContent: "flex-end" },
				className: Y.drawerFooter,
				children: [o && /* @__PURE__ */ N(G, {
					category: U.outlined,
					height: W.small,
					onClick: o,
					children: s || "Cancel"
				}), /* @__PURE__ */ N(G, {
					height: W.small,
					onClick: r,
					children: i || "Save"
				})]
			})
		]
	})
});
//#endregion
//#region src/components/Form/Form.tsx
function _t({ children: e, customSaveButtonText: t, disabled: n, onCancel: r, onCancelText: i, onSave: a, submitOnModEnter: o = !0 }) {
	let c = s(null);
	return /* @__PURE__ */ N("form", {
		ref: c,
		onSubmit: (e) => {
			e.preventDefault(), a && a(e);
		},
		onKeyDown: (e) => {
			let t = c.current, r = e.key === "Enter" && (e.metaKey || e.ctrlKey), i = e.nativeEvent.isComposing || e.keyCode === 229;
			o && r && !i && !e.repeat && !n && a && t && e.target instanceof Node && t.contains(e.target) && (e.preventDefault(), e.stopPropagation(), t.requestSubmit());
		},
		style: {
			width: "100%",
			minWidth: 0
		},
		children: /* @__PURE__ */ P(d, { children: [/* @__PURE__ */ N(d, {
			sx: {
				width: "100%",
				minWidth: 0
			},
			children: e
		}), /* @__PURE__ */ N(k, {
			direction: "row",
			sx: {
				justifyContent: "flex-end",
				mt: "18px"
			},
			children: /* @__PURE__ */ P(k, {
				direction: {
					xs: "column",
					sm: "row"
				},
				spacing: 2,
				sx: {
					width: {
						xs: "100%",
						sm: "auto"
					},
					"& .MuiButton-root": { width: {
						xs: "100%",
						sm: "auto"
					} }
				},
				children: [r ? /* @__PURE__ */ N(G, {
					height: W.medium,
					category: U.secondary,
					onClick: r,
					children: i || "Cancel"
				}) : null, /* @__PURE__ */ N(d, { children: /* @__PURE__ */ N(G, {
					type: "submit",
					height: W.medium,
					disabled: n,
					children: t ?? "Save"
				}) })]
			})
		})] })
	});
}
//#endregion
//#region src/components/IconButton/IconButton.ts
var vt = D, yt = O, X = {
	kbd: "_kbd_1o8yl_1",
	small: "_small_1o8yl_16",
	medium: "_medium_1o8yl_23",
	default: "_default_1o8yl_30",
	inverse: "_inverse_1o8yl_36",
	shortcut: "_shortcut_1o8yl_43",
	"combo-mac": "_combo-mac_1o8yl_49",
	separator: "_separator_1o8yl_54",
	"combo-separator": "_combo-separator_1o8yl_57",
	"alternative-separator": "_alternative-separator_1o8yl_57",
	"sequence-separator": "_sequence-separator_1o8yl_60"
}, bt = ({ children: e, size: t = "medium", tone: n = "default" }) => /* @__PURE__ */ N("kbd", {
	"aria-hidden": !0,
	className: F(X.kbd, X[t], X[n]),
	children: e
});
function xt({ children: e, label: t, size: n = "medium", tone: r = "default", "data-testid": i, className: a }) {
	return /* @__PURE__ */ P("span", {
		className: a,
		"data-testid": i,
		children: [/* @__PURE__ */ N(bt, {
			size: n,
			tone: r,
			children: e
		}), /* @__PURE__ */ N("span", {
			style: Oe,
			children: t
		})]
	});
}
//#endregion
//#region src/components/Kbd/KbdShortcut.tsx
var St = (e, t) => e.keys.map((e) => e.label).join(e.kind === "sequence" ? ` ${t} ` : " ");
function Ct({ shortcuts: t, isMac: n, thenLabel: r, orLabel: i, size: a = "medium", tone: o = "default", "data-testid": s }) {
	let c = (e, t) => /* @__PURE__ */ N(K, {
		component: "span",
		variant: "caption",
		className: F(X.separator, X[t]),
		sx: { color: o === "inverse" ? "rgba(255, 255, 255, 0.7)" : "text.secondary" },
		children: e
	}), l = (t) => {
		let i = t.keys.map((i, s) => /* @__PURE__ */ P(e.Fragment, { children: [
			s > 0 && t.kind === "sequence" && c(r, "sequence-separator"),
			s > 0 && t.kind === "combo" && !n && c("+", "combo-separator"),
			/* @__PURE__ */ N(bt, {
				size: a,
				tone: o,
				children: i.glyph
			})
		] }, s));
		return t.kind === "combo" && n ? /* @__PURE__ */ N("span", {
			className: X["combo-mac"],
			children: i
		}) : i;
	}, u = t.map((e) => St(e, r)).join(` ${i} `);
	return /* @__PURE__ */ P("span", {
		className: X.shortcut,
		"data-testid": s,
		children: [/* @__PURE__ */ N("span", {
			"aria-hidden": !0,
			className: X.shortcut,
			children: t.map((t, n) => /* @__PURE__ */ P(e.Fragment, { children: [n > 0 && c("/", "alternative-separator"), l(t)] }, n))
		}), /* @__PURE__ */ N("span", {
			style: Oe,
			children: u
		})]
	});
}
//#endregion
//#region src/components/Link/Link.tsx
var wt = ({ children: e, sx: t, ...n }) => /* @__PURE__ */ N(ne, {
	...n,
	sx: [{
		fontSize: "12px",
		overflowWrap: "anywhere"
	}, ...Array.isArray(t) ? t : [t]],
	underline: n.underline ?? "hover",
	color: n.color ?? "primary",
	children: e
}), Tt = {
	menu: "_menu_k6frm_1",
	"menu-container": "_menu-container_k6frm_5",
	"menu-item": "_menu-item_k6frm_12"
}, Et = ({ anchorEl: e, children: t, menuItems: n, onClose: r, ...i }) => /* @__PURE__ */ N(re, {
	...i,
	open: !!e,
	className: Tt.menu,
	anchorEl: e,
	onClose: r,
	children: /* @__PURE__ */ P(d, {
		className: Tt["menu-container"],
		children: [n?.map((e, t) => /* @__PURE__ */ N(ie, {
			className: Tt["menu-item"],
			onClick: () => {
				e.onClick(), r();
			},
			children: /* @__PURE__ */ N(j, { children: e.label })
		}, t)), t]
	})
}), Z = {
	modal: "_modal_1lbj6_1",
	"modal-title": "_modal-title_1lbj6_5",
	"modal-content": "_modal-content_1lbj6_14",
	"modal-actions": "_modal-actions_1lbj6_21"
}, Dt = { color: (e) => e.palette.mode === "dark" ? e.palette.text.primary : e.palette.common.black };
function Ot({ open: e, onClose: t, children: n, title: r, maxWidth: i = "420px", actions: a, "data-testid": o }) {
	let s = {
		sx: {
			maxWidth: i,
			width: "calc(100% - 32px)",
			m: "16px",
			maxHeight: "calc(100dvh - 32px)",
			boxSizing: "border-box",
			minWidth: 0
		},
		className: Z.modal,
		"data-testid": o
	};
	return /* @__PURE__ */ P(_, {
		open: e,
		onClose: t,
		slotProps: { paper: s },
		children: [
			/* @__PURE__ */ N(x, {
				className: Z["modal-title"],
				sx: Dt,
				children: r
			}),
			/* @__PURE__ */ N(y, { children: /* @__PURE__ */ N(d, {
				className: Z["modal-content"],
				sx: Dt,
				children: n
			}) }),
			a && /* @__PURE__ */ N(v, {
				className: Z["modal-actions"],
				children: a
			})
		]
	});
}
var kt = {
	radioLabel: "_radioLabel_14kp5_1",
	radio: "_radio_14kp5_1"
}, At = ({ label: e, name: t, checked: n, onChange: r }) => /* @__PURE__ */ P("label", {
	className: kt.radioLabel,
	children: [/* @__PURE__ */ N(oe, {
		name: t,
		size: "small",
		className: kt.radio,
		checked: n,
		onChange: r
	}), /* @__PURE__ */ N(j, {
		variant: "body2",
		children: e
	})]
}), Q = {
	spinner: "_spinner_clksx_1",
	bounce: "_bounce_clksx_17",
	bounce1: "_bounce1_clksx_17",
	bounce2: "_bounce2_clksx_21",
	small: "_small_clksx_25",
	large: "_large_clksx_30"
}, jt = ({ size: e = "medium" }) => /* @__PURE__ */ P("div", {
	className: `${Q.spinner} ${Q[e]}`,
	children: [
		/* @__PURE__ */ N("div", { className: Q.bounce1 }),
		/* @__PURE__ */ N("div", { className: Q.bounce2 }),
		/* @__PURE__ */ N("div", { className: Q.bounce3 })
	]
}), $ = {
	ToastViewport: "_ToastViewport_m2sj3_1",
	ToastRoot: "_ToastRoot_m2sj3_11",
	ToastTitle: "_ToastTitle_m2sj3_23",
	ToastDescription: "_ToastDescription_m2sj3_24",
	ToastClose: "_ToastClose_m2sj3_25"
};
//#endregion
//#region src/components/Toast/Toast.tsx
function Mt({ open: e, title: t, message: n, severity: r = "info", onClose: i, autoHideDuration: a = 3e3, "data-testid": o }) {
	return /* @__PURE__ */ N(le, {
		open: e,
		autoHideDuration: a,
		onClose: i,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "right"
		},
		className: $.ToastViewport,
		children: /* @__PURE__ */ P(l, {
			severity: r,
			className: $.ToastRoot,
			"data-testid": o,
			action: /* @__PURE__ */ N(D, {
				size: "small",
				"aria-label": "close",
				color: "inherit",
				onClick: i,
				className: $.ToastClose,
				children: /* @__PURE__ */ N(je, { fontSize: "small" })
			}),
			children: [t && /* @__PURE__ */ N(u, {
				className: $.ToastTitle,
				children: t
			}), n && /* @__PURE__ */ N("div", {
				className: $.ToastDescription,
				children: n
			})]
		})
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.ts
var Nt = ve, Pt = A, Ft = _, It = x, Lt = y, Rt = b, zt = v, Bt = ie, Vt = S, Ht = l, Ut = w, Wt = T, Gt = te, Kt = ae, qt = h, Jt = p, Yt = oe, Xt = se, Zt = g, Qt = m, $t = ce, en = ({ name: e, control: t, required: n, options: r = [], withObjectValue: i = !0, ...a }) => /* @__PURE__ */ N(I, {
	name: e,
	control: t,
	rules: { required: n && "This field is required" },
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ N(V, {
		options: r,
		onChange: (t) => {
			let n = typeof t == "object", r = t;
			!i && n && (r = t.id), e(r);
		},
		value: t || null,
		...a
	})
}), tn = ({ name: e, control: t, required: n, fieldTitle: r, accept: i, existingFileName: a }) => /* @__PURE__ */ N(I, {
	name: e,
	control: t,
	rules: { required: n && !a && "This field is required" },
	render: ({ field: { onChange: e }, fieldState: { error: t } }) => /* @__PURE__ */ P(k, {
		direction: "column",
		sx: {
			alignItems: "flex-start",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [
			r && /* @__PURE__ */ N(j, {
				sx: {
					color: "text.secondary",
					fontSize: "14px",
					fontWeight: 700,
					mb: "8px",
					mt: "4px"
				},
				children: r
			}),
			/* @__PURE__ */ N("input", {
				type: "file",
				onChange: (t) => {
					e(t.target.files?.[0] || null);
				},
				accept: i,
				style: {
					display: "block",
					boxSizing: "border-box",
					width: "100%",
					minWidth: 0,
					maxWidth: "100%",
					padding: "8px",
					border: "1px solid #ddd",
					borderRadius: "4px",
					background: "#f9f9f9",
					cursor: "pointer"
				}
			}),
			a && /* @__PURE__ */ P(j, {
				sx: {
					color: "text.secondary",
					fontSize: "12px",
					mt: "4px"
				},
				children: ["Selected file: ", a]
			}),
			t && /* @__PURE__ */ N(j, {
				color: "error",
				sx: {
					fontSize: "12px",
					mt: "4px"
				},
				children: t.message
			})
		]
	})
}), nn = ({ name: e, control: t, fieldTitle: n, options: r, onValueChange: i }) => /* @__PURE__ */ N(I, {
	name: e,
	control: t,
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ P(d, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			flexDirection: "column",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [n && /* @__PURE__ */ N(j, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				marginBottom: "8px",
				marginTop: "4px"
			},
			children: n
		}), /* @__PURE__ */ N(w, {
			sx: { width: "100%" },
			children: /* @__PURE__ */ N(se, {
				value: t,
				onChange: (t) => {
					e(t.target.value), i?.(t.target.value);
				},
				children: r.map((e) => /* @__PURE__ */ N(T, {
					value: e.value,
					control: /* @__PURE__ */ N(oe, {}),
					label: e.label,
					sx: { marginBottom: "8px" }
				}, e.value))
			})
		})]
	})
}), rn = ({ control: e, name: t, fieldTitle: n, placeholder: r, required: i, options: a }) => /* @__PURE__ */ N(I, {
	control: e,
	name: t,
	rules: { required: i && "This field is required" },
	render: ({ field: { onChange: e, value: t }, fieldState: { error: i } }) => /* @__PURE__ */ P(k, {
		direction: "column",
		sx: {
			alignItems: "flex-start",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [n && /* @__PURE__ */ N(j, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				mb: "8px",
				mt: "4px"
			},
			children: n
		}), /* @__PURE__ */ P(w, {
			fullWidth: !0,
			error: !!i,
			children: [
				r && /* @__PURE__ */ N(te, { children: r }),
				/* @__PURE__ */ N(ce, {
					value: t || "",
					onChange: e,
					displayEmpty: !r,
					renderValue: !t && !r ? () => "Select..." : void 0,
					children: a.map((e) => /* @__PURE__ */ N(ie, {
						value: e.value,
						children: e.label
					}, e.value))
				}),
				i && /* @__PURE__ */ N(E, {
					error: !0,
					children: i.message
				})
			]
		})]
	})
}), an = ({ name: e, control: t, required: n, fieldTitle: r, placeholder: i, ...a }) => /* @__PURE__ */ N(I, {
	name: e,
	control: t,
	rules: { required: n && "This field is required" },
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ P(d, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "baseline",
			flexDirection: "column",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [r && /* @__PURE__ */ N(j, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				marginBottom: "8px",
				marginTop: "4px"
			},
			children: r
		}), /* @__PURE__ */ N(A, {
			placeholder: i,
			onChange: e,
			value: t,
			required: n,
			multiline: !0,
			rows: 4,
			fullWidth: !0,
			sx: {
				width: "100%",
				minWidth: 0,
				overflowWrap: "anywhere",
				"& .MuiInputBase-root": { minHeight: "100px" }
			},
			...a
		})]
	})
}), on = {
	container: "_container_1x4tm_1",
	title: "_title_1x4tm_8"
}, sn = ({ control: e, disabled: t, fieldTitle: n, name: r, placeholder: i, required: a, type: o, ...s }) => /* @__PURE__ */ N(I, {
	name: r,
	control: e,
	rules: { required: a && "This field is required" },
	render: ({ field: { onChange: e, value: r } }) => /* @__PURE__ */ P(d, {
		className: on.container,
		children: [n && /* @__PURE__ */ N(j, {
			className: on.title,
			variant: "body2",
			children: n
		}), /* @__PURE__ */ N(A, {
			placeholder: i,
			onChange: e,
			value: r,
			required: a,
			disabled: t,
			fullWidth: !0,
			variant: "outlined",
			size: "medium",
			type: o,
			...s
		})]
	})
});
//#endregion
export { Xe as Accordion, Me as AddIcon, Ht as Alert, V as Autocomplete, en as AutocompleteController, et as Box, Je as BoxBridgeThemeProvider, nt as Breadcrumb, G as Button, U as ButtonCategory, W as ButtonHeight, Jt as Card, ot as Checkbox, qt as Chip, Zt as CircularProgress, Ne as ClearIcon, Ae as CloseIcon, ut as ColorField, ht as DataTable, Pe as DeleteIcon, Fe as DeleteOutlineIcon, Ft as Dialog, zt as DialogActions, Lt as DialogContent, Rt as DialogContentText, It as DialogTitle, Vt as Divider, gt as Drawer, Ie as EditIcon, pt as EmptyContent, tn as FileInputController, _t as Form, Ut as FormControl, Wt as FormControlLabel, it as Icon, vt as IconButton, rt as IconKey, yt as InputAdornment, Gt as InputLabel, xt as Kbd, Ct as KbdShortcut, wt as Link, ft as LoadingContent, Et as Menu, Le as MenuIcon, Bt as MenuItem, Ot as Modal, Re as MoreHorizIcon, Qt as MuiCheckbox, Kt as Paper, Yt as Radio, At as RadioButton, Xt as RadioGroup, nn as RadioGroupController, ze as SearchIcon, $t as Select, rn as SelectController, Be as SendIcon, Ve as SmartToyIcon, jt as Spinner, st as Stack, an as TextAreaController, Pt as TextField, sn as TextInputController, Mt as Toast, Nt as Tooltip, K as Typography, R as deepMerge, L as defaultTheme, Ye as themePresets };
