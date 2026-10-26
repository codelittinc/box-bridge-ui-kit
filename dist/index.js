"use client";
import e, { forwardRef as t, useImperativeHandle as n, useMemo as r, useRef as i, useState as a } from "react";
import { Alert as o, AlertTitle as s, Box as c, Button as l, Card as u, Checkbox as d, Chip as f, CircularProgress as p, CssBaseline as ee, Dialog as m, DialogActions as te, DialogContent as ne, DialogContentText as re, DialogTitle as ie, Divider as ae, Drawer as oe, FormControl as h, FormControlLabel as g, FormHelperText as se, IconButton as _, InputAdornment as ce, InputLabel as v, Link as le, Menu as ue, MenuItem as y, Paper as de, Radio as b, RadioGroup as x, Select as S, Snackbar as fe, Stack as C, Table as pe, TableBody as me, TableCell as he, TableContainer as ge, TableHead as _e, TableRow as ve, TextField as w, ThemeProvider as ye, Tooltip as be, Typography as T, createTheme as xe } from "@mui/material";
import { decomposeColor as E, getContrastRatio as D } from "@mui/material/styles";
import { jsx as O, jsxs as k } from "react/jsx-runtime";
import Se from "@mui/icons-material/ExpandMore";
import { Combobox as Ce, ComboboxItem as we, ComboboxList as Te, ComboboxProvider as Ee } from "@ariakit/react";
import { matchSorter as De } from "match-sorter";
import Oe from "classnames";
import A from "react-paginate";
import ke, { default as j } from "@mui/icons-material/Close";
import Ae from "@mui/icons-material/Add";
import je from "@mui/icons-material/Clear";
import Me from "@mui/icons-material/Delete";
import Ne from "@mui/icons-material/DeleteOutlineOutlined";
import Pe from "@mui/icons-material/Edit";
import Fe from "@mui/icons-material/MoreHoriz";
import Ie from "@mui/icons-material/Search";
import Le from "@mui/icons-material/Send";
import Re from "@mui/icons-material/SmartToy";
import { Controller as M } from "react-hook-form";
//#region src/theme/defaultTheme.ts
var N = {
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
function P(e, t) {
	let n = { ...e };
	for (let r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
		let i = e[r], a = t[r];
		n[r] = i && a && typeof i == "object" && typeof a == "object" && !Array.isArray(i) && !Array.isArray(a) ? P(i, a) : a;
	}
	return n;
}
//#endregion
//#region src/theme/focusRing.ts
var ze = 3, Be = .12, Ve = (e, t, n) => {
	let [r, i, a] = E(e).values, [o, s, c] = E(t).values, l = (e, t) => Math.round(t * n + e * (1 - n));
	return `rgb(${l(r, o)}, ${l(i, s)}, ${l(a, c)})`;
}, He = (e) => E(e).type.startsWith("rgb");
function Ue(e) {
	let t = e["--primary-main"], n = e["--gray-6"], r = e["--common-black"];
	if (!t || !n) return r;
	try {
		if (!He(t) || !He(n)) return r;
		let e = Ve(n, t, Be);
		return D(t, n) >= ze && D(t, e) >= ze ? t : r;
	} catch {
		return r;
	}
}
function We(e) {
	let t = e.components?.MuiCssBaseline?.styleOverrides?.[":root"], n = t && Ue(t);
	return n ? P(e, { components: { MuiCssBaseline: { styleOverrides: { ":root": { "--focus-ring": n } } } } }) : e;
}
//#endregion
//#region src/theme/BoxBridgeThemeProvider.tsx
function Ge({ children: e, themeConfig: t }) {
	let n = r(() => {
		let e = t ? P(N, t) : N;
		return xe(We(e));
	}, [t]);
	return /* @__PURE__ */ k(ye, {
		theme: n,
		children: [/* @__PURE__ */ O(ee, {}), e]
	});
}
var Ke = {
	default: N,
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
}, F = {
	accordionContainer: "_accordionContainer_1sy4c_1",
	accordionHeader: "_accordionHeader_1sy4c_5",
	accordionContent: "_accordionContent_1sy4c_10",
	chevronOpen: "_chevronOpen_1sy4c_14",
	chevronClosed: "_chevronClosed_1sy4c_19"
}, qe = ({ title: t, children: n, defaultOpen: r = !0 }) => {
	let [i, a] = e.useState(r);
	return /* @__PURE__ */ k(c, {
		className: F.accordionContainer,
		children: [/* @__PURE__ */ k(C, {
			direction: "row",
			sx: {
				justifyContent: "space-between",
				alignItems: "center"
			},
			className: F.accordionHeader,
			onClick: () => a(!i),
			children: [/* @__PURE__ */ O(T, {
				variant: "body2",
				sx: { fontWeight: "medium" },
				children: t
			}), /* @__PURE__ */ O(Se, {
				className: i ? F.chevronOpen : F.chevronClosed,
				fontSize: "small"
			})]
		}), i && /* @__PURE__ */ O(c, {
			className: F.accordionContent,
			children: n
		})]
	});
};
//#endregion
//#region src/components/Autocomplete/icons/ChevronUpDownIcon.tsx
function Je() {
	return /* @__PURE__ */ k("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ O("path", { d: "m7 15 5 5 5-5" }), /* @__PURE__ */ O("path", { d: "m7 9 5-5 5 5" })]
	});
}
//#endregion
//#region src/components/Autocomplete/icons/CheckIcon.tsx
function Ye() {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 16 16",
		fill: "currentColor",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ O("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
		})
	});
}
//#endregion
//#region src/components/Autocomplete/useAutoCompleteController.ts
var Xe = ({ options: e, value: t, onChange: o, ref: s }) => {
	let [c, l] = a(!1), [u, d] = a(""), f = i(null);
	n(s, () => ({ focus: () => {
		f.current && f.current.focus();
	} }));
	let p = r(() => e.find((e) => String(e.value) === String(t))?.label, [t, e]);
	return {
		matches: r(() => {
			if (!u) return e;
			let n = De(e, u, { keys: ["label", "value"] }), r = e.find((e) => e.value === t);
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
}, I = {
	wrapper: "_wrapper_3c5hj_1",
	label: "_label_3c5hj_11",
	"input-wrapper": "_input-wrapper_3c5hj_17",
	combobox: "_combobox_3c5hj_24",
	"toggle-button": "_toggle-button_3c5hj_55",
	listbox: "_listbox_3c5hj_72",
	item: "_item_3c5hj_91",
	"item-text": "_item-text_3c5hj_130",
	"item-indicator": "_item-indicator_3c5hj_134"
}, L = t(({ value: e, onChange: t, options: n, placeholder: r, label: i }, a) => {
	let { matches: o, open: s, setOpen: c, searchValue: l, setSearchValue: u, selectedLabel: d } = Xe({
		options: n,
		value: e,
		onChange: t,
		ref: a
	});
	return /* @__PURE__ */ k("div", {
		className: I.wrapper,
		children: [i && /* @__PURE__ */ O("label", {
			className: I.label,
			children: i
		}), /* @__PURE__ */ k(Ee, {
			open: s,
			setOpen: c,
			resetValueOnHide: !0,
			value: l,
			setValue: u,
			children: [/* @__PURE__ */ k("div", {
				className: I["input-wrapper"],
				children: [/* @__PURE__ */ O(Ce, {
					placeholder: d || r || "Select...",
					className: I.combobox,
					autoSelect: !0
				}), /* @__PURE__ */ O("button", {
					type: "button",
					className: I["toggle-button"],
					onClick: () => c(!s),
					tabIndex: -1,
					children: /* @__PURE__ */ O(Je, {})
				})]
			}), s && o.length > 0 && /* @__PURE__ */ O(Te, {
				className: I.listbox,
				children: o.map(({ label: n, value: r }) => /* @__PURE__ */ k(we, {
					className: I.item,
					onClick: () => {
						t(r), c(!1);
					},
					children: [/* @__PURE__ */ O("span", {
						className: I["item-text"],
						children: n
					}), String(r) === String(e) && /* @__PURE__ */ O("span", {
						className: I["item-indicator"],
						children: /* @__PURE__ */ O(Ye, {})
					})]
				}, r))
			})]
		})]
	});
});
L.displayName = "Autocomplete";
//#endregion
//#region src/components/Box/Box.ts
var Ze = c, R = {
	breadcrumb: "_breadcrumb_1ge7e_1",
	"breadcrumb-item": "_breadcrumb-item_1ge7e_11"
}, Qe = ({ breadcrumbs: e, onBreadcrumbClick: t }) => /* @__PURE__ */ O(c, {
	className: R.breadcrumb,
	children: e.map((n, r) => /* @__PURE__ */ k(c, {
		onClick: r < e.length - 1 ? () => t(n.id, r) : void 0,
		className: R["breadcrumb-item"],
		children: [/* @__PURE__ */ O(T, {
			variant: "body2",
			children: n.name
		}), /* @__PURE__ */ O(c, { children: r < e.length - 1 && /* @__PURE__ */ O(T, {
			variant: "body2",
			children: "/"
		}) })]
	}, n.id ? `${n.name}-${n.id}` : `crumb-${r}`))
}), z = {
	button: "_button_9cnxv_1",
	"button-secondary": "_button-secondary_9cnxv_17",
	"button-outlined": "_button-outlined_9cnxv_22",
	"button-small": "_button-small_9cnxv_30",
	"button-medium": "_button-medium_9cnxv_35",
	"button-large": "_button-large_9cnxv_40",
	"button-text": "_button-text_9cnxv_45"
}, B = /* @__PURE__ */ function(e) {
	return e.outlined = "outlined", e.primary = "primary", e.secondary = "secondary", e.text = "text", e;
}({}), V = /* @__PURE__ */ function(e) {
	return e.small = "small", e.medium = "medium", e.large = "large", e;
}({}), H = t(({ category: e = "primary", className: t, height: n = "large", ...r }, i) => {
	let a = "contained";
	return e === "outlined" && (a = "outlined"), e === "text" && (a = "text"), /* @__PURE__ */ O(l, {
		...r,
		variant: r.variant ?? a,
		disableRipple: r.disableRipple ?? e === "text",
		ref: i,
		className: Oe(z[`button-${e}`], z[`button-${n}`], z.button, t)
	});
});
H.displayName = "Button";
//#endregion
//#region src/components/Icon/Icon.tsx
var $e = /* @__PURE__ */ function(e) {
	return e.THREE_D = "3d", e.AUDIO = "audio", e.BOX_CANVAS = "box-canvas", e.BOX_NOTE = "box-note", e.DOCUMENT = "document", e.DRAWING = "drawing", e.FILE = "file", e.FOLDER = "folder", e.IMAGE = "image", e.PDF = "pdf", e.PRESENTATION = "presentation", e.SPREADSHEET = "spreadsheet", e.VIDEO = "video", e;
}({}), U = ({ iconKey: e, width: t = 24, height: n = 24, className: r, style: i, basePath: a = "/assets/icons/" }) => {
	let o = `${a}${e}.svg`;
	return /* @__PURE__ */ O("img", {
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
}, W = {
	checkboxLabel: "_checkboxLabel_1cuf9_1",
	checkbox: "_checkbox_1cuf9_1"
}, et = ({ label: e, checked: t, onChange: n, iconKey: r }) => /* @__PURE__ */ k("label", {
	className: W.checkboxLabel,
	children: [
		/* @__PURE__ */ O(d, {
			size: "small",
			checked: t,
			className: W.checkbox,
			onChange: (e) => n(e.target.checked)
		}),
		r && /* @__PURE__ */ O(U, { iconKey: r }),
		/* @__PURE__ */ O(T, {
			variant: "body2",
			children: e
		})
	]
}), tt = {
	skeleton: "_skeleton_1ioze_1",
	pulse: "_pulse_1ioze_1"
};
//#endregion
//#region src/components/LoadingContent/LoadingContent.tsx
function G() {
	return /* @__PURE__ */ O(C, {
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
		]].map((e, t) => /* @__PURE__ */ O(c, {
			className: tt.skeleton,
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
function K({ message: e, isVisible: t, style: n }) {
	return t ? /* @__PURE__ */ O(c, {
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
}, nt = A.default ?? A, rt = ({ columns: e, emptyTableMessage: t = "No data available", isLoading: n = !1, onPageChange: r, onRowHover: i, pagination: a, selectedPage: o = 0, selectedRows: s, title: l }) => {
	let u = a?.entries || [], d = a?.limit ? Math.ceil(a.totalCount / a.limit) : 1;
	if (n) return /* @__PURE__ */ O(G, {});
	if (a?.totalCount === 0) return /* @__PURE__ */ O(K, {
		isVisible: !0,
		message: t
	});
	let f = (e, t) => e.render ? /* @__PURE__ */ O("div", {
		className: q["cell-content"],
		children: e.render(t[e.name], t)
	}) : /* @__PURE__ */ O(T, {
		variant: "body2",
		sx: { color: "text.secondary" },
		children: String(t[e.name])
	}), p = (e) => e === "end" ? "right" : e === "center" ? "center" : "left";
	return /* @__PURE__ */ O(c, {
		className: q.container,
		children: /* @__PURE__ */ k(c, {
			className: q.table,
			children: [
				l && /* @__PURE__ */ O(T, {
					className: q.title,
					children: l
				}),
				/* @__PURE__ */ O(ge, {
					component: de,
					elevation: 0,
					className: q["table-container"],
					tabIndex: 0,
					role: "region",
					"aria-label": l ? `${l} table` : "Data table",
					children: /* @__PURE__ */ k(pe, {
						"aria-label": "data table",
						size: "medium",
						children: [/* @__PURE__ */ O(_e, { children: /* @__PURE__ */ O(ve, { children: e.map((e, t) => /* @__PURE__ */ O(he, {
							align: p(e.justify),
							className: q["header-cell"],
							children: /* @__PURE__ */ k(c, {
								className: q["header-item"],
								children: [e.header, e.icon && e.icon]
							})
						}, t)) }) }), /* @__PURE__ */ O(me, { children: u.map((t, n) => {
							let r = s?.includes(t.id), a = (e, t) => e === "status" && t.status?.toLowerCase() || "default";
							return /* @__PURE__ */ O(ve, {
								onMouseOver: () => i?.(t),
								onMouseLeave: () => i?.(void 0),
								className: r ? q["table-row-active"] : "",
								children: e.map((e, n) => /* @__PURE__ */ O(he, {
									align: p(e.justify),
									children: /* @__PURE__ */ O(c, {
										className: q[`body-item-${a(e.name, t)}`],
										children: f(e, t)
									})
								}, n))
							}, n);
						}) })]
					})
				}),
				d > 1 && /* @__PURE__ */ O(nt, {
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
}, J = {
	drawer: "_drawer_jr4qi_1",
	drawerHeader: "_drawerHeader_jr4qi_18",
	title: "_title_jr4qi_24",
	closeButton: "_closeButton_jr4qi_29",
	drawerContent: "_drawerContent_jr4qi_34",
	drawerFooter: "_drawerFooter_jr4qi_40",
	drawerLayout: "_drawerLayout_jr4qi_55"
}, it = ({ isOpen: e, headerTitle: t, onClose: n, onSave: r, saveLabel: i, children: a, onCancel: o, cancelLabel: s }) => /* @__PURE__ */ O(oe, {
	anchor: "right",
	open: e,
	onClose: n,
	classes: { paper: J.drawer },
	children: /* @__PURE__ */ k(C, {
		direction: "column",
		className: J.drawerLayout,
		children: [
			/* @__PURE__ */ k(C, {
				direction: "row",
				sx: {
					justifyContent: "space-between",
					alignItems: "center"
				},
				className: J.drawerHeader,
				children: [/* @__PURE__ */ O(T, {
					variant: "h6",
					className: J.title,
					children: t
				}), /* @__PURE__ */ O(_, {
					size: "small",
					"aria-label": "Close drawer",
					onClick: n,
					className: J.closeButton,
					children: /* @__PURE__ */ O(j, { fontSize: "small" })
				})]
			}),
			/* @__PURE__ */ O(c, {
				className: J.drawerContent,
				children: a
			}),
			/* @__PURE__ */ k(C, {
				direction: {
					xs: "column",
					sm: "row"
				},
				spacing: 1,
				sx: { justifyContent: "flex-end" },
				className: J.drawerFooter,
				children: [o && /* @__PURE__ */ O(H, {
					category: B.outlined,
					height: V.small,
					onClick: o,
					children: s || "Cancel"
				}), /* @__PURE__ */ O(H, {
					height: V.small,
					onClick: r,
					children: i || "Save"
				})]
			})
		]
	})
});
//#endregion
//#region src/components/Form/Form.tsx
function at({ children: e, customSaveButtonText: t, disabled: n, onCancel: r, onCancelText: i, onSave: a }) {
	return /* @__PURE__ */ O("form", {
		onSubmit: (e) => {
			e.preventDefault(), a && a(e);
		},
		style: {
			width: "100%",
			minWidth: 0
		},
		children: /* @__PURE__ */ k(c, { children: [/* @__PURE__ */ O(c, {
			sx: {
				width: "100%",
				minWidth: 0
			},
			children: e
		}), /* @__PURE__ */ O(C, {
			direction: "row",
			sx: {
				justifyContent: "flex-end",
				mt: "18px"
			},
			children: /* @__PURE__ */ k(C, {
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
				children: [r ? /* @__PURE__ */ O(H, {
					height: V.medium,
					category: B.secondary,
					onClick: r,
					children: i || "Cancel"
				}) : null, /* @__PURE__ */ O(c, { children: /* @__PURE__ */ O(H, {
					type: "submit",
					height: V.medium,
					disabled: n,
					children: t ?? "Save"
				}) })]
			})
		})] })
	});
}
//#endregion
//#region src/components/IconButton/IconButton.ts
var ot = _, st = ce, ct = ({ children: e, sx: t, ...n }) => /* @__PURE__ */ O(le, {
	...n,
	sx: [{
		fontSize: "12px",
		overflowWrap: "anywhere"
	}, ...Array.isArray(t) ? t : [t]],
	underline: n.underline ?? "hover",
	color: n.color ?? "primary",
	children: e
}), Y = {
	menu: "_menu_k6frm_1",
	"menu-container": "_menu-container_k6frm_5",
	"menu-item": "_menu-item_k6frm_12"
}, lt = ({ anchorEl: e, children: t, menuItems: n, onClose: r, ...i }) => /* @__PURE__ */ O(ue, {
	...i,
	open: !!e,
	className: Y.menu,
	anchorEl: e,
	onClose: r,
	children: /* @__PURE__ */ k(c, {
		className: Y["menu-container"],
		children: [n?.map((e, t) => /* @__PURE__ */ O(y, {
			className: Y["menu-item"],
			onClick: () => {
				e.onClick(), r();
			},
			children: /* @__PURE__ */ O(T, { children: e.label })
		}, t)), t]
	})
}), X = {
	modal: "_modal_1okm5_1",
	"modal-title": "_modal-title_1okm5_5",
	"modal-content": "_modal-content_1okm5_15"
};
//#endregion
//#region src/components/Modal/Modal.tsx
function ut({ open: e, onClose: t, children: n, title: r, maxWidth: i = "420px" }) {
	return /* @__PURE__ */ k(m, {
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
			className: X.modal
		} },
		children: [/* @__PURE__ */ O(ie, {
			className: X["modal-title"],
			children: r
		}), /* @__PURE__ */ O(ne, { children: /* @__PURE__ */ O(c, {
			className: X["modal-content"],
			children: n
		}) })]
	});
}
var dt = {
	radioLabel: "_radioLabel_14kp5_1",
	radio: "_radio_14kp5_1"
}, ft = ({ label: e, name: t, checked: n, onChange: r }) => /* @__PURE__ */ k("label", {
	className: dt.radioLabel,
	children: [/* @__PURE__ */ O(b, {
		name: t,
		size: "small",
		className: dt.radio,
		checked: n,
		onChange: r
	}), /* @__PURE__ */ O(T, {
		variant: "body2",
		children: e
	})]
}), Z = {
	spinner: "_spinner_clksx_1",
	bounce: "_bounce_clksx_17",
	bounce1: "_bounce1_clksx_17",
	bounce2: "_bounce2_clksx_21",
	small: "_small_clksx_25",
	large: "_large_clksx_30"
}, pt = ({ size: e = "medium" }) => /* @__PURE__ */ k("div", {
	className: `${Z.spinner} ${Z[e]}`,
	children: [
		/* @__PURE__ */ O("div", { className: Z.bounce1 }),
		/* @__PURE__ */ O("div", { className: Z.bounce2 }),
		/* @__PURE__ */ O("div", { className: Z.bounce3 })
	]
}), mt = C, Q = {
	ToastViewport: "_ToastViewport_m2sj3_1",
	ToastRoot: "_ToastRoot_m2sj3_11",
	ToastTitle: "_ToastTitle_m2sj3_23",
	ToastDescription: "_ToastDescription_m2sj3_24",
	ToastClose: "_ToastClose_m2sj3_25"
};
//#endregion
//#region src/components/Toast/Toast.tsx
function ht({ open: e, title: t, message: n, severity: r = "info", onClose: i, autoHideDuration: a = 3e3 }) {
	return /* @__PURE__ */ O(fe, {
		open: e,
		autoHideDuration: a,
		onClose: i,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "right"
		},
		className: Q.ToastViewport,
		children: /* @__PURE__ */ k(o, {
			severity: r,
			className: Q.ToastRoot,
			action: /* @__PURE__ */ O(_, {
				size: "small",
				"aria-label": "close",
				color: "inherit",
				onClick: i,
				className: Q.ToastClose,
				children: /* @__PURE__ */ O(j, { fontSize: "small" })
			}),
			children: [t && /* @__PURE__ */ O(s, {
				className: Q.ToastTitle,
				children: t
			}), n && /* @__PURE__ */ O("div", {
				className: Q.ToastDescription,
				children: n
			})]
		})
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.ts
var gt = be, $ = {
	typography: "_typography_b7f5k_1",
	bold: "_bold_b7f5k_4",
	error: "_error_b7f5k_7",
	success: "_success_b7f5k_10",
	warning: "_warning_b7f5k_13"
}, _t = ({ variant: e = "body1", bold: t = !1, state: n, children: r, ...i }) => {
	let a = [
		$.typography,
		t ? $.bold : "",
		n ? $[n] : "",
		i.className || ""
	].join(" ");
	return /* @__PURE__ */ O(T, {
		variant: e,
		...i,
		className: a,
		children: r
	});
}, vt = w, yt = m, bt = ie, xt = ne, St = re, Ct = te, wt = y, Tt = ae, Et = o, Dt = h, Ot = g, kt = v, At = de, jt = f, Mt = u, Nt = b, Pt = x, Ft = p, It = d, Lt = S, Rt = ({ name: e, control: t, required: n, options: r = [], withObjectValue: i = !0, ...a }) => /* @__PURE__ */ O(M, {
	name: e,
	control: t,
	rules: { required: n && "This field is required" },
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ O(L, {
		options: r,
		onChange: (t) => {
			let n = typeof t == "object", r = t;
			!i && n && (r = t.id), e(r);
		},
		value: t || null,
		...a
	})
}), zt = ({ name: e, control: t, required: n, fieldTitle: r, accept: i, existingFileName: a }) => /* @__PURE__ */ O(M, {
	name: e,
	control: t,
	rules: { required: n && !a && "This field is required" },
	render: ({ field: { onChange: e }, fieldState: { error: t } }) => /* @__PURE__ */ k(C, {
		direction: "column",
		sx: {
			alignItems: "flex-start",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [
			r && /* @__PURE__ */ O(T, {
				sx: {
					color: "text.secondary",
					fontSize: "14px",
					fontWeight: 700,
					mb: "8px",
					mt: "4px"
				},
				children: r
			}),
			/* @__PURE__ */ O("input", {
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
			a && /* @__PURE__ */ k(T, {
				sx: {
					color: "text.secondary",
					fontSize: "12px",
					mt: "4px"
				},
				children: ["Selected file: ", a]
			}),
			t && /* @__PURE__ */ O(T, {
				color: "error",
				sx: {
					fontSize: "12px",
					mt: "4px"
				},
				children: t.message
			})
		]
	})
}), Bt = ({ name: e, control: t, fieldTitle: n, options: r, onValueChange: i }) => /* @__PURE__ */ O(M, {
	name: e,
	control: t,
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ k(c, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			flexDirection: "column",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [n && /* @__PURE__ */ O(T, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				marginBottom: "8px",
				marginTop: "4px"
			},
			children: n
		}), /* @__PURE__ */ O(h, {
			sx: { width: "100%" },
			children: /* @__PURE__ */ O(x, {
				value: t,
				onChange: (t) => {
					e(t.target.value), i?.(t.target.value);
				},
				children: r.map((e) => /* @__PURE__ */ O(g, {
					value: e.value,
					control: /* @__PURE__ */ O(b, {}),
					label: e.label,
					sx: { marginBottom: "8px" }
				}, e.value))
			})
		})]
	})
}), Vt = ({ control: e, name: t, fieldTitle: n, placeholder: r, required: i, options: a }) => /* @__PURE__ */ O(M, {
	control: e,
	name: t,
	rules: { required: i && "This field is required" },
	render: ({ field: { onChange: e, value: t }, fieldState: { error: i } }) => /* @__PURE__ */ k(C, {
		direction: "column",
		sx: {
			alignItems: "flex-start",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [n && /* @__PURE__ */ O(T, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				mb: "8px",
				mt: "4px"
			},
			children: n
		}), /* @__PURE__ */ k(h, {
			fullWidth: !0,
			error: !!i,
			children: [
				r && /* @__PURE__ */ O(v, { children: r }),
				/* @__PURE__ */ O(S, {
					value: t || "",
					onChange: e,
					displayEmpty: !r,
					renderValue: !t && !r ? () => "Select..." : void 0,
					children: a.map((e) => /* @__PURE__ */ O(y, {
						value: e.value,
						children: e.label
					}, e.value))
				}),
				i && /* @__PURE__ */ O(se, {
					error: !0,
					children: i.message
				})
			]
		})]
	})
}), Ht = ({ name: e, control: t, required: n, fieldTitle: r, placeholder: i, ...a }) => /* @__PURE__ */ O(M, {
	name: e,
	control: t,
	rules: { required: n && "This field is required" },
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ k(c, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "baseline",
			flexDirection: "column",
			width: "100%",
			minWidth: 0,
			overflowWrap: "anywhere"
		},
		children: [r && /* @__PURE__ */ O(T, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				marginBottom: "8px",
				marginTop: "4px"
			},
			children: r
		}), /* @__PURE__ */ O(w, {
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
}), Ut = {
	container: "_container_1x4tm_1",
	title: "_title_1x4tm_8"
}, Wt = ({ control: e, disabled: t, fieldTitle: n, name: r, placeholder: i, required: a, type: o, ...s }) => /* @__PURE__ */ O(M, {
	name: r,
	control: e,
	rules: { required: a && "This field is required" },
	render: ({ field: { onChange: e, value: r } }) => /* @__PURE__ */ k(c, {
		className: Ut.container,
		children: [n && /* @__PURE__ */ O(T, {
			className: Ut.title,
			variant: "body2",
			children: n
		}), /* @__PURE__ */ O(w, {
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
export { qe as Accordion, Ae as AddIcon, Et as Alert, L as Autocomplete, Rt as AutocompleteController, Ze as Box, Ge as BoxBridgeThemeProvider, Qe as Breadcrumb, H as Button, B as ButtonCategory, V as ButtonHeight, Mt as Card, et as Checkbox, jt as Chip, Ft as CircularProgress, je as ClearIcon, ke as CloseIcon, rt as DataTable, Me as DeleteIcon, Ne as DeleteOutlineIcon, yt as Dialog, Ct as DialogActions, xt as DialogContent, St as DialogContentText, bt as DialogTitle, Tt as Divider, it as Drawer, Pe as EditIcon, K as EmptyContent, zt as FileInputController, at as Form, Dt as FormControl, Ot as FormControlLabel, U as Icon, ot as IconButton, $e as IconKey, st as InputAdornment, kt as InputLabel, ct as Link, G as LoadingContent, lt as Menu, wt as MenuItem, ut as Modal, Fe as MoreHorizIcon, It as MuiCheckbox, At as Paper, Nt as Radio, ft as RadioButton, Pt as RadioGroup, Bt as RadioGroupController, Ie as SearchIcon, Lt as Select, Vt as SelectController, Le as SendIcon, Re as SmartToyIcon, pt as Spinner, mt as Stack, Ht as TextAreaController, vt as TextField, Wt as TextInputController, ht as Toast, gt as Tooltip, _t as Typography, P as deepMerge, N as defaultTheme, Ke as themePresets };
