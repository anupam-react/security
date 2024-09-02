import React, { useState } from 'react';
import { useTable, usePagination } from 'react-table';
import ReactPaginate from 'react-paginate';

const VisitTable = ({ columns, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadData, setDownloadData] = useState(null);

  const handleDownloadClick = (row) => {
    setDownloadData(row.original); // Save the row data to use in the modal
    setIsModalOpen(true);
    setTimeout(()=>{
        closeModal()
    },2000) // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDownloadData(null);
  };

  const updatedColumns = React.useMemo(() => [
    ...columns,
    {
      Header: 'Site Report Download',
      Cell: ({ row }) => (
        <button
          onClick={() => handleDownloadClick(row)}
          className="p-2 bg-transparent hover:bg-gray-200 rounded"
        >
          <img src="../Vector (66).png" alt="Download" className="h-6 w-6" />
        </button>
      ),
    },
  ], [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    gotoPage,
    pageCount,
    state: { pageIndex },
  } = useTable(
    {
      columns: updatedColumns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div className="p-4">
      <table {...getTableProps()} className="min-w-full bg-white border border-gray-300">
        <thead className="bg-[#F02946]">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 text-left text-sm font-medium text-[#FFFFFF]"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border border-[#A8A8A84D]">
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 text-sm text-gray-600 border border-[#A8A8A84D]"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-end mt-4 mr-4">
        <ReactPaginate
          previousLabel={
            <span className="flex items-center">
              <span className="mr-2">‹</span> Previous
            </span>
          }
          nextLabel={
            <span className="flex items-center">
              Next <span className="ml-2">›</span>
            </span>
          }
          breakLabel="..."
          pageCount={pageCount}
          onPageChange={(page) => gotoPage(page.selected)}
          containerClassName="flex items-center space-x-2"
          pageClassName="w-8 h-8 flex items-center justify-center rounded-[10px] text-[#FFFFFF] bg-pink-200 hover:bg-pink-300 transition"
          previousClassName="text-black font-semibold hover:text-red-500 transition"
          nextClassName="text-red-500 font-semibold hover:text-red-700 transition"
          breakClassName="w-8 h-8 flex items-center justify-center rounded-[10px] text-gray-500 bg-pink-200"
          activeClassName="bg-red-500 text-white font-bold"
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 py-[60px] rounded shadow-lg w-1/3">
          <div className='flex flex-col items-center gap-[20px]'>
            <img src="../Frame 48095930.png" alt="" />
            <p className='font-bold text-[#121212]'>Successfully Downloaded</p>
       </div>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitTable;
