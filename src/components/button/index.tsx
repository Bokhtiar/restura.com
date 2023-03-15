import { IButton } from '@/types/button.type'

export const PrimaryButton: React.FC<IButton> = (props: IButton): JSX.Element => {
    return <button className='flex items-center gap-3 bg-primary text-white py-2 px-4 rounded-br-3xl rounded-md mx-auto md:mx-0'>
        <span className='text-xl'>{props.name}</span>
        <span className="material-symbols-outlined mt-1">arrow_right_alt</span>
    </button>
}