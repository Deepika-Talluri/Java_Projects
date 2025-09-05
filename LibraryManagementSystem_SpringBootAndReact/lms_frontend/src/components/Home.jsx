import React, { useState } from 'react'
import ListBooksComponent from './ListBooksComponent'
import AddBooks from './AddBooks'
import AddMember from './AddMember';
import ListMembers from './ListMembers';
import UpdateBook from './UpdateBook';

const Home = () => {
    const [currentView, setCurrentView] = useState('home');
    const [bookIdToUpdate, setBookIdToUpdate] = useState(null);

    const handleUpdateBook = (bookId) => {
        setBookIdToUpdate(bookId);
        setCurrentView('updatebook'); 
    };
    const addNewBook = () => {
        setCurrentView('addbook');
    }
    const viewBooks = () => {
        setCurrentView('booksList')
    }
    const addNewMember = () => {
        setCurrentView('addmember');
    }
    const viewMembers = () => {
        setCurrentView('membersList')
    }


    return (
        <div class="welcome-container">
        <h1 class="welcome-title"  style={{textShadow:'0 0 10px rgba(0, 0, 0, 0.1)'}}> Welcome to Library Management System 📖</h1>

        <div class="section">
            <h2><span><img src="./src/assets/library.png" width="60px" /></span>About the System</h2>
            <p>A comprehensive digital solution designed to streamline library operations and enhance user experience. Manage books, members, and transactions efficiently with our integrated system.</p>
        </div>

        <div class="section">
            <h2><span><img src="./src/assets/corefeatures.png" width="60px" /></span>Core Features</h2>
            <div class="feature-grid">
                <div class="feature-item">
                    <h4><span><img src="./src/assets/logo.png" width="60px" /></span>Book Management</h4>
                    <p>Add, update, and manage your book inventory with ease</p>
                </div>
                <div class="feature-item">
                    <h4><span><img src="./src/assets/member.png" width="60px" /></span>Member Management</h4>
                    <p>Handle member registrations and profile updates</p>
                </div>
                <div class="feature-item">
                    <h4><span><img src="./src/assets/issuereturn.png" width="70px" /></span>Issue & Return</h4>
                    <p>Streamlined book borrowing and return process</p>
                </div>
                <div class="feature-item">
                    <h4><span><img src="./src/assets/reports.png" width="70px" /></span>Reports Generation</h4>
                    <p>Comprehensive reporting and analytics tools</p>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Home