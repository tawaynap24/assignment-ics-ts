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
  const daynum = new Date();
  var rate = detail.rating.toFixed(1)
  return (
    <div className="item">
      <div className="flex" style={{ margin: "0 0 10px 0 " }}>
        <div>
          <img className="itemIcon" src={detail.profile_image_url}></img>
        </div>
        <div style={{ padding: "0 0 0 10px", width: "100%" }}>
          <span className="itemName">{detail.name}</span>
          <div className="flexS">
            <span className="itemDate">
              {detail.operation_time[daynum.getDay() - 1].time_close} AM -
              {detail.operation_time[daynum.getDay() - 1].time_close} PM
            </span>
            <div className="flex">
              <div className="rateIcon" />
              <span className="itemRate ">{rate}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="itemImg">
        {detail.images.map((url, index) => {
          return <img key={index} src={url} />;
        })}
      </div>
    </div>
  );
}
