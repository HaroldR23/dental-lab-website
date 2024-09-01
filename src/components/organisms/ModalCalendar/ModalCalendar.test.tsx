import { render, screen } from "@testing-library/react";
import ModalCalendar from "./ModalCalendar";
import { userEvent } from "@testing-library/user-event";


describe("ModalCalendar", () => {
  const user = userEvent.setup();
  const onCloseMock = jest.fn();

  it("should render without error", () => {

    render(<ModalCalendar isOpen={true} onClose={onCloseMock} />);
    const modal = screen.getByTestId("modal-calendar");
    const calendar = screen.getByTestId("calendar");

    expect(modal).toBeDefined();
    expect(calendar).toBeDefined();
  });

  it("should call onClose when close button is clicked", async () => {

    render(<ModalCalendar isOpen={true} onClose={onCloseMock} />);

    const xButton = screen.getByRole("button", { name: "Close" });
    await user.click(xButton);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it("should not render anything when isOpen is false", () => {

    render(<ModalCalendar isOpen={false} onClose={onCloseMock} />);
    const modal = screen.queryByTestId("modal-calendar");
    const calendar = screen.queryByTestId("calendar");

    expect(modal).toBeNull();
    expect(calendar).toBeNull();
  });
});