"use client";
import e, { createElement as t, forwardRef as n, useId as r, useImperativeHandle as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { Alert as l, AlertTitle as u, Box as d, Button as f, Card as p, Checkbox as m, Chip as h, CircularProgress as g, CssBaseline as ee, Dialog as _, DialogActions as v, DialogContent as y, DialogContentText as b, DialogTitle as x, Divider as S, Drawer as C, FormControl as w, FormControlLabel as T, FormHelperText as te, IconButton as E, InputAdornment as ne, InputLabel as re, Link as ie, Menu as ae, MenuItem as D, Paper as oe, Radio as O, RadioGroup as se, Select as ce, Snackbar as le, Stack as k, Table as ue, TableBody as de, TableCell as fe, TableContainer as pe, TableHead as me, TableRow as he, TextField as A, ThemeProvider as ge, Tooltip as _e, Typography as j, createTheme as ve } from "@mui/material";
import { decomposeColor as M, getContrastRatio as ye } from "@mui/material/styles";
import { Fragment as N, jsx as P, jsxs as F } from "react/jsx-runtime";
import be from "@mui/icons-material/ExpandMore";
import { Combobox as xe, ComboboxItem as Se, ComboboxList as Ce, ComboboxProvider as we } from "@ariakit/react";
import { matchSorter as Te } from "match-sorter";
import I from "classnames";
import Ee from "react-paginate";
import De, { default as Oe } from "@mui/icons-material/Close";
import ke from "@mui/icons-material/Add";
import Ae from "@mui/icons-material/Clear";
import je from "@mui/icons-material/Delete";
import Me from "@mui/icons-material/DeleteOutlineOutlined";
import Ne from "@mui/icons-material/Edit";
import Pe from "@mui/icons-material/MoreHoriz";
import Fe from "@mui/icons-material/Search";
import Ie from "@mui/icons-material/Send";
import Le from "@mui/icons-material/SmartToy";
import { Controller as L } from "react-hook-form";
//#region src/theme/defaultTheme.ts
var R = {
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
function z(e, t) {
	let n = { ...e };
	for (let r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
		let i = e[r], a = t[r];
		n[r] = i && a && typeof i == "object" && typeof a == "object" && !Array.isArray(i) && !Array.isArray(a) ? z(i, a) : a;
	}
	return n;
}
//#endregion
//#region src/theme/focusRing.ts
var Re = 3, ze = .12, Be = (e, t, n) => {
	let [r, i, a] = M(e).values, [o, s, c] = M(t).values, l = (e, t) => Math.round(t * n + e * (1 - n));
	return `rgb(${l(r, o)}, ${l(i, s)}, ${l(a, c)})`;
}, Ve = (e) => M(e).type.startsWith("rgb");
function He(e) {
	let t = e["--primary-main"], n = e["--gray-6"], r = e["--common-black"];
	if (!t || !n) return r;
	try {
		if (!Ve(t) || !Ve(n)) return r;
		let e = Be(n, t, ze);
		return ye(t, n) >= Re && ye(t, e) >= Re ? t : r;
	} catch {
		return r;
	}
}
function Ue(e) {
	let t = e.components?.MuiCssBaseline?.styleOverrides?.[":root"], n = t && He(t);
	return n ? z(e, { components: { MuiCssBaseline: { styleOverrides: { ":root": { "--focus-ring": n } } } } }) : e;
}
//#endregion
//#region src/theme/BoxBridgeThemeProvider.tsx
function We({ children: e, themeConfig: t }) {
	let n = o(() => {
		let e = t ? z(R, t) : R;
		return ve(Ue(e));
	}, [t]);
	return /* @__PURE__ */ F(ge, {
		theme: n,
		children: [/* @__PURE__ */ P(ee, {}), e]
	});
}
var Ge = {
	default: R,
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
}, B = {
	accordionContainer: "_accordionContainer_1sy4c_1",
	accordionHeader: "_accordionHeader_1sy4c_5",
	accordionContent: "_accordionContent_1sy4c_10",
	chevronOpen: "_chevronOpen_1sy4c_14",
	chevronClosed: "_chevronClosed_1sy4c_19"
}, Ke = ({ title: t, children: n, defaultOpen: r = !0 }) => {
	let [i, a] = e.useState(r);
	return /* @__PURE__ */ F(d, {
		className: B.accordionContainer,
		children: [/* @__PURE__ */ F(k, {
			direction: "row",
			sx: {
				justifyContent: "space-between",
				alignItems: "center"
			},
			className: B.accordionHeader,
			onClick: () => a(!i),
			children: [/* @__PURE__ */ P(j, {
				variant: "body2",
				sx: { fontWeight: "medium" },
				children: t
			}), /* @__PURE__ */ P(be, {
				className: i ? B.chevronOpen : B.chevronClosed,
				fontSize: "small"
			})]
		}), i && /* @__PURE__ */ P(d, {
			className: B.accordionContent,
			children: n
		})]
	});
};
//#endregion
//#region src/components/Autocomplete/icons/ChevronUpDownIcon.tsx
function qe() {
	return /* @__PURE__ */ F("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ P("path", { d: "m7 15 5 5 5-5" }), /* @__PURE__ */ P("path", { d: "m7 9 5-5 5 5" })]
	});
}
//#endregion
//#region src/components/Autocomplete/icons/CheckIcon.tsx
function Je() {
	return /* @__PURE__ */ P("svg", {
		viewBox: "0 0 16 16",
		fill: "currentColor",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ P("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
		})
	});
}
//#endregion
//#region src/components/Autocomplete/useAutoCompleteController.ts
var Ye = ({ options: e, value: t, onChange: n, ref: r }) => {
	let [a, l] = c(!1), [u, d] = c(""), f = s(null);
	i(r, () => ({ focus: () => {
		f.current && f.current.focus();
	} }));
	let p = o(() => e.find((e) => String(e.value) === String(t))?.label, [t, e]);
	return {
		matches: o(() => {
			if (!u) return e;
			let n = Te(e, u, { keys: ["label", "value"] }), r = e.find((e) => e.value === t);
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
}, V = {
	wrapper: "_wrapper_3c5hj_1",
	label: "_label_3c5hj_11",
	"input-wrapper": "_input-wrapper_3c5hj_17",
	combobox: "_combobox_3c5hj_24",
	"toggle-button": "_toggle-button_3c5hj_55",
	listbox: "_listbox_3c5hj_72",
	item: "_item_3c5hj_91",
	"item-text": "_item-text_3c5hj_130",
	"item-indicator": "_item-indicator_3c5hj_134"
}, H = n(({ value: e, onChange: t, options: n, placeholder: r, label: i }, a) => {
	let { matches: o, open: s, setOpen: c, searchValue: l, setSearchValue: u, selectedLabel: d } = Ye({
		options: n,
		value: e,
		onChange: t,
		ref: a
	});
	return /* @__PURE__ */ F("div", {
		className: V.wrapper,
		children: [i && /* @__PURE__ */ P("label", {
			className: V.label,
			children: i
		}), /* @__PURE__ */ F(we, {
			open: s,
			setOpen: c,
			resetValueOnHide: !0,
			value: l,
			setValue: u,
			children: [/* @__PURE__ */ F("div", {
				className: V["input-wrapper"],
				children: [/* @__PURE__ */ P(xe, {
					placeholder: d || r || "Select...",
					className: V.combobox,
					autoSelect: !0
				}), /* @__PURE__ */ P("button", {
					type: "button",
					className: V["toggle-button"],
					onClick: () => c(!s),
					tabIndex: -1,
					children: /* @__PURE__ */ P(qe, {})
				})]
			}), s && o.length > 0 && /* @__PURE__ */ P(Ce, {
				className: V.listbox,
				children: o.map(({ label: n, value: r }) => /* @__PURE__ */ F(Se, {
					className: V.item,
					onClick: () => {
						t(r), c(!1);
					},
					children: [/* @__PURE__ */ P("span", {
						className: V["item-text"],
						children: n
					}), String(r) === String(e) && /* @__PURE__ */ P("span", {
						className: V["item-indicator"],
						children: /* @__PURE__ */ P(Je, {})
					})]
				}, r))
			})]
		})]
	});
});
H.displayName = "Autocomplete";
//#endregion
//#region src/components/Box/Box.ts
var Xe = d, Ze = {
	breadcrumb: "_breadcrumb_1ge7e_1",
	"breadcrumb-item": "_breadcrumb-item_1ge7e_11"
}, Qe = ({ breadcrumbs: e, onBreadcrumbClick: t }) => /* @__PURE__ */ P(d, {
	className: Ze.breadcrumb,
	children: e.map((n, r) => /* @__PURE__ */ F(d, {
		onClick: r < e.length - 1 ? () => t(n.id, r) : void 0,
		className: Ze["breadcrumb-item"],
		children: [/* @__PURE__ */ P(j, {
			variant: "body2",
			children: n.name
		}), /* @__PURE__ */ P(d, { children: r < e.length - 1 && /* @__PURE__ */ P(j, {
			variant: "body2",
			children: "/"
		}) })]
	}, n.id ? `${n.name}-${n.id}` : `crumb-${r}`))
}), U = {
	button: "_button_9cnxv_1",
	"button-secondary": "_button-secondary_9cnxv_17",
	"button-outlined": "_button-outlined_9cnxv_22",
	"button-small": "_button-small_9cnxv_30",
	"button-medium": "_button-medium_9cnxv_35",
	"button-large": "_button-large_9cnxv_40",
	"button-text": "_button-text_9cnxv_45"
}, W = /* @__PURE__ */ function(e) {
	return e.outlined = "outlined", e.primary = "primary", e.secondary = "secondary", e.text = "text", e;
}({}), G = /* @__PURE__ */ function(e) {
	return e.small = "small", e.medium = "medium", e.large = "large", e;
}({}), K = n(({ category: e = "primary", className: t, height: n = "large", ...r }, i) => {
	let a = "contained";
	return e === "outlined" && (a = "outlined"), e === "text" && (a = "text"), /* @__PURE__ */ P(f, {
		...r,
		variant: r.variant ?? a,
		disableRipple: r.disableRipple ?? e === "text",
		ref: i,
		className: I(U[`button-${e}`], U[`button-${n}`], U.button, t)
	});
});
K.displayName = "Button";
//#endregion
//#region src/components/Icon/Icon.tsx
var $e = /* @__PURE__ */ function(e) {
	return e.THREE_D = "3d", e.AUDIO = "audio", e.BOX_CANVAS = "box-canvas", e.BOX_NOTE = "box-note", e.DOCUMENT = "document", e.DRAWING = "drawing", e.FILE = "file", e.FOLDER = "folder", e.IMAGE = "image", e.PDF = "pdf", e.PRESENTATION = "presentation", e.SPREADSHEET = "spreadsheet", e.VIDEO = "video", e;
}({}), et = ({ iconKey: e, width: t = 24, height: n = 24, className: r, style: i, basePath: a = "/assets/icons/" }) => {
	let o = `${a}${e}.svg`;
	return /* @__PURE__ */ P("img", {
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
}, tt = {
	checkboxLabel: "_checkboxLabel_1cuf9_1",
	checkbox: "_checkbox_1cuf9_1"
}, nt = ({ label: e, checked: t, onChange: n, iconKey: r }) => /* @__PURE__ */ F("label", {
	className: tt.checkboxLabel,
	children: [
		/* @__PURE__ */ P(m, {
			size: "small",
			checked: t,
			className: tt.checkbox,
			onChange: (e) => n(e.target.checked)
		}),
		r && /* @__PURE__ */ P(et, { iconKey: r }),
		/* @__PURE__ */ P(j, {
			variant: "body2",
			children: e
		})
	]
}), rt = {
	skeleton: "_skeleton_1ioze_1",
	pulse: "_pulse_1ioze_1"
};
//#endregion
//#region src/components/LoadingContent/LoadingContent.tsx
function it() {
	return /* @__PURE__ */ P(k, {
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
		]].map((e, t) => /* @__PURE__ */ P(d, {
			className: rt.skeleton,
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
function at({ message: e, isVisible: t, style: n }) {
	return t ? /* @__PURE__ */ P(d, {
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
	container: "_container_1iuux_1",
	"table-container": "_table-container_1iuux_5",
	table: "_table_1iuux_5",
	"table-row": "_table-row_1iuux_22",
	"table-row-selected": "_table-row-selected_1iuux_30",
	"table-row-current": "_table-row-current_1iuux_34",
	"visually-hidden": "_visually-hidden_1iuux_50",
	title: "_title_1iuux_62",
	"header-item": "_header-item_1iuux_66",
	"body-item-default": "_body-item-default_1iuux_77",
	"body-item-approved": "_body-item-approved_1iuux_78",
	"body-item-declined": "_body-item-declined_1iuux_79",
	"body-item-pending": "_body-item-pending_1iuux_80",
	"header-cell": "_header-cell_1iuux_101",
	"cell-content": "_cell-content_1iuux_109"
}, ot = Ee.default ?? Ee, st = ({ activeRowIndex: e, "aria-label": n, columns: r, emptyTableMessage: i = "No data available", getRowId: o, getRowProps: c, isLoading: l = !1, onActiveRowChange: u, onPageChange: f, onRowHover: p, pageStatusLabel: m, pagination: h, selectedPage: g = 0, selectedRows: ee, title: _ }) => {
	let v = s(null), y = h?.entries || [], b = h?.limit ? Math.ceil(h.totalCount / h.limit) : 1, x = e !== void 0, S = _ ?? n, C = e == null ? void 0 : y[e], w = C && e != null ? o?.(C, e) : void 0;
	a(() => {
		if (e == null || l) return;
		let t = v.current, n = t?.tBodies[0]?.rows[e];
		if (!t || !n) return;
		let r = document.activeElement, i = !r || r === document.body, a = !!r && t.contains(r) && !n.contains(r);
		(i || a) && (n.focus({ preventScroll: !0 }), n.scrollIntoView({ block: "nearest" }));
	}, [
		e,
		w,
		l
	]);
	let T = m !== void 0 && /* @__PURE__ */ P(d, {
		"aria-live": "polite",
		className: q["visually-hidden"],
		"data-testid": "data-table-page-status",
		children: m
	});
	if (l) return /* @__PURE__ */ F(N, { children: [T, /* @__PURE__ */ P(it, {})] });
	if (h?.totalCount === 0) return /* @__PURE__ */ F(N, { children: [T, /* @__PURE__ */ P(at, {
		isVisible: !0,
		message: i
	})] });
	let te = (e, t) => e.render ? /* @__PURE__ */ P("div", {
		className: q["cell-content"],
		children: e.render(t[e.name], t)
	}) : /* @__PURE__ */ P(j, {
		variant: "body2",
		sx: { color: "text.secondary" },
		children: String(t[e.name])
	}), E = (e) => e === "end" ? "right" : e === "center" ? "center" : "left";
	return /* @__PURE__ */ F(N, { children: [T, /* @__PURE__ */ P(d, {
		className: q.container,
		children: /* @__PURE__ */ F(d, {
			className: q.table,
			children: [
				_ && /* @__PURE__ */ P(j, {
					className: q.title,
					children: _
				}),
				/* @__PURE__ */ P(pe, {
					component: oe,
					elevation: 0,
					className: q["table-container"],
					tabIndex: x ? void 0 : 0,
					role: "region",
					"aria-label": S ? `${S} table` : "Data table",
					children: /* @__PURE__ */ F(ue, {
						ref: v,
						"aria-label": S,
						size: "medium",
						children: [/* @__PURE__ */ P(me, { children: /* @__PURE__ */ P(he, { children: r.map((e, t) => /* @__PURE__ */ P(fe, {
							align: E(e.justify),
							className: q["header-cell"],
							children: /* @__PURE__ */ F(d, {
								className: q["header-item"],
								children: [e.header, e.icon && e.icon]
							})
						}, t)) }) }), /* @__PURE__ */ P(de, { children: y.map((n, i) => {
							let a = o?.(n, i), s = !!ee?.includes(a ?? n.id), l = i === e, { className: f, onClick: m, onFocus: h, ...g } = c?.(n, i, {
								isActive: l,
								isSelected: s
							}) ?? {}, _ = l || e == null && i === 0, v = (e, t) => e === "status" && t.status?.toLowerCase() || "default";
							return /* @__PURE__ */ t(he, {
								...g,
								key: a ?? i,
								tabIndex: x ? _ ? 0 : -1 : void 0,
								"aria-current": l ? "true" : void 0,
								onClick: (e) => {
									m?.(e), u?.(i);
								},
								onFocus: (e) => {
									h?.(e), e.target === e.currentTarget && u?.(i);
								},
								onMouseOver: () => p?.(n),
								onMouseLeave: () => p?.(void 0),
								className: I(q["table-row"], f, {
									[q["table-row-selected"]]: s,
									[q["table-row-current"]]: l
								})
							}, r.map((e, t) => /* @__PURE__ */ P(fe, {
								align: E(e.justify),
								children: /* @__PURE__ */ P(d, {
									className: q[`body-item-${v(e.name, n)}`],
									children: te(e, n)
								})
							}, t)));
						}) })]
					})
				}),
				b > 1 && /* @__PURE__ */ P(ot, {
					containerClassName: "box-bridge-pagination",
					pageRangeDisplayed: 2,
					marginPagesDisplayed: 1,
					breakLabel: "...",
					nextLabel: "next >",
					onPageChange: f,
					forcePage: g,
					disableInitialCallback: !0,
					pageCount: b,
					previousLabel: "< previous"
				})
			]
		})
	})] });
}, J = {
	drawer: "_drawer_jr4qi_1",
	drawerHeader: "_drawerHeader_jr4qi_18",
	title: "_title_jr4qi_24",
	closeButton: "_closeButton_jr4qi_29",
	drawerContent: "_drawerContent_jr4qi_34",
	drawerFooter: "_drawerFooter_jr4qi_40",
	drawerLayout: "_drawerLayout_jr4qi_55"
}, ct = ({ isOpen: e, headerTitle: t, onClose: n, onSave: r, saveLabel: i, children: a, onCancel: o, cancelLabel: s }) => /* @__PURE__ */ P(C, {
	anchor: "right",
	open: e,
	onClose: n,
	classes: { paper: J.drawer },
	children: /* @__PURE__ */ F(k, {
		direction: "column",
		className: J.drawerLayout,
		children: [
			/* @__PURE__ */ F(k, {
				direction: "row",
				sx: {
					justifyContent: "space-between",
					alignItems: "center"
				},
				className: J.drawerHeader,
				children: [/* @__PURE__ */ P(j, {
					variant: "h6",
					className: J.title,
					children: t
				}), /* @__PURE__ */ P(E, {
					size: "small",
					"aria-label": "Close drawer",
					onClick: n,
					className: J.closeButton,
					children: /* @__PURE__ */ P(Oe, { fontSize: "small" })
				})]
			}),
			/* @__PURE__ */ P(d, {
				className: J.drawerContent,
				children: a
			}),
			/* @__PURE__ */ F(k, {
				direction: {
					xs: "column",
					sm: "row"
				},
				spacing: 1,
				sx: { justifyContent: "flex-end" },
				className: J.drawerFooter,
				children: [o && /* @__PURE__ */ P(K, {
					category: W.outlined,
					height: G.small,
					onClick: o,
					children: s || "Cancel"
				}), /* @__PURE__ */ P(K, {
					height: G.small,
					onClick: r,
					children: i || "Save"
				})]
			})
		]
	})
});
//#endregion
//#region src/components/Form/Form.tsx
function lt({ children: e, customSaveButtonText: t, disabled: n, onCancel: r, onCancelText: i, onSave: a, submitOnModEnter: o = !0 }) {
	let c = s(null);
	return /* @__PURE__ */ P("form", {
		ref: c,
		onSubmit: (e) => {
			e.preventDefault(), a && a(e);
		},
		onKeyDown: (e) => {
			let t = e.key === "Enter" && (e.metaKey || e.ctrlKey), r = e.nativeEvent.isComposing || e.keyCode === 229;
			o && t && !r && (e.preventDefault(), e.stopPropagation(), !(n || e.repeat) && c.current?.requestSubmit());
		},
		style: {
			width: "100%",
			minWidth: 0
		},
		children: /* @__PURE__ */ F(d, { children: [/* @__PURE__ */ P(d, {
			sx: {
				width: "100%",
				minWidth: 0
			},
			children: e
		}), /* @__PURE__ */ P(k, {
			direction: "row",
			sx: {
				justifyContent: "flex-end",
				mt: "18px"
			},
			children: /* @__PURE__ */ F(k, {
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
				children: [r ? /* @__PURE__ */ P(K, {
					height: G.medium,
					category: W.secondary,
					onClick: r,
					children: i || "Cancel"
				}) : null, /* @__PURE__ */ P(d, { children: /* @__PURE__ */ P(K, {
					type: "submit",
					height: G.medium,
					disabled: n,
					children: t ?? "Save"
				}) })]
			})
		})] })
	});
}
//#endregion
//#region src/components/IconButton/IconButton.ts
var ut = E, dt = ne, Y = {
	"visually-hidden": "_visually-hidden_16hrv_1",
	kbd: "_kbd_16hrv_13",
	small: "_small_16hrv_28",
	medium: "_medium_16hrv_35",
	default: "_default_16hrv_42",
	inverse: "_inverse_16hrv_48",
	shortcut: "_shortcut_16hrv_55",
	"combo-mac": "_combo-mac_16hrv_61",
	separator: "_separator_16hrv_66",
	"combo-separator": "_combo-separator_16hrv_69",
	"alternative-separator": "_alternative-separator_16hrv_69",
	"sequence-separator": "_sequence-separator_16hrv_72"
}, ft = ({ children: e, size: t = "medium", tone: n = "default" }) => /* @__PURE__ */ P("kbd", {
	"aria-hidden": !0,
	className: I(Y.kbd, Y[t], Y[n]),
	children: e
});
function pt({ children: e, label: t, size: n = "medium", tone: r = "default", "data-testid": i, className: a }) {
	return /* @__PURE__ */ F("span", {
		className: a,
		"data-testid": i,
		children: [/* @__PURE__ */ P(ft, {
			size: n,
			tone: r,
			children: e
		}), /* @__PURE__ */ P("span", {
			className: Y["visually-hidden"],
			children: t
		})]
	});
}
var X = {
	typography: "_typography_b7f5k_1",
	bold: "_bold_b7f5k_4",
	error: "_error_b7f5k_7",
	success: "_success_b7f5k_10",
	warning: "_warning_b7f5k_13"
}, mt = ({ variant: e = "body1", bold: t = !1, state: n, children: r, ...i }) => {
	let a = [
		X.typography,
		t ? X.bold : "",
		n ? X[n] : "",
		i.className || ""
	].join(" ");
	return /* @__PURE__ */ P(j, {
		variant: e,
		...i,
		className: a,
		children: r
	});
}, ht = (e, t) => e.keys.map((e) => e.label).join(e.kind === "sequence" ? ` ${t} ` : " ");
function gt({ shortcuts: t, isMac: n, thenLabel: r, orLabel: i, size: a = "medium", tone: o = "default", "data-testid": s }) {
	let c = (e, t) => /* @__PURE__ */ P(mt, {
		component: "span",
		variant: "caption",
		className: I(Y.separator, Y[t]),
		sx: { color: o === "inverse" ? "rgba(255, 255, 255, 0.7)" : "text.secondary" },
		children: e
	}), l = (t) => {
		let i = t.keys.map((i, s) => /* @__PURE__ */ F(e.Fragment, { children: [
			s > 0 && t.kind === "sequence" && c(r, "sequence-separator"),
			s > 0 && t.kind === "combo" && !n && c("+", "combo-separator"),
			/* @__PURE__ */ P(ft, {
				size: a,
				tone: o,
				children: i.glyph
			})
		] }, s));
		return t.kind === "combo" && n ? /* @__PURE__ */ P("span", {
			className: Y["combo-mac"],
			children: i
		}) : i;
	}, u = t.map((e) => ht(e, r)).join(` ${i} `);
	return /* @__PURE__ */ F("span", {
		className: Y.shortcut,
		"data-testid": s,
		children: [/* @__PURE__ */ P("span", {
			"aria-hidden": !0,
			className: Y.shortcut,
			children: t.map((t, n) => /* @__PURE__ */ F(e.Fragment, { children: [n > 0 && c("/", "alternative-separator"), l(t)] }, n))
		}), /* @__PURE__ */ P("span", {
			className: Y["visually-hidden"],
			children: u
		})]
	});
}
//#endregion
//#region src/components/Link/Link.tsx
var _t = ({ children: e, sx: t, ...n }) => /* @__PURE__ */ P(ie, {
	...n,
	sx: [{
		fontSize: "12px",
		overflowWrap: "anywhere"
	}, ...Array.isArray(t) ? t : [t]],
	underline: n.underline ?? "hover",
	color: n.color ?? "primary",
	children: e
}), vt = {
	menu: "_menu_k6frm_1",
	"menu-container": "_menu-container_k6frm_5",
	"menu-item": "_menu-item_k6frm_12"
}, yt = ({ anchorEl: e, children: t, menuItems: n, onClose: r, ...i }) => /* @__PURE__ */ P(ae, {
	...i,
	open: !!e,
	className: vt.menu,
	anchorEl: e,
	onClose: r,
	children: /* @__PURE__ */ F(d, {
		className: vt["menu-container"],
		children: [n?.map((e, t) => /* @__PURE__ */ P(D, {
			className: vt["menu-item"],
			onClick: () => {
				e.onClick(), r();
			},
			children: /* @__PURE__ */ P(j, { children: e.label })
		}, t)), t]
	})
}), Z = {
	modal: "_modal_fkumf_1",
	"modal-title": "_modal-title_fkumf_9",
	"modal-content": "_modal-content_fkumf_19",
	"modal-actions": "_modal-actions_fkumf_27"
};
//#endregion
//#region src/components/Modal/Modal.tsx
function bt({ open: e, onClose: t, children: n, title: i, maxWidth: a = "420px", actions: o, "data-testid": s }) {
	let c = r(), l = {
		sx: {
			maxWidth: a,
			width: "calc(100% - 32px)",
			m: "16px",
			maxHeight: "calc(100dvh - 32px)",
			boxSizing: "border-box",
			minWidth: 0
		},
		className: Z.modal,
		"data-testid": s
	};
	return /* @__PURE__ */ F(_, {
		open: e,
		onClose: t,
		"aria-labelledby": c,
		slotProps: { paper: l },
		children: [
			/* @__PURE__ */ P(x, {
				id: c,
				className: Z["modal-title"],
				children: i
			}),
			/* @__PURE__ */ P(y, { children: /* @__PURE__ */ P(d, {
				className: Z["modal-content"],
				children: n
			}) }),
			o && /* @__PURE__ */ P(v, {
				className: Z["modal-actions"],
				children: o
			})
		]
	});
}
var xt = {
	radioLabel: "_radioLabel_14kp5_1",
	radio: "_radio_14kp5_1"
}, St = ({ label: e, name: t, checked: n, onChange: r }) => /* @__PURE__ */ F("label", {
	className: xt.radioLabel,
	children: [/* @__PURE__ */ P(O, {
		name: t,
		size: "small",
		className: xt.radio,
		checked: n,
		onChange: r
	}), /* @__PURE__ */ P(j, {
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
}, Ct = ({ size: e = "medium" }) => /* @__PURE__ */ F("div", {
	className: `${Q.spinner} ${Q[e]}`,
	children: [
		/* @__PURE__ */ P("div", { className: Q.bounce1 }),
		/* @__PURE__ */ P("div", { className: Q.bounce2 }),
		/* @__PURE__ */ P("div", { className: Q.bounce3 })
	]
}), wt = k, $ = {
	ToastViewport: "_ToastViewport_m2sj3_1",
	ToastRoot: "_ToastRoot_m2sj3_11",
	ToastTitle: "_ToastTitle_m2sj3_23",
	ToastDescription: "_ToastDescription_m2sj3_24",
	ToastClose: "_ToastClose_m2sj3_25"
};
//#endregion
//#region src/components/Toast/Toast.tsx
function Tt({ open: e, title: t, message: n, severity: r = "info", onClose: i, autoHideDuration: a = 3e3 }) {
	return /* @__PURE__ */ P(le, {
		open: e,
		autoHideDuration: a,
		onClose: i,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "right"
		},
		className: $.ToastViewport,
		children: /* @__PURE__ */ F(l, {
			severity: r,
			className: $.ToastRoot,
			action: /* @__PURE__ */ P(E, {
				size: "small",
				"aria-label": "close",
				color: "inherit",
				onClick: i,
				className: $.ToastClose,
				children: /* @__PURE__ */ P(Oe, { fontSize: "small" })
			}),
			children: [t && /* @__PURE__ */ P(u, {
				className: $.ToastTitle,
				children: t
			}), n && /* @__PURE__ */ P("div", {
				className: $.ToastDescription,
				children: n
			})]
		})
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.ts
var Et = _e, Dt = A, Ot = _, kt = x, At = y, jt = b, Mt = v, Nt = D, Pt = S, Ft = l, It = w, Lt = T, Rt = re, zt = oe, Bt = h, Vt = p, Ht = O, Ut = se, Wt = g, Gt = m, Kt = ce, qt = ({ name: e, control: t, required: n, options: r = [], withObjectValue: i = !0, ...a }) => /* @__PURE__ */ P(L, {
	name: e,
	control: t,
	rules: { required: n && "This field is required" },
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ P(H, {
		options: r,
		onChange: (t) => {
			let n = typeof t == "object", r = t;
			!i && n && (r = t.id), e(r);
		},
		value: t || null,
		...a
	})
}), Jt = ({ name: e, control: t, required: n, fieldTitle: r, accept: i, existingFileName: a }) => /* @__PURE__ */ P(L, {
	name: e,
	control: t,
	rules: { required: n && !a && "This field is required" },
	render: ({ field: { onChange: e }, fieldState: { error: t } }) => /* @__PURE__ */ F(k, {
		direction: "column",
		sx: {
			alignItems: "flex-start",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [
			r && /* @__PURE__ */ P(j, {
				sx: {
					color: "text.secondary",
					fontSize: "14px",
					fontWeight: 700,
					mb: "8px",
					mt: "4px"
				},
				children: r
			}),
			/* @__PURE__ */ P("input", {
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
			a && /* @__PURE__ */ F(j, {
				sx: {
					color: "text.secondary",
					fontSize: "12px",
					mt: "4px"
				},
				children: ["Selected file: ", a]
			}),
			t && /* @__PURE__ */ P(j, {
				color: "error",
				sx: {
					fontSize: "12px",
					mt: "4px"
				},
				children: t.message
			})
		]
	})
}), Yt = ({ name: e, control: t, fieldTitle: n, options: r, onValueChange: i }) => /* @__PURE__ */ P(L, {
	name: e,
	control: t,
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ F(d, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			flexDirection: "column",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [n && /* @__PURE__ */ P(j, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				marginBottom: "8px",
				marginTop: "4px"
			},
			children: n
		}), /* @__PURE__ */ P(w, {
			sx: { width: "100%" },
			children: /* @__PURE__ */ P(se, {
				value: t,
				onChange: (t) => {
					e(t.target.value), i?.(t.target.value);
				},
				children: r.map((e) => /* @__PURE__ */ P(T, {
					value: e.value,
					control: /* @__PURE__ */ P(O, {}),
					label: e.label,
					sx: { marginBottom: "8px" }
				}, e.value))
			})
		})]
	})
}), Xt = ({ control: e, name: t, fieldTitle: n, placeholder: r, required: i, options: a }) => /* @__PURE__ */ P(L, {
	control: e,
	name: t,
	rules: { required: i && "This field is required" },
	render: ({ field: { onChange: e, value: t }, fieldState: { error: i } }) => /* @__PURE__ */ F(k, {
		direction: "column",
		sx: {
			alignItems: "flex-start",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [n && /* @__PURE__ */ P(j, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				mb: "8px",
				mt: "4px"
			},
			children: n
		}), /* @__PURE__ */ F(w, {
			fullWidth: !0,
			error: !!i,
			children: [
				r && /* @__PURE__ */ P(re, { children: r }),
				/* @__PURE__ */ P(ce, {
					value: t || "",
					onChange: e,
					displayEmpty: !r,
					renderValue: !t && !r ? () => "Select..." : void 0,
					children: a.map((e) => /* @__PURE__ */ P(D, {
						value: e.value,
						children: e.label
					}, e.value))
				}),
				i && /* @__PURE__ */ P(te, {
					error: !0,
					children: i.message
				})
			]
		})]
	})
}), Zt = ({ name: e, control: t, required: n, fieldTitle: r, placeholder: i, ...a }) => /* @__PURE__ */ P(L, {
	name: e,
	control: t,
	rules: { required: n && "This field is required" },
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ F(d, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "baseline",
			flexDirection: "column",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [r && /* @__PURE__ */ P(j, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				marginBottom: "8px",
				marginTop: "4px"
			},
			children: r
		}), /* @__PURE__ */ P(A, {
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
}), Qt = {
	container: "_container_1x4tm_1",
	title: "_title_1x4tm_8"
}, $t = ({ control: e, disabled: t, fieldTitle: n, name: r, placeholder: i, required: a, type: o, ...s }) => /* @__PURE__ */ P(L, {
	name: r,
	control: e,
	rules: { required: a && "This field is required" },
	render: ({ field: { onChange: e, value: r } }) => /* @__PURE__ */ F(d, {
		className: Qt.container,
		children: [n && /* @__PURE__ */ P(j, {
			className: Qt.title,
			variant: "body2",
			children: n
		}), /* @__PURE__ */ P(A, {
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
export { Ke as Accordion, ke as AddIcon, Ft as Alert, H as Autocomplete, qt as AutocompleteController, Xe as Box, We as BoxBridgeThemeProvider, Qe as Breadcrumb, K as Button, W as ButtonCategory, G as ButtonHeight, Vt as Card, nt as Checkbox, Bt as Chip, Wt as CircularProgress, Ae as ClearIcon, De as CloseIcon, st as DataTable, je as DeleteIcon, Me as DeleteOutlineIcon, Ot as Dialog, Mt as DialogActions, At as DialogContent, jt as DialogContentText, kt as DialogTitle, Pt as Divider, ct as Drawer, Ne as EditIcon, at as EmptyContent, Jt as FileInputController, lt as Form, It as FormControl, Lt as FormControlLabel, et as Icon, ut as IconButton, $e as IconKey, dt as InputAdornment, Rt as InputLabel, pt as Kbd, gt as KbdShortcut, _t as Link, it as LoadingContent, yt as Menu, Nt as MenuItem, bt as Modal, Pe as MoreHorizIcon, Gt as MuiCheckbox, zt as Paper, Ht as Radio, St as RadioButton, Ut as RadioGroup, Yt as RadioGroupController, Fe as SearchIcon, Kt as Select, Xt as SelectController, Ie as SendIcon, Le as SmartToyIcon, Ct as Spinner, wt as Stack, Zt as TextAreaController, Dt as TextField, $t as TextInputController, Tt as Toast, Et as Tooltip, mt as Typography, z as deepMerge, R as defaultTheme, Ge as themePresets };
