import { PageTemplatePropTypes } from "./PageTemplatePropTypes";

const PageTemplate = ({ body, carousel, navBar, footer }: PageTemplatePropTypes) => {
    return (
        <>
            <header>
                {carousel && carousel}
                {navBar}
            </header>
                {body}
            <footer>
                {footer}
            </footer>
        </>
    );
};

export default PageTemplate;
