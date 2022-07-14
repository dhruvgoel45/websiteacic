// import { useRouter } from 'next/router';

const Button = (props) => {
    // const router = useRouter();

    const registerUser = () => {
        console.log('next', props.next);
        console.log('previous', props.previous);
        if(props.next === 4 && props.previous === 3){
            console.log('this triggers...');
            // router.push('/dashboard/startup');
        }else{
            props.handleClick(props.next);
        }
    }

    return (
        <>
            <button
                type="button"
                className="px-6 py-2 font-semibold rounded-full bg-gray-800 text-gray-100"
                onClick={() => props.handleClick(props.previous)}
                style={{
                    background:
                        "radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% )",
                }}
            >
                Previous
            </button>
            <button
                type="button"
                className="px-7 py-2 ml-3 font-semibold rounded-full bg-gray-800 text-gray-100"
                onClick={registerUser}
                style={{
                    background:
                        "radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% )",
                }}
            >
                Next
            </button>
        </>
    )
}

export default Button;