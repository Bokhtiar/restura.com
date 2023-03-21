import { IButton } from '@/types/button.type'

export const PrimaryButton: React.FC<IButton> = (props: IButton): JSX.Element => {
    return <button className='flex items-center gap-3 bg-primary text-white py-2 px-4 rounded-br-3xl rounded-md mx-auto md:mx-0'>
        <span className='text-xl'>{props.name}</span>
        <span className="material-symbols-outlined mt-1">arrow_right_alt</span>
    </button>
}

/* cart && wishlish */
export const CartButton: React.FC<IButton> = (props: IButton): JSX.Element => {
    return <button className='items-center bg-white text-gray-600 border border-primary px-4  rounded-md mx-auto md:mx-0 hover:bg-primary hover:text-white hover:duration-700'>
        <span className='text-base'>{props.name}</span>
    </button>
}