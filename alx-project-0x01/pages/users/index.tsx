import Header from "@/components/layout/Header";
import UserCards from "@/components/common/UserCard"; // Still plural
import UserModal from "@/components/common/UserModal";
import { UserData, UsersProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<UsersProps> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [users, setUsers] = useState<UserData[]>(posts); // Fix here
    const [user, setUser] = useState<UserData | null>(null);

    const handleUserPost = (newUser: UserData) => {
        const newUserWithId = { ...newUser, id: users.length + 1 };
        setUsers([...users, newUserWithId]); // Fix: update local state
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold mb-4">Update User Profile</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-700 px-4 py-2 rounded-full text-white"
                    >
                        Add User Profile
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <UserCards posts={users} />
                </div>
            </main>
            {isModalOpen && (
                <UserModal onClose={() => setModalOpen(false)} onSubmit={handleUserPost} />
            )}
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
    };
}
