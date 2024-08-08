import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
		<div className='bg-gradient-to-r from-slate-500 to-yellow-100'>
			<div className='flex flex-col items-center justify-center min-h-screen bg-auth-layout'>
				<div className='p-8 bg-white rounded-lg shadow-md min-w-80'>
					<Link href={"/"} className='flex justify-center mb-4'>
						<Image src={"/vercel.svg"} width={40} height={40} alt='logo' />
					</Link>
aaaaaa
					{children}
				</div>
			</div>
		</div>
	);
}

export default Layout