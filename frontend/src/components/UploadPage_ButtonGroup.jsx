import React, { useEffect, useState } from 'react';
import MyButton from './UI/MyButton/MyButton';
import axios from 'axios';
import {useFetchAllPostsQuery} from "../services/rtkAPI";
import _ from "lodash";

const UploadPage_ButtonGroup = () => {

    const [view, setView] = useState("");
    const [searchTerm, setSearchTerm] = useState("")
    const [queryTerm, setQueryTerm] = useState("")
    const [sortType, setSortType] = useState({ path: "id", order: "asc" })
    const [range, setRange] = useState({start: 0, end: 10})
    const [drag, setDrag] = useState(true)
    // const [files, setFiles] = useState([])

    const {data: files} = useFetchAllPostsQuery(queryTerm)
    let filteredUsers = files?.filter(file => {
        if (range.end) {
            return file.id >= range.start && file.id <= range.end
        }
        return file.id >= range.start
    })
    let sortedPosts = _.orderBy(filteredUsers, [sortType.path], [sortType.order])

    const handleSearch = () => {
        setQueryTerm(searchTerm)
        console.log(range)
    }

    const handleSort = (item) => {
        if (sortType.path === item) {
            setSortType({ ...sortType, order: sortType.order === "asc" ? "desc" : "asc" })
        } else {
            setSortType({ path: item, order: "asc" })
        }
    }

    const renderSortArrow = (sortType, currentPath) => {
        if (sortType.path === currentPath) {
            if (sortType.order === "asc") {
                return <i className="bi bi-caret-up-fill">asc</i>
            } else {
                return <i className="bi bi-caret-down-fill">desc</i>
            }
        }
        return null
    }

    // async function getfiles() {
    //     axios.get('http://127.0.0.1:8000/api/files/').then(
    //         res => {
    //             // console.log(res.data)
    //             setFiles(res.data)
    //         }).catch(e => {
    //             console.log(e)
    //         })
    // }

    // useEffect(() => {
    //     console.log('useEFFECT')
    //     getfiles()
    // }, [])

    return (
        <div>
            <div className='btns__group container text-center'>
                <div className="row">
                    {/* <p className="d-inline-flex gap-5"> */}
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <MyButton onClick={() => setView("view")}>Просмотр данных</MyButton>
                        <MyButton onClick={() => setView("log")}>Логирование</MyButton>
                        <MyButton onClick={() => setView("faq")}>FAQ</MyButton>
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                {
                    view === "view" && (
                    <div className="p-5">
                        <div className=""></div>
                        <p>Период даты отчета</p>
                        <div className="input-group mb-3" style={{width: 200}}>
                            <input
                                type="search"
                                onChange={e => setRange({...range, start: Number(e.target.value)})}
                                placeholder="От"
                                className="form-control"
                            />
                            <input
                                type="search"
                                onChange={e => setRange({...range, end: Number(e.target.value)})}
                                placeholder="До"
                                className="form-control"
                            />
                        </div>

                        <p>Инн</p>
                        <div className="input-group mb-3" style={{width: 800}}>
                            <input
                                type="search"
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Введите поисковый запрос"
                                className="form-control"
                            />
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => handleSearch()}
                            >
                                Поиск
                            </button>
                        </div>

                        <p>Задолженность</p>
                        <div className="input-group mb-3" style={{width: 800}}>
                            <input
                                type="search"
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Введите поисковый запрос"
                                className="form-control"
                            />
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => handleSearch()}
                            >
                                Поиск
                            </button>
                        </div>

                        <p>КОД НО</p>
                        <div className="input-group mb-3" style={{width: 800}}>
                            <input
                                type="search"
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Введите поисковый запрос"
                                className="form-control"
                            />
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => handleSearch()}
                            >
                                Поиск
                            </button>
                        </div>

                        <p>Уплата</p>
                        <div className="input-group mb-3" style={{width: 800}}>
                            <input
                                type="search"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Введите поисковый запрос"
                                className="form-control"
                            />
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => handleSearch()}
                            >
                                Поиск
                            </button>
                        </div>

                        <table className="table text-left table-bordered p-5">
                             <thead>
                                <tr>
                                    <th scope="col" onClick={() => handleSort("id")}>File id {renderSortArrow(sortType, sortType.path)}</th>
                                    <th scope="col" onClick={() => handleSort("title")}>Title {renderSortArrow(sortType, sortType.path)}</th>
                                    <th scope="col" onClick={() => handleSort("body")}>Body {renderSortArrow(sortType, sortType.path)}</th>
                                </tr>
                             </thead>
                        <tbody>
                            {sortedPosts?.map((file) => {
                                return (
                                    <tr key={file.id}>
                                        <td >{file.id}</td>
                                        <td >{file.title}</td>
                                        <td >{file.body}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                )
                }
            </div>
            {
                view === "log" && (
                    <div className="p-5">
                        <h1>Страница логирования</h1>
                        <div className=""></div>
                        <p>Период</p>
                        <div className="input-group mb-3" style={{width: 200}}>
                            <input
                                type="search"
                                // onChange={e => setSearchTerm(e.target.value)}
                                placeholder="От"
                                className="form-control"
                            />
                            <input
                                type="search"
                                // onChange={e => setSearchTerm(e.target.value)}
                                placeholder="До"
                                className="form-control"
                            />
                        </div>
                    </div>

                )
            }
            {
                view === "faq" && (
                    <div className="p-5">
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Ab asperiores, cupiditate doloremque ducimus
                        ex ipsam maxime provident quaerat quidem reiciendis
                        sapiente soluta veritatis? Magnam nemo quae quod recusandae
                        suscipit tempora.
                    </div>
                )
            }
        </div>

    );
}

export default UploadPage_ButtonGroup;
