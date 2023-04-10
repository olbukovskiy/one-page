interface ListProps<T> {
  variant: "nav__list" | "users__list" | "positions__list";
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return <ul className={props.variant}>{props.items.map(props.renderItem)}</ul>;
}

export default List;
