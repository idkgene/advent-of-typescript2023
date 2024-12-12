type FilterChildrenBy<Union, Excluded> = Union extends Excluded ? never : Union;
