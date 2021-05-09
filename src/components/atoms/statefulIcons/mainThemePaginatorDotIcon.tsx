import { motion } from 'framer-motion'

type Props = {
    isActive: boolean
    height: string
    width: string
}

const MainThemePaginatorDotIcon = (props: Props) => (
    <motion.div whileTap={{ scale: 1.3 }}>
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.1295 17.1002C10.612 18.8519 6.34051 17.4205 4.58882 13.903C2.83712 10.3855 4.26857 6.11398 7.78605 4.36227C11.3035 2.61057 15.575 4.04203 17.3267 7.55952C19.0784 11.077 17.647 15.3485 14.1295 17.1002Z"
                stroke="#00FFFF"
                strokeWidth="1.41047"
            />
            <path
                d="M14.3541 17.5526C10.8366 19.3043 6.56512 17.8729 4.81342 14.3554C3.06173 10.8379 4.49318 6.56637 8.01066 4.81467C11.5281 3.06297 15.7997 4.49442 17.5514 8.01191C19.3031 11.5294 17.8716 15.8009 14.3541 17.5526Z"
                stroke="#00FFFF"
                strokeWidth="1.41047"
            />
            <path
                d="M14.5789 18.004C11.0614 19.7557 6.78986 18.3243 5.03816 14.8068C3.28646 11.2893 4.71791 7.01779 8.23539 5.26608C11.7529 3.51438 16.0244 4.94583 17.7761 8.46333C19.5278 11.9808 18.0963 16.2523 14.5789 18.004Z"
                stroke="#00FFFF"
                strokeWidth="1.41047"
            />
            <path
                d="M14.8038 18.4555C11.2863 20.2072 7.01483 18.7757 5.26313 15.2582C3.51143 11.7407 4.94288 7.4692 8.46037 5.7175C11.9778 3.9658 16.2494 5.39725 18.0011 8.91474C19.7528 12.4322 18.3213 16.7038 14.8038 18.4555Z"
                stroke={props.isActive ? '#BDBA78' : 'white'}
                strokeWidth="1.41047"
            />
            <path
                d="M14.0151 18.0026C10.4976 19.7543 6.22607 18.3228 4.47437 14.8053C2.72267 11.2878 4.15413 7.01632 7.67161 5.26462C11.1891 3.51292 15.4606 4.94437 17.2123 8.46186C18.964 11.9794 17.5326 16.2509 14.0151 18.0026Z"
                stroke={props.isActive ? '#BDBA78' : 'white'}
                strokeWidth="1.41047"
            />
            <path
                d="M13.7911 16.987C10.7725 18.4902 7.10674 17.2618 5.60347 14.2432C4.1002 11.2245 5.32864 7.55879 8.34727 6.05552C11.3659 4.55225 15.0316 5.78069 16.5349 8.79932C18.0382 11.818 16.8097 15.4837 13.7911 16.987Z"
                stroke={props.isActive ? '#BDBA78' : 'white'}
                strokeWidth="1.41047"
            />
            <path
                d="M14.0164 17.4381C10.7483 19.0656 6.77972 17.7357 5.15223 14.4676C3.52475 11.1995 4.85469 7.23092 8.12275 5.60343C11.3908 3.97594 15.3594 5.30589 16.9869 8.57395C18.6144 11.842 17.2844 15.8106 14.0164 17.4381Z"
                stroke="black"
                strokeWidth="1.41047"
            />
            <path
                d="M13.9043 16.6486C10.6363 18.2761 6.66766 16.9461 5.04017 13.6781C3.41269 10.41 4.74263 6.44137 8.01069 4.81388C11.2787 3.18639 15.2474 4.51634 16.8748 7.7844C18.5023 11.0525 17.1724 15.0211 13.9043 16.6486Z"
                stroke="black"
                strokeWidth="1.41047"
            />
            <path
                d="M14.8073 16.1989C11.5392 17.8264 7.57061 16.4964 5.94313 13.2283C4.31564 9.96029 5.64559 5.99166 8.91364 4.36417C12.1817 2.73668 16.1503 4.06663 17.7778 7.3347C19.4053 10.6028 18.0753 14.5714 14.8073 16.1989Z"
                stroke="#5E5E5E"
                strokeWidth="1.41047"
            />
            <path
                d="M13.9055 16.0846C10.6374 17.7121 6.66882 16.3822 5.04133 13.1141C3.41385 9.84603 4.74379 5.8774 8.01185 4.24991C11.2799 2.62243 15.2485 3.95237 16.876 7.22044C18.5035 10.4885 17.1735 14.4571 13.9055 16.0846Z"
                stroke="black"
                strokeWidth="1.41047"
            />
            <path
                d="M13.6794 16.1977C10.4114 17.8251 6.44274 16.4952 4.81526 13.2271C3.18777 9.95907 4.51772 5.99044 7.78577 4.36295C11.0538 2.73546 15.0224 4.06541 16.6499 7.33347C18.2774 10.6015 16.9475 14.5702 13.6794 16.1977Z"
                stroke="#5E5E5E"
                strokeWidth="1.41047"
            />
            <circle
                cx="11.1827"
                cy="11.1836"
                r="3.52085"
                transform="rotate(89.8469 11.1827 11.1836)"
                fill={props.isActive ? '#59F5FF' : 'black'}
            />
        </svg>
    </motion.div>
)

export default MainThemePaginatorDotIcon
