import { render, screen } from "@testing-library/react";
import Anchor from "./Anchor";

describe("AnchorItems", () => {
    it("should render a list of anchor items with the same length as the list passed as prop", () => {
        const anchorIdsList = [
            { href:"#1", id:"1", title:"Products" }, 
            { href:"#2", id:"2", title:"Contact to us" },
            { href:"#3", id:"3", title:"Services" }
        ];
        render(<Anchor anchorIdsList={anchorIdsList}/>);

        const anchorItems = screen.getAllByRole("listitem");
        expect(anchorItems).toHaveLength(anchorIdsList.length);
    });

    it("should not render any anchor items when the list passed as prop is empty", () => {
        render(<Anchor anchorIdsList={[]}/>);

        const anchorItems = screen.queryAllByRole("listitem");
        expect(anchorItems).toHaveLength(0);
    });
});
