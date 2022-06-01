import Item from "./Item";
import data from "../data/example_data.json";
import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";


export default function ItemList() {
  const [selectedOption, setSelectedOption] = useState<String|any>();
  const [searchText, setSearch] = useState<String|any>();
  const [page, setPage] = useState<Number|any>(1);
  const rowsPerPage = 9;
  const [dataFilter, setDatafilter ] = useState<String[]|any>([]);
  const getFilter = () => {
    const getIt = selectedOption?data.filter((e) => {
      return e.categories.some((cata)=>{
        return cata==selectedOption
      })
    }):data
    const searchIt = getSearch(getIt)
    
    setDatafilter(searchIt)
  }

const getSearch = (getIt:any) => {
  return searchText?getIt.filter((e:any) => {
    return e.name.toUpperCase().search(searchText.toUpperCase()) > -1

  }):getIt}

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  useEffect(()=>{
    getFilter()
      return()=>{

      }
    },[selectedOption,searchText])

  useEffect(()=>{
    setPage(1)
    return()=>{

    }
  },[dataFilter])

  return (
    <div>
      <div className="placelist">
        <span>Place List</span>
        <div className="search-zone">
          <select className="select" onChange={selectChange}>
            <option value="">All</option>
            <option value="bakery">Bakery</option>
            <option value="cafe">Cafe</option>
            <option value="restaurant">Restaurant</option>
          </select>
          <div className="bar"/>
          <div className="search">
            <input type="text" onChange={(e) => {setSearch(e.target.value)}} placeholder="Search Name..." />
            <button type="submit">
              <BsSearch className="search-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="itemList">
        <div className="itemGrid">
                  {(rowsPerPage > 0
                    ? dataFilter.slice(
                        page * rowsPerPage - rowsPerPage,
                        page * rowsPerPage
                      )
                    : dataFilter
                  ).map((e:any,index:any) => {
            return (
              <Link to={"/detail/"+"3"} key={index}>
                <Item detail={e} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="next">
        <button  className="pageButton" disabled={page<=1?true:false} onClick={()=>{setPage(page-1)}}><IoIosArrowDropleft/></button>
        <span>{page}</span>
        <button  className="pageButton" disabled={page>=(dataFilter.length/rowsPerPage)?true:false} onClick={()=>{setPage(page+1)}}><IoIosArrowDropright/></button>
      </div>
    </div>
  );
}