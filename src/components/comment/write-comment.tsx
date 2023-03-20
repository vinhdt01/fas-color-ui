import { useState, useRef } from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fa1 } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import Dropzone from "react-dropzone";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
type Inputs = {
  raitingValue: string;
  recommendValue: boolean;
  messageValue: string;
  nameValue: string;
  fileValue: any;
};
const WriteComment: React.FC = ({ handleShowPopup }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const [active, setActive] = useState([]);
  const [recommend, setRecommend] = useState(false);
  const [getNameFiles, setGetNameFiles] = useState([]);

  const raitingRef = useRef();

  const onSubmit = (data) => {
    data = { ...data, active, recommend };
  };
  const ratingChanged = (newRating) => {
    raitingRef.current.value = newRating;
    setValue("raitingValue", newRating);
  };
  const Activation = (e: any) => {
    if (active?.includes(e) == false) {
      setActive((previousState) => {
        return [...previousState, e];
      });
    } else {
      const filteredItems = active?.filter((item) => item !== e);
      setActive(filteredItems);
    }
  };
  return (
    <div>
      <div
        onClick={handleShowPopup}
        className="fixed top-0 right-0 left-0 bottom-0 bg-black/[.5] z-50"
      ></div>
    
      <div className="sm:px-[50px] px-[30px] pt-[15px] fixed z-50 top-[50%] left-[50%] translate-y-[-50%]  translate-x-[-50%] md:w-[650px] w-[95%] mr-2  h-auto bg-white">
      <button
                  // onClick={functionHanleShow}
                  onClick={handleShowPopup}

                  aria-label="Close panel"
                  className=
                    "fixed right-5 z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#e0dada] shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md"                 
                >
                  <IoClose className="text-xl" />
                </button>
        <p className="text-center text-[#003467] text-[20px]">Viết Bình Luận</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <input
            className="hidden"
            type="text"
            {...register("raitingValue", { required: true })}
            ref={raitingRef}
          />
          {errors.raitingValue && (
            <p className="text-[12px] text-red-500 text-center">
              Mục Đánh giá của bạn là bắt buộc.
            </p>
          )}
          <div>
            <div className="flex justify-between text-center md:flex-row flex-col">
              <div
                onClick={() => Activation(1)}
                className={cn(
                  "flex-1 p-[10px] bg-[#f4f4f4] md:mr-[10px] mb-[10px] rounded-lg hover:bg-[#003467] text-[14px]  font-['Roboto'] hover:text-[#fff]",
                  { "bg-[#003467] text-[#fff]": active.includes(1) }
                )}
              >
                Sản phẩm đẹp
              </div>
              <div
                onClick={() => Activation(2)}
                className={cn(
                  "flex-2 p-[10px] bg-[#f4f4f4] md:mr-[10px] mb-[10px] rounded-lg hover:bg-[#003467] text-[14px]  font-['Roboto'] hover:text-[#fff]",
                  { "bg-[#003467] text-[#fff]": active.includes(2) }
                )}
              >
                Giao hàng nhanh chóng, an toàn
              </div>
              <div
                onClick={() => Activation(3)}
                className={cn(
                  "flex-1 p-[10px] bg-[#f4f4f4]  mb-[10px] rounded-lg hover:bg-[#003467] text-[14px]  font-['Roboto'] hover:text-[#fff]",
                  { "bg-[#003467] text-[#fff]": active.includes(3) }
                )}
              >
                Gói hàng cẩn thận
              </div>
            </div>
            <div className="flex justify-between text-center sm:flex-row flex-col">
              <div
                onClick={() => Activation(4)}
                className={cn(
                  "flex-1 p-[10px] bg-[#f4f4f4] sm:mr-[10px] mb-[10px] rounded-lg hover:bg-[#003467] font-['Roboto']  hover:text-[#fff]",
                  { "bg-[#003467] text-[#fff]": active.includes(4) }
                )}
              >
                Chất lượng dịch vụ siêu tốt
              </div>
              <div
                onClick={() => Activation(5)}
                className={cn(
                  "flex-1 p-[10px] bg-[#f4f4f4]  mb-[10px] rounded-lg hover:bg-[#003467] font-['Roboto']  hover:text-[#fff]",
                  { "bg-[#003467] text-[#fff]": active.includes(5) }
                )}
              >
                Tư vấn nhiệt tình , thân thiện
              </div>
            </div>
          </div>
          <div
            className="flex items-center mb-[10px] "
            onClick={() => setRecommend(!recommend)}
          >
            {recommend == true ? (
              <FontAwesomeIcon
                className="text-[#003467] w-[21px] h-[19px] mr-2 "
                icon={fa1}
              />
            ) : (
              <FontAwesomeIcon
                className="text-[#003467] w-[21px] h-[19px] mr-2 "
                icon={faHeart}
              />
            )}
            <span className="text-[14px] font-['Roboto'] text-[#000000]">
              Sẽ giới thiệu cho bạn bè và người thân
            </span>
            {/* <input type='checkbox' {...register("recommendValue")} /> */}
          </div>
          <textarea
            {...register("messageValue", { required: true })}
            className="w-full sm:h-[80px] text-[12px] pl-[10px] pt-[5px] rounded-lg outline-none border border-[#8f8f8f]"
            placeholder="Tin nhắn của bạn"
            maxLength="1024"
          />
          {errors.messageValue && (
            <span className="text-[12px] text-red-500">
              Mục Tin nhắn của bạn là bắt buộc.
            </span>
          )}

          <div className="flex flex-col sm:flex-row justify-between  sm:mt-3">
            <input
              {...register("nameValue", { required: true })}
              className="flex-1 py-[5px] sm:mr-[10px] rounded-lg pl-[10px] outline-none border border-[#8f8f8f] "
              type="text"
              placeholder="Nhập tên của bạn"
            />
            {/* <label  className="flex-1 bg-[#f4f4f4] p-[10px] rounded-lg cursor-pointer">
          <input {...register("fileValue")} type="file" id="file" multiple className="hidden"/>
          <p className=""> Thêm hình ảnh hoặc clip </p>
        </label> */}
            <Dropzone
              onDrop={(acceptedFiles) => {
                setGetNameFiles(acceptedFiles);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className="text-[14px] h-[44px] leading-[34px] mt-[10px] sm:mt-0 text-[#282828] bg-[#f4f4f4] px-[5px] py-[5px] text-center rounded-lg">
                      Thêm hình ảnh hoặc clip
                    </p>
                    {getNameFiles &&
                      getNameFiles.map((value) => (
                        <span className="text-[12px]">{value?.name}</span>
                      ))}
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          {errors.nameValue && (
            <span className="text-[12px] text-red-500">
              Mục Tên là bắt buộc.
            </span>
          )}

          <div className="py-[15px]">
            <input
              className="w-full bg-[#003467] px-[14px] py-[7px] text-[#fff] rounded-lg"
              type="submit"
              value="GỬI ĐÁNH GIÁ"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default WriteComment;
