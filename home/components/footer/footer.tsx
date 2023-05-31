import React from "react";

export default function Footer() {
  const [active1, setActive1] = React.useState(false);
  const [active2, setActive2] = React.useState(false);
  const [active3, setActive3] = React.useState(false);
  return (
    <div className="container">
      <footer data-v-1c35a4ea="" className="footer">
        <div data-v-1c35a4ea="" className="footer__main-container">
          <div
            data-v-1c35a4ea=""
            className={`footer__col spoiler ${
              active1 ? "spoiler_active" : ""
            } `}
          >
            <header
              data-v-1c35a4ea=""
              className="spoiler__header-wrap"
              onClick={() => setActive1(!active1)}
            >
              <span data-v-1c35a4ea="" className="footer__header">
                Biz haqimizda
              </span>
              <svg
                data-v-1c35a4ea=""
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
                className={`ui-icon  spoiler__chevron ${
                  active1 ? "gradus" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29276 12.293C5.68321 11.9024 6.31637 11.9023 6.70697 12.2928L18.0044 23.5858L29.2928 12.293C29.6832 11.9024 30.3164 11.9023 30.707 12.2928C31.0976 12.6832 31.0977 13.3164 30.7072 13.707L18.7119 25.707C18.5244 25.8945 18.27 25.9999 18.0048 26C17.7396 26.0001 17.4852 25.8947 17.2977 25.7072L5.29303 13.7072C4.90243 13.3168 4.90231 12.6836 5.29276 12.293Z"
                  fill="#15151A"
                ></path>
              </svg>
            </header>
            <ul data-v-1c35a4ea="" className="footer__list">
              <li data-v-1c35a4ea="" className="footer__list-item">
                <a
                  data-v-1c35a4ea=""
                  href="/uz/about/delivery-points"
                  className="footer__link"
                  ui-link="ui-link"
                >
                  Topshirish punktlari
                </a>
              </li>
              <li data-v-1c35a4ea="" className="footer__list-item">
                <a
                  data-v-1c35a4ea=""
                  href="/uz/about/careers"
                  className="footer__link"
                  ui-link="ui-link"
                >
                  Vakansiyalar
                </a>
              </li>
            </ul>
          </div>
          <div
            data-v-1c35a4ea=""
            className={`footer__col spoiler ${
              active2 ? "spoiler_active" : ""
            } `}
          >
            <header
              data-v-1c35a4ea=""
              className="spoiler__header-wrap spoiler__header-wrap_border"
              onClick={() => setActive2(!active2)}
            >
              <span data-v-1c35a4ea="" className="footer__header">
                Foydalanuvchilarga
              </span>
              <svg
                data-v-1c35a4ea=""
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
                className={`ui-icon  spoiler__chevron ${
                  active2 ? "gradus" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29276 12.293C5.68321 11.9024 6.31637 11.9023 6.70697 12.2928L18.0044 23.5858L29.2928 12.293C29.6832 11.9024 30.3164 11.9023 30.707 12.2928C31.0976 12.6832 31.0977 13.3164 30.7072 13.707L18.7119 25.707C18.5244 25.8945 18.27 25.9999 18.0048 26C17.7396 26.0001 17.4852 25.8947 17.2977 25.7072L5.29303 13.7072C4.90243 13.3168 4.90231 12.6836 5.29276 12.293Z"
                  fill="#15151A"
                ></path>
              </svg>
            </header>
            <ul data-v-1c35a4ea="" className="footer__list">
              <li data-v-1c35a4ea="" className="footer__list-item">
                <a
                  data-v-1c35a4ea=""
                  rel="nofollow noopener noreferrer"
                  href="#contacts"
                  className="footer__link"
                >
                  Biz bilan bogʻlanish
                </a>
              </li>
              <li data-v-1c35a4ea="" className="footer__list-item">
                <a
                  data-v-1c35a4ea=""
                  href="/uz/faq"
                  className="footer__link"
                  ui-link="ui-link"
                >
                  Savol-Javob
                </a>
              </li>
            </ul>
          </div>
          <div
            data-v-1c35a4ea=""
            className={`footer__col spoiler ${
              active3 ? "spoiler_active" : ""
            } `}
          >
            <header
              data-v-1c35a4ea=""
              className="spoiler__header-wrap spoiler__header-wrap_border"
              onClick={() => setActive3(!active3)}
            >
              <span data-v-1c35a4ea="" className="footer__header">
                Tadbirkorlarga
              </span>
              <svg
                data-v-1c35a4ea=""
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
                className={`ui-icon  spoiler__chevron ${
                  active3 ? "gradus" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29276 12.293C5.68321 11.9024 6.31637 11.9023 6.70697 12.2928L18.0044 23.5858L29.2928 12.293C29.6832 11.9024 30.3164 11.9023 30.707 12.2928C31.0976 12.6832 31.0977 13.3164 30.7072 13.707L18.7119 25.707C18.5244 25.8945 18.27 25.9999 18.0048 26C17.7396 26.0001 17.4852 25.8947 17.2977 25.7072L5.29303 13.7072C4.90243 13.3168 4.90231 12.6836 5.29276 12.293Z"
                  fill="#15151A"
                ></path>
              </svg>
            </header>
            <ul data-v-1c35a4ea="" className="footer__list">
              <li data-v-1c35a4ea="" className="footer__list-item">
                <a
                  data-v-1c35a4ea=""
                  ui-link="ui-link"
                  href="https://seller.uzum.uz/"
                  rel="nofollow noopener noreferrer"
                  className="footer__link"
                >
                  Uzumda soting
                </a>
              </li>
              <li data-v-1c35a4ea="" className="footer__list-item">
                <a
                  data-v-1c35a4ea=""
                  ui-link="ui-link"
                  href="https://seller.uzum.uz/seller/signin"
                  rel="nofollow noopener noreferrer"
                  className="footer__link"
                >
                  Sotuvchi kabinetiga kirish
                </a>
              </li>
            </ul>
          </div>
          <div data-v-1c35a4ea="" className="footer__col-break"></div>
          <div data-v-1c35a4ea="" className="footer__col">
            <div data-v-0f97d62c="" data-v-1c35a4ea="" className="contact">
              <div data-v-0f97d62c="" className="contact__item">
                <span data-v-0f97d62c="" className="contact__item-header">
                  Ilovani yuklab olish
                </span>
                <div data-v-e90411aa="" data-v-0f97d62c="" className="app-link">
                  <a
                    data-v-e90411aa=""
                    target="_blank"
                    href="https://apps.apple.com/ru/app/uzum-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056"
                    rel="nofollow noopener noreferrer"
                    className="app-link__item"
                  >
                    <img
                      data-v-e90411aa=""
                      src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M14.961 3.46878C15.6409 2.53501 16.1022 1.28122 15.9805 0C14.9853 0.0543415 13.7709 0.720988 13.0678 1.65549C12.4364 2.45575 11.8777 3.76203 12.0233 4.98954C13.1405 5.09596 14.2566 4.37635 14.961 3.46878Z' fill='black'/%3e %3cpath d='M16.3801 5.00736C14.559 4.8975 13.0106 6.05404 12.141 6.05404C11.2709 6.05404 9.93914 5.06272 8.49877 5.08943C6.62405 5.11732 4.88452 6.19078 3.93317 7.89808C1.97642 11.3135 3.41678 16.3798 5.31962 19.1615C6.24369 20.5377 7.35733 22.053 8.82474 21.9986C10.2112 21.9435 10.7546 21.0894 12.4399 21.0894C14.124 21.0894 14.6135 21.9986 16.0811 21.971C17.6031 21.9435 18.5546 20.5942 19.4787 19.2166C20.5387 17.6478 20.9727 16.133 21 16.0499C20.9727 16.0223 18.0652 14.8928 18.0382 11.5057C18.0108 8.66968 20.321 7.3207 20.4297 7.23704C19.1251 5.28304 17.0867 5.06272 16.3801 5.00736Z' fill='black'/%3e %3c/svg%3e"
                      className="noselect"
                      style={{ width: "24px" }}
                    />
                    <b data-v-e90411aa="" className="app-link__text">
                      AppStore
                    </b>
                  </a>
                  <a
                    data-v-e90411aa=""
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=uz.uzum.app"
                    rel="nofollow noopener noreferrer"
                    className="app-link__item"
                  >
                    <img
                      data-v-e90411aa=""
                      src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M2.46656 0.400879C2.18662 0.680813 2 1.14737 2 1.70724V22.3291C2 22.8889 2.18662 23.3555 2.46656 23.6354L2.55987 23.7288L14.1305 12.1581L2.46656 0.400879Z' fill='url(%23paint0_linear)'/%3e %3cpath d='M17.9563 15.9831L14.1305 12.1574L17.9563 8.23828L22.5285 10.851C23.8349 11.5975 23.8349 12.8105 22.5285 13.557L17.9563 15.9831Z' fill='url(%23paint1_linear)'/%3e %3cpath d='M17.9563 15.9831L14.1305 12.1573L2.46655 23.6347C2.93311 24.1012 3.58629 24.1012 4.42609 23.728L17.9563 15.9831Z' fill='url(%23paint2_linear)'/%3e %3cpath d='M17.9563 8.23822L4.33278 0.306739C3.58629 -0.159819 2.8398 -0.0665074 2.46655 0.40005L14.1305 12.1573L17.9563 8.23822Z' fill='url(%23paint3_linear)'/%3e %3cdefs%3e %3clinearGradient id='paint0_linear' x1='13.036' y1='1.49188' x2='-2.62386' y2='17.1518' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%2300A0FF'/%3e %3cstop offset='0.00657445' stop-color='%2300A1FF'/%3e %3cstop offset='0.2601' stop-color='%2300BEFF'/%3e %3cstop offset='0.5122' stop-color='%2300D2FF'/%3e %3cstop offset='0.7604' stop-color='%2300DFFF'/%3e %3cstop offset='1' stop-color='%2300E3FF'/%3e %3c/linearGradient%3e %3clinearGradient id='paint1_linear' x1='24.2658' y1='12.0277' x2='1.68731' y2='12.0277' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23FFE000'/%3e %3cstop offset='0.4087' stop-color='%23FFBD00'/%3e %3cstop offset='0.7754' stop-color='%23FFA500'/%3e %3cstop offset='1' stop-color='%23FF9C00'/%3e %3c/linearGradient%3e %3clinearGradient id='paint2_linear' x1='15.8609' y1='14.1688' x2='-5.37525' y2='35.4049' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23FF3A44'/%3e %3cstop offset='1' stop-color='%23C31162'/%3e %3c/linearGradient%3e %3clinearGradient id='paint3_linear' x1='-0.496367' y1='-6.47169' x2='8.98651' y2='3.01109' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%2332A071'/%3e %3cstop offset='0.0685' stop-color='%232DA771'/%3e %3cstop offset='0.4762' stop-color='%2315CF74'/%3e %3cstop offset='0.8009' stop-color='%2306E775'/%3e %3cstop offset='1' stop-color='%2300F076'/%3e %3c/linearGradient%3e %3c/defs%3e %3c/svg%3e"
                      className="noselect"
                      style={{ width: "24px" }}
                    />
                    <b data-v-e90411aa="" className="app-link__text">
                      Google Play
                    </b>
                  </a>
                </div>
              </div>
              <div data-v-0f97d62c="" className="contact__item">
                <span data-v-0f97d62c="" className="contact__item-header">
                  Uzum ijtimoiy tarmoqlarda
                </span>
                <div data-v-f4716844="" data-v-0f97d62c="" className="social">
                  <a
                    data-v-f4716844=""
                    target="_blank"
                    href="https://www.instagram.com/uzum.market"
                    rel="nofollow noopener noreferrer"
                    className="social__icon"
                  >
                    <svg
                      data-v-f4716844=""
                      width="32"
                      height="32"
                      viewBox="0 0 48 48"
                      fill="#000"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ui-icon "
                    >
                      <path
                        d="M24 0C44 0 48 4 48 24C48 44 44 48 24 48C4 48 0 44 0 24C0 4 4 0 24 0Z"
                        fill="url(#paint0_linear_instagram)"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.9997 12.5224C27.7381 12.5224 28.1804 12.5369 29.657 12.6041C31.0218 12.6663 31.7631 12.8942 32.2566 13.0859C32.9102 13.3399 33.3764 13.6433 33.8665 14.1329C34.3567 14.623 34.6601 15.0893 34.9135 15.7428C35.1052 16.2363 35.3331 16.9776 35.3953 18.3425C35.4626 19.8185 35.477 20.2614 35.477 23.9997C35.477 27.7381 35.4626 28.1804 35.3953 29.657C35.3331 31.0218 35.1052 31.7631 34.9135 32.2566C34.6596 32.9102 34.3561 33.3764 33.8665 33.8665C33.3764 34.3567 32.9102 34.6601 32.2566 34.9135C31.7631 35.1052 31.0218 35.3331 29.657 35.3953C28.181 35.4626 27.7381 35.477 23.9997 35.477C20.2614 35.477 19.8185 35.4626 18.3425 35.3953C16.9776 35.3331 16.2363 35.1052 15.7428 34.9135C15.0893 34.6596 14.623 34.3561 14.1329 33.8665C13.6428 33.3764 13.3393 32.9102 13.0859 32.2566C12.8942 31.7631 12.6663 31.0218 12.6041 29.657C12.5369 28.181 12.5224 27.7381 12.5224 23.9997C12.5224 20.2614 12.5369 19.819 12.6041 18.3425C12.6663 16.9776 12.8942 16.2363 13.0859 15.7428C13.3399 15.0893 13.6433 14.623 14.1329 14.1329C14.623 13.6428 15.0893 13.3393 15.7428 13.0859C16.2363 12.8942 16.9776 12.6663 18.3425 12.6041C19.819 12.5369 20.2614 12.5224 23.9997 12.5224ZM23.9997 10C20.1975 10 19.7207 10.0161 18.2274 10.0845C16.7376 10.1523 15.72 10.389 14.8292 10.7352C13.9084 11.0931 13.1276 11.5716 12.3496 12.3501C11.5716 13.1282 11.0925 13.9089 10.7352 14.8292C10.389 15.72 10.1523 16.7376 10.0845 18.2274C10.0161 19.7207 10 20.1975 10 23.9997C10 27.802 10.0161 28.2788 10.0845 29.772C10.1523 31.2619 10.389 32.2794 10.7352 33.1702C11.0931 34.0911 11.5716 34.8718 12.3501 35.6499C13.1287 36.4284 13.9089 36.9069 14.8298 37.2648C15.72 37.611 16.7381 37.8477 18.228 37.9155C19.7212 37.9839 20.198 38 24.0003 38C27.8025 38 28.2793 37.9839 29.7726 37.9155C31.2624 37.8477 32.2805 37.611 33.1708 37.2648C34.0916 36.9069 34.8724 36.4284 35.6504 35.6499C36.429 34.8713 36.9075 34.0911 37.2653 33.1702C37.6115 32.28 37.8483 31.2619 37.9161 29.772C37.9844 28.2788 38.0006 27.802 38.0006 23.9997C38.0006 20.1975 37.9844 19.7207 37.9161 18.2274C37.8483 16.7376 37.6115 15.7195 37.2653 14.8292C36.9075 13.9084 36.429 13.1276 35.6504 12.3496C34.8718 11.571 34.0916 11.0925 33.1708 10.7347C32.2794 10.389 31.2619 10.1523 29.772 10.0845C28.2788 10.0161 27.802 10 23.9997 10ZM23.9997 16.8109C20.0291 16.8109 16.8109 20.0297 16.8109 23.9997C16.8109 27.9698 20.0297 31.1885 23.9997 31.1885C27.9698 31.1885 31.1885 27.9698 31.1885 23.9997C31.1885 20.0297 27.9703 16.8109 23.9997 16.8109ZM23.9997 28.6661C21.4223 28.6661 19.3333 26.5766 19.3333 23.9997C19.3333 21.4223 21.4228 19.3333 23.9997 19.3333C26.5766 19.3333 28.6661 21.4228 28.6661 23.9997C28.6661 26.5772 26.5772 28.6661 23.9997 28.6661ZM33.153 16.5264C33.153 17.4542 32.4009 18.2063 31.4731 18.2063C30.5453 18.2063 29.7931 17.4542 29.7931 16.5264C29.7931 15.5986 30.5453 14.8464 31.4731 14.8464C32.4009 14.8464 33.153 15.5986 33.153 16.5264Z"
                        fill="white"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_instagram"
                          x1="42.8104"
                          y1="5.6564"
                          x2="5.04419"
                          y2="42.4854"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#BA00B2"></stop>
                          <stop offset="0.5" stopColor="#F40000"></stop>
                          <stop offset="1" stopColor="#FFA800"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                  <a
                    data-v-f4716844=""
                    target="_blank"
                    href="https://t.me/uzum_market"
                    rel="nofollow noopener noreferrer"
                    className="social__icon"
                  >
                    <svg
                      data-v-f4716844=""
                      width="32"
                      height="32"
                      viewBox="0 0 44 44"
                      fill="#000"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ui-icon "
                    >
                      <path
                        d="M22 0C40.3333 0 44 3.66667 44 22C44 40.3333 40.3333 44 22 44C3.66667 44 0 40.3333 0 22C0 3.66667 3.66667 0 22 0Z"
                        fill="url(#paint0_linear_5786_39548)"
                      ></path>
                      <path
                        d="M10.8091 21.8156C17.2226 19.0214 21.4992 17.1792 23.639 16.2892C29.7487 13.748 31.0182 13.3066 31.8457 13.2918C32.0277 13.2888 32.4346 13.3339 32.6982 13.5478C32.9207 13.7284 32.982 13.9723 33.0113 14.1436C33.0406 14.3148 33.0771 14.7048 33.0481 15.0096C32.717 18.4883 31.2844 26.9303 30.5556 30.8265C30.2472 32.4751 29.6399 33.0279 29.0521 33.082C27.7745 33.1996 26.8044 32.2377 25.567 31.4266C23.6307 30.1573 22.5368 29.3672 20.6573 28.1286C18.4852 26.6973 19.8933 25.9105 21.1311 24.6248C21.4551 24.2884 27.0842 19.1683 27.1931 18.7038C27.2067 18.6458 27.2194 18.4292 27.0907 18.3149C26.9621 18.2006 26.7722 18.2397 26.6352 18.2707C26.441 18.3148 23.3478 20.3593 17.3555 24.4043C16.4775 25.0072 15.6822 25.301 14.9697 25.2856C14.1842 25.2686 12.6732 24.8414 11.5499 24.4763C10.1721 24.0284 9.07712 23.7917 9.17248 23.0311C9.22214 22.6349 9.76769 22.2297 10.8091 21.8156Z"
                        fill="white"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_5786_39548"
                          x1="22"
                          y1="0"
                          x2="22"
                          y2="43.6735"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2AABEE"></stop>
                          <stop offset="1" stopColor="#229ED9"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                  <div data-v-f4716844="" className="social__break"></div>
                  <a
                    data-v-f4716844=""
                    target="_blank"
                    href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA"
                    rel="nofollow noopener noreferrer"
                    className="social__icon"
                  >
                    <svg
                      data-v-f4716844=""
                      width="32"
                      height="32"
                      viewBox="0 0 44 44"
                      fill="#000"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ui-icon "
                    >
                      <path
                        d="M22 0C40.3333 0 44 3.66667 44 22C44 40.3333 40.3333 44 22 44C3.66667 44 0 40.3333 0 22C0 3.66667 3.66667 0 22 0Z"
                        fill="#FF0000"
                      ></path>
                      <path
                        d="M16.5 29.3334L30.25 22L16.5 14.6667V29.3334Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                  <a
                    data-v-f4716844=""
                    target="_blank"
                    href="https://www.facebook.com/uzummarket"
                    rel="nofollow noopener noreferrer"
                    className="social__icon"
                  >
                    <svg
                      data-v-f4716844=""
                      version="1.1"
                      id="Слой_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 36 36"
                      xmlSpace="preserve"
                      width="32"
                      height="32"
                      fill="#000"
                      className="ui-icon "
                    >
                      <g id="surface1">
                        <path
                          className="st0"
                          d="M36,31c0,2.8-2.2,5-5,5H5c-2.8,0-5-2.2-5-5V5c0-2.8,2.2-5,5-5h26c2.8,0,5,2.2,5,5V31z"
                        ></path>
                        <path
                          className="st1"
                          d="M28.4,19H25v13h-5V19h-3v-4h3v-2.4C20,9.1,21.5,7,25.6,7H29v4h-2.3c-1.6,0-1.7,0.6-1.7,1.7V15h4L28.4,19z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div data-v-0f97d62c="" className="contact__item"></div>
            </div>
          </div>
        </div>
        <div data-v-1c35a4ea="" className="footer__bottom-container policy">
          <a
            data-v-1c35a4ea=""
            ui-link="ui-link"
            href="https://legal.uzum.uz/privacy-policy.html"
            rel="nofollow noopener noreferrer"
            className="policy__link"
          >
            Maxfiylik kelishuvi
          </a>
          <a
            data-v-1c35a4ea=""
            href="/uz/termsofuse"
            className="policy__link"
            ui-link="ui-link"
            rel="nofollow noopener noreferrer"
          >
            Foydalanuvchi kelishuvi
          </a>
          <p data-v-1c35a4ea="" className="policy__copyright">
            «2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
            himoyalangan»
          </p>
        </div>
      </footer>
      <div title="Tepaga" data-test-id="button__scroll-up" className="scroller">
        <a href="#up">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 54 54"
            xmlSpace="preserve"
            style={{ width: "54px", height: "54px" }}
          >
            <g>
              <g>
                <path
                  d="M53,27L53,27c0,14.359-11.641,26-26,26h0C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0
    C41.359,1,53,12.641,53,27z"
                  style={{ fill: "rgb(112, 0, 255)" }}
                ></path>
                <path
                  d="M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2
    C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z"
                  style={{ fill: "rgb(255, 255, 255)" }}
                ></path>
              </g>
              <path
                d="M39,32.706c-0.256,0-0.512-0.098-0.707-0.293L27,21.12L15.707,32.413
    c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414l11.498-11.498c0.666-0.666,1.752-0.666,2.418,0l11.498,11.498
    c0.391,0.391,0.391,1.023,0,1.414C39.512,32.608,39.256,32.706,39,32.706z"
                style={{ fill: "rgb(255, 255, 255)" }}
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
