import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Volunteers" />
            <div className="back relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <>
                            <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
                                Главная
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm underline" style={{
                                color: 'white'
                            }}>
                                Log in
                            </Link>

                            <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline" style={{
                                color: 'white'
                            }}>
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <h1 style={{
                    color: 'white'
                }}>
                    Volunteers 2022
                </h1>
            </div>
        </>
    );
}
