import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/example_data.json";

export default function Detail() {
  const { id } = useParams();

  return (
    <div>
      <div className="detail">
        <Link to="/" className="back">
          {"< back"}
        </Link>
      </div>
      <div className="showDetail">
        {data.map((e: any, index: any) => {
          return e.id == id ? (
            <div className="dataDetail">
              <div className="deLeft">
                <img src={e.profile_image_url} />
                <div className="textpad">
                  <div className="flexS">
                    <span className="texttitle">{e.name}</span>
                    <div className="flexS">
                      <div className="rateIcon" />
                      <span className="textrate">{e.rating}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="coloum dtext">
                      <p>Address:</p>
                    </div>
                    <div className="coloum dcon">{e.address}</div>
                  </div>
                  <div className="row">
                    <div className="coloum dtext">
                      <p>Opening hours:</p>
                    </div>
                    <div className="coloum dcon">
                      {e.operation_time.map((time: any, index: any) => {
                        return time.day != "Saturday" &&
                          time.day != "Sunday" ? (
                          <p>
                            {time.day}: {time.time_open} AM - {time.time_close}{" "}
                            PM{" "}
                          </p>
                        ) : (
                          <p>{time.day}: Close</p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="deRight">
                  <span>Image</span>
                  <div className="imgShow">
                  {e.images.map((img:any,index:any)=>{
                            return(
                        <img className="imgItem" src={img}/>
                            )})}
                  </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
