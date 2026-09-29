(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/GalleryCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const posts = [
    {
        src: "/images/real-community.webp",
        alt: "Neighbors gathering at the Sweets & Sourdough cart",
        position: "50% 50%"
    },
    {
        src: "/images/real-sourdough.webp",
        alt: "Fresh Sweets & Sourdough loaf",
        position: "50% 50%"
    },
    {
        src: "/images/real-packaging.webp",
        alt: "Branded biscuit bags at the cart",
        position: "50% 54%"
    },
    {
        src: "/images/real-rolls.webp",
        alt: "Sourdough cinnamon rolls",
        position: "50% 56%"
    },
    {
        src: "/images/real-story.webp",
        alt: "Heather greeting a customer",
        position: "40% 50%"
    },
    {
        src: "/images/real-cart.webp",
        alt: "The stocked roadside bakery cart",
        position: "50% 50%"
    },
    {
        src: "/images/real-biscuits.webp",
        alt: "Jalapeño cheddar sourdough biscuits",
        position: "50% 64%"
    },
    {
        src: "/images/real-coffee.webp",
        alt: "Complimentary coffee at the cart",
        position: "50% 48%"
    },
    {
        src: "/images/real-sign.webp",
        alt: "Hand-painted bakery cart sign",
        position: "55% 50%"
    }
];
function GalleryCarousel() {
    _s();
    const rail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loopPosts = [
        ...posts,
        ...posts
    ];
    const move = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GalleryCarousel.useCallback[move]": (direction)=>{
            const el = rail.current;
            const first = el?.firstElementChild;
            if (!el || !first) return;
            const gap = parseFloat(getComputedStyle(el).columnGap || "0");
            const step = first.offsetWidth + gap;
            const cycleWidth = step * posts.length;
            if (direction === -1 && el.scrollLeft < step * 0.5) {
                el.scrollLeft = cycleWidth;
            }
            el.scrollBy({
                left: step * direction,
                behavior: "smooth"
            });
            window.setTimeout({
                "GalleryCarousel.useCallback[move]": ()=>{
                    if (direction === 1 && el.scrollLeft >= cycleWidth - step * 0.35) {
                        el.scrollLeft -= cycleWidth;
                    }
                }
            }["GalleryCarousel.useCallback[move]"], 650);
        }
    }["GalleryCarousel.useCallback[move]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalleryCarousel.useEffect": ()=>{
            if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const timer = window.setInterval({
                "GalleryCarousel.useEffect.timer": ()=>move(1)
            }["GalleryCarousel.useEffect.timer"], 3800);
            return ({
                "GalleryCarousel.useEffect": ()=>window.clearInterval(timer)
            })["GalleryCarousel.useEffect"];
        }
    }["GalleryCarousel.useEffect"], [
        move,
        paused
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "social-carousel",
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        onFocus: ()=>setPaused(true),
        onBlur: ()=>setPaused(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "social-rail",
                ref: rail,
                children: loopPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "social-post image-wrap",
                        href: "https://instagram.com/sweetestsourdoughstl",
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": `View Sweets & Sourdough on Instagram: ${post.alt}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: post.src,
                            alt: post.alt,
                            fill: true,
                            quality: 90,
                            sizes: "(max-width: 759px) 62vw, 22vw",
                            style: {
                                objectPosition: post.position
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/GalleryCarousel.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    }, `${post.src}-${index}`, false, {
                        fileName: "[project]/app/GalleryCarousel.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/GalleryCarousel.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "carousel-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>move(-1),
                        "aria-label": "Previous Instagram photos",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/app/GalleryCarousel.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Swipe the weekend"
                    }, void 0, false, {
                        fileName: "[project]/app/GalleryCarousel.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>move(1),
                        "aria-label": "Next Instagram photos",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/app/GalleryCarousel.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/GalleryCarousel.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/GalleryCarousel.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(GalleryCarousel, "xYqQykJo/RSARuPOwp/4T8v22Ho=");
_c = GalleryCarousel;
var _c;
__turbopack_context__.k.register(_c, "GalleryCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_GalleryCarousel_tsx_11rewo8._.js.map