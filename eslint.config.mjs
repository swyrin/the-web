import antfu from "@antfu/eslint-config";
import nextjs from "@next/eslint-plugin-next";

export default antfu(
    {
        type: "app",
        stylistic: {
            indent: 4,
            quotes: "double",
            semi: true,
            trailingComma: "true",
            arrowParens: "always",
        },
        formatters: true,
        typescript: true,
        react: true,
        imports: true,
    },
    {
        plugins: {
            "@next/next": nextjs,
        },
        rules: {
            ...nextjs.configs.recommended.rules,
            ...nextjs.configs["core-web-vitals"].rules,
        },
    },
    // Custom rules.
    {
        rules: {
            "curly": "off",
            "no-console": ["error", { allow: ["warn", "error", "info"] }],
            "antfu/no-top-level-await": "off",
            "style/brace-style": ["error", "1tbs"],
            "ts/consistent-type-definitions": ["error", "type"],
            "react/prefer-destructuring-assignment": "off",
            "node/prefer-global/process": "off",
            "react-hooks-extra/no-direct-set-state-in-use-effect": "off",
            "@stylistic/jsx-curly-brace-presence": [
                "warn",
                {
                    props: "always",
                    children: "never",
                    propElementValues: "always",
                },
            ],
        },
    },
);
