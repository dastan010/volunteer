import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import ApiService from "@/services/api-service";

export default function Users(props) {

    const [users, setUsers] = useState([]);
    const apiService = new ApiService();

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        apiService.getUsers().then(r => {
            setUsers(r.data)
        })
    }

    const deleteBtn = (user) => {
        apiService.deleteUser(user.id).then(() => {
            fetchAllUsers();
        })
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Панель Администратора</h2>}
        >
            <Head title="Admin Panel" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <section>
                            <h1>Пользователи сайта</h1>
                            <div className="tbl-header">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Имя</th>
                                        <th>Почта</th>
                                        <th>Действия</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="tbl-content">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>
                                    {
                                        users.map(user => {
                                            return (
                                                <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <button onClick={() => deleteBtn(user)} style={{
                                                            color: 'red'
                                                        }}>Удалить</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
