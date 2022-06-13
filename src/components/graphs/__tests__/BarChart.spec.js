import { render, screen } from "@testing-library/react";
import BarChart from "../BarChart";

test("renders component", () => {
  render(<BarChart />);
  const textElement = screen.getByTestId("barChart");
  expect(textElement).toBeInTheDocument();
});
