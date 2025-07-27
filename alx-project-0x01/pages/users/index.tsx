import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import {  UsersProps } from "@/interfaces";



const Users: React.FC<UsersProps > = ({ posts }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div>
                    <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                    {posts.map((post, idx) => (
                        <UserCard key={post.id || idx} welcome={post} />
                    ))}                  
                </div>
            </main>

        </div>
    );
};
export default Users;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();

    return {
        props: {
            posts,
        }
    }
}