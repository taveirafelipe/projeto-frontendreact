import React from "react";

const max_items = 9;
const mas_left = (max_items - 1) / 2;

const Pagination = ({ limit, total, offSet, setOffSet }) => {
  const current = offSet ? offSet / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - mas_left, 1);

  return (
    <div>
      <ul>
        {Array.from({ length: max_items })
          .map((_, index) => index + first)
          .map((page) => (
            <li>
              <button onClick={() => setOffSet((page - 1) * limit)}>
                {page}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
