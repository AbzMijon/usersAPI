import axios from "axios";
import styles from './userDetail.module.scss';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const fetchUser = async (id: string) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return data;
};

export default function UserDetail() {

    const { id } = useParams<{ id: string }>();

    const { data: user, isLoading, error } = useQuery({
        queryKey: ['user', id],
        queryFn: () => fetchUser(id!),
        staleTime: 300000,
        refetchOnWindowFocus: false,
        retry: 1
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading user</div>;

    return (
        <div className={styles.userDetail}>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <h3>Address:</h3>
            <p>
            {user.address.street}, {user.address.city}, {user.address.zipcode}
            </p>
            <h3>Company:</h3>
            <p>{user.company.name}</p>
        </div>
    );
}