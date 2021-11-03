// theme/index.js
import {
  ChakraTheme,
  extendTheme,
  ThemeOverride,
  withDefaultProps,
} from "@chakra-ui/react";

// Global style overrides
// import styles from './styles';

// Foundational style overrides
// import borders from './foundations/borders';

// Component style overrides
import Button from "./components/button";

const one: ThemeOverride = {
  // styles,
  // borders,
  // Other foundational style overrides go here
  fonts: {
    body: "Rubik",
  },
  colors: {
    brandBlue: {
      300: "#2E7FFF",
    },
    blue: {
      50: "#def0ff",
      100: "#afd0ff",
      200: "#7db1ff",
      300: "#4b92ff",
      400: "#1a72ff",
      500: "#0059e6",
      600: "#0045b4",
      700: "#003182",
      800: "#001e51",
      900: "#000a21",
    },
    gray: {
      50: "#f2f2f3",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a5a5a5",
      400: "#8b8b8b",
      500: "#727272",
      600: "#585858",
      700: "#404040",
      800: "#262626",
      900: "#0c0d0d",
    },
    purple: {
      50: "#f2effb",
      100: "#d5d2e1",
      200: "#b9b5ca",
      300: "#9c97b3",
      400: "#80799d",
      500: "#676084",
      600: "#504b67",
      700: "#39354a",
      800: "#22202f",
      900: "#0a0a16",
    },
  },
};

const two: ThemeOverride = {
  components: {
    Button: {
      variants: {
        brandPrimary: (props) => ({
          px: props.size == "sm" ? "24px" : "32px",
          py: props.size == "sm" ? "10px" : "13px",
          color: "white",
          rounded: "full",
          bg: "blue.300",
          _hover: {
            bg: "blue.400",
            // nested _disabled is needed here to override style
            _disabled: {
              bg: "blue.300",
            },
          },
          _active: {
            bg: "blue.400",
          },
          _disabled: {
            opacity: 0.2,
            bg: "blue.300",
          },
          variant: "solid",
        }),
        brandSecondary: (props) => ({
          px: props.size == "sm" ? "24px" : "32px",
          py: props.size == "sm" ? "10px" : "13px",
          color: "gray.700",
          rounded: "full",
          bg: "white",
          borderWidth: "1px",
          borderColor: "gray.200",
          _hover: {
            bg: "gray.50",
            // nested _disabled is needed here to override style
            _disabled: {
              bg: "white",
            },
          },
          _active: {
            bg: "gray.200",
          },
          _disabled: {
            opacity: 0.2,
            bg: "white",
          },
          variant: "solid",
        }),
        secondary: {
          bg: "white",
        },
      },
    },
    Breadcrumb: {
      // https://github.com/common-fate/design/blob/5c1f2ec06e068957055d73d8106364bc3dbe547d/node_modules/@chakra-ui/anatomy/dist/esm/index.js#L37
      parts: ["link", "item", "container"],
      baseStyle: {
        container: {
          "&>ol>:not(:last-child)": { opacity: 0.7 },
        },
      },
    },
    Tooltip: {
      baseStyle: {
        rounded: "md",
        px: "8px",
        py: "4px",
        bg: "purple.700",
        "--popper-arrow-bg": "colors.purple.700",
      },
    },
    // Other components go here
  },
};

const three = withDefaultProps({
  defaultProps: {
    variant: "brandPrimary", // this will set the default variant to `brandPrimary` as specified above
  },
  components: ["Button"],
});

export const theme = extendTheme(one, two, three);
