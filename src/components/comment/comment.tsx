import { useState } from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import WriteComment from "./write-comment";
const Comment: React.FC = () => {
  const [show, setShow] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div
      className={cn(
        "w-[100%]  cursor-pointer rounded-lg shadow-navigation mb-4",
        { "bg-[#f2f2f2]": show }
      )}
    >
      <div
        className={cn("flex  p-4 justify-between text-[18px] text-[#4c4c4c]", {
          "font-bold": show,
        })}
        onClick={() => setShow(!show)}
      >
        <h1>Bình luận</h1>
        <img
          className={show && "rotate-180"}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC43MDciIGhlaWdodD0iMTAuNzA3IiB2aWV3Qm94PSIwIDAgMjAuNzA3IDEwLjcwNyI+CiAgPGcgaWQ9Ikdyb3VwXzEyMyIgZGF0YS1uYW1lPSJHcm91cCAxMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMzU0IDAuMzU0KSI+CiAgICA8bGluZSBpZD0iTGluZV8zNyIgZGF0YS1uYW1lPSJMaW5lIDM3IiB4Mj0iMTAiIHkyPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDM0NjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzM4IiBkYXRhLW5hbWU9IkxpbmUgMzgiIHkxPSIxMCIgeDI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAzNDY4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9nPgo8L3N2Zz4K"
          alt=""
        />
      </div>
      {show && (
        <div className="border-solid border-t-[1px] border-[#202e65]  mx-2 px-2 py-2">
          <div className="bg-[#fff] my-2 p-2 rounded-lg">
            <div className="flex items-center ">
              <p className="text-[14px] text-[#000000]">Bùi Tiến Dũng</p>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>
            </div>
            <div>Mẫu này có ship tận nhà không ạ ?</div>
          </div>
          <div className="bg-[#fff] my-2 p-2 rounded-lg">
            <div className="flex items-center">
              <p className="text-[14px] text-[#000000]">Bùi Tiến Dũng</p>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>
            </div>
            <div>Mẫu này có ship tận nhà không ạ ?</div>
          </div>
          <button
            onClick={handleShowPopup}
            className="px-[14px] py-[7px] bg-[#003468] text-[#ffffff] sm:text-[16px] text-[12px] rounded-md  my-2"
          >
            Viết bình luận
          </button>
          {showPopup && <WriteComment handleShowPopup={handleShowPopup} />}
        </div>
      )}
    </div>
  );
};
export default Comment;
