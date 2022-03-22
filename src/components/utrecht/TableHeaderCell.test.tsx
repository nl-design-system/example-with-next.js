import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Table } from "./Table";
import { TableBody } from "./TableBody";
import { TableRow } from "./TableRow";
import { TableHeaderCell } from "./TableHeaderCell";
import "@testing-library/jest-dom";

describe("Table header cell", () => {
  /**
   * The following tests will render an complete table instead of just one standalone table cell,
   * because React doesn't allow standalone rendering of <td>.
   *
   * Since simply using `:only-child` like the other tests doesn't work anymore,
   * the following tests heavily rely on `useRef()`. (That's also why the test for ForwardRef is
   * one of the first tests.)
   */
  it("renders a columnheader role element", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell />
          </TableRow>
        </TableBody>
      </Table>
    );

    const cell = screen.getByRole("columnheader");

    expect(cell).toBeInTheDocument();
    expect(cell).toBeVisible();
  });

  it("can render a rowheader role element", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row" />
          </TableRow>
        </TableBody>
      </Table>
    );

    const cell = screen.getByRole("rowheader");

    expect(cell).toBeInTheDocument();
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef<HTMLTableHeaderCellElement>();

    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell ref={ref} />
          </TableRow>
        </TableBody>
      </Table>
    );

    const row = screen.getByRole("row");
    const cell = row.querySelector(":only-child");

    expect(ref.current).toBe(cell);
  });

  it("renders a th HTML element", () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell />
          </TableRow>
        </TableBody>
      </Table>
    );
    const cell = container.querySelector("th:only-child");

    expect(cell).toBeInTheDocument();
  });

  it("renders a design system BEM class name", () => {
    const ref = createRef<HTMLTableHeaderCellElement>();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell ref={ref} />
          </TableRow>
        </TableBody>
      </Table>
    );
    const cell = ref.current;

    expect(cell).toHaveClass("utrecht-table__header-cell");
  });

  it("renders rich text content", () => {
    const ref = createRef<HTMLTableHeaderCellElement>();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell ref={ref}>
              <abbr title="Uniform Resource Identifier ">URI</abbr>
            </TableHeaderCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const cell = ref.current;

    const richText = cell?.querySelector("abbr");

    expect(richText).toBeInTheDocument();
  });

  it("can be hidden", () => {
    const ref = createRef<HTMLTableHeaderCellElement>();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell ref={ref} hidden />
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(ref.current).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    const ref = createRef<HTMLTableHeaderCellElement>();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell ref={ref} className="negative">
              -42
            </TableHeaderCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(ref.current).toHaveClass("negative");
  });
});
