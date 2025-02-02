import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            <Layout>
                <div className="py-4 flex flex-col md:flex-row items-center justify-center gap-11 text-center">
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
                    
                </div>
            </Layout>
        </footer>
    );
};

export default Footer;
