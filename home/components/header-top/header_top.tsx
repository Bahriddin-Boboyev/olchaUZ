import React from "react";
import Link from "next/link";

const Header_top = () => {
  return (
    <div className="header-top">
      <div className="container header-top__container">
        <div className="header-top__left">
          <Link className="header-top__btn1" href="/">
            0% to'lov
          </Link>
          <Link className="header-top-btn2" href="/">
            Chegirmalar
          </Link>
          <Link className="header-top__btn1" href="/">
            Amaliy hazillar
          </Link>
          <Link href="/" className="header-top__btn3">
            Sayt xaritasi
          </Link>
        </div>
        <div className="header-top__center">
          <Link className="header-top__center-tel" href="tel:+998712022021">
            +998 (71) 202 202 1
          </Link>
          <Link className="header-top__center-el2" href="/">
            Olchada sotiladi
          </Link>
          <ul>
            <li>
              <Link className="header-top__languages" href="/">
                O'zb
              </Link>
            </li>
            <li>
              <Link className="header-top__languages" href="/">
                O'z
              </Link>
            </li>
            <li>
              <Link className="header-top__languages" href="/">
                Rus
              </Link>
            </li>
          </ul>
        </div>

        <div className="header-top__mobile">
          <Link href="tel:+998712022021">
            <svg
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon icon__phone"
            >
              <path d="M19.44 13C19.22 13 18.99 12.93 18.77 12.88C18.3245 12.7818 17.8867 12.6515 17.46 12.49C16.9961 12.3212 16.4862 12.33 16.0283 12.5146C15.5705 12.6992 15.1971 13.0466 14.98 13.49L14.76 13.94C13.786 13.3982 12.891 12.7252 12.1 11.94C11.3148 11.149 10.6418 10.254 10.1 9.27999L10.52 8.99999C10.9634 8.78291 11.3108 8.40952 11.4954 7.95168C11.68 7.49384 11.6888 6.9839 11.52 6.51999C11.3612 6.09241 11.2309 5.65479 11.13 5.20999C11.08 4.98999 11.04 4.75999 11.01 4.52999C10.8886 3.82561 10.5196 3.18773 9.96963 2.73123C9.41963 2.27473 8.72471 2.0296 8.01001 2.03999H5.01001C4.57904 2.03594 4.15226 2.1248 3.75872 2.30052C3.36518 2.47624 3.01412 2.73469 2.72944 3.05827C2.44476 3.38186 2.23314 3.76298 2.109 4.1757C1.98485 4.58842 1.95109 5.02305 2.01001 5.44999C2.54275 9.63937 4.45604 13.5319 7.44766 16.5126C10.4393 19.4934 14.3387 21.3925 18.53 21.91H18.91C19.6474 21.9111 20.3594 21.6405 20.91 21.15C21.2264 20.867 21.4791 20.5202 21.6515 20.1323C21.8239 19.7444 21.912 19.3244 21.91 18.9V15.9C21.8978 15.2054 21.6448 14.5365 21.1943 14.0077C20.7439 13.4788 20.1238 13.1226 19.44 13ZM19.94 19C19.9398 19.142 19.9094 19.2823 19.8508 19.4116C19.7922 19.5409 19.7067 19.6563 19.6 19.75C19.4883 19.8465 19.3576 19.9185 19.2164 19.9616C19.0752 20.0046 18.9266 20.0177 18.78 20C15.0349 19.5198 11.5562 17.8065 8.89273 15.1303C6.22921 12.4541 4.53242 8.96733 4.07001 5.21999C4.05409 5.07351 4.06804 4.92532 4.11101 4.78438C4.15398 4.64344 4.22508 4.51268 4.32001 4.39999C4.41372 4.29332 4.52907 4.20783 4.65839 4.14921C4.78771 4.09058 4.92802 4.06017 5.07001 4.05999H8.07001C8.30256 4.05482 8.52963 4.13087 8.71215 4.27506C8.89467 4.41925 9.02122 4.62256 9.07001 4.84999C9.11001 5.12332 9.16001 5.39332 9.22001 5.65999C9.33553 6.18713 9.48927 6.70517 9.68001 7.20999L8.28001 7.85999C8.16031 7.91491 8.05263 7.99294 7.96317 8.08959C7.8737 8.18623 7.80421 8.2996 7.75868 8.42318C7.71315 8.54677 7.69248 8.67812 7.69786 8.80971C7.70323 8.9413 7.73455 9.07054 7.79001 9.18999C9.22921 12.2727 11.7073 14.7508 14.79 16.19C15.0335 16.29 15.3065 16.29 15.55 16.19C15.6747 16.1454 15.7893 16.0764 15.8872 15.9872C15.985 15.8979 16.0642 15.7901 16.12 15.67L16.74 14.27C17.257 14.4549 17.7846 14.6085 18.32 14.73C18.5867 14.79 18.8567 14.84 19.13 14.88C19.3574 14.9288 19.5607 15.0553 19.7049 15.2378C19.8491 15.4204 19.9252 15.6474 19.92 15.88L19.94 19Z"></path>
            </svg>
          </Link>
          <Link className="header-top__mobile-logo" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="30"
              viewBox="0 0 102 30"
              fill="none"
            >
              <path
                d="M0 18.8909V18.8103C0 12.6348 5.08749 7.62137 11.937 7.62137C18.7464 7.62137 23.7895 12.5547 23.7895 18.7302V18.8103C23.7895 24.9857 18.7043 30 11.8545 30C5.0471 30 0 25.0642 0 18.8909ZM26.5361 3.04948C26.5361 1.36637 27.9309 0 29.6531 0C31.3767 0 32.7693 1.36637 32.7693 3.04948V26.7111C32.7693 28.395 31.3767 29.7589 29.6531 29.7589C27.9309 29.7589 26.5361 28.395 26.5361 26.7111V3.04948ZM35.5172 18.8909V18.8103C35.5172 12.6743 40.3158 7.62137 47.0428 7.62137C50.3646 7.62137 52.7027 8.50448 54.5486 10.0269C54.9601 10.3472 55.5323 11.0713 55.5323 12.1129C55.5323 13.6361 54.2619 14.8407 52.7027 14.8407C51.882 14.8407 51.2675 14.5187 50.8981 14.2384C49.7904 13.3964 48.6427 12.8745 47.0029 12.8745C43.8845 12.8745 41.6686 15.5628 41.6686 18.7302V18.8103C41.6686 22.0994 43.8441 24.7466 47.2475 24.7466C48.8895 24.7466 50.1598 24.183 51.3499 23.2631C51.6787 23.0193 52.2932 22.6995 53.0314 22.6995C54.5068 22.6995 55.6571 23.8632 55.6571 25.3077C55.6571 26.1108 55.2871 26.7503 54.7536 27.233C52.9092 28.875 50.571 30 46.9609 30C40.3579 30 35.5172 25.0269 35.5172 18.8909ZM58.7722 3.04948C58.7722 1.36637 60.167 0 61.8889 0C63.6128 0 65.0051 1.36637 65.0051 3.04948V11.0696C66.4407 9.26609 68.2866 7.62164 71.4457 7.62164C76.1618 7.62164 78.9111 10.6697 78.9111 15.6006V26.7111C78.9111 28.395 77.5143 29.7589 75.7927 29.7589C74.0705 29.7589 72.6762 28.395 72.6762 26.7111V17.5259C72.6762 14.6391 71.2811 13.1551 68.9028 13.1551C66.5223 13.1551 65.0051 14.6391 65.0051 17.5259V26.7111C65.0051 28.395 63.6128 29.7589 61.8889 29.7589C60.167 29.7589 58.7722 28.395 58.7722 26.7111V3.04948ZM81.7808 23.3407V23.2623C81.7808 18.5689 85.4314 16.4045 90.6394 16.4045C92.8528 16.4045 94.4543 16.7657 96.011 17.2857V16.9261C96.011 14.3986 94.412 12.9957 91.2952 12.9957C89.5716 12.9957 88.1765 13.2349 86.9889 13.598C86.6189 13.7179 86.3727 13.7573 86.0854 13.7573C84.6507 13.7573 83.5024 12.6737 83.5024 11.2709C83.5024 10.1876 84.1989 9.26582 85.1828 8.90407C87.1507 8.18195 89.2841 7.78181 92.1984 7.78181C95.6021 7.78181 98.0625 8.66492 99.622 10.1876C101.261 11.7926 102 14.1594 102 17.0457V26.832C102 28.4768 100.647 29.76 98.9654 29.76C97.1593 29.76 95.9692 28.5157 95.9692 27.2325V27.1927C94.4543 28.8355 92.3608 29.9188 89.3248 29.9188C85.1828 29.9188 81.7808 27.5937 81.7808 23.3407ZM96.0935 21.9379V20.8549C95.0282 20.376 93.6334 20.054 92.1159 20.054C89.449 20.054 87.809 21.0962 87.809 23.021V23.1016C87.809 24.746 89.2039 25.7079 91.2133 25.7079C94.1248 25.7079 96.0935 24.1457 96.0935 21.9379ZM17.6382 18.8909V18.8103C17.6382 15.6434 15.3009 12.8745 11.8545 12.8745C8.28644 12.8745 6.15305 15.5628 6.15305 18.7302V18.8103C6.15305 21.9777 8.4912 24.7466 11.937 24.7466C15.5073 24.7466 17.6382 22.0583 17.6382 18.8909Z"
                fill="#DA002B"
              ></path>
            </svg>
          </Link>
          <select name="lan" id="lan">
            <option selected value="O'zb">
              O'zb
            </option>
            <option value="Ўзб">Ўзб</option>
            <option value="Рус">Рус</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Header_top;
