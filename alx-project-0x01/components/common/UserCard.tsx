import { UsersProps } from "@/interfaces";

const UserCards: React.FC<UsersProps> = ({ posts }) => {
    return (
        <div className="space-y-6">
            {(Array.isArray(posts) ? posts : []).map((post) => (
                <div key={post.id} className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">{post.name}</h2>
                        <p className="text-gray-700 mb-4">Username: {post.username}</p>
                        <p className="text-gray-700 mb-4">Email: {post.email}</p>
                        <p className="text-gray-700 mb-4">Phone: {post.phone}</p>
                        <p className="text-gray-700 mb-4">Website: {post.website}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mt-4">Address</h3>
                        <p className="text-gray-700">Street: {post.address.street}</p>
                        <p className="text-gray-700">Suite: {post.address.suite}</p>
                        <p className="text-gray-700">City: {post.address.city}</p>
                        <p className="text-gray-700">Zipcode: {post.address.zipcode}</p>
                        <p className="text-gray-700">Geo: {post.address.geo.lat}, {post.address.geo.lng}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mt-4">Company</h3>
                        <p className="text-gray-700">Name: {post.company.name}</p>
                        <p className="text-gray-700">Catchphrase: {post.company.catchPhrase}</p>
                        <p className="text-gray-700">BS: {post.company.bs}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserCards;