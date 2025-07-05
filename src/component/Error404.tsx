import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import Footer from './footer';
import TopBar from './topbar';
import { useNavigate } from 'react-router-dom';

export default function Error404Page() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-column min-h-screen">
            <TopBar />
            <div className="flex flex-column justify-content-center align-items-center flex-grow-1 text-center py-8 px-4">
                <h1 className="text-6xl font-bold mb-3">404 Not Found</h1>
                <p className="mb-4 text-500">Your visited page not found. You may go home page.</p>
                <Button label="Back to home page" className="p-button-raised p-button-primary px-6 py-2" onClick={() => navigate("/")}/>
            </div>
            <Footer />
        </div>
    );
}