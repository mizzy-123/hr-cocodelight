import "./bootstrap";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { Ziggy } from "./ziggy";
import { route } from "ziggy-js";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        window.route = (name, params, absolute) =>
            route(name, params, absolute, Ziggy);
        const { bodyClass } = props.initialPage.props;
        document.body.className = bodyClass;
        createRoot(el).render(<App {...props} />);
    },
});
