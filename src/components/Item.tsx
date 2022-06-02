import { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom'
interface props {
  detail: {
    id: number;
    name: string;
    categories: string[];
    profile_image_url: string;
    images: string[];
    operation_time: {
      day: string;
      time_open: string;
      time_close: string;
    }[];
    address: string;
    rating: number;
  };
}

export default function Item({ detail }: props) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [page, setPage] = useState<Number | any>(1);
  const rowsPerPage = 1;
  const daynum = new Date();
  var rate = detail.rating.toFixed(1);
  return (
    <div className="item">
      <Link to={"/detail/"+detail.id}>
      <div className="flex" style={{ margin: "0 0 10px 0 " }}>
        <div>
          <img className="itemIcon" src={detail.profile_image_url}></img>
        </div>
        <div className="itemText">
          <span className="itemName">{detail.name}</span>
          <div className="flexS">
            <span className="itemDate">
              {detail.operation_time[daynum.getDay() - 1].time_open} AM -
              {detail.operation_time[daynum.getDay() - 1].time_close} PM
            </span>
            <div className="flex">
              <div className="rateIcon" />
              <span className="itemRate ">{rate}</span>
            </div>
          </div>
        </div>
      </div>
      </Link>
      <div className="itemImg">
        {detail.images.map((url, index) => {
          return <img key={index} src={url} />;
        })}
      </div>

      {(rowsPerPage > 0
        ? detail.images.slice(
            page * rowsPerPage - rowsPerPage,
            page * rowsPerPage
          )
        : detail.images
      ).map((e: any, index: any) => {
        return (
          <div className="slideImg">
            <img key={index} src={e} />
            <div className="imgButton">
              <button
                className="pageButton"
                disabled={page <= 1 ? true : false}
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                <IoIosArrowDropleft />
              </button>
              <button
                className="pageButton"
                disabled={
                  page >= detail.images.length / rowsPerPage ? true : false
                }
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                <IoIosArrowDropright />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
