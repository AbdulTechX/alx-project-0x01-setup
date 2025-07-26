import { UsercardProps } from "@/interfaces";



const UserCard: React.FC<UsercardProps> = ({welcome}) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div>
                <h2 className="text-2xl font-bold mb-2">{welcome.name}</h2>
                <p className="text-gray-700 mb-4">Username: {welcome.username}</p>
                <p className="text-gray-700 mb-4">Email: {welcome.email}</p>
                <p className="text-gray-700 mb-4">Phone: {welcome.phone}</p>
                <p className="text-gray-700 mb-4">Website: {welcome.website}</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold mt-4">Address</h3>
                <p className="text-gray-700">Street: {welcome.address?.street}</p>
                <p className="text-gray-700">Suite: {welcome.address?.suite}</p>
                <p className="text-gray-700">City: {welcome.address?.city}</p>
                <p className="text-gray-700">Zipcode: {welcome.address?.zipcode}</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold mt-4">Company</h3>
                <p className="text-gray-700">Name: {welcome.company?.name}</p>
                <p className="text-gray-700">Catchphrase: {welcome.company?.catchPhrase}</p>
                <p className="text-gray-700">BS: {welcome.company?.bs}</p>
            </div>
        </div>
    );

};
export default UserCard;