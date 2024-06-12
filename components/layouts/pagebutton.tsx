import ReactPaginate from "react-paginate";

interface Props {
  currentPage: number;
  totalPage: number;
  setCurrentPage: (page: number) => void;
}

export default function PageButton({ currentPage, totalPage, setCurrentPage }: Props) {
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel={<span className="mx-1">...</span>}
      nextLabel={<span className="flex items-center justify-center rounded-md w-7 h-8 mx-1 border-2 hover:border-orange-400">&gt;</span>}
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      pageCount={totalPage}
      initialPage={currentPage - 1}
      previousLabel={<span className="flex items-center justify-center rounded-md w-7 h-8 mx-1 border-2 hover:border-orange-400">&lt;</span>}
      renderOnZeroPageCount={null}
      containerClassName="flex items-center justify-center py-5"
      pageClassName="flex items-center justify-center block w-7 h-8 mx-0.5 rounded-md hover:bg-zinc-200"
      activeClassName="bg-orange-500 text-white"
    />
  );
}
