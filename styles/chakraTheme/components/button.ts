import {
	BaseThemeWithExtensions,
	ChakraTheme,
	extendTheme,
	ThemeExtension,
	ThemeOverride,
} from '@chakra-ui/react';

const button = extendTheme({
	colors: {},
	components: {
		Button: {
			variants: {
				primary: {
					bg: 'blue',
				},
				secondary: {
					bg: 'white',
				},
			},
		},
	},
} as ThemeOverride);

export default button;
