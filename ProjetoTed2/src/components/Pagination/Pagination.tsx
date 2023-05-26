import { Pagination as PaginationComponent } from "@material-ui/lab";
import { OwnProps } from "./types";

export default function Pagination(props: OwnProps) {
  const { setPage, page, pageCounter } = props;

  function handleChange(page: number) {
    setPage(page);
  }

  return (
    <PaginationComponent
      count={pageCounter}
      page={page}
      onChange={(e) =>
        handleChange(Number((e?.target as HTMLElement).textContent))
      }
      hideNextButton={true}
      hidePrevButton={true}
    />
  );
}
