import e, { forwardRef as t, useImperativeHandle as n, useMemo as r, useRef as i, useState as a } from "react";
import { Alert as o, AlertTitle as s, Box as c, Button as l, Checkbox as u, CssBaseline as d, Dialog as f, DialogContent as p, DialogTitle as ee, Drawer as te, FormControl as m, FormControlLabel as ne, FormHelperText as h, IconButton as g, InputLabel as re, Link as ie, Menu as ae, MenuItem as _, Paper as oe, Radio as v, RadioGroup as se, Select as ce, Snackbar as le, Stack as y, Table as ue, TableBody as de, TableCell as b, TableContainer as fe, TableHead as pe, TableRow as x, TextField as S, ThemeProvider as me, Typography as C, createTheme as he } from "@mui/material";
import { jsx as w, jsxs as T } from "react/jsx-runtime";
import ge from "@mui/icons-material/ExpandMore";
import { Combobox as _e, ComboboxItem as ve, ComboboxList as ye, ComboboxProvider as be } from "@ariakit/react";
import { matchSorter as xe } from "match-sorter";
import Se from "classnames";
import E from "react-paginate";
import D from "@mui/icons-material/Close";
import { Controller as O } from "react-hook-form";
//#region src/theme/defaultTheme.ts
var k = {
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
	components: { MuiCssBaseline: { styleOverrides: { ":root": {
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
	} } } },
	typography: { fontFamily: "\"Inter\", sans-serif" }
};
//#endregion
//#region src/theme/deepMerge.ts
function A(e, t) {
	let n = { ...e };
	for (let r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
		let i = e[r], a = t[r];
		n[r] = i && a && typeof i == "object" && typeof a == "object" && !Array.isArray(i) && !Array.isArray(a) ? A(i, a) : a;
	}
	return n;
}
//#endregion
//#region src/theme/BoxBridgeThemeProvider.tsx
function j({ children: e, themeConfig: t }) {
	let n = t ? A(k, t) : k, r = he(n);
	return /* @__PURE__ */ T(me, {
		theme: r,
		children: [/* @__PURE__ */ w(d, {}), e]
	});
}
var Ce = {
	default: k,
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
}, M = {
	accordionContainer: "_accordionContainer_wogrb_1",
	accordionHeader: "_accordionHeader_wogrb_5",
	accordionContent: "_accordionContent_wogrb_10",
	chevronOpen: "_chevronOpen_wogrb_14",
	chevronClosed: "_chevronClosed_wogrb_19"
}, we = ({ title: t, children: n, defaultOpen: r = !0 }) => {
	let [i, a] = e.useState(r);
	return /* @__PURE__ */ T(c, {
		className: M.accordionContainer,
		children: [/* @__PURE__ */ T(y, {
			direction: "row",
			sx: {
				justifyContent: "space-between",
				alignItems: "center"
			},
			className: M.accordionHeader,
			onClick: () => a(!i),
			children: [/* @__PURE__ */ w(C, {
				variant: "body2",
				sx: { fontWeight: "medium" },
				children: t
			}), /* @__PURE__ */ w(ge, {
				className: i ? M.chevronOpen : M.chevronClosed,
				fontSize: "small"
			})]
		}), i && /* @__PURE__ */ w(c, {
			className: M.accordionContent,
			children: n
		})]
	});
};
//#endregion
//#region src/components/Autocomplete/icons/ChevronUpDownIcon.tsx
function Te() {
	return /* @__PURE__ */ T("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ w("path", { d: "m7 15 5 5 5-5" }), /* @__PURE__ */ w("path", { d: "m7 9 5-5 5 5" })]
	});
}
//#endregion
//#region src/components/Autocomplete/icons/CheckIcon.tsx
function Ee() {
	return /* @__PURE__ */ w("svg", {
		viewBox: "0 0 16 16",
		fill: "currentColor",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ w("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
		})
	});
}
//#endregion
//#region src/components/Autocomplete/useAutoCompleteController.ts
var De = ({ options: e, value: t, onChange: o, ref: s }) => {
	let [c, l] = a(!1), [u, d] = a(""), f = i(null);
	n(s, () => ({ focus: () => {
		f.current && f.current.focus();
	} }));
	let p = r(() => e.find((e) => String(e.value) === String(t))?.label, [t, e]);
	return {
		matches: r(() => {
			if (!u) return e;
			let n = xe(e, u, { keys: ["label", "value"] }), r = e.find((e) => e.value === t);
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
}, N = {
	wrapper: "_wrapper_13yt1_1",
	label: "_label_13yt1_8",
	"input-wrapper": "_input-wrapper_13yt1_14",
	combobox: "_combobox_13yt1_21",
	"toggle-button": "_toggle-button_13yt1_50",
	listbox: "_listbox_13yt1_67",
	item: "_item_13yt1_83",
	"item-text": "_item-text_13yt1_118",
	"item-indicator": "_item-indicator_13yt1_122"
}, P = t(({ value: e, onChange: t, options: n, placeholder: r, label: i }, a) => {
	let { matches: o, open: s, setOpen: c, searchValue: l, setSearchValue: u, selectedLabel: d } = De({
		options: n,
		value: e,
		onChange: t,
		ref: a
	});
	return /* @__PURE__ */ T("div", {
		className: N.wrapper,
		children: [i && /* @__PURE__ */ w("label", {
			className: N.label,
			children: i
		}), /* @__PURE__ */ T(be, {
			open: s,
			setOpen: c,
			resetValueOnHide: !0,
			value: l,
			setValue: u,
			children: [/* @__PURE__ */ T("div", {
				className: N["input-wrapper"],
				children: [/* @__PURE__ */ w(_e, {
					placeholder: d || r || "Select...",
					className: N.combobox,
					autoSelect: !0
				}), /* @__PURE__ */ w("button", {
					type: "button",
					className: N["toggle-button"],
					onClick: () => c(!s),
					tabIndex: -1,
					children: /* @__PURE__ */ w(Te, {})
				})]
			}), s && o.length > 0 && /* @__PURE__ */ w(ye, {
				className: N.listbox,
				children: o.map(({ label: n, value: r }) => /* @__PURE__ */ T(ve, {
					className: N.item,
					onClick: () => {
						t(r), c(!1);
					},
					children: [/* @__PURE__ */ w("span", {
						className: N["item-text"],
						children: n
					}), String(r) === String(e) && /* @__PURE__ */ w("span", {
						className: N["item-indicator"],
						children: /* @__PURE__ */ w(Ee, {})
					})]
				}, r))
			})]
		})]
	});
});
P.displayName = "Autocomplete";
var F = {
	breadcrumb: "_breadcrumb_qckku_1",
	"breadcrumb-item": "_breadcrumb-item_qckku_8"
}, Oe = ({ breadcrumbs: e, onBreadcrumbClick: t }) => /* @__PURE__ */ w(c, {
	className: F.breadcrumb,
	children: e.map((n, r) => /* @__PURE__ */ T(c, {
		onClick: r < e.length - 1 ? () => t(n.id, r) : void 0,
		className: F["breadcrumb-item"],
		children: [/* @__PURE__ */ w(C, {
			variant: "body2",
			children: n.name
		}), /* @__PURE__ */ w(c, { children: r < e.length - 1 && /* @__PURE__ */ w(C, {
			variant: "body2",
			children: "/"
		}) })]
	}, n.id ? `${n.name}-${n.id}` : `crumb-${r}`))
}), I = {
	button: "_button_1whxt_1",
	"button-secondary": "_button-secondary_1whxt_17",
	"button-outlined": "_button-outlined_1whxt_22",
	"button-small": "_button-small_1whxt_30",
	"button-medium": "_button-medium_1whxt_34",
	"button-large": "_button-large_1whxt_38",
	"button-text": "_button-text_1whxt_42"
}, L = /* @__PURE__ */ function(e) {
	return e.outlined = "outlined", e.primary = "primary", e.secondary = "secondary", e.text = "text", e;
}({}), R = /* @__PURE__ */ function(e) {
	return e.small = "small", e.medium = "medium", e.large = "large", e;
}({}), z = t(({ category: e = "primary", className: t, height: n = "large", ...r }, i) => {
	let a = "contained";
	return e === "outlined" && (a = "outlined"), e === "text" && (a = "text"), /* @__PURE__ */ w(l, {
		...r,
		ref: i,
		className: Se(I[`button-${e}`], I[`button-${n}`], I.button),
		disableRipple: e === "text",
		variant: a
	});
});
z.displayName = "Button";
//#endregion
//#region src/components/Icon/Icon.tsx
var ke = /* @__PURE__ */ function(e) {
	return e.THREE_D = "3d", e.AUDIO = "audio", e.BOX_CANVAS = "box-canvas", e.BOX_NOTE = "box-note", e.DOCUMENT = "document", e.DRAWING = "drawing", e.FILE = "file", e.FOLDER = "folder", e.IMAGE = "image", e.PDF = "pdf", e.PRESENTATION = "presentation", e.SPREADSHEET = "spreadsheet", e.VIDEO = "video", e;
}({}), B = ({ iconKey: e, width: t = 24, height: n = 24, className: r, style: i, basePath: a = "/assets/icons/" }) => {
	let o = `${a}${e}.svg`;
	return /* @__PURE__ */ w("img", {
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
}, V = {
	checkboxLabel: "_checkboxLabel_ag79y_1",
	checkbox: "_checkbox_ag79y_1"
}, Ae = ({ label: e, checked: t, onChange: n, iconKey: r }) => /* @__PURE__ */ T("label", {
	className: V.checkboxLabel,
	children: [
		/* @__PURE__ */ w(u, {
			size: "small",
			checked: t,
			className: V.checkbox,
			onChange: (e) => n(e.target.checked)
		}),
		r && /* @__PURE__ */ w(B, { iconKey: r }),
		/* @__PURE__ */ w(C, {
			variant: "body2",
			children: e
		})
	]
}), je = {
	skeleton: "_skeleton_1ioze_1",
	pulse: "_pulse_1ioze_1"
};
//#endregion
//#region src/components/LoadingContent/LoadingContent.tsx
function H() {
	return /* @__PURE__ */ w(y, {
		direction: "column",
		spacing: 2,
		sx: {
			maxWidth: "100%",
			width: "100%"
		},
		children: [...[
			,
			,
			,
			,
			,
		]].map((e, t) => /* @__PURE__ */ w(c, {
			className: je.skeleton,
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
function U({ message: e, isVisible: t, style: n }) {
	return t ? /* @__PURE__ */ w(c, {
		sx: {
			textAlign: "center",
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
var W = {
	container: "_container_1yalr_1",
	"table-container": "_table-container_1yalr_5",
	table: "_table_1yalr_5",
	"table-row-active": "_table-row-active_1yalr_22",
	title: "_title_1yalr_26",
	"header-item": "_header-item_1yalr_30",
	"body-item-default": "_body-item-default_1yalr_41",
	"body-item-approved": "_body-item-approved_1yalr_42",
	"body-item-declined": "_body-item-declined_1yalr_43",
	"body-item-pending": "_body-item-pending_1yalr_44",
	"header-cell": "_header-cell_1yalr_65",
	"cell-content": "_cell-content_1yalr_73"
}, Me = E.default ?? E, Ne = ({ columns: e, emptyTableMessage: t = "No data available", isLoading: n = !1, onPageChange: r, onRowHover: i, pagination: a, selectedPage: o = 0, selectedRows: s, title: l }) => {
	let u = a?.entries || [], d = a?.limit ? Math.ceil(a.totalCount / a.limit) : 1;
	if (n) return /* @__PURE__ */ w(H, {});
	if (a?.totalCount === 0) return /* @__PURE__ */ w(U, {
		isVisible: !0,
		message: t
	});
	let f = (e, t) => e.render ? /* @__PURE__ */ w("div", {
		className: W["cell-content"],
		children: e.render(t[e.name], t)
	}) : /* @__PURE__ */ w(C, {
		variant: "body2",
		sx: { color: "text.secondary" },
		children: String(t[e.name])
	}), p = (e) => e === "end" ? "right" : e === "center" ? "center" : "left";
	return /* @__PURE__ */ w(c, {
		className: W.container,
		children: /* @__PURE__ */ T(c, {
			className: W.table,
			children: [
				l && /* @__PURE__ */ w(C, {
					className: W.title,
					children: l
				}),
				/* @__PURE__ */ w(fe, {
					component: oe,
					elevation: 0,
					className: W["table-container"],
					children: /* @__PURE__ */ T(ue, {
						"aria-label": "data table",
						size: "medium",
						children: [/* @__PURE__ */ w(pe, { children: /* @__PURE__ */ w(x, { children: e.map((e, t) => /* @__PURE__ */ w(b, {
							align: p(e.justify),
							className: W["header-cell"],
							children: /* @__PURE__ */ T(c, {
								className: W["header-item"],
								children: [e.header, e.icon && e.icon]
							})
						}, t)) }) }), /* @__PURE__ */ w(de, { children: u.map((t, n) => {
							let r = s?.includes(t.id), a = (e, t) => e === "status" && t.status?.toLowerCase() || "default";
							return /* @__PURE__ */ w(x, {
								onMouseOver: () => i?.(t),
								onMouseLeave: () => i?.(void 0),
								className: r ? W["table-row-active"] : "",
								children: e.map((e, n) => /* @__PURE__ */ w(b, {
									align: p(e.justify),
									children: /* @__PURE__ */ w(c, {
										className: W[`body-item-${a(e.name, t)}`],
										children: f(e, t)
									})
								}, n))
							}, n);
						}) })]
					})
				}),
				d > 1 && /* @__PURE__ */ w(Me, {
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
}, G = {
	drawer: "_drawer_1cqqf_1",
	slideIn: "_slideIn_1cqqf_1",
	drawerHeader: "_drawerHeader_1cqqf_19",
	title: "_title_1cqqf_25",
	closeButton: "_closeButton_1cqqf_30",
	drawerContent: "_drawerContent_1cqqf_35",
	drawerFooter: "_drawerFooter_1cqqf_41"
}, Pe = ({ isOpen: e, headerTitle: t, onClose: n, onSave: r, saveLabel: i, children: a, onCancel: o, cancelLabel: s }) => /* @__PURE__ */ w(te, {
	anchor: "right",
	open: e,
	onClose: n,
	classes: { paper: G.drawer },
	children: /* @__PURE__ */ T(y, {
		direction: "column",
		children: [
			/* @__PURE__ */ T(y, {
				direction: "row",
				sx: {
					justifyContent: "space-between",
					alignItems: "center"
				},
				className: G.drawerHeader,
				children: [/* @__PURE__ */ w(C, {
					variant: "h6",
					className: G.title,
					children: t
				}), /* @__PURE__ */ w(g, {
					size: "small",
					onClick: n,
					className: G.closeButton,
					children: /* @__PURE__ */ w(D, { fontSize: "small" })
				})]
			}),
			/* @__PURE__ */ w(c, {
				className: G.drawerContent,
				children: a
			}),
			/* @__PURE__ */ T(y, {
				direction: "row",
				spacing: 1,
				sx: { justifyContent: "flex-end" },
				className: G.drawerFooter,
				children: [o && /* @__PURE__ */ w(z, {
					category: L.outlined,
					height: R.small,
					onClick: o,
					children: s || "Cancel"
				}), /* @__PURE__ */ w(z, {
					height: R.small,
					onClick: r,
					children: i || "Save"
				})]
			})
		]
	})
});
//#endregion
//#region src/components/Form/Form.tsx
function Fe({ children: e, customSaveButtonText: t, disabled: n, onCancel: r, onCancelText: i, onSave: a }) {
	return /* @__PURE__ */ w("form", {
		onSubmit: (e) => {
			e.preventDefault(), a && a(e);
		},
		children: /* @__PURE__ */ T(c, { children: [/* @__PURE__ */ w(c, {
			sx: { width: "100%" },
			children: e
		}), /* @__PURE__ */ w(y, {
			direction: "row",
			sx: {
				justifyContent: "flex-end",
				mt: "18px"
			},
			children: /* @__PURE__ */ T(y, {
				direction: "row",
				spacing: 2,
				children: [r ? /* @__PURE__ */ w(z, {
					height: R.medium,
					category: L.secondary,
					onClick: r,
					children: i || "Cancel"
				}) : null, /* @__PURE__ */ w(c, { children: /* @__PURE__ */ w(z, {
					type: "submit",
					height: R.medium,
					disabled: n,
					children: t ?? "Save"
				}) })]
			})
		})] })
	});
}
//#endregion
//#region src/components/Link/Link.tsx
var Ie = ({ children: e, sx: t, ...n }) => /* @__PURE__ */ w(ie, {
	...n,
	sx: [{ fontSize: "12px" }, ...Array.isArray(t) ? t : [t]],
	className: `${n.className || ""}`,
	underline: "hover",
	color: "primary",
	children: e
}), K = {
	menu: "_menu_17v8v_1",
	"menu-container": "_menu-container_17v8v_5",
	"menu-item": "_menu-item_17v8v_12"
}, Le = ({ anchorEl: e, children: t, menuItems: n, onClose: r, ...i }) => /* @__PURE__ */ w(ae, {
	...i,
	open: !!e,
	className: K.menu,
	anchorEl: e,
	onClose: r,
	children: /* @__PURE__ */ T(c, {
		className: K["menu-container"],
		children: [n?.map((e, t) => /* @__PURE__ */ w(_, {
			className: K["menu-item"],
			onClick: () => {
				e.onClick(), r();
			},
			children: /* @__PURE__ */ w(C, { children: e.label })
		}, t)), t]
	})
}), q = {
	modal: "_modal_4waph_1",
	"modal-title": "_modal-title_4waph_5",
	"modal-content": "_modal-content_4waph_15"
};
//#endregion
//#region src/components/Modal/Modal.tsx
function Re({ open: e, onClose: t, children: n, title: r, maxWidth: i = "420px" }) {
	return /* @__PURE__ */ T(f, {
		open: e,
		onClose: t,
		slotProps: { paper: {
			sx: {
				maxWidth: i,
				width: "100%"
			},
			className: q.modal
		} },
		children: [/* @__PURE__ */ w(ee, {
			className: q["modal-title"],
			children: r
		}), /* @__PURE__ */ w(p, { children: /* @__PURE__ */ w(c, {
			className: q["modal-content"],
			children: n
		}) })]
	});
}
var J = {
	radioLabel: "_radioLabel_nta99_1",
	radio: "_radio_nta99_1"
}, Y = ({ label: e, name: t, checked: n, onChange: r }) => /* @__PURE__ */ T("label", {
	className: J.radioLabel,
	children: [/* @__PURE__ */ w(v, {
		name: t,
		size: "small",
		className: J.radio,
		checked: n,
		onChange: r
	}), /* @__PURE__ */ w(C, {
		variant: "body2",
		children: e
	})]
}), X = {
	spinner: "_spinner_clksx_1",
	bounce: "_bounce_clksx_17",
	bounce1: "_bounce1_clksx_17",
	bounce2: "_bounce2_clksx_21",
	small: "_small_clksx_25",
	large: "_large_clksx_30"
}, ze = ({ size: e = "medium" }) => /* @__PURE__ */ T("div", {
	className: `${X.spinner} ${X[e]}`,
	children: [
		/* @__PURE__ */ w("div", { className: X.bounce1 }),
		/* @__PURE__ */ w("div", { className: X.bounce2 }),
		/* @__PURE__ */ w("div", { className: X.bounce3 })
	]
}), Z = {
	ToastViewport: "_ToastViewport_lp8zn_1",
	ToastRoot: "_ToastRoot_lp8zn_18",
	ToastTitle: "_ToastTitle_lp8zn_30",
	ToastDescription: "_ToastDescription_lp8zn_37",
	ToastClose: "_ToastClose_lp8zn_44",
	slideIn: "_slideIn_lp8zn_1"
};
//#endregion
//#region src/components/Toast/Toast.tsx
function Be({ open: e, title: t, message: n, severity: r = "info", onClose: i, autoHideDuration: a = 3e3 }) {
	return /* @__PURE__ */ w(le, {
		open: e,
		autoHideDuration: a,
		onClose: i,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "right"
		},
		className: Z.ToastViewport,
		children: /* @__PURE__ */ T(o, {
			severity: r,
			className: Z.ToastRoot,
			action: /* @__PURE__ */ w(g, {
				size: "small",
				"aria-label": "close",
				color: "inherit",
				onClick: i,
				className: Z.ToastClose,
				children: /* @__PURE__ */ w(D, { fontSize: "small" })
			}),
			children: [t && /* @__PURE__ */ w(s, {
				className: Z.ToastTitle,
				children: t
			}), n && /* @__PURE__ */ w("div", {
				className: Z.ToastDescription,
				children: n
			})]
		})
	});
}
var Q = {
	typography: "_typography_1a10v_1",
	bold: "_bold_1a10v_4",
	error: "_error_1a10v_7",
	success: "_success_1a10v_10",
	warning: "_warning_1a10v_13"
}, Ve = ({ variant: e = "body1", bold: t = !1, state: n, children: r, ...i }) => {
	let a = [
		Q.typography,
		t ? Q.bold : "",
		n ? Q[n] : "",
		i.className || ""
	].join(" ");
	return /* @__PURE__ */ w(C, {
		variant: e,
		...i,
		className: a,
		children: r
	});
}, He = ({ name: e, control: t, required: n, options: r = [], withObjectValue: i = !0, ...a }) => /* @__PURE__ */ w(O, {
	name: e,
	control: t,
	rules: { required: n && "This field is required" },
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ w(P, {
		options: r,
		onChange: (t) => {
			let n = typeof t == "object", r = t;
			!i && n && (r = t.id), e(r);
		},
		value: t || null,
		...a
	})
}), Ue = ({ name: e, control: t, required: n, fieldTitle: r, accept: i, existingFileName: a }) => /* @__PURE__ */ w(O, {
	name: e,
	control: t,
	rules: { required: n && !a && "This field is required" },
	render: ({ field: { onChange: e }, fieldState: { error: t } }) => /* @__PURE__ */ T(y, {
		direction: "column",
		sx: {
			alignItems: "flex-start",
			width: "100%"
		},
		children: [
			r && /* @__PURE__ */ w(C, {
				sx: {
					color: "text.secondary",
					fontSize: "14px",
					fontWeight: 700,
					mb: "8px",
					mt: "4px"
				},
				children: r
			}),
			/* @__PURE__ */ w("input", {
				type: "file",
				onChange: (t) => {
					e(t.target.files?.[0] || null);
				},
				accept: i,
				style: {
					display: "block",
					padding: "8px",
					border: "1px solid #ddd",
					borderRadius: "4px",
					background: "#f9f9f9",
					cursor: "pointer"
				}
			}),
			a && /* @__PURE__ */ T(C, {
				sx: {
					color: "text.secondary",
					fontSize: "12px",
					mt: "4px"
				},
				children: ["Selected file: ", a]
			}),
			t && /* @__PURE__ */ w(C, {
				color: "error",
				sx: {
					fontSize: "12px",
					mt: "4px"
				},
				children: t.message
			})
		]
	})
}), We = ({ name: e, control: t, fieldTitle: n, options: r, onValueChange: i }) => /* @__PURE__ */ w(O, {
	name: e,
	control: t,
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ T(c, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			flexDirection: "column",
			width: "100%"
		},
		children: [n && /* @__PURE__ */ w(C, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				marginBottom: "8px",
				marginTop: "4px"
			},
			children: n
		}), /* @__PURE__ */ w(m, {
			sx: { width: "100%" },
			children: /* @__PURE__ */ w(se, {
				value: t,
				onChange: (t) => {
					e(t.target.value), i?.(t.target.value);
				},
				children: r.map((e) => /* @__PURE__ */ w(ne, {
					value: e.value,
					control: /* @__PURE__ */ w(v, {}),
					label: e.label,
					sx: { marginBottom: "8px" }
				}, e.value))
			})
		})]
	})
}), Ge = ({ control: e, name: t, fieldTitle: n, placeholder: r, required: i, options: a }) => /* @__PURE__ */ w(O, {
	control: e,
	name: t,
	rules: { required: i && "This field is required" },
	render: ({ field: { onChange: e, value: t }, fieldState: { error: i } }) => /* @__PURE__ */ T(y, {
		direction: "column",
		sx: {
			alignItems: "flex-start",
			width: "100%"
		},
		children: [n && /* @__PURE__ */ w(C, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				mb: "8px",
				mt: "4px"
			},
			children: n
		}), /* @__PURE__ */ T(m, {
			fullWidth: !0,
			error: !!i,
			children: [
				r && /* @__PURE__ */ w(re, { children: r }),
				/* @__PURE__ */ w(ce, {
					value: t || "",
					onChange: e,
					displayEmpty: !r,
					renderValue: !t && !r ? () => "Select..." : void 0,
					children: a.map((e) => /* @__PURE__ */ w(_, {
						value: e.value,
						children: e.label
					}, e.value))
				}),
				i && /* @__PURE__ */ w(h, {
					error: !0,
					children: i.message
				})
			]
		})]
	})
}), Ke = ({ name: e, control: t, required: n, fieldTitle: r, placeholder: i, ...a }) => /* @__PURE__ */ w(O, {
	name: e,
	control: t,
	rules: { required: n && "This field is required" },
	render: ({ field: { onChange: e, value: t } }) => /* @__PURE__ */ T(c, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "baseline",
			flexDirection: "column",
			width: "100%"
		},
		children: [r && /* @__PURE__ */ w(C, {
			sx: {
				color: "text.secondary",
				fontSize: "14px",
				fontWeight: 700,
				marginBottom: "8px",
				marginTop: "4px"
			},
			children: r
		}), /* @__PURE__ */ w(S, {
			placeholder: i,
			onChange: e,
			value: t,
			required: n,
			multiline: !0,
			rows: 4,
			fullWidth: !0,
			sx: {
				width: "100%",
				"& .MuiInputBase-root": { minHeight: "100px" }
			},
			...a
		})]
	})
}), $ = {
	container: "_container_1c37o_1",
	title: "_title_1c37o_8"
}, qe = ({ control: e, disabled: t, fieldTitle: n, name: r, placeholder: i, required: a, type: o, ...s }) => /* @__PURE__ */ w(O, {
	name: r,
	control: e,
	rules: { required: a && "This field is required" },
	render: ({ field: { onChange: e, value: r } }) => /* @__PURE__ */ T(c, {
		className: $.container,
		children: [n && /* @__PURE__ */ w(C, {
			className: $.title,
			variant: "body2",
			children: n
		}), /* @__PURE__ */ w(S, {
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
export { we as Accordion, P as Autocomplete, He as AutocompleteController, j as BoxBridgeThemeProvider, Oe as Breadcrumb, z as Button, L as ButtonCategory, R as ButtonHeight, Ae as Checkbox, Ne as DataTable, Pe as Drawer, U as EmptyContent, Ue as FileInputController, Fe as Form, B as Icon, ke as IconKey, Ie as Link, H as LoadingContent, Le as Menu, Re as Modal, Y as RadioButton, We as RadioGroupController, Ge as SelectController, ze as Spinner, Ke as TextAreaController, qe as TextInputController, Be as Toast, Ve as Typography, A as deepMerge, k as defaultTheme, Ce as themePresets };
