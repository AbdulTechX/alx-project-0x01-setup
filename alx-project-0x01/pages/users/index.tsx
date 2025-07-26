import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UsercardProps } from "@/interfaces";



const userPage: React.FC<UsercardProps> = ({ welcome }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div>
                    <h1>User Profile</h1>
                    
                    <UserCard welcome={welcome} />                
                </div>
            </main>

        </div>
    )
}
export default userPage;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const welcome = await response.json();

    return {
        props: {
            welcome,
        }
    }
}