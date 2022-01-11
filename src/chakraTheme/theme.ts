// theme/index.js
import {
  ChakraTheme,
  extendTheme,
  ThemeOverride,
  withDefaultProps,
} from "@chakra-ui/react";
import { colors } from "./colors";

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
  colors: colors,
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
          bg: "brandBlue.300",
          _hover: {
            bg: "brandBlue.400",
            // nested _disabled is needed here to override style
            _disabled: {
              bg: "brandBlue.300",
            },
          },
          _active: {
            bg: "brandBlue.400",
          },
          _disabled: {
            opacity: 0.2,
            bg: "brandBlue.300",
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
        bg: "brandPurple.300",
        "--popper-arrow-bg": "colors.brandPurple.300",
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
