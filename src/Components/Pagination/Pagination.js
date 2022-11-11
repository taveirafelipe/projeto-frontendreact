import React from "react";
import { Ul, Li, Button } from "./style";

const max_items = 3;
const mas_left = (max_items - 1) / 2;

const Pagination = ({total, page, setPage}) => {

const first = () => { 
  let num = Math.max(page - mas_left, 1);
    if (page >= total){
      return page-2;
    }else if (page < total){
      return num ;
    }
  };

  return (
    <>
      <Ul>
        {Array.from({ length: max_items })
          .map((_, index) => index + first())
          .map((page) => (
            <Li>
              <Button onClick={() => setPage(page)}>
                {page}
              </Button>
            </Li>
          ))}
      </Ul>
    </>
  );
};

export default Pagination;
