import { render, screen } from "@testing-library/react";
import AnchorItems from "./AnchorItems";

describe("AnchorItems", () => {
    it("should render a list of anchor items with the same length as the list passed as prop", () => {
        const anchorIdsList = ["test-id-1", "test-id-2", "test-id-3"];
        render(<AnchorItems anchorIdsList={anchorIdsList}/>);

        const anchorItems = screen.getAllByRole("listitem");
        expect(anchorItems).toHaveLength(anchorIdsList.length);
    });

    it("should not render any anchor items when the list passed as prop is empty", () => {
        render(<AnchorItems anchorIdsList={[]}/>);

        const anchorItems = screen.queryAllByRole("listitem");
        expect(anchorItems).toHaveLength(0);
    });
});
