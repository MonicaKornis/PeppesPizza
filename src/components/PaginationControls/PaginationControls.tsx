import styled from "styled-components";

type IPaginationControlsProps = {
    currPage: number;
    onChange: (number) => void; 
    perPage: number;
    totalPages: number;
    onChangePage: (number) => void; 
  }

  const PaginationContainer = styled.div`
    display: flex;
    width: 342px;
    justify-content: space-around;
  `;
    
const PaginationControls: React.FC<IPaginationControlsProps> = ({onChange, currPage, totalPages, onChangePage}) => {
        const perPages = [5, 10, 20]
        console.log(currPage);
        console.log(totalPages)
        return (
          <PaginationContainer>
            <button onClick={() => onChangePage(currPage-1)} disabled={currPage <= 0}>Previous</button>
            <span> Page {currPage+1} of {totalPages+1} </span>
            <label> Pagination: &nbsp;
                <select name="pagination" onChange={(e) => onChange(e.target.value)}>
                {perPages.map((page) => (<option value={page}>{page}</option>))}
                </select>
            </label>
            <button onClick={() => onChangePage(currPage+1)} disabled={currPage >= totalPages}>Next</button>
          </PaginationContainer>
    )
}

export default PaginationControls;