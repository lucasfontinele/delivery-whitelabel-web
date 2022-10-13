import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Sodexo = ({
  title = 'Sodexo',
  titleId = 'Sodexo-icon',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={30}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2C0 0.895431 0.895431 0 2 0H30C31.1046 0 32 0.895431 32 2V19C32 20.1046 31.1046 21 30 21H2C0.895431 21 0 20.1046 0 19V2Z"
      fill="#F2F2F2"
    />
    <path
      d="M23.0311 8.18074C23.1558 7.92538 23.2743 7.66697 23.402 7.41161C23.4355 7.67305 23.4719 7.93146 23.5084 8.1929C23.7607 8.10778 24.007 8.00746 24.2624 7.9345C24.083 8.15338 23.9097 8.37835 23.7364 8.60331C23.9249 8.75227 24.1134 8.89516 24.2988 9.04412C24.0465 9.07148 23.7942 9.08364 23.5419 9.10492C23.5327 9.37244 23.5145 9.64301 23.4993 9.91357C23.3534 9.71901 23.2196 9.51837 23.0798 9.32076C22.87 9.51229 22.6572 9.70381 22.4535 9.90141C22.5326 9.62781 22.6116 9.3542 22.6876 9.0806C22.4444 9.0502 22.1982 9.01676 21.955 8.98332C22.1921 8.84955 22.4322 8.71275 22.6694 8.57595C22.5721 8.34187 22.4718 8.11082 22.3775 7.87674C22.5934 7.98314 22.8153 8.07434 23.0311 8.18074Z"
      fill="#273896"
    />
    <path
      d="M23.0311 8.18074C23.1558 7.92538 23.2743 7.66697 23.402 7.41161C23.4355 7.67305 23.4719 7.93146 23.5084 8.1929C23.7607 8.10778 24.007 8.00746 24.2624 7.9345C24.083 8.15338 23.9097 8.37835 23.7364 8.60331C23.9249 8.75227 24.1134 8.89516 24.2988 9.04412C24.0465 9.07148 23.7942 9.08364 23.5419 9.10492C23.5327 9.37244 23.5145 9.64301 23.4993 9.91357C23.3534 9.71901 23.2196 9.51837 23.0798 9.32076C22.87 9.51229 22.6572 9.70381 22.4535 9.90141C22.5326 9.62781 22.6116 9.3542 22.6876 9.0806C22.4444 9.0502 22.1982 9.01676 21.955 8.98332C22.1921 8.84955 22.4322 8.71275 22.6694 8.57595C22.5721 8.34187 22.4718 8.11082 22.3775 7.87674C22.5934 7.98314 22.8153 8.07434 23.0311 8.18074Z"
      stroke="#273896"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M15.8839 9.69771C16.0967 9.67947 16.3095 9.66731 16.5193 9.65211C16.3673 10.4608 16.2153 11.2664 16.0603 12.072C15.9873 12.4368 15.8171 12.8077 15.51 13.0326C15.1847 13.2789 14.7561 13.3397 14.3578 13.3215C14.0052 13.3032 13.6343 13.1847 13.4063 12.8989C13.1722 12.5979 13.16 12.1814 13.2695 11.8288C13.385 11.3971 13.7164 11.0384 14.1268 10.8681C14.6162 10.6462 15.1665 10.6827 15.6894 10.6979C15.7532 10.3635 15.8201 10.0291 15.8839 9.69771Z"
      fill="#273896"
    />
    <path
      d="M15.8839 9.69771C16.0967 9.67947 16.3095 9.66731 16.5193 9.65211C16.3673 10.4608 16.2153 11.2664 16.0603 12.072C15.9873 12.4368 15.8171 12.8077 15.51 13.0326C15.1847 13.2789 14.7561 13.3397 14.3578 13.3215C14.0052 13.3032 13.6343 13.1847 13.4063 12.8989C13.1722 12.5979 13.16 12.1814 13.2695 11.8288C13.385 11.3971 13.7164 11.0384 14.1268 10.8681C14.6162 10.6462 15.1665 10.6827 15.6894 10.6979C15.7532 10.3635 15.8201 10.0291 15.8839 9.69771Z"
      stroke="#273896"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M20.6873 11.701C21.3288 11.1538 21.9064 10.5336 22.4505 9.89218C22.2043 10.7404 21.727 11.5216 21.0825 12.1236C20.9305 12.2452 20.7907 12.3881 20.6204 12.4914C20.0641 12.8684 19.4074 13.1116 18.7325 13.1177L18.7477 13.1055C19.2798 12.7954 19.7905 12.4519 20.2678 12.0628C20.4076 11.9442 20.5566 11.8317 20.6873 11.701Z"
      fill="#EC1C25"
    />
    <path
      d="M20.6873 11.701C21.3288 11.1538 21.9064 10.5336 22.4505 9.89218C22.2043 10.7404 21.727 11.5216 21.0825 12.1236C20.9305 12.2452 20.7907 12.3881 20.6204 12.4914C20.0641 12.8684 19.4074 13.1116 18.7325 13.1177L18.7477 13.1055C19.2798 12.7954 19.7905 12.4519 20.2678 12.0628C20.4076 11.9442 20.5566 11.8317 20.6873 11.701Z"
      stroke="#EC1C25"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M11.4272 10.7283C11.7829 10.6918 12.169 10.7192 12.4852 10.9046C12.7193 11.0384 12.8895 11.2816 12.926 11.5522C12.9746 11.9139 12.8621 12.2909 12.6585 12.5888C12.3514 13.0357 11.8224 13.2972 11.2904 13.3428C10.9408 13.3701 10.5669 13.3428 10.2568 13.1573C10.0167 13.0175 9.84641 12.7621 9.81905 12.4824C9.77953 12.0872 9.91633 11.6829 10.1656 11.3759C10.4757 10.9989 10.9469 10.777 11.4272 10.7283Z"
      fill="#273896"
    />
    <path
      d="M11.4272 10.7283C11.7829 10.6918 12.169 10.7192 12.4852 10.9046C12.7193 11.0384 12.8895 11.2816 12.926 11.5522C12.9746 11.9139 12.8621 12.2909 12.6585 12.5888C12.3514 13.0357 11.8224 13.2972 11.2904 13.3428C10.9408 13.3701 10.5669 13.3428 10.2568 13.1573C10.0167 13.0175 9.84641 12.7621 9.81905 12.4824C9.77953 12.0872 9.91633 11.6829 10.1656 11.3759C10.4757 10.9989 10.9469 10.777 11.4272 10.7283Z"
      stroke="#273896"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M16.8385 11.2056C17.2094 10.8469 17.7414 10.6979 18.2491 10.7101C18.5166 10.7161 18.8085 10.7587 19.0183 10.9381C19.228 11.1205 19.2554 11.4457 19.1399 11.6859C19.0335 11.8957 18.8237 12.0325 18.6109 12.1176C18.1032 12.3091 17.5438 12.2878 17.0179 12.1936C16.9875 12.4854 17.1152 12.7986 17.3797 12.9445C17.7962 13.1664 18.2917 13.1543 18.7477 13.1056L18.7325 13.1178C18.3373 13.3883 17.8326 13.4674 17.3645 13.3883C17.0574 13.3397 16.7473 13.1999 16.5558 12.9475C16.3977 12.756 16.3339 12.5006 16.3552 12.2544C16.3734 11.8592 16.5467 11.4731 16.8385 11.2056Z"
      fill="#273896"
    />
    <path
      d="M16.8385 11.2056C17.2094 10.8469 17.7414 10.6979 18.2491 10.7101C18.5166 10.7161 18.8085 10.7587 19.0183 10.9381C19.228 11.1205 19.2554 11.4457 19.1399 11.6859C19.0335 11.8957 18.8237 12.0325 18.6109 12.1176C18.1032 12.3091 17.5438 12.2878 17.0179 12.1936C16.9875 12.4854 17.1152 12.7986 17.3797 12.9445C17.7962 13.1664 18.2917 13.1543 18.7477 13.1056L18.7325 13.1178C18.3373 13.3883 17.8326 13.4674 17.3645 13.3883C17.0574 13.3397 16.7473 13.1999 16.5558 12.9475C16.3977 12.756 16.3339 12.5006 16.3552 12.2544C16.3734 11.8592 16.5467 11.4731 16.8385 11.2056Z"
      stroke="#273896"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M23.6787 10.7284C24.0435 10.6767 24.4326 10.6858 24.7731 10.847C25.0437 10.9686 25.2565 11.2239 25.3051 11.5188C25.369 11.8806 25.2626 12.2606 25.065 12.5676C24.7822 13.0084 24.2806 13.2851 23.7668 13.3581C23.4051 13.4067 23.022 13.3885 22.6876 13.2304C22.4292 13.1088 22.2255 12.8716 22.1708 12.592C22.1009 12.2484 22.1891 11.8897 22.3593 11.5887C22.6329 11.1145 23.1436 10.8074 23.6787 10.7284Z"
      fill="#273896"
    />
    <path
      d="M23.6787 10.7284C24.0435 10.6767 24.4326 10.6858 24.7731 10.847C25.0437 10.9686 25.2565 11.2239 25.3051 11.5188C25.369 11.8806 25.2626 12.2606 25.065 12.5676C24.7822 13.0084 24.2806 13.2851 23.7668 13.3581C23.4051 13.4067 23.022 13.3885 22.6876 13.2304C22.4292 13.1088 22.2255 12.8716 22.1708 12.592C22.1009 12.2484 22.1891 11.8897 22.3593 11.5887C22.6329 11.1145 23.1436 10.8074 23.6787 10.7284Z"
      stroke="#273896"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M8.05581 10.8439C8.3355 10.7679 8.62734 10.7375 8.91615 10.7406C9.23535 10.7375 9.5576 10.7588 9.87073 10.8135C9.82512 10.9351 9.77952 11.0537 9.74 11.1753C9.28703 11.1418 8.81887 11.1114 8.36894 11.2148C8.23214 11.2513 8.05581 11.306 8.01933 11.4671C8.01325 11.5887 8.12573 11.6587 8.2291 11.6891C8.55134 11.7772 8.89791 11.7651 9.20191 11.9079C9.3448 11.9718 9.4664 12.0964 9.49072 12.2545C9.53024 12.5007 9.46032 12.7713 9.28703 12.9568C9.08943 13.1696 8.79759 13.2638 8.52094 13.3155C7.94637 13.4067 7.35356 13.358 6.79419 13.2152C6.82459 13.0875 6.86107 12.9598 6.89147 12.8321C7.37484 12.8929 7.87037 12.9689 8.35374 12.8686C8.53614 12.8291 8.74286 12.7318 8.77631 12.5281C8.81279 12.3943 8.69422 12.2879 8.5787 12.2545C8.27166 12.1603 7.94333 12.1815 7.64236 12.0691C7.51164 12.0204 7.38396 11.9323 7.33532 11.7985C7.24412 11.5644 7.32924 11.2878 7.51164 11.1236C7.66973 10.9868 7.85821 10.8986 8.05581 10.8439Z"
      fill="#273896"
    />
    <path
      d="M8.05581 10.8439C8.3355 10.7679 8.62734 10.7375 8.91615 10.7406C9.23535 10.7375 9.5576 10.7588 9.87073 10.8135C9.82512 10.9351 9.77952 11.0537 9.74 11.1753C9.28703 11.1418 8.81887 11.1114 8.36894 11.2148C8.23214 11.2513 8.05581 11.306 8.01933 11.4671C8.01325 11.5887 8.12573 11.6587 8.2291 11.6891C8.55134 11.7772 8.89791 11.7651 9.20191 11.9079C9.3448 11.9718 9.4664 12.0964 9.49072 12.2545C9.53024 12.5007 9.46032 12.7713 9.28703 12.9568C9.08943 13.1696 8.79759 13.2638 8.52094 13.3155C7.94637 13.4067 7.35356 13.358 6.79419 13.2152C6.82459 13.0875 6.86107 12.9598 6.89147 12.8321C7.37484 12.8929 7.87037 12.9689 8.35374 12.8686C8.53614 12.8291 8.74286 12.7318 8.77631 12.5281C8.81279 12.3943 8.69422 12.2879 8.5787 12.2545C8.27166 12.1603 7.94333 12.1815 7.64236 12.0691C7.51164 12.0204 7.38396 11.9323 7.33532 11.7985C7.24412 11.5644 7.32924 11.2878 7.51164 11.1236C7.66973 10.9868 7.85821 10.8986 8.05581 10.8439Z"
      stroke="#273896"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M19.3283 10.7406C19.5259 10.7406 19.7266 10.7436 19.9242 10.7406C20.1674 11.0689 20.4288 11.3851 20.7024 11.686L20.6872 11.7012C20.5565 11.8319 20.4075 11.9444 20.2677 12.063C19.9272 11.6435 19.6141 11.1996 19.3283 10.7406Z"
      fill="#273896"
    />
    <path
      d="M19.3283 10.7406C19.5259 10.7406 19.7266 10.7436 19.9242 10.7406C20.1674 11.0689 20.4288 11.3851 20.7024 11.686L20.6872 11.7012C20.5565 11.8319 20.4075 11.9444 20.2677 12.063C19.9272 11.6435 19.6141 11.1996 19.3283 10.7406Z"
      stroke="#273896"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M14.4369 11.2695C14.7895 11.087 15.1999 11.0901 15.586 11.1326C15.5161 11.4549 15.4553 11.7771 15.3884 12.0963C15.3519 12.3 15.2759 12.5098 15.1178 12.6496C14.9233 12.829 14.6405 12.8685 14.3882 12.8381C14.2119 12.8229 14.0234 12.7378 13.9413 12.5706C13.841 12.3791 13.8744 12.1511 13.9261 11.9504C13.9961 11.6677 14.1724 11.4032 14.4369 11.2695Z"
      fill="white"
    />
    <path
      d="M14.4369 11.2695C14.7895 11.087 15.1999 11.0901 15.586 11.1326C15.5161 11.4549 15.4553 11.7771 15.3884 12.0963C15.3519 12.3 15.2759 12.5098 15.1178 12.6496C14.9233 12.829 14.6405 12.8685 14.3882 12.8381C14.2119 12.8229 14.0234 12.7378 13.9413 12.5706C13.841 12.3791 13.8744 12.1511 13.9261 11.9504C13.9961 11.6677 14.1724 11.4032 14.4369 11.2695Z"
      stroke="white"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M17.6624 11.2118C17.8782 11.1145 18.1305 11.075 18.3646 11.1358C18.4741 11.1632 18.5744 11.2544 18.5805 11.376C18.6078 11.5675 18.4406 11.7165 18.2765 11.7742C17.8995 11.8989 17.4921 11.8685 17.1091 11.8046C17.2185 11.5523 17.41 11.3273 17.6624 11.2118Z"
      fill="white"
    />
    <path
      d="M17.6624 11.2118C17.8782 11.1145 18.1305 11.075 18.3646 11.1358C18.4741 11.1632 18.5744 11.2544 18.5805 11.376C18.6078 11.5675 18.4406 11.7165 18.2765 11.7742C17.8995 11.8989 17.4921 11.8685 17.1091 11.8046C17.2185 11.5523 17.41 11.3273 17.6624 11.2118Z"
      stroke="white"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M11.3634 11.1813C11.5945 11.1266 11.862 11.1479 12.0505 11.3029C12.2055 11.4397 12.2572 11.6616 12.2329 11.8592C12.2055 12.0842 12.1234 12.3092 11.9806 12.4885C11.783 12.7439 11.4577 12.8989 11.1354 12.8868C10.9591 12.8868 10.7706 12.8442 10.646 12.7135C10.5578 12.6223 10.5152 12.4977 10.5092 12.373C10.4879 11.8501 10.8345 11.3029 11.3634 11.1813Z"
      fill="white"
    />
    <path
      d="M23.7334 11.1751C23.9523 11.1265 24.2046 11.1386 24.3901 11.2754C24.536 11.3818 24.6089 11.5612 24.612 11.7375C24.6181 12.1905 24.3536 12.6556 23.9249 12.8289C23.6848 12.9262 23.4051 12.9414 23.1619 12.8441C22.9947 12.7803 22.8761 12.6131 22.8609 12.4337C22.8123 11.8834 23.1771 11.2967 23.7334 11.1751Z"
      fill="white"
    />
    <path
      d="M23.7334 11.1751C23.9523 11.1265 24.2046 11.1386 24.3901 11.2754C24.536 11.3818 24.6089 11.5612 24.612 11.7375C24.6181 12.1905 24.3536 12.6556 23.9249 12.8289C23.6848 12.9262 23.4051 12.9414 23.1619 12.8441C22.9947 12.7803 22.8761 12.6131 22.8609 12.4337C22.8123 11.8834 23.1771 11.2967 23.7334 11.1751Z"
      stroke="white"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      d="M20.6204 12.4916C20.7906 12.3882 20.9304 12.2453 21.0824 12.1237C21.4564 12.5341 21.8364 12.9384 22.2164 13.3428C21.9519 13.3367 21.6844 13.3458 21.4199 13.3397C21.35 13.2972 21.3044 13.2333 21.2466 13.1786C21.0277 12.9567 20.8149 12.7317 20.6204 12.4916Z"
      fill="#273896"
    />
    <path
      d="M20.6204 12.4916C20.7906 12.3882 20.9304 12.2453 21.0824 12.1237C21.4564 12.5341 21.8364 12.9384 22.2164 13.3428C21.9519 13.3367 21.6844 13.3458 21.4199 13.3397C21.35 13.2972 21.3044 13.2333 21.2466 13.1786C21.0277 12.9567 20.8149 12.7317 20.6204 12.4916Z"
      stroke="#273896"
      strokeWidth="0.125"
      strokeMiterlimit="10"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V15C32 18.3137 29.3137 21 26 21H6C2.68629 21 0 18.3137 0 15V6Z"
      fill="#E5E5E5"
      fillOpacity="0.01"
    />
  </svg>
);

export default Sodexo;