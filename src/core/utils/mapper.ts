export const mapToTableData = <T extends { id: string | number }>(items: T[]) =>
  items.map((item) => ({ key: String(item.id), ...item }));
