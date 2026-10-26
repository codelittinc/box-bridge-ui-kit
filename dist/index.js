"use client";
import e, { forwardRef as t, useImperativeHandle as n, useMemo as r, useRef as i, useState as a } from "react";
import { Alert as o, AlertTitle as s, Box as c, Button as l, Card as u, Checkbox as d, Chip as f, CircularProgress as p, CssBaseline as ee, Dialog as m, DialogActions as te, DialogContent as ne, DialogContentText as re, DialogTitle as h, Divider as ie, Drawer as ae, FormControl as g, FormControlLabel as _, FormHelperText as oe, IconButton as v, InputAdornment as se, InputLabel as ce, Link as le, Menu as ue, MenuItem as y, Paper as de, Radio as b, RadioGroup as fe, Select as pe, Snackbar as me, Stack as x, Table as he, TableBody as ge, TableCell as _e, TableContainer as ve, TableHead as ye, TableRow as S, TextField as C, ThemeProvider as be, Tooltip as xe, Typography as w, createTheme as Se } from "@mui/material";
import { decomposeColor as T, getContrastRatio as Ce } from "@mui/material/styles";
import { jsx as E, jsxs as D } from "react/jsx-runtime";
import we from "@mui/icons-material/ExpandMore";
import { Combobox as Te, ComboboxItem as Ee, ComboboxList as De, ComboboxProvider as Oe } from "@ariakit/react";
import { matchSorter as ke } from "match-sorter";
import O from "classnames";
import Ae from "react-paginate";
import je, { default as k } from "@mui/icons-material/Close";
import Me from "@mui/icons-material/Add";
import Ne from "@mui/icons-material/Clear";
import Pe from "@mui/icons-material/Delete";
import Fe from "@mui/icons-material/DeleteOutlineOutlined";
import Ie from "@mui/icons-material/Edit";
import Le from "@mui/icons-material/MoreHoriz";
import Re from "@mui/icons-material/Search";
import ze from "@mui/icons-material/Send";
import Be from "@mui/icons-material/SmartToy";
import { Controller as A } from "react-hook-form";
//#region src/theme/defaultTheme.ts
var j = {
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
function M(e, t) {
	let n = { ...e };
	for (let r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
		let i = e[r], a = t[r];
		n[r] = i && a && typeof i == "object" && typeof a == "object" && !Array.isArray(i) && !Array.isArray(a) ? M(i, a) : a;
	}
	return n;
}
//#endregion
//#region src/theme/focusRing.ts
var Ve = 3, He = .12, Ue = (e, t, n) => {
	let [r, i, a] = T(e).values, [o, s, c] = T(t).values, l = (e, t) => Math.round(t * n + e * (1 - n));
	return `rgb(${l(r, o)}, ${l(i, s)}, ${l(a, c)})`;
}, We = (e) => T(e).type.startsWith("rgb");
function Ge(e) {
	let t = e["--primary-main"], n = e["--gray-6"], r = e["--common-black"];
	if (!t || !n) return r;
	try {
		if (!We(t) || !We(n)) return r;
		let e = Ue(n, t, He);
		return Ce(t, n) >= Ve && Ce(t, e) >= Ve ? t : r;
	} catch {
		return r;
	}
}
function Ke(e) {
	let t = e.components?.MuiCssBaseline?.styleOverrides?.[":root"], n = t && Ge(t);
	return n ? M(e, { components: { MuiCssBaseline: { styleOverrides: { ":root": { "--focus-ring": n } } } } }) : e;
}
//#endregion
//#region src/theme/BoxBridgeThemeProvider.tsx
function qe({ children: e, themeConfig: t }) {
	let n = r(() => {
		let e = t ? M(j, t) : j;
		return Se(Ke(e));
	}, [t]);
	return /* @__PURE__ */ D(be, {
		theme: n,
		children: [/* @__PURE__ */ E(ee, {}), e]
	});
}
var Je = {
	default: j,
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
}, N = {
	accordionContainer: "_accordionContainer_1sy4c_1",
	accordionHeader: "_accordionHeader_1sy4c_5",
	accordionContent: "_accordionContent_1sy4c_10",
	chevronOpen: "_chevronOpen_1sy4c_14",
	chevronClosed: "_chevronClosed_1sy4c_19"
}, Ye = ({ title: t, children: n, defaultOpen: r = !0 }) => {
	let [i, a] = e.useState(r);
	return /* @__PURE__ */ D(c, {
		className: N.accordionContainer,
		children: [/* @__PURE__ */ D(x, {
			direction: "row",
			sx: {
				justifyContent: "space-between",
				alignItems: "center"
			},
			className: N.accordionHeader,
			onClick: () => a(!i),
			children: [/* @__PURE__ */ E(w, {
				variant: "body2",
				sx: { fontWeight: "medium" },
				children: t
			}), /* @__PURE__ */ E(we, {
				className: i ? N.chevronOpen : N.chevronClosed,
				fontSize: "small"
			})]
		}), i && /* @__PURE__ */ E(c, {
			className: N.accordionContent,
			children: n
		})]
	});
};
//#endregion
//#region src/components/Autocomplete/icons/ChevronUpDownIcon.tsx
function Xe() {
	return /* @__PURE__ */ D("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ E("path", { d: "m7 15 5 5 5-5" }), /* @__PURE__ */ E("path", { d: "m7 9 5-5 5 5" })]
	});
}
//#endregion
//#region src/components/Autocomplete/icons/CheckIcon.tsx
function Ze() {
	return /* @__PURE__ */ E("svg", {
		viewBox: "0 0 16 16",
		fill: "currentColor",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ E("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
		})
	});
}
//#endregion
//#region src/components/Autocomplete/useAutoCompleteController.ts
var Qe = ({ options: e, value: t, onChange: o, ref: s }) => {
	let [c, l] = a(!1), [u, d] = a(""), f = i(null);
	n(s, () => ({ focus: () => {
		f.current && f.current.focus();
	} }));
	let p = r(() => e.find((e) => String(e.value) === String(t))?.label, [t, e]);
	return {
		matches: r(() => {
			if (!u) return e;
			let n = ke(e, u, { keys: ["label", "value"] }), r = e.find((e) => e.value === t);
			return r && !n.includes(r) && n.push(r), n;
		}, [
			u,
			t,
			e
		]),
		open: c,
		setOpen: l,
		searchValue: u,
		setSearchValue: d,
		selectedLabel: p
	};
}, P = {
	wrapper: "_wrapper_3c5hj_1",
	label: "_label_3c5hj_11",
	"input-wrapper": "_input-wrapper_3c5hj_17",
	combobox: "_combobox_3c5hj_24",
	"toggle-button": "_toggle-button_3c5hj_55",
	listbox: "_listbox_3c5hj_72",
	item: "_item_3c5hj_91",
	"item-text": "_item-text_3c5hj_130",
	"item-indicator": "_item-indicator_3c5hj_134"
}, F = t(({ value: e, onChange: t, options: n, placeholder: r, label: i }, a) => {
	let { matches: o, open: s, setOpen: c, searchValue: l, setSearchValue: u, selectedLabel: d } = Qe({
		options: n,
		value: e,
		onChange: t,
		ref: a
	});
	return /* @__PURE__ */ D("div", {
		className: P.wrapper,
		children: [i && /* @__PURE__ */ E("label", {
			className: P.label,
			children: i
		}), /* @__PURE__ */ D(Oe, {
			open: s,
			setOpen: c,
			resetValueOnHide: !0,
			value: l,
			setValue: u,
			children: [/* @__PURE__ */ D("div", {
				className: P["input-wrapper"],
				children: [/* @__PURE__ */ E(Te, {
					placeholder: d || r || "Select...",
					className: P.combobox,
					autoSelect: !0
				}), /* @__PURE__ */ E("button", {
					type: "button",
					className: P["toggle-button"],
					onClick: () => c(!s),
					tabIndex: -1,
					children: /* @__PURE__ */ E(Xe, {})
				})]
			}), s && o.length > 0 && /* @__PURE__ */ E(De, {
				className: P.listbox,
				children: o.map(({ label: n, value: r }) => /* @__PURE__ */ D(Ee, {
					className: P.item,
					onClick: () => {
						t(r), c(!1);
					},
					children: [/* @__PURE__ */ E("span", {
						className: P["item-text"],
						children: n
					}), String(r) === String(e) && /* @__PURE__ */ E("span", {
						className: P["item-indicator"],
						children: /* @__PURE__ */ E(Ze, {})
					})]
				}, r))
			})]
		})]
	});
});
F.displayName = "Autocomplete";
//#endregion
//#region src/components/Box/Box.ts
var $e = c, I = {
	breadcrumb: "_breadcrumb_1ge7e_1",
	"breadcrumb-item": "_breadcrumb-item_1ge7e_11"
}, et = ({ breadcrumbs: e, onBreadcrumbClick: t }) => /* @__PURE__ */ E(c, {
	className: I.breadcrumb,
	children: e.map((n, r) => /* @__PURE__ */ D(c, {
		onClick: r < e.length - 1 ? () => t(n.id, r) : void 0,
		className: I["breadcrumb-item"],
		children: [/* @__PURE__ */ E(w, {
			variant: "body2",
			children: n.name
		}), /* @__PURE__ */ E(c, { children: r < e.length - 1 && /* @__PURE__ */ E(w, {
			variant: "body2",
			children: "/"
		}) })]
	}, n.id ? `${n.name}-${n.id}` : `crumb-${r}`))
}), L = {
	button: "_button_9cnxv_1",
	"button-secondary": "_button-secondary_9cnxv_17",
	"button-outlined": "_button-outlined_9cnxv_22",
	"button-small": "_button-small_9cnxv_30",
	"button-medium": "_button-medium_9cnxv_35",
	"button-large": "_button-large_9cnxv_40",
	"button-text": "_button-text_9cnxv_45"
}, R = /* @__PURE__ */ function(e) {
	return e.outlined = "outlined", e.primary = "primary", e.secondary = "secondary", e.text = "text", e;
}({}), z = /* @__PURE__ */ function(e) {
	return e.small = "small", e.medium = "medium", e.large = "large", e;
}({}), B = t(({ category: e = "primary", className: t, height: n = "large", ...r }, i) => {
	let a = "contained";
	return e === "outlined" && (a = "outlined"), e === "text" && (a = "text"), /* @__PURE__ */ E(l, {
		...r,
		variant: r.variant ?? a,
		disableRipple: r.disableRipple ?? e === "text",
		ref: i,
		className: O(L[`button-${e}`], L[`button-${n}`], L.button, t)
	});
});
B.displayName = "Button";
//#endregion
//#region src/components/Icon/Icon.tsx
var tt = /* @__PURE__ */ function(e) {
	return e.THREE_D = "3d", e.AUDIO = "audio", e.BOX_CANVAS = "box-canvas", e.BOX_NOTE = "box-note", e.DOCUMENT = "document", e.DRAWING = "drawing", e.FILE = "file", e.FOLDER = "folder", e.IMAGE = "image", e.PDF = "pdf", e.PRESENTATION = "presentation", e.SPREADSHEET = "spreadsheet", e.VIDEO = "video", e;
}({}), V = ({ iconKey: e, width: t = 24, height: n = 24, className: r, style: i, basePath: a = "/assets/icons/" }) => {
	let o = `${a}${e}.svg`;
	return /* @__PURE__ */ E("img", {
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
}, H = {
	checkboxLabel: "_checkboxLabel_1cuf9_1",
	checkbox: "_checkbox_1cuf9_1"
}, nt = ({ label: e, checked: t, onChange: n, iconKey: r }) => /* @__PURE__ */ D("label", {
	className: H.checkboxLabel,
	children: [
		/* @__PURE__ */ E(d, {
			size: "small",
			checked: t,
			className: H.checkbox,
			onChange: (e) => n(e.target.checked)
		}),
		r && /* @__PURE__ */ E(V, { iconKey: r }),
		/* @__PURE__ */ E(w, {
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
function U() {
	return /* @__PURE__ */ E(x, {
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
		]].map((e, t) => /* @__PURE__ */ E(c, {
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
function W({ message: e, isVisible: t, style: n }) {
	return t ? /* @__PURE__ */ E(c, {
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
var G = {
	container: "_container_143v4_1",
	"table-container": "_table-container_143v4_5",
	table: "_table_143v4_5",
	"table-row-active": "_table-row-active_143v4_22",
	title: "_title_143v4_26",
	"header-item": "_header-item_143v4_30",
	"body-item-default": "_body-item-default_143v4_41",
	"body-item-approved": "_body-item-approved_143v4_42",
	"body-item-declined": "_body-item-declined_143v4_43",
	"body-item-pending": "_body-item-pending_143v4_44",
	"header-cell": "_header-cell_143v4_65",
	"cell-content": "_cell-content_143v4_73"
}, it = Ae.default ?? Ae, at = ({ columns: e, emptyTableMessage: t = "No data available", isLoading: n = !1, onPageChange: r, onRowHover: i, pagination: a, selectedPage: o = 0, selectedRows: s, title: l }) => {
	let u = a?.entries || [], d = a?.limit ? Math.ceil(a.totalCount / a.limit) : 1;
	if (n) return /* @__PURE__ */ E(U, {});
	if (a?.totalCount === 0) return /* @__PURE__ */ E(W, {
		isVisible: !0,
		message: t
	});
	let f = (e, t) => e.render ? /* @__PURE__ */ E("div", {
		className: G["cell-content"],
		children: e.render(t[e.name], t)
	}) : /* @__PURE__ */ E(w, {
		variant: "body2",
		sx: { color: "text.secondary" },
		children: String(t[e.name])
	}), p = (e) => e === "end" ? "right" : e === "center" ? "center" : "left";
	return /* @__PURE__ */ E(c, {
		className: G.container,
		children: /* @__PURE__ */ D(c, {
			className: G.table,
			children: [
				l && /* @__PURE__ */ E(w, {
					className: G.title,
					children: l
				}),
				/* @__PURE__ */ E(ve, {
					component: de,
					elevation: 0,
					className: G["table-container"],
					tabIndex: 0,
					role: "region",
					"aria-label": l ? `${l} table` : "Data table",
					children: /* @__PURE__ */ D(he, {
						"aria-label": "data table",
						size: "medium",
						children: [/* @__PURE__ */ E(ye, { children: /* @__PURE__ */ E(S, { children: e.map((e, t) => /* @__PURE__ */ E(_e, {
							align: p(e.justify),
							className: G["header-cell"],
							children: /* @__PURE__ */ D(c, {
								className: G["header-item"],
								children: [e.header, e.icon && e.icon]
							})
						}, t)) }) }), /* @__PURE__ */ E(ge, { children: u.map((t, n) => {
							let r = s?.includes(t.id), a = (e, t) => e === "status" && t.status?.toLowerCase() || "default";
							return /* @__PURE__ */ E(S, {
								onMouseOver: () => i?.(t),
								onMouseLeave: () => i?.(void 0),
								className: r ? G["table-row-active"] : "",
								children: e.map((e, n) => /* @__PURE__ */ E(_e, {
									align: p(e.justify),
									children: /* @__PURE__ */ E(c, {
										className: G[`body-item-${a(e.name, t)}`],
										children: f(e, t)
									})
								}, n))
							}, n);
						}) })]
					})
				}),
				d > 1 && /* @__PURE__ */ E(it, {
					containerClassName: "box-bridge-pagination",
					pageRangeDisplayed: 2,
					marginPagesDisplayed: 1,
					breakLabel: "...",
					nextLabel: "next >",
					onPageChange: r,
					forcePage: o,
					disableInitialCallback: !0,
					pageCount: d,
					previousLabel: "< previous"
				})
			]
		})
	});
}, K = {
	drawer: "_drawer_jr4qi_1",
	drawerHeader: "_drawerHeader_jr4qi_18",
	title: "_title_jr4qi_24",
	closeButton: "_closeButton_jr4qi_29",
	drawerContent: "_drawerContent_jr4qi_34",
	drawerFooter: "_drawerFooter_jr4qi_40",
	drawerLayout: "_drawerLayout_jr4qi_55"
}, ot = ({ isOpen: e, headerTitle: t, onClose: n, onSave: r, saveLabel: i, children: a, onCancel: o, cancelLabel: s }) => /* @__PURE__ */ E(ae, {
	anchor: "right",
	open: e,
	onClose: n,
	classes: { paper: K.drawer },
	children: /* @__PURE__ */ D(x, {
		direction: "column",
		className: K.drawerLayout,
		children: [
			/* @__PURE__ */ D(x, {
				direction: "row",
				sx: {
					justifyContent: "space-between",
					alignItems: "center"
				},
				className: K.drawerHeader,
				children: [/* @__PURE__ */ E(w, {
					variant: "h6",
					className: K.title,
					children: t
				}), /* @__PURE__ */ E(v, {
					size: "small",
					"aria-label": "Close drawer",
					onClick: n,
					className: K.closeButton,
					children: /* @__PURE__ */ E(k, { fontSize: "small" })
				})]
			}),
			/* @__PURE__ */ E(c, {
				className: K.drawerContent,
				children: a
			}),
			/* @__PURE__ */ D(x, {
				direction: {
					xs: "column",
					sm: "row"
				},
				spacing: 1,
				sx: { justifyContent: "flex-end" },
				className: K.drawerFooter,
				children: [o && /* @__PURE__ */ E(B, {
					category: R.outlined,
					height: z.small,
					onClick: o,
					children: s || "Cancel"
				}), /* @__PURE__ */ E(B, {
					height: z.small,
					onClick: r,
					children: i || "Save"
				})]
			})
		]
	})
});
//#endregion
//#region src/components/Form/Form.tsx
function st({ children: e, customSaveButtonText: t, disabled: n, onCancel: r, onCancelText: i, onSave: a }) {
	return /* @__PURE__ */ E("form", {
		onSubmit: (e) => {
			e.preventDefault(), a && a(e);
		},
		style: {
			width: "100%",
			minWidth: 0
		},
		children: /* @__PURE__ */ D(c, { children: [/* @__PURE__ */ E(c, {
			sx: {
				width: "100%",
				minWidth: 0
			},
			children: e
		}), /* @__PURE__ */ E(x, {
			direction: "row",
			sx: {
				justifyContent: "flex-end",
				mt: "18px"
			},
			children: /* @__PURE__ */ D(x, {
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
				children: [r ? /* @__PURE__ */ E(B, {
					height: z.medium,
					category: R.secondary,
					onClick: r,
					children: i || "Cancel"
				}) : null, /* @__PURE__ */ E(c, { children: /* @__PURE__ */ E(B, {
					type: "submit",
					height: z.medium,
					disabled: n,
					children: t ?? "Save"
				}) })]
			})
		})] })
	});
}
//#endregion
//#region src/components/IconButton/IconButton.ts
var ct = v, lt = se, q = {
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
}, ut = ({ children: e, size: t = "medium", tone: n = "default" }) => /* @__PURE__ */ E("kbd", {
	"aria-hidden": !0,
	className: O(q.kbd, q[t], q[n]),
	children: e
});
function dt({ children: e, label: t, size: n = "medium", tone: r = "default", "data-testid": i, className: a }) {
	return /* @__PURE__ */ D("span", {
		className: a,
		"data-testid": i,
		children: [/* @__PURE__ */ E(ut, {
			size: n,
			tone: r,
			children: e
		}), /* @__PURE__ */ E("span", {
			className: q["visually-hidden"],
			children: t
		})]
	});
}
var J = {
	typography: "_typography_b7f5k_1",
	bold: "_bold_b7f5k_4",
	error: "_error_b7f5k_7",
	success: "_success_b7f5k_10",
	warning: "_warning_b7f5k_13"
}, Y = ({ variant: e = "body1", bold: t = !1, state: n, children: r, ...i }) => {
	let a = [
		J.typography,
		t ? J.bold : "",
		n ? J[n] : "",
		i.className || ""
	].join(" ");
	return /* @__PURE__ */ E(w, {
		variant: e,
		...i,
		className: a,
		children: r
	});
}, ft = (e, t) => e.keys.map((e) => e.label).join(e.kind === "sequence" ? ` ${t} ` : " ");
function pt({ shortcuts: t, isMac: n, thenLabel: r, orLabel: i, size: a = "medium", tone: o = "default", "data-testid": s }) {
	let c = (e, t) => /* @__PURE__ */ E(Y, {
		component: "span",
		variant: "caption",
		className: O(q.separator, q[t]),
		sx: { color: o === "inverse" ? "rgba(255, 255, 255, 0.7)" : "text.secondary" },
		children: e
	}), l = (t) => {
		let i = t.keys.map((i, s) => /* @__PURE__ */ D(e.Fragment, { children: [
			s > 0 && t.kind === "sequence" && c(r, "sequence-separator"),
			s > 0 && t.kind === "combo" && !n && c("+", "combo-separator"),
			/* @__PURE__ */ E(ut, {
				size: a,
				tone: o,
				children: i.glyph
			})
		] }, s));
		return t.kind === "combo" && n ? /* @__PURE__ */ E("span", {
			className: q["combo-mac"],
			children: i
		}) : i;
	}, u = t.map((e) => ft(e, r)).join(` ${i} `);
	return /* @__PURE__ */ D("span", {
		className: q.shortcut,
		"data-testid": s,
		children: [/* @__PURE__ */ E("span", {
			"aria-hidden": !0,
			className: q.shortcut,
			children: t.map((t, n) => /* @__PURE__ */ D(e.Fragment, { children: [n > 0 && c("/", "alternative-separator"), l(t)] }, n))
		}), /* @__PURE__ */ E("span", {
			className: q["visually-hidden"],
			children: u
		})]
	});
}
//#endregion
//#region src/components/Link/Link.tsx
var mt = ({ children: e, sx: t, ...n }) => /* @__PURE__ */ E(le, {
	...n,
	sx: [{
		fontSize: "12px",
		overflowWrap: "anywhere"
	}, ...Array.isArray(t) ? t : [t]],
	underline: n.underline ?? "hover",
	color: n.color ?? "primary",
	children: e
}), X = {
	menu: "_menu_k6frm_1",
	"menu-container": "_menu-container_k6frm_5",
	"menu-item": "_menu-item_k6frm_12"
}, ht = ({ anchorEl: e, children: t, menuItems: n, onClose: r, ...i }) => /* @__PURE__ */ E(ue, {
	...i,
	open: !!e,
	className: X.menu,
	anchorEl: e,
	onClose: r,
	children: /* @__PURE__ */ D(c, {
		className: X["menu-container"],
		children: [n?.map((e, t) => /* @__PURE__ */ E(y, {
			className: X["menu-item"],
			onClick: () => {
				e.onClick(), r();
			},
			children: /* @__PURE__ */ E(w, { children: e.label })
		}, t)), t]
	})
}), Z = {
	modal: "_modal_1okm5_1",
	"modal-title": "_modal-title_1okm5_5",
	"modal-content": "_modal-content_1okm5_15"
};
//#endregion
//#region src/components/Modal/Modal.tsx
function gt({ open: e, onClose: t, children: n, title: r, maxWidth: i = "420px" }) {
	return /* @__PURE__ */ D(m, {
		open: e,
		onClose: t,
		slotProps: { paper: {
			sx: {
				maxWidth: i,
				width: "calc(100% - 32px)",
				m: "16px",
				maxHeight: "calc(100dvh - 32px)",
				boxSizing: "border-box",
				minWidth: 0
			},
			className: Z.modal
		} },
		children: [/* @__PURE__ */ E(h, {
			className: Z["modal-title"],
			children: r
		}), /* @__PURE__ */ E(ne, { children: /* @__PURE__ */ E(c, {
			className: Z["modal-content"],
			children: n
		}) })]
	});
}
var _t = {
	radioLabel: "_radioLabel_14kp5_1",
	radio: "_radio_14kp5_1"
}, vt = ({ label: e, name: t, checked: n, onChange: r }) => /* @__PURE__ */ D("label", {
	className: _t.radioLabel,
	children: [/* @__PURE__ */ E(b, {
		name: t,
		size: "small",
		className: _t.radio,
		checked: n,
		onChange: r
	}), /* @__PURE__ */ E(w, {
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
}, yt = ({ size: e = "medium" }) => /* @__PURE__ */ D("div", {
	className: `${Q.spinner} ${Q[e]}`,
	children: [
		/* @__PURE__ */ E("div", { className: Q.bounce1 }),
		/* @__PURE__ */ E("div", { className: Q.bounce2 }),
		/* @__PURE__ */ E("div", { className: Q.bounce3 })
	]
}), bt = x, $ = {
	ToastViewport: "_ToastViewport_m2sj3_1",
	ToastRoot: "_ToastRoot_m2sj3_11",
	ToastTitle: "_ToastTitle_m2sj3_23",
	ToastDescription: "_ToastDescription_m2sj3_24",
	ToastClose: "_ToastClose_m2sj3_25"
};
//#endregion
//#region src/components/Toast/Toast.tsx
function xt({ open: e, title: t, message: n, severity: r = "info", onClose: i, autoHideDuration: a = 3e3 }) {
	return /* @__PURE__ */ E(me, {
		open: e,
		autoHideDuration: a,
		onClose: i,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "right"
		},
		className: $.ToastViewport,
		children: /* @__PURE__ */ D(o, {
			severity: r,
			className: $.ToastRoot,
			action: /* @__PURE__ */ E(v, {
				size: "small",
				"aria-label": "close",
				color: "inherit",
				onClick: i,
				className: $.ToastClose,
				children: /* @__PURE__ */ E(k, { fontSize: "small" })
			}),
			children: [t && /* @__PURE__ */ E(s, {
				className: $.ToastTitle,
				children: t
			}), n && /* @__PURE__ */ E("div", {
				className: $.ToastDescription,
				children: n
			})]
		})
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.ts
var St = xe, Ct = C, wt = m, Tt = h, Et = ne, Dt = re, Ot = te, kt = y, At = ie, jt = o, Mt = g, Nt = _, Pt = ce, Ft = de, It = f, Lt = u, Rt = b, zt = fe, Bt = p, Vt = d, Ht = pe, Ut = ({ name: e, control: t, required: n, options: r = [], withObjectValue: i = !0, ...a }) => /* @__PURE__ */ E(A, {
	name: e,
	control: t,
	rules: { required: n && "This field is required" },
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ E(F, {
		options: r,
		onChange: (t) => {
			let n = typeof t == "object", r = t;
			!i && n && (r = t.id), e(r);
		},
		value: t || null,
		...a
	})
}), Wt = ({ name: e, control: t, required: n, fieldTitle: r, accept: i, existingFileName: a }) => /* @__PURE__ */ E(A, {
	name: e,
	control: t,
	rules: { required: n && !a && "This field is required" },
	render: ({ field: { onChange: e }, fieldState: { error: t } }) => /* @__PURE__ */ D(x, {
		direction: "column",
		sx: {
			alignItems: "flex-start",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [
			r && /* @__PURE__ */ E(w, {
				sx: {
					color: "text.secondary",
					fontSize: "14px",
					fontWeight: 700,
					mb: "8px",
					mt: "4px"
				},
				children: r
			}),
			/* @__PURE__ */ E("input", {
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
			a && /* @__PURE__ */ D(w, {
				sx: {
					color: "text.secondary",
					fontSize: "12px",
					mt: "4px"
				},
				children: ["Selected file: ", a]
			}),
			t && /* @__PURE__ */ E(w, {
				color: "error",
				sx: {
					fontSize: "12px",
					mt: "4px"
				},
				children: t.message
			})
		]
	})
}), Gt = ({ name: e, control: t, fieldTitle: n, options: r, onValueChange: i }) => /* @__PURE__ */ E(A, {
	name: e,
	control: t,
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ D(c, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			flexDirection: "column",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [n && /* @__PURE__ */ E(w, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				marginBottom: "8px",
				marginTop: "4px"
			},
			children: n
		}), /* @__PURE__ */ E(g, {
			sx: { width: "100%" },
			children: /* @__PURE__ */ E(fe, {
				value: t,
				onChange: (t) => {
					e(t.target.value), i?.(t.target.value);
				},
				children: r.map((e) => /* @__PURE__ */ E(_, {
					value: e.value,
					control: /* @__PURE__ */ E(b, {}),
					label: e.label,
					sx: { marginBottom: "8px" }
				}, e.value))
			})
		})]
	})
}), Kt = ({ control: e, name: t, fieldTitle: n, placeholder: r, required: i, options: a }) => /* @__PURE__ */ E(A, {
	control: e,
	name: t,
	rules: { required: i && "This field is required" },
	render: ({ field: { onChange: e, value: t }, fieldState: { error: i } }) => /* @__PURE__ */ D(x, {
		direction: "column",
		sx: {
			alignItems: "flex-start",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [n && /* @__PURE__ */ E(w, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				mb: "8px",
				mt: "4px"
			},
			children: n
		}), /* @__PURE__ */ D(g, {
			fullWidth: !0,
			error: !!i,
			children: [
				r && /* @__PURE__ */ E(ce, { children: r }),
				/* @__PURE__ */ E(pe, {
					value: t || "",
					onChange: e,
					displayEmpty: !r,
					renderValue: !t && !r ? () => "Select..." : void 0,
					children: a.map((e) => /* @__PURE__ */ E(y, {
						value: e.value,
						children: e.label
					}, e.value))
				}),
				i && /* @__PURE__ */ E(oe, {
					error: !0,
					children: i.message
				})
			]
		})]
	})
}), qt = ({ name: e, control: t, required: n, fieldTitle: r, placeholder: i, ...a }) => /* @__PURE__ */ E(A, {
	name: e,
	control: t,
	rules: { required: n && "This field is required" },
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ D(c, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "baseline",
			flexDirection: "column",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [r && /* @__PURE__ */ E(w, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				marginBottom: "8px",
				marginTop: "4px"
			},
			children: r
		}), /* @__PURE__ */ E(C, {
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
}), Jt = {
	container: "_container_1x4tm_1",
	title: "_title_1x4tm_8"
}, Yt = ({ control: e, disabled: t, fieldTitle: n, name: r, placeholder: i, required: a, type: o, ...s }) => /* @__PURE__ */ E(A, {
	name: r,
	control: e,
	rules: { required: a && "This field is required" },
	render: ({ field: { onChange: e, value: r } }) => /* @__PURE__ */ D(c, {
		className: Jt.container,
		children: [n && /* @__PURE__ */ E(w, {
			className: Jt.title,
			variant: "body2",
			children: n
		}), /* @__PURE__ */ E(C, {
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
export { Ye as Accordion, Me as AddIcon, jt as Alert, F as Autocomplete, Ut as AutocompleteController, $e as Box, qe as BoxBridgeThemeProvider, et as Breadcrumb, B as Button, R as ButtonCategory, z as ButtonHeight, Lt as Card, nt as Checkbox, It as Chip, Bt as CircularProgress, Ne as ClearIcon, je as CloseIcon, at as DataTable, Pe as DeleteIcon, Fe as DeleteOutlineIcon, wt as Dialog, Ot as DialogActions, Et as DialogContent, Dt as DialogContentText, Tt as DialogTitle, At as Divider, ot as Drawer, Ie as EditIcon, W as EmptyContent, Wt as FileInputController, st as Form, Mt as FormControl, Nt as FormControlLabel, V as Icon, ct as IconButton, tt as IconKey, lt as InputAdornment, Pt as InputLabel, dt as Kbd, pt as KbdShortcut, mt as Link, U as LoadingContent, ht as Menu, kt as MenuItem, gt as Modal, Le as MoreHorizIcon, Vt as MuiCheckbox, Ft as Paper, Rt as Radio, vt as RadioButton, zt as RadioGroup, Gt as RadioGroupController, Re as SearchIcon, Ht as Select, Kt as SelectController, ze as SendIcon, Be as SmartToyIcon, yt as Spinner, bt as Stack, qt as TextAreaController, Ct as TextField, Yt as TextInputController, xt as Toast, St as Tooltip, Y as Typography, M as deepMerge, j as defaultTheme, Je as themePresets };
