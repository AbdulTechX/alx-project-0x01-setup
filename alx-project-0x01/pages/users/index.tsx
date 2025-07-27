import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import {  UsersPageProps } from "@/interfaces";



const usersPage: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div>
                    <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                    {users.map((user, idx) => (
                        <UserCard key={user.id || idx} welcome={user} />
                    ))}                  
                </div>
            </main>

        </div>
    );
};
export default usersPage;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: {
            users,
        }
    }
}