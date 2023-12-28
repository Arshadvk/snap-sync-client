import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react'
import { useUserContext } from '@/context/AuthContext'
import Swal from 'sweetalert2'


const Topbar = () => {

    const { mutate: signOut, isSuccess } = useSignOutAccount()
    const navigate = useNavigate()
    const { user } = useUserContext()
    useEffect(() => {
        if (isSuccess) navigate(0)
    }, [isSuccess])

    const handleSignout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to sign out.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, sign me out!'
        }).then((result) => {
            if (result.isConfirmed) {
                // User confirmed, perform sign out
                signOut();
            }
        });
    };
    return (
        <section className='topbar'>
            <div className='flex-between py-4 px-5'>
                <Link to="/" className='flex gap-3 items-center'>
                    <img src="/assets/images/logo.svg" alt="logo" width={130} height={325} />
                </Link>
                <div className='flex gap-4'>
                    <Button variant={"ghost"} className='shad-button_ghost' onClick={() => handleSignout()}>
                        <img src="/assets/icons/logout.svg" alt="" />
                    </Button>
                    <Link to={`/profile/${user.id}`} className='flex-center gap-3'>
                        <img src={user.imageUrl || "/assets/icons/profile-placeholder.svg"} alt="profile" className='h-8 w-8 rounded-full             ' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Topbar