import Image from "next/image";
import { Button } from "./ui/button";
import Search from "./Search";
import FileUploader from "./FileUploader";

export default function Header() {
    return (
        <header className='header'>
            <Search />
            <div className='header-wrapper'>
                <FileUploader />
                <form action=''>
                    <Button
                        type='submit'
                        className='sign-out-button'
                    >
                        <Image
                            src='/assets/icons/logout.svg'
                            alt='Logo'
                            width={24}
                            height={24}
                            className='w-6'
                        />
                    </Button>
                </form>
            </div>
        </header>
    );
}
