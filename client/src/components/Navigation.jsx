import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/tasks">
                <h1 className="font-bold text-3xl mb-4 px-2">Task App</h1>
            </Link>
            <br />
            <button className="bg-indigo-600 px-3 py-2 rounded-lg hover:bg-indigo-500">
                <Link to="/task-create">Create Task</Link>
            </button>
        </div>
    )
}