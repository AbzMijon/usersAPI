import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './users.module.scss';
import { User } from "../../types/user.dt";

const fetchUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
};

export default function Users() {

    const { data: users, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: 300000,
        refetchOnWindowFocus: false,
        retry: 1
    });

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [sorted, setSorted] = useState<boolean>(false);

    const filteredUsers = users?.filter((user: User) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortUsers = () => {
        setSorted(!sorted);
    };

    // Копируем пользователей и сортируем
    const sortedUsers = [...(filteredUsers || [])].sort((a, b) => {
        if (sorted) {
          return a.name.localeCompare(b.name); // сортировка по алфавиту
        }
        return b.name.localeCompare(a.name); // обратная сортировка
    });

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error loading users</div>;

    return (
        <div className={styles.users}>
            <h1>Users</h1>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={sortUsers}>
                {sorted ? 'Sort Descending' : 'Sort Ascending'}
            </button>
            <div className={styles.users__list}>
                {sortedUsers && sortedUsers.map((user: User) => (
                    <Link to={`/user/${user.id}`} key={user.id} className={styles.users__card}>
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}