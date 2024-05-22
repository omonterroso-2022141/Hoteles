import { useState } from 'react';

export const UsuarioPerfil = () => {
    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phone: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (userData.password !== userData.passwordConfirm) {
            setMessage('Passwords do not match');
            return;
        }

        if (!validateEmail(userData.email)) {
            setMessage('Invalid email format');
            return;
        }

        // Simulate an API call to update user data
        // Here, you would typically make a request to your backend server
        try {
            // Simulating a successful response
            console.log('User data updated:', userData);
            setMessage('User data updated successfully');
        } catch (error) {
            // Simulating an error response
            console.error('Error updating user data', error);
            setMessage('Failed to update user data');
        }
    };

    const handleDelete = () => {
        // Simulate an API call to delete user account
        // Here, you would typically make a request to your backend server
        try {
            console.log('User account deleted');
            setMessage('User account deleted successfully');
        } catch (error) {
            console.error('Error deleting user account', error);
            setMessage('Failed to delete user account');
        }
    };

    return (
        <div className="user-profile">
            <h2>Update User Profile</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Surname:</label>
                    <input
                        type="text"
                        name="surname"
                        value={userData.surname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        value={userData.passwordConfirm}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
            <button onClick={handleDelete} style={{ marginTop: '20px', color: 'red' }}>
                Delete Account
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};
