import React, {useState} from "react";

const selectTable = {
    columns: [
        { name: "File id", isVisible: true },
        { name: "Title", isVisible: true },
        { name: "Body", isVisible: true }
    ]
};

export const Table = () => {
    const [table, setTable] = useState(selectTable);
    const [sortType, setSortType] = useState({ path: "id", order: "asc" })

    const checkClick = (idx) => {
        const tableChange = { ...table };
        tableChange.columns[idx].isVisible = !tableChange.columns[idx].isVisible;
        setTable(tableChange);
    };

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




    return (
        <>
            <h2>Управление отображаемыми полями</h2>
            <div>
                {" "}
                {table.columns?.map((col, idx) => (
                    <div>
                        <span>{col.name}: </span>
                        <input
                            type="checkbox"
                            checked={col.isVisible}
                            onClick={() => checkClick(idx)}
                        />
                    </div>
                ))}
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        {table.map(e => (
                            <th scope="col" onClick={() => handleSort(e.name)}>
                                {e.name} {renderSortArrow(sortType, sortType.path)}
                            </th>
                            ))}
                    </tr>
                </thead>
                {table.columns
                    ?.filter((el) => el.isVisible)
                    .map((column) => (
                        <div>{column.name}</div>
                    ))}
            </table>
        </>
    );
};
