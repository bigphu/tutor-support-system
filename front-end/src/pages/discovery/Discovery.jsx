import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/page-layout/PageLayout';

// 1. Data dùng để test
const MOCK_DATA = [
    { 
        id: 1, courseId: 'CO3001', tutorName: 'Nguyen Van A', skill: 'Software Engineering', 
        avatar: 'https://i.pravatar.cc/150?img=11' 
    },
    { 
        id: 2, courseId: 'CO3005', tutorName: 'Tran Thi B', skill: 'Principles of PL', 
        avatar: 'https://i.pravatar.cc/150?img=5' 
    },
    { 
        id: 3, courseId: 'MT1003', tutorName: 'Le Van C', skill: 'Calculus 1', 
        avatar: 'https://i.pravatar.cc/150?img=3' 
    },
    { 
        id: 4, courseId: 'PH1003', tutorName: 'Pham Van D', skill: 'General Physics 1', 
        avatar: 'https://i.pravatar.cc/150?img=8' 
    },
    { 
        id: 5, courseId: 'CH1003', tutorName: 'Hoang Thi E', skill: 'General Chemistry', 
        avatar: 'https://i.pravatar.cc/150?img=9' 
    },
    { 
        id: 6, courseId: 'CO2003', tutorName: 'Vu Van F', skill: 'Data Structures', 
        avatar: 'https://i.pravatar.cc/150?img=12' 
    },
];

// 2. Component 1: Item danh sách
const TutorCard = ({ item }) => {
    const navigate = useNavigate();

    const handleDetailClick = (e) => {
        e.preventDefault();
        navigate('/subject-view'); 
    };

    return (
        <div className="flex items-center justify-between p-4 mb-3 bg-white border border-blue-400 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                    <img
                        src={item.avatar || "https://via.placeholder.com/150"}
                        alt={item.tutorName}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col text-sm text-blue-900 font-medium">
                    <span className="font-bold">{item.courseId}</span>
                    <span className="mt-1 truncate">
                        {item.tutorName} - {item.skill}
                    </span>
                </div>
            </div>

            <button onClick={handleDetailClick} className="text-xs text-blue-500 font-semibold hover:underline whitespace-nowrap ml-2 bg-transparent border-none cursor-pointer">
                Details
            </button>
        </div>
    );
};

const Discovery = () => {
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [searchTerm, setSearchTerm] = useState(''); // Dùng để Search
    const [sortType, setSortType] = useState('name'); // Dùng để Sort

    useEffect(() => {
        const fetchAllCourses = async () => {
            setLoading(true);
            try {
                // Có backend thì gỡ comment
                // const res = await fetch('http://localhost:5000/api/courses/all');
                // const data = await res.json();

                // Có backend thì comment phần này lại
                await new Promise(resolve => setTimeout(resolve, 500));
                setTutors(MOCK_DATA);
            } 
            catch (error) {
                console.error("Error fetching tutors:", error);
            } 
            finally {
                setLoading(false);
            }
        };
        fetchAllCourses();
    }, []);

    const processedTutors = useMemo(() => {
        let result = [...tutors];

        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(tutor => 
                tutor.tutorName.toLowerCase().includes(lowerTerm) ||
                tutor.courseId.toLowerCase().includes(lowerTerm) ||
                tutor.skill.toLowerCase().includes(lowerTerm)
            );
        }

        result.sort((a, b) => {
            if (sortType === 'name') {
                return a.tutorName.localeCompare(b.tutorName);  // A-Z theo tên GV
            } 
            else if (sortType === 'course') {
                return a.courseId.localeCompare(b.courseId);    // A-Z theo Mã môn
            }
            return 0;
        });

        return result;
    }, [tutors, searchTerm, sortType]);


    return (
        <PageLayout>
            <div className="flex flex-col w-full py-4">
            
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 w-full min-h-[80vh]">
                
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
                        Discover new tutors
                    </h1>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-3 w-full lg:w-auto flex-wrap justify-center lg:justify-start">
                            <button 
                                onClick={() => setSearchTerm('')}
                                className="px-6 py-2 rounded-full border border-blue-400 text-blue-900 font-bold hover:bg-blue-50 transition-colors min-w-[80px]"
                            >
                                All
                            </button>

                            <div className="flex-1 min-w-[200px] lg:w-64">
                                <input
                                    type="text"
                                    placeholder="Search (Name, ID, Skill)..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 rounded-full border border-blue-300 focus:outline-none focus:border-blue-500 text-sm text-blue-900 placeholder-blue-300"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full lg:w-auto flex-wrap justify-center lg:justify-end">
                            <div className="">
                                <select 
                                    value={sortType}
                                    onChange={(e) => setSortType(e.target.value)}
                                    className="appearance-none bg-white border border-blue-400 text-blue-900 py-2 pl-4 pr-10 rounded-full text-sm font-bold focus:outline-none cursor-pointer hover:bg-gray-50"
                                >
                                    <option value="name">Sort by tutor names</option>
                                    <option value="course">Sort by course ID</option>
                                </select>

                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-900">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        {loading ? (
                            <div className="text-center text-blue-400 py-12">Loading tutors...</div>
                        ) : processedTutors.length > 0 ? (
                            processedTutors.map((item) => <TutorCard key={item.id} item={item} />)
                        ) : (
                            <div className="text-center text-gray-500 py-12">
                                No tutors found matching "{searchTerm}".
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Discovery