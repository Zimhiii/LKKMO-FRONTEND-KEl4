import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/AdminComponents/Sidebar';
import { Outlet, useParams } from 'react-router-dom';
import { useAuthUserStore } from '../stores/authStore';
import useProductManagementStore from '../stores/productManagementStore';
import useCategoryManagementStore from '../stores/categoryManagementStore';

export default function AdminLayout() {
    const user = useAuthUserStore((state) => state.user); // Ambil user dari store
    const { fetchCategories, showCategories, setCategory } = useCategoryManagementStore();
    const { fetchProducts, fetchProductById, setProduct } = useProductManagementStore();
    const { id } = useParams();
    const [loading, setLoading] = useState(false); // State untuk loading status

    // Check user role and redirect if necessary
    useEffect(() => {
        if (!user || user.role_id !== 2) {
            window.location.href = '/';
        }
    }, [user]);

    // Fetch products and categories once when component mounts
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading to true while fetching data
            await fetchProducts();
            await fetchCategories();
            setLoading(false); // Set loading to false when done
        };
        fetchData();
    }, [fetchProducts, fetchCategories]);

    // Clear the previous product and fetch new product by id
    useEffect(() => {
        if (id) {
            setLoading(true); // Set loading state
            setProduct(null); // Clear the old product data
            fetchProductById(id).then(() => {
                setLoading(false); // Set loading state to false after fetching
            });
        }
    }, [id, fetchProductById, setProduct]);

    // Fetch categories by ID
    useEffect(() => {
        if (id) {
            const fetchCategory = async () => {
                setCategory(null); // Reset category
                setLoading(true); // Set loading state
                await showCategories(id); // Fetch categories by ID
                setLoading(false); // Set loading state to false after fetching
            };
            fetchCategory();
        }
    }, [id, showCategories, setCategory]);

    return (
        <div className="flex w-full min-h-screen">
            <div className="w-2/12">
                <Sidebar />
            </div>
            <div className="w-10/12">
                {loading ? (
                    <div>Loading...</div> // Show loading message while fetching
                ) : (
                    <Outlet /> // Show the content once the product and category are fetched
                )}
            </div>
        </div>
    );
}
