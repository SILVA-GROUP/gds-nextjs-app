import React from 'react';
import { render } from '@testing-library/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../table';

describe('Table Components', () => {
  describe('Table Component', () => {
    it('renders with default props', () => {
      // Act
      const { container } = render(<Table />);
      const table = container.querySelector('table');

      // Assert
      expect(table).toBeDefined();
    });

    it('applies custom className', () => {
      // Act
      const { container } = render(<Table className="custom-class" />);
      const table = container.querySelector('table');

      // Assert
      expect(table?.className).toContain('custom-class');
    });
  });

  describe('TableHeader Component', () => {
    it('renders with default props', () => {
      // Act
      const { container } = render(
        <Table>
          <TableHeader />
        </Table>
      );
      const thead = container.querySelector('thead');

      // Assert
      expect(thead).toBeDefined();
    });

    it('applies custom className', () => {
      // Act
      const { container } = render(
        <Table>
          <TableHeader className="custom-class" />
        </Table>
      );
      const thead = container.querySelector('thead');

      // Assert
      expect(thead?.className).toContain('custom-class');
    });
  });

  describe('TableBody Component', () => {
    it('renders with default props', () => {
      // Act
      const { container } = render(
        <Table>
          <TableBody />
        </Table>
      );
      const tbody = container.querySelector('tbody');

      // Assert
      expect(tbody).toBeDefined();
    });

    it('applies custom className', () => {
      // Act
      const { container } = render(
        <Table>
          <TableBody className="custom-class" />
        </Table>
      );
      const tbody = container.querySelector('tbody');

      // Assert
      expect(tbody?.className).toContain('custom-class');
    });
  });

  describe('TableRow Component', () => {
    it('renders with default props', () => {
      // Act
      const { container } = render(
        <Table>
          <TableBody>
            <TableRow />
          </TableBody>
        </Table>
      );
      const tr = container.querySelector('tr');

      // Assert
      expect(tr).toBeDefined();
    });

    it('applies custom className', () => {
      // Act
      const { container } = render(
        <Table>
          <TableBody>
            <TableRow className="custom-class" />
          </TableBody>
        </Table>
      );
      const tr = container.querySelector('tr');

      // Assert
      expect(tr?.className).toContain('custom-class');
    });
  });

  describe('TableHead Component', () => {
    it('renders with default props', () => {
      // Act
      const { container } = render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Header</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      );
      const th = container.querySelector('th');

      // Assert
      expect(th).toBeDefined();
      expect(th?.className).toContain('text-govuk-text');
    });

    it('applies custom className', () => {
      // Act
      const { container } = render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="custom-class">Header</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      );
      const th = container.querySelector('th');

      // Assert
      expect(th?.className).toContain('custom-class');
    });
  });

  describe('TableCell Component', () => {
    it('applies custom className', () => {
      // Act
      const { container } = render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="custom-class">Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const td = container.querySelector('td');

      // Assert
      expect(td?.className).toContain('custom-class');
    });
  });
});
