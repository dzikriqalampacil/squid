import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `Poppins, ${base.fonts?.heading}`,
        body: `Poppins, ${base.fonts?.body}`,
    },
    styles: {
        global: {
            html: {
                scrollBehavior: 'smooth'
            },
            body: {
                bg: 'black',
                color: 'white'
            }
        },
    },
});

export default theme