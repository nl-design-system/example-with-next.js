import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Table } from "./Table";
import { TableHeader } from "./TableHeader";
import { TableFooter } from "./TableFooter";
import { TableBody } from "./TableBody";
import { TableCaption } from "./TableCaption";
import { TableRow } from "./TableRow";
import "@testing-library/jest-dom";

fdescribe("Table", () => {
  it("renders a table role element", () => {
    render(<Table />);

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument();
    expect(table).toBeVisible();
  });

  it("can render a table role element with an accessible name", () => {
    render(<Table aria-label="Interesting data" />);

    const table = screen.getByRole("table", {
      name: "Interesting data",
    });

    expect(table).toBeInTheDocument();
  });

  it("can render a table role element with an accessible name defined by an associated heading", () => {
    render(
      <>
        <h2 id="h2">Interesting data</h2>
        <Table aria-labelledby="h2" />
      </>
    );

    const table = screen.getByRole("table", {
      name: "Interesting data",
    });

    expect(table).toBeInTheDocument();
  });

  it("renders an HTML table element", () => {
    const { container } = render(<Table />);

    const table = container.querySelector("table:only-child");

    expect(table).toBeInTheDocument();
  });

  it("renders a design system BEM class name", () => {
    const { container } = render(<Table />);
    const table = container.querySelector(":only-child");

    expect(table).toHaveClass("utrecht-table");
  });

  it("renders table section for header", () => {
    render(
      <Table>
        <TableHeader />
      </Table>
    );

    const table = screen.getByRole("table");

    const section = table.querySelector(":only-child");

    expect(section).toBeInTheDocument();
  });

  it("renders table section for footer", () => {
    render(
      <Table>
        <TableFooter />
      </Table>
    );

    const table = screen.getByRole("table");

    const section = table.querySelector(":only-child");

    expect(section).toBeInTheDocument();
  });

  it("renders table section for body", () => {
    render(
      <Table>
        <TableBody />
      </Table>
    );

    const table = screen.getByRole("table");

    const section = table.querySelector(":only-child");

    expect(section).toBeInTheDocument();
  });

  // Skip because React rendering does not allow tables without thead/tfoot/tbody
  it.skip("renders table rows", () => {
    const { container } = render(
      <Table>
        <TableRow />
        <TableRow />
        <TableRow />
      </Table>
    );
    const table = container.querySelector(":only-child");
    const row = table?.querySelector(":only-child");

    expect(row).toBe(screen.getByRole("row"));
  });

  it("renders table rows grouped in header section", () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow />
        </TableHeader>
      </Table>
    );

    const table = container.querySelector(":only-child");
    const header = table?.querySelector(":only-child");
    const headerChild = header?.querySelector(":only-child");

    expect(headerChild).toBeInTheDocument();

    const row = screen.getByRole("row");

    expect(row).toBe(headerChild);
  });

  it("renders table rows grouped in footer section", () => {
    const { container } = render(
      <Table>
        <TableFooter>
          <TableRow />
        </TableFooter>
      </Table>
    );

    const table = container.querySelector(":only-child");
    const footer = table?.querySelector(":only-child");
    const footerChild = footer?.querySelector(":only-child");

    expect(footerChild).toBeInTheDocument();

    const row = screen.getByRole("row");

    expect(row).toBe(footerChild);
  });

  it("renders table rows grouped in body section", () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow />
        </TableBody>
      </Table>
    );

    const table = container.querySelector(":only-child");
    const body = table?.querySelector(":only-child");
    const bodyChild = body?.querySelector(":only-child");

    expect(bodyChild).toBeInTheDocument();

    const row = screen.getByRole("row");

    expect(row).toBe(bodyChild);
  });

  it("can be hidden", () => {
    const { container } = render(<Table hidden />);

    const table = container.querySelector(":only-child");

    expect(table).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    const { container } = render(<Table className="full-width" />);

    const table = container.querySelector(":only-child");

    expect(table).toHaveClass("full-width");
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef<HTMLHeadingElement>();

    const { container } = render(<Table ref={ref} />);

    const table = container.querySelector(":only-child");

    expect(ref.current).toBe(table);
  });
});
