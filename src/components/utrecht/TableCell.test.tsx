import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Table } from "./Table";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableRow } from "./TableRow";
import "@testing-library/jest-dom";

describe("Table cell", () => {
  /**
   * The following tests will render an complete table instead of just one standalone table cell,
   * because React doesn't allow standalone rendering of <td>.
   *
   * Since simply using `:only-child` like the other tests doesn't work anymore,
   * the following tests heavily rely on `useRef()`. (That's also why the test for ForwardRef is
   * one of the first tests.)
   */
  it("renders a cell role element", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    );

    const cell = screen.getByRole("cell");

    expect(cell).toBeInTheDocument();
    expect(cell).toBeVisible();
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef<HTMLTableCellElement>();

    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell ref={ref} />
          </TableRow>
        </TableBody>
      </Table>
    );

    const row = screen.getByRole("row");
    const cell = row.querySelector(":only-child");

    expect(ref.current).toBe(cell);
  });

  it("renders a td HTML element", () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    );
    const cell = container.querySelector("td:only-child");

    expect(cell).toBeInTheDocument();
  });

  it("renders a design system BEM class name", () => {
    const ref = createRef<HTMLTableCellElement>();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell ref={ref} />
          </TableRow>
        </TableBody>
      </Table>
    );
    const cell = ref.current;

    expect(cell).toHaveClass("utrecht-table__cell");
  });

  it("renders rich text content", () => {
    const ref = createRef<HTMLTableCellElement>();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell ref={ref}>
              <data value="1234">1,234</data>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const cell = ref.current;

    const richText = cell?.querySelector("data");

    expect(richText).toBeInTheDocument();
  });

  it("can be hidden", () => {
    const ref = createRef<HTMLTableCellElement>();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell ref={ref} hidden />
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(ref.current).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    const ref = createRef<HTMLTableCellElement>();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell ref={ref} className="negative">
              -42
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(ref.current).toHaveClass("negative");
  });
});
